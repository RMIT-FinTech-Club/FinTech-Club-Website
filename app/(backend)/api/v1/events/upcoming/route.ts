import connectMongoDB from "@/app/(backend)/libs/mongodb";
import UpCommingEvents from "@/app/(backend)/models/upCommingEvents";
import { type NextRequest, NextResponse } from "next/server";

connectMongoDB()

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	try {
		let query = {};

		const years = searchParams.get("year");
		if (years) {
			const yearStart = new Date(`${years}-01-01`);
			const yearEnd = new Date(`${years}-12-31`);

			query = {
				...query,
				dateTime: {
					$gte: yearStart,
					$lt: yearEnd,
				},
			};
		}

		// Create response
		const allEvents = await UpCommingEvents.find(query);
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
		const {
			imageUrl,
			name,
			description,
			registrationLink,
			bookletLink,
			objective,
			participants,
			dateTime,
			time,
			date,
			location,
			type,
		} = await req.json();

		// Create event
		const newEvent = await new UpCommingEvents({
			imageUrl,
			name,
			description,
			registrationLink,
			bookletLink,
			objective,
			participants,
			dateTime,
			time,
			date,
			location,
			type,
		}).save();

		return NextResponse.json(
			{ message: "Event created", data: newEvent },
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
