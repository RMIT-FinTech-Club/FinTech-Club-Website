import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";
import { 
  withCaching, 
  generateCacheKey, 
  getCacheHeaders 
} from "@/app/(backend)/libs/redis";
import { getLargeScaledOngoingProjects, getDepartmentProjects, createProject, getProjectByIdOrSlug } from "@/app/(backend)/controllers/projectController";
import { checkAdminAuth } from "@/app/(backend)/middleware/auth";

export async function GET(req: NextRequest) {
  await connectMongoDB();

  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const status = searchParams.get("status");
  const department = searchParams.get("department");

  console.log("GET /api/v1/projects", { type, status, department });

  try {
    if (type === "large-scaled" && status === "ongoing") {
      console.log("Fetching large-scaled ongoing projects...");
      const cacheKey = generateCacheKey("projects", "large-scaled", "ongoing");
      const { data, cached, responseTime } = await withCaching(cacheKey, getLargeScaledOngoingProjects);
      console.log("Successfully fetched large-scaled projects");
      return NextResponse.json(data, { 
        status: 200,
        headers: getCacheHeaders(cached, responseTime)
      });
    }

    if (type === "department" && status === "ongoing" && department) {
      console.log("Fetching department projects for:", department);
      const cacheKey = generateCacheKey("projects", "department", "ongoing", department);
      const { data, cached, responseTime } = await withCaching(cacheKey, () => getDepartmentProjects(department));
      console.log("Successfully fetched department projects");
      return NextResponse.json(data, { 
        status: 200,
        headers: getCacheHeaders(cached, responseTime)
      });
    }

    // Handle specific project by ID
    if (searchParams.get("id")) {
      const projectId = searchParams.get("id");
      if (!projectId) {
        return NextResponse.json({
          status: 400,
          message: "Project ID is required"
        });
      }
      console.log("Fetching project by ID:", projectId);
      const project = await getProjectByIdOrSlug(projectId);
      return NextResponse.json({
        status: 200,
        project
      });
    }

    if (!type && !status && !department) {
      // Fallback: return all projects (customize as needed)
      const allProjects = await getLargeScaledOngoingProjects(); // Or a getAllProjects function if available
      return NextResponse.json(allProjects, { status: 200 });
    }

    return NextResponse.json({
      status: 400,
      message: "Invalid parameters"
    });
  } catch (error) {
    console.error("Error in GET /api/v1/projects:", error);
    return NextResponse.json({
      status: 500,
      message: "Error fetching projects",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
}

export async function POST(req: NextRequest) {
  if (!(await checkAdminAuth(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectMongoDB();
    const data = await req.json();
    const project = await createProject(data);
    return NextResponse.json({ status: 201, project });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error creating project"
    });
  }
} 