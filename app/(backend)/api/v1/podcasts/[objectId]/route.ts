import Podcast from "@/app/(backend)/models/podcast";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: Request, context: any) {
	try {
		const { params } = context;
		const podcast = await Podcast.findOne({ _id: params.objectId });
		if (!podcast)
			return NextResponse.json(
				{ message: "podcast id not found or invalid" },
				{ status: 400 },
			);
		return NextResponse.json(podcast, { status: 200 });
	} catch (error: any) {
		console.error(error.message);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
