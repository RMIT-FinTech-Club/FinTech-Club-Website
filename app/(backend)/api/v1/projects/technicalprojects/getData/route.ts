import TechnicalProject from "@/app/(backend)/models/technicalProject";
import { type NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";

connectMongoDB();

export async function GET(req: NextRequest) {
	try {
		// Create response
		const allTechnicalProjects = await TechnicalProject.find({});
		const response = NextResponse.json(
			{
				message: "Get data successfully",
				success: true,
				data: allTechnicalProjects,
			},
			{ status: 200 },
		);
		return response;
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
