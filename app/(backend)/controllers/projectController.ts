import { NextResponse } from "next/server";
import Project from "../models/project";
import { Types } from "mongoose";
import { invalidateCacheByPattern } from "../libs/redis";
import { deleteFromS3 } from "../libs/aws_s3";

// Validation helpers
const cloudfrontUrlRegex = /^https?:\/\/(?:[a-zA-Z0-9\-]+\.)*cloudfront\.net\/.+/;
const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const isCloudFrontUrl = (url: string) => cloudfrontUrlRegex.test(url);
const isValidSlug = (slug: string) => slugRegex.test(slug);

// S3 helpers
const getFilePathFromUrl = (url: string): string | null => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.includes('cloudfront.net') ? urlObj.pathname.substring(1) : null;
  } catch {
    return null;
  }
};

const deleteFileFromS3 = async (filePath: string): Promise<void> => {
  try {
    await deleteFromS3(filePath);
  } catch (error) {
    console.error(`Failed to delete file from S3: ${filePath}`, error);
    throw new Error(`S3 deletion failed: ${filePath}`);
  }
};

const extractAllUrls = (project: any): string[] => {
  const urls: string[] = [];
  
  if (project.image_url) urls.push(project.image_url);
  
  if (project.category_specific) {
    const cs = project.category_specific;
    
    const extractFromArray = (arr: any[], key?: string) => {
      if (Array.isArray(arr)) {
        arr.forEach(item => {
          if (typeof item === 'string') urls.push(item);
          else if (item && typeof item === 'object' && key && item[key]) urls.push(item[key]);
        });
      }
    };
    
    const extractFromField = (field: any) => {
      if (typeof field === 'string') urls.push(field);
    };
    
    extractFromArray(cs.gallery);
    extractFromArray(cs.event_gallery);
    extractFromArray(cs.sponsor_brands);
    extractFromArray(cs.guest_speakers, 'avatar_url');
    extractFromArray(cs.mentors, 'avatar_url');
    extractFromArray(cs.judges, 'avatar_url');
    
    extractFromField(cs.product_link);
    extractFromField(cs.library_link);
    extractFromField(cs.event_details_link);
    extractFromField(cs.competition_details_link);
  }
  
  return urls;
};

const validateUrls = (data: any) => {
  const validateUrl = (url: string, fieldName: string) => {
    if (url && !isCloudFrontUrl(url)) {
      throw new Error(`Invalid CloudFront URL: ${fieldName}`);
    }
  };
  
  const validateUrlArray = (urls: any[], fieldName: string) => {
    if (Array.isArray(urls)) {
      urls.forEach((url, index) => {
        if (typeof url === 'string') validateUrl(url, `${fieldName}[${index}]`);
        else if (url && typeof url === 'object' && url.avatar_url) {
          validateUrl(url.avatar_url, `${fieldName}[${index}].avatar_url`);
        }
      });
    }
  };
  
  if (data.image_url) validateUrl(data.image_url, 'image_url');
  
  if (data.category_specific) {
    const cs = data.category_specific;
    validateUrlArray(cs.gallery, 'gallery');
    validateUrlArray(cs.event_gallery, 'event_gallery');
    validateUrlArray(cs.sponsor_brands, 'sponsor_brands');
    validateUrlArray(cs.guest_speakers, 'guest_speakers');
    validateUrlArray(cs.mentors, 'mentors');
    validateUrlArray(cs.judges, 'judges');
    
    validateUrl(cs.product_link, 'product_link');
    validateUrl(cs.library_link, 'library_link');
    validateUrl(cs.event_details_link, 'event_details_link');
    validateUrl(cs.competition_details_link, 'competition_details_link');
  }
};

export async function getLargeScaledOngoingProjects() {
  try {
    console.log("Querying for large-scaled ongoing projects...");
    
    const projects = await Project.find({
      type: "large-scaled",
      status: "ongoing"
    })
      .select('title description type status category labels image_url slug meta_title meta_description')
      .sort({ created_at: -1 })
      .limit(50)
      .lean();

    console.log(`Found ${projects.length} large-scaled ongoing projects`);
    
    return {
      message: "Large-scaled ongoing projects retrieved successfully",
      success: true,
      data: projects.map(p => ({
        title: p.title,
        description: p.description,
        type: p.type,
        status: p.status,
        category: p.category,
        labels: p.labels,
        image_url: p.image_url,
        slug: p.slug,
        meta_title: p.meta_title,
        meta_description: p.meta_description
      }))
    };
  } catch (error) {
    console.error("Error in getLargeScaledOngoingProjects:", error);
    throw error;
  }
}

