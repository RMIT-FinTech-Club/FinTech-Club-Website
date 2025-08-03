import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";
import { 
  withCaching, 
  generateCacheKey, 
  getCacheHeaders 
} from "@/app/(backend)/libs/redis";
import { getProjectDetails } from "@/app/(backend)/controllers/project/projectController";

connectMongoDB();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    // Validate and sanitize input using Node.js validation
    if (!id) {
      return NextResponse.json({
        error: "Missing project identifier",
        success: false,
        message: "Project ID or slug is required"
      }, { status: 400 });
    }

    // Sanitize input
    const sanitizedId = id.trim();

    // Validate format: MongoDB ObjectId or SEO-friendly slug
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    
    if (!objectIdRegex.test(sanitizedId) && !slugRegex.test(sanitizedId)) {
      return NextResponse.json({
        error: "Invalid input format",
        success: false,
        message: "Project ID must be a valid MongoDB ObjectId (24 hex characters) or SEO-friendly slug (lowercase, numbers, dashes)"
      }, { status: 400 });
    }

    const cacheKey = generateCacheKey("project", "detail", sanitizedId);
    
    const { data, cached, responseTime } = await withCaching(
      cacheKey,
      async () => {
        return await getProjectDetails(sanitizedId);
      }
    );

    return NextResponse.json({
      message: "Project retrieved successfully",
      success: true,
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        status: data.status,
        category: data.category,
        labels: data.labels,
        image_url: data.image_url,
        category_specific: data.category_specific,
        meta_title: data.meta_title,
        meta_description: data.meta_description,
        slug: data.slug,
        department: data.department,
        year: data.year,
        department_photo_url: data.department_photo_url,
        department_description: data.department_description,
        created_at: data.created_at,
        updated_at: data.updated_at
      }
    }, { 
      status: 200,
      headers: getCacheHeaders(cached, responseTime)
    });

  } catch (error) {
    console.error("Error in project detail API route:", error);

    if (error instanceof Error) {
      if (error.message.includes("not found") || error.message.includes("Project not found")) {
        return NextResponse.json({
          error: "Project not found",
          success: false,
          message: "The requested project could not be found"
        }, { status: 404 });
      }
      
      if (error.message.includes("MongoDB") || error.message.includes("database")) {
        return NextResponse.json({
          error: "Database connection error",
          success: false,
          message: "Failed to connect to database"
        }, { status: 503 });
      }
      
      if (error.message.includes("AWS") || error.message.includes("S3")) {
        return NextResponse.json({
          error: "Media service error",
          success: false,
          message: "Failed to access media resources"
        }, { status: 503 });
      }
    }

    return NextResponse.json({
      error: "Internal server error",
      success: false,
      message: "Failed to process request"
    }, { status: 500 });
  }
}


