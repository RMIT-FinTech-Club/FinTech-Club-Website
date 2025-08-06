import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";
import { 
  withCaching, 
  generateCacheKey, 
  getCacheHeaders 
} from "@/app/(backend)/libs/redis";
import { getProjectDetails, updateProject, deleteProject } from "@/app/(backend)/controllers/projectController";
import { checkAdminAuth } from "@/app/(backend)/middleware/auth";
import { uploadToS3 } from "@/app/(backend)/libs/aws_s3";

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
  if (!(await checkAdminAuth(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectMongoDB();
    const { id } = params;
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());
    
    // Handle image upload
    const imageFile = formData.get("image") as File;
    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      data.image_url = await uploadToS3(buffer, imageFile.name);
    }

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
  if (!(await checkAdminAuth(req))) {
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


