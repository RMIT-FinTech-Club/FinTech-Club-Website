import { NextResponse } from "next/server";
import Project from "../models/project";
import { Types } from "mongoose";
import { invalidateCacheByPattern } from "../libs/redis";
import { deleteFromS3 } from "../libs/aws_s3";

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
      status: 200,
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
      })),
      count: projects.length,
      message: `Found ${projects.length} large-scaled ongoing projects`
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
      status: 200,
      data: result || {
        department,
        department_photo_url: "",
        department_description: "",
        projects: []
      },
      count: result?.count || 0,
      message: `Found ${result?.count || 0} department projects for ${department}`
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
  const existing = await Project.findOne({ slug: data.slug });
  if (existing) throw new Error("Slug must be unique");
  
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

export async function getCompletedProjectsByYear(year: string) {
  try {
    // Validate year format
    const yearNum = parseInt(year);
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > new Date().getFullYear() + 1) {
      throw new Error("Invalid year parameter");
    }

    const projects = await Project.find({ 
      status: "completed", 
      year: yearNum 
    })
    .select('title description status category labels image_url year') // Only return required fields
    .sort({ year: -1, created_at: -1 }) // Most recent year first, then by creation date
    .limit(50) 
    .lean();
    
    return {
      status: 200,
      data: projects,
      count: projects.length,
      year: yearNum,
      message: `Found ${projects.length} completed projects for year ${yearNum}`
    };
  } catch (error) {
    console.error(`Error fetching completed projects for year ${year}:`, error);
    throw error;
  }
}

export async function getCompletedProjectsDefault() {
  try {
    // Find the most recent year with completed projects
    const mostRecentYear = await Project.findOne({ status: "completed" })
      .sort({ year: -1 })
      .select('year')
      .lean();

    if (!mostRecentYear || !mostRecentYear.year) {
      return {
        status: 200,
        data: [],
        count: 0,
        year: null,
        message: "No completed projects found"
      };
    }

    const yearValue = mostRecentYear.year as number; // ignore typescript warnings 

    // Get completed projects from the most recent year
    const projects = await Project.find({ 
      status: "completed", 
      year: yearValue 
    })
    .select('title description status category labels image_url year') 
    .sort({ created_at: -1 }) // Sort by creation date
    .limit(50) 
    .lean();
    
    return {
      status: 200,
      data: projects,
      count: projects.length,
      year: yearValue,
      message: `Found ${projects.length} completed projects from most recent year ${yearValue}`
    };
  } catch (error) {
    console.error("Error fetching completed projects (default):", error);
    throw error;
  }
}

export async function getAllProjects() {
  try {
    const projects = await Project.find({})
      .select('title description type status category labels image_url year slug meta_title meta_description')
      .sort({ created_at: -1 })
      .limit(100) 
      .lean();

    return {
      status: 200,
      data: projects,
      count: projects.length,
      message: `Found ${projects.length} total projects`
    };
  } catch (error) {
    console.error("Error fetching all projects:", error);
    throw error;
  }
}

export async function updateProject(idOrSlug: string, updateData: any) {
  if (updateData.slug) {
    const existing = await Project.findOne({ 
      slug: updateData.slug, 
      _id: { $ne: idOrSlug } 
    });
    if (existing) throw new Error("Slug must be unique");
  }
  
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
    await Project.findOneAndDelete(query);
    
    // Invalidate project cache
    await invalidateCacheByPattern("projects:*");
    
    return project;
  } catch (error) {
    throw new Error(`Failed to delete project: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
} 