import { connect } from "@/db/dbConfig";
import TechnicalProject from "@/models/techincalProject";
import { type NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
	try {
		// Create response
		const { id } = await req.json();
		const technicalProject = await TechnicalProject.findById(id);
		const response = NextResponse.json(
			{
				message: "Get data successfully",
				success: true,
				data: technicalProject,
			},
			{ status: 200 },
		);
		return response;
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}

