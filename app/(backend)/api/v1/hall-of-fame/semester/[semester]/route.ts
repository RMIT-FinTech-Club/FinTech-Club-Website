import connectMongoDb from "@/app/(backend)/libs/mongodb";
import HallOfFame from "@/app/(backend)/models/hallOfFame";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(
  req: NextRequest,
  { params }: { params: { semester: string } }
) {
  await connectMongoDb();

  const semester = params.semester;
  console.log("🎯 Semester param (from URL):", semester);

  try {
    const honorees = await HallOfFame.find({ semester }).sort({ name: 1 });
    if (honorees.length === 0) {
      return NextResponse.json({ message: "No honorees found" }, { status: 404 });
    }

    return NextResponse.json({ status: 200, honorees});
  } catch (err) {
    console.error("Error fetching honorees:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}