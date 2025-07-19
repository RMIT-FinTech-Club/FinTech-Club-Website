import connectMongoDb from "@/app/(backend)/libs/mongodb";
import { type NextRequest, NextResponse } from "next/server";
import { getExecutiveMembers, addExecutiveMember } from "@/app/(backend)/controllers/executiveController";

export async function GET(req: NextRequest) {
  await connectMongoDb();

  const { searchParams } = new URL(req.url);
  const generation = searchParams.get("generation");

  const result = await getExecutiveMembers(generation || undefined);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  await connectMongoDb();
  const data = await req.json();
  const result = await addExecutiveMember(data);
  return NextResponse.json(result);
} 