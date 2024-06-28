import { connect } from "@/db/dbConfig";
import EventProject from "@/models/eventProject";
import { type NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
	try {
		// Create response
		const allEventProjects = await EventProject.find({});
		const response = NextResponse.json(
			{
				message: "Get data successfully",
				success: true,
				data: allEventProjects,
			},
			{ status: 200 },
		);
		return response;
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
