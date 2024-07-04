import { connect } from "@/db/dbConfig";
import TechnicalProject from "@/models/technicalProject";
import { type NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
	try {
		let query = {};

		// Create response
		const allTechnicals = await TechnicalProject.find(query);
		const response = NextResponse.json(
			{
				message: "Get data successfully",
				success: true,
				data: allTechnicals,
			},
			{ status: 200 },
		);
		return response;
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const {} = await req.json();

		// Create Technical
		const newTechnical = await new TechnicalProject({}).save();

		return NextResponse.json(
			{ message: "Technical created", data: newTechnical },
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
