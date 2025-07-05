import EventProject from "@/app/(backend)/models/eventProject";
import { type NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";

connectMongoDB();

export async function GET(req: NextRequest) {
	try {
		const query = {};

		// Create response
		const allEvents = await EventProject.find(query);
		const response = NextResponse.json(
			{
				message: "Get data successfully",
				success: true,
				data: allEvents,
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

		// Create event
		const newEvent = await new EventProject({}).save();

		return NextResponse.json(
			{ message: "Event created", data: newEvent },
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
