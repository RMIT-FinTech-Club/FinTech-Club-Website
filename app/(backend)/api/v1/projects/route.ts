import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";
import { 
  withCaching, 
  generateCacheKey, 
  getCacheHeaders 
} from "@/app/(backend)/libs/redis";
import { 
  getLargeScaledOngoingProjects, 
  getDepartmentProjects, 
  createProject, 
  getProjectByIdOrSlug,
  getCompletedProjectsByYear,
  getCompletedProjectsDefault,
  getAllProjects
} from "@/app/(backend)/controllers/projectController";
import { requireAdmin } from "@/app/(backend)/middleware/middleware";

export async function GET(req: NextRequest) {
  await connectMongoDB();

  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const status = searchParams.get("status");
  const department = searchParams.get("department");
  const year = searchParams.get("year");

  try {
    // Get project by ID
    if (searchParams.get("id")) {
      const projectId = searchParams.get("id");
      const project = await getProjectByIdOrSlug(projectId!);
      return NextResponse.json({ status: 200, project });
    }

    // Get completed projects by specific year
    if (status === "completed" && year) {
      const cacheKey = generateCacheKey("projects", "completed", year);
      const { data, cached, responseTime } = await withCaching(cacheKey, () => getCompletedProjectsByYear(year));
      return NextResponse.json(data, { headers: getCacheHeaders(cached, responseTime) });
    }

    // Get completed projects (default - most recent year)
    if (status === "completed" && !year) {
      const cacheKey = generateCacheKey("projects", "completed", "default");
      const { data, cached, responseTime } = await withCaching(cacheKey, getCompletedProjectsDefault);
      return NextResponse.json(data, { headers: getCacheHeaders(cached, responseTime) });
    }

    // Get large-scaled ongoing projects
    if (type === "large-scaled" && status === "ongoing") {
      const cacheKey = generateCacheKey("projects", "large-scaled", "ongoing");
      const { data, cached, responseTime } = await withCaching(cacheKey, getLargeScaledOngoingProjects);
      return NextResponse.json(data, { headers: getCacheHeaders(cached, responseTime) });
    }

    // Get department projects
    if (type === "department" && status === "ongoing" && department) {
      const cacheKey = generateCacheKey("projects", "department", "ongoing", department);
      const { data, cached, responseTime } = await withCaching(cacheKey, () => getDepartmentProjects(department));
      return NextResponse.json(data, { headers: getCacheHeaders(cached, responseTime) });
    }

    // Get all projects 
    if (!type && !status && !department && !year) {
      const allProjects = await getAllProjects();
      return NextResponse.json(allProjects);
    }

    // Invalid parameters
    return NextResponse.json({
      status: 400,
      message: "Invalid parameters"
    }, { status: 400 });

  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error fetching projects"
    }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const isAdmin = await requireAdmin(req);
  if (!isAdmin) {
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
    }, { status: 500 });
  }
} 