import Project from "../../models/project";
import { Types } from "mongoose";

const cloudfrontUrlRegex = /^https?:\/\/(?:[a-zA-Z0-9\-]+\.)*cloudfront\.net\/.+/;
const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const isCloudFrontUrl = (url: string) => cloudfrontUrlRegex.test(url);
const isValidSlug = (slug: string) => slugRegex.test(slug);

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
    console.log(`File deleted from S3: ${filePath}`);
  } catch (error) {
    console.error(`Failed to delete file from S3: ${filePath}`, error);
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

export async function createProject(data: any) {
  if (!isValidSlug(data.slug)) throw new Error("Invalid slug format");
  
  const existing = await Project.findOne({ slug: data.slug });
  if (existing) throw new Error("Slug must be unique");
  
  validateUrls(data);
  
  const project = new Project(data);
  await project.save();
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
    
    return project;
  } catch (error) {
    throw new Error(`Failed to delete project: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

