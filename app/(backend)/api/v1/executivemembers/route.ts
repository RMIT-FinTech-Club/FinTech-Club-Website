import connectMongoDb from "@/app/(backend)/libs/mongodb";
import ExecutiveMember from "@/app/(backend)/models/executiveMember";
import { type NextRequest, NextResponse } from "next/server";
import { addExecutiveMember } from "@/app/(backend)/controllers/executiveController";

export async function GET(req: NextRequest) {
  await connectMongoDb();

  const { searchParams } = new URL(req.url);
  let generation = searchParams.get("generation");
  let filter: any = {};

  if (generation) {
    const genNum = parseInt(generation, 10);
    if (isNaN(genNum) || genNum < 1) {
      return NextResponse.json({
        status: 400,
        message: "Invalid generation parameter"
      });
    }
    filter.generation = genNum;
  }
  // If no generation, do NOT set filter.generation

  try {
    const members = await ExecutiveMember.find(filter);
    return NextResponse.json({
      status: 200,
      members,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Error fetching executive members",
    });
  }
}

export async function POST(req: NextRequest) {
  await connectMongoDb();
  const data = await req.json();
  const result = await addExecutiveMember(data);
  return NextResponse.json(result);
} 