import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";
import { 
  withCaching, 
  generateCacheKey, 
  getCacheHeaders 
} from "@/app/(backend)/libs/redis";
import { getProjectDetails, updateProject, deleteProject } from "@/app/(backend)/controllers/projectController";
import { requireAdmin } from "@/app/(backend)/middleware/middleware";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectMongoDB();

  try {
    const cacheKey = generateCacheKey("project", "detail", id);
    const { data, cached, responseTime } = await withCaching(cacheKey, () => getProjectDetails(id));
    
    return NextResponse.json({
      status: 200,
      project: data
    }, { 
      headers: getCacheHeaders(cached, responseTime)
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Project not found"
    });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAdmin = await requireAdmin(req);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectMongoDB();
    const { id } = params;
    const data = await req.json();
    const project = await updateProject(id, data);
    return NextResponse.json({ status: 200, project });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error updating project"
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const isAdmin = await requireAdmin(req);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectMongoDB();
    const { id } = params;
    const project = await deleteProject(id);
    return NextResponse.json({ status: 200, project });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error deleting project"
    });
  }
}


