import EventProject from "@/app/(backend)/models/eventProject";
import { type NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";

connectMongoDB();

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		// Create response
		const id = params.id;
		const event = await EventProject.findById(id);

		if (!event) {
			return NextResponse.json({
				status: 404,
				json: {
					message: "Event not found",
				},
			});
		}

		return NextResponse.json({
			status: 200,
			message: "Get data successfully",
			success: true,
			data: event,
		});
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
