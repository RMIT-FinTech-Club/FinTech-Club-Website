import connectMongoDb from "@/app/(backend)/libs/mongodb";
import HallOfFame from "@/app/(backend)/models/hallOfFame";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await connectMongoDb();

    try {
        const honorees = await HallOfFame.find({});
		return NextResponse.json({
			status: 200,
			honorees,
		});
    } catch (error) {
        return NextResponse.json({
			status: 500,
			message: "Error fetching HoF honorees",
		});
    }
}

export async function POST(req: NextRequest) {
  await connectMongoDb();

  const body = await req.json();

  const { name, achievement, photo_url, semester } = body;

  if (!name || !achievement || !photo_url || !semester) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const honoree = await HallOfFame.create({ name, achievement, photo_url, semester });
    return NextResponse.json({ status: 201, honoree });
  } catch (err) {
    console.error("Error creating honoree:", err);
    return NextResponse.json({ error: "Failed to create honoree" }, { status: 500 });
  }
}