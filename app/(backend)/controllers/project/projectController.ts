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
  const projects = await Project.find({
    type: "large-scaled",
    status: "ongoing"
  })
    .select('title description type status category labels image_url slug meta_title meta_description')
    .sort({ created_at: -1 })
    .limit(50)
    .lean();

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
    })),
    count: projects.length,
    cached: false
  };
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
    
    if (error instanceof Error) {
      if (error.message.includes("ECONNREFUSED") || error.message.includes("ENOTFOUND")) {
        throw new Error("MongoDB connection failed - database unavailable");
      }
      if (error.message.includes("timeout")) {
        throw new Error("MongoDB query timeout - database overloaded");
      }
    }
    
    throw new Error("Failed to retrieve department projects from database");
  }
}

export async function getProjectDetails(idOrSlug: string) {
  try {
    const project = await getProjectByIdOrSlugUpdate(idOrSlug);
    return project;

  } catch (error) {
    console.error("Error retrieving project details:", error);
    
    if (error instanceof Error) {
      if (error.message.includes("not found") || error.message.includes("Project not found")) {
        throw new Error("Project not found");
      }
      if (error.message.includes("ECONNREFUSED") || error.message.includes("ENOTFOUND")) {
        throw new Error("MongoDB connection failed - database unavailable");
      }
      if (error.message.includes("timeout")) {
        throw new Error("MongoDB query timeout - database overloaded");
      }
    }
    
    throw new Error("Failed to retrieve project details from database");
  }
}

export const createProject = createProjectUpdate;
export const getProjectByIdOrSlug = getProjectByIdOrSlugUpdate;
export const updateProject = updateProjectUpdate;
export const deleteProject = deleteProjectUpdate; 