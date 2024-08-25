import connectMongoDB from "@/app/(backend)/libs/mongodb";
import ResearchPaper from "@/app/(backend)/models/researchPaper";
import { NextResponse } from "next/server";

connectMongoDB();
export async function GET() {
	const researchPaper = await ResearchPaper.find();
	return NextResponse.json(researchPaper);
}
