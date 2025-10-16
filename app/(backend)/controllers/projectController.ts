import Project from "../models/project";
import Article from "../models/article";
import Podcast from "../models/podcast";
import { Types } from "mongoose";

// --- NEW HELPER ---
// This function takes raw data and structures it to match your schema's nested format.
export const structureProjectData = (data: any) => {
  const baseData: { [key: string]: any } = {};
  const categorySpecificData: { [key: string]: any } = {};

  // Lists of fields that belong inside 'category_specific' for each category
  const categoryFields: { [key: string]: string[] } = {
    technical: [
      "goals",
      "scope",
      "team_structure",
      "project_leader_name",
      "gallery",
      "timeline",
      "product_link",
    ],
    media: [
      "goals",
      "target_audience",
      "team_structure",
      "project_leader_name",
      "products",
      "auto_update_type",
      "auto_update_limit",
    ],
    event: [
      "goals",
      "target_audience",
      "key_activities",
      "guest_speakers",
      "sponsors",
      "team_structure",
      "project_leader_name",
      "key_metrics",
      "gallery",
    ],
    community: [
      "goals",
      "target_audience",
      "key_activities",
      "partner_ngos",
      "team_structure",
      "project_leader_name",
      "key_metrics",
      "gallery",
    ],
    career: [
      "company",
      "goals",
      "target_audience",
      "team_structure",
      "project_leader_name",
      "key_metrics",
      "gallery",
    ],
    competition: [
      "theme",
      "goals",
      "target_audience",
      "sponsors",
      "team_structure",
      "project_leader_name",
      "key_metrics",
      "gallery",
      "details_link",
    ],
  };

  const fieldsForCategory = categoryFields[data.category] || [];

  for (const key in data) {
    if (fieldsForCategory.includes(key)) {
      categorySpecificData[key] = data[key];
    } else {
      baseData[key] = data[key];
    }
  }

  return { ...baseData, category_specific: categorySpecificData };
};

// Helper to find a project and flatten its structure for the client
const getProjectByIdOrSlug = async (idOrSlug: string) => {
  const query = Types.ObjectId.isValid(idOrSlug)
    ? { _id: idOrSlug }
    : { slug: idOrSlug };

  const project = await Project.findOne(query).lean();

  if (!project) {
    throw new Error("Project not found");
  }

  if (Array.isArray(project)) {
    throw new Error(
      "Expected a single project document, but received an array."
    );
  }
  const cs = project.category_specific;

  if (project.category === "media" && cs && cs.auto_update_type) {
    const Model = cs.auto_update_type === "Article" ? Article : Podcast;

    const latestProducts = await Model.find({})
      .sort({ publicationDate: -1 })
      .limit(cs.auto_update_limit || 5)
      .select("_id title illustration_url publicationDate")
      .lean();
    cs.products = latestProducts.map((doc: any) => ({
      onModel: cs.auto_update_type,
      product: doc,
    }));

    // Flatten the project for the client response
    let flattenedProject = { ...project, ...(project.category_specific || {}) };
    delete flattenedProject.category_specific;

    return flattenedProject;
  }

  // For non-media projects, just flatten and return
  let flattenedProject = { ...project, ...(project.category_specific || {}) };
  delete flattenedProject.category_specific;

  return flattenedProject;
};

// GET all projects
export async function getAllProjects() {
  const projects = await Project.find({})
    .select("title type status category image_url year slug")
    .sort({ createdAt: -1 })
    .limit(100)
    .lean();

  return { status: 200, data: projects, count: projects.length };
}

// GET large-scaled, ongoing projects
export async function getLargeScaledOngoingProjects() {
  const projects = await Project.find({
    type: "large-scaled",
    status: "ongoing",
  })
    .select("title description labels image_url slug")
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();
  return { status: 200, data: projects, count: projects.length };
}

// GET department projects
export async function getDepartmentProjects(department: string) {
  const result = await Project.aggregate([
    { $match: { type: "department", status: "ongoing", department } },
    { $sort: { createdAt: -1 } },
    { $limit: 50 },
    {
      $group: {
        _id: "$department",
        department: { $first: "$department" },
        department_description: { $first: "$department_description" },
        projects: {
          $push: { title: "$title", description: "$description", image_url: "$image_url", slug: "$slug" },
        },
      },
    },
    { $project: { _id: 0 } },
  ]).exec();

  const departmentData = result[0] || {
    department,
    department_description: "",
    projects: [],
  };
  return {
    status: 200,
    data: departmentData,
    count: departmentData.projects.length,
  };
}

// GET completed projects by year
export async function getCompletedProjectsByYear(year: string) {
  const yearNum = parseInt(year);
  if (isNaN(yearNum)) throw new Error("Invalid year parameter");

  const projects = await Project.find({ status: "completed", year: yearNum })
    .select("title description image_url year slug")
    .sort({ createdAt: -1 })
    .limit(50)
    .lean();

  return { status: 200, data: projects, count: projects.length, year: yearNum };
}

// GET a single project's details
export async function getProjectDetails(idOrSlug: string) {
  return await getProjectByIdOrSlug(idOrSlug);
}

// POST a new project
export async function createProject(data: any) {
  const structuredData = structureProjectData(data);
  const project = new Project(structuredData);
  await project.save();
  return project;
}

// PUT (update) an existing project
export async function updateProject(idOrSlug: string, updateData: any) {
  const structuredData = structureProjectData(updateData);
  const query = Types.ObjectId.isValid(idOrSlug)
    ? { _id: idOrSlug }
    : { slug: idOrSlug };

  const project = await Project.findOneAndUpdate(query, structuredData, {
    new: true,
    runValidators: true,
  });

  if (!project) throw new Error("Project not found");

  return project;
}

// DELETE a project
export async function deleteProject(idOrSlug: string) {
  const query = Types.ObjectId.isValid(idOrSlug)
    ? { _id: idOrSlug }
    : { slug: idOrSlug };
  const project = await Project.findOneAndDelete(query);

  if (!project) throw new Error("Project not found");

  return { message: "Project deleted successfully", deletedProject: project };
}