export async function getDepartmentProjects(department: string) {
  try {
    const [result] = await Project.aggregate([
      { $match: { type: "department", status: "ongoing", department } },
      { $sort: { created_at: -1 } },
      { $limit: 50 },
      {
        $group: {
          _id: "$department",
          department: { $first: "$department" },
          department_photo_url: { $first: "$department_photo_url" },
          department_description: { $first: "$department_description" },
          projects: {
            $push: {
              title: "$title",
              description: "$description",
              type: "$type",
              status: "$status",
              department: "$department",
              category: "$category",
              labels: "$labels",
              image_url: "$image_url",
              slug: "$slug",
              meta_title: "$meta_title",
              meta_description: "$meta_description"
            }
          },
          count: { $sum: 1 }
        }
      },
      { $project: { _id: 0, department: 1, department_photo_url: 1, department_description: 1, projects: 1, count: 1 } }
    ]);

    return {
      message: "Department projects retrieved successfully",
      success: true,
      data: result || {
        department,
        department_photo_url: "",
        department_description: "",
        projects: []
      },
      count: result?.count || 0,
      cached: false
    };

  } catch (error) {
    console.error("MongoDB aggregation error:", error);
    throw new Error("Failed to retrieve department projects from database");
  }
}

export async function getProjectDetails(idOrSlug: string) {
  try {
    const project = await getProjectByIdOrSlug(idOrSlug);
    return project;
  } catch (error) {
    console.error("Error retrieving project details:", error);
    throw new Error("Failed to retrieve project details from database");
  }
}

export async function createProject(data: any) {
  if (!isValidSlug(data.slug)) throw new Error("Invalid slug format");
  
  const existing = await Project.findOne({ slug: data.slug });
  if (existing) throw new Error("Slug must be unique");
  
  validateUrls(data);
  
  const project = new Project(data);
  await project.save();
  
  // Invalidate project cache
  await invalidateCacheByPattern("projects:*");
  
  return project;
}

export async function getProjectByIdOrSlug(idOrSlug: string) {
  const query = Types.ObjectId.isValid(idOrSlug) ? { _id: idOrSlug } : { slug: idOrSlug };
  const project = await Project.findOne(query);
  if (!project) throw new Error("Project not found");
  return project;
}

export async function updateProject(idOrSlug: string, updateData: any) {
  if (updateData.slug) {
    if (!isValidSlug(updateData.slug)) throw new Error("Invalid slug format");
    
    const existing = await Project.findOne({ 
      slug: updateData.slug, 
      _id: { $ne: idOrSlug } 
    });
    if (existing) throw new Error("Slug must be unique");
  }
  
  validateUrls(updateData);
  
  const query = Types.ObjectId.isValid(idOrSlug) ? { _id: idOrSlug } : { slug: idOrSlug };
  const project = await Project.findOneAndUpdate(query, updateData, { 
    new: true, 
    runValidators: true 
  });
  
  if (!project) throw new Error("Project not found");
  
  // Invalidate project cache
  await invalidateCacheByPattern("projects:*");
  
  return project;
}

export async function deleteProject(idOrSlug: string) {
  const query = Types.ObjectId.isValid(idOrSlug) ? { _id: idOrSlug } : { slug: idOrSlug };
  const project = await Project.findOne(query);
  
  if (!project) throw new Error("Project not found");
  
  try {
    const fileUrls = extractAllUrls(project);
    
    await Project.findOneAndDelete(query);
    
    // Clean up S3 files
    const deletePromises = fileUrls
      .map(url => getFilePathFromUrl(url))
      .filter((filePath): filePath is string => filePath !== null)
      .map(filePath => deleteFileFromS3(filePath));
    
    await Promise.allSettled(deletePromises);
    
    // Invalidate project cache
    await invalidateCacheByPattern("projects:*");
    
    return project;
  } catch (error) {
    throw new Error(`Failed to delete project: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
} 