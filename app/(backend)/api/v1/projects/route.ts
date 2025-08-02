import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";
import { 
  withCaching, 
  generateCacheKey, 
  getCacheHeaders 
} from "@/app/(backend)/libs/redis";
import { getLargeScaledOngoingProjects, getDepartmentProjects } from "@/app/(backend)/controllers/project/projectController";

connectMongoDB();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const status = searchParams.get("status");
  const year = searchParams.get("year");
  const department = searchParams.get("department");

  try {
    // Validate required parameters
    if (!type || !status) {
      return NextResponse.json({
        error: "Missing required query parameters: type and status",
        success: false,
        message: "Both 'type' and 'status' parameters are required"
      }, { status: 400 });
    }

    if (status !== "ongoing") {
      return NextResponse.json({
        error: "Invalid 'status' parameter. Only 'ongoing' is supported",
        success: false,
        message: "The 'status' parameter must be 'ongoing'"
      }, { status: 400 });
    }

    if (year) console.log(`Ignoring unsupported parameter: year=${year}`);

    // Handle different project types
    const handlers = {
      "large-scaled": async () => {
        if (department) console.log(`Ignoring unsupported parameter: department=${department}`);
        const cacheKey = generateCacheKey("projects", "large-scaled", "ongoing");
        return await withCaching(cacheKey, getLargeScaledOngoingProjects);
      },
      "department": async () => {
        if (!department) {
          return NextResponse.json({
            error: "Missing required parameter: department",
            success: false,
            message: "The 'department' parameter is required when type=department"
          }, { status: 400 });
        }

        const validDepartments = ["Business", "Technology", "Marketing", "Human Resources"];
        if (!validDepartments.includes(department)) {
          return NextResponse.json({
            error: "Invalid 'department' parameter",
            success: false,
            message: `Department must be one of: ${validDepartments.join(", ")}`
          }, { status: 400 });
        }

        const cacheKey = generateCacheKey("projects", "department", "ongoing", department);
        return await withCaching(cacheKey, () => getDepartmentProjects(department));
      }
    };

    const handler = handlers[type as keyof typeof handlers];
    if (!handler) {
      return NextResponse.json({
        error: "Invalid 'type' parameter",
        success: false,
        message: "The 'type' parameter must be 'large-scaled' or 'department'"
      }, { status: 400 });
    }

    const result = await handler();
    
    // If handler returned a response (error case), return it
    if (result instanceof NextResponse) return result;

    const { data, cached, responseTime } = result;
    return NextResponse.json(data, { 
      status: 200,
      headers: getCacheHeaders(cached, responseTime)
    });

  } catch (error) {
    console.error("Error in projects API route:", error);

    if (error instanceof Error) {
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