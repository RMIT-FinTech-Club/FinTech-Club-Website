import { NextResponse } from "next/server";
import Project from "../../models/project";
import { Types } from "mongoose";
import { invalidateCacheByPattern } from "../../libs/redis";
import { 
  createProject as createProjectUpdate, 
  getProjectByIdOrSlug as getProjectByIdOrSlugUpdate,
  updateProject as updateProjectUpdate,
  deleteProject as deleteProjectUpdate
} from "./projectUpdateController";

export async function getLargeScaledOngoingProjects() {
  const query = {
    type: "large-scaled",
    status: "ongoing"
  };

  const projects = await Project.find(query)
    .select('title description type status category labels image_url slug meta_title meta_description')
    .sort({ created_at: -1 })
    .limit(50)
    .lean();

  const transformedProjects = projects.map(project => ({
    title: project.title,
    description: project.description,
    type: project.type,
    status: project.status,
    category: project.category,
    labels: project.labels,
    image_url: project.image_url,
    slug: project.slug,
    meta_title: project.meta_title,
    meta_description: project.meta_description
  }));

  return {
    message: "Large-scaled ongoing projects retrieved successfully",
    success: true,
    data: transformedProjects,
    count: transformedProjects.length,
    cached: false
  };
}

export const createProject = createProjectUpdate;
export const getProjectByIdOrSlug = getProjectByIdOrSlugUpdate;
export const updateProject = updateProjectUpdate;
export const deleteProject = deleteProjectUpdate; 