import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";
import { 
  withCaching, 
  generateCacheKey, 
  getCacheHeaders 
} from "@/app/(backend)/libs/redis";
import { getLargeScaledOngoingProjects } from "@/app/(backend)/controllers/project/projectController";

connectMongoDB();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  try {
    const type = searchParams.get("type");
    const status = searchParams.get("status");
    const year = searchParams.get("year");
    const department = searchParams.get("department");

    if (!type || !status) {
      return NextResponse.json(
        {
          error: "Missing required query parameters: type and status",
          success: false,
          message: "Both 'type' and 'status' parameters are required"
        },
        { status: 400 }
      );
    }

    if (type !== "large-scaled") {
      return NextResponse.json(
        {
          error: "Invalid 'type' parameter. Only 'large-scaled' is supported",
          success: false,
          message: "The 'type' parameter must be 'large-scaled'"
        },
        { status: 400 }
      );
    }

    if (status !== "ongoing") {
      return NextResponse.json(
        {
          error: "Invalid 'status' parameter. Only 'ongoing' is supported",
          success: false,
          message: "The 'status' parameter must be 'ongoing'"
        },
        { status: 400 }
      );
    }

    if (year || department) {
      console.log(`ℹ️ Ignoring unsupported parameters: year=${year}, department=${department}`);
    }

    const cacheKey = generateCacheKey("projects", "large-scaled", "ongoing");
    
    const { data, cached, responseTime } = await withCaching(
      cacheKey,
      async () => {
        // Call controller to get data
        return await getLargeScaledOngoingProjects();
      }
    );

    return NextResponse.json(
      data,
      { 
        status: 200,
        headers: getCacheHeaders(cached, responseTime)
      }
    );

  } catch (error) {
    console.error("Error in projects API route:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        success: false,
        message: "Failed to process request"
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    {
      error: "Method not allowed",
      success: false,
      message: "POST method is not supported for this endpoint"
    },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    {
      error: "Method not allowed",
      success: false,
      message: "PUT method is not supported for this endpoint"
    },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    {
      error: "Method not allowed",
      success: false,
      message: "DELETE method is not supported for this endpoint"
    },
    { status: 405 }
  );
} 