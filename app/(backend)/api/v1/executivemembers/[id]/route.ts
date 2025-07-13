import connectMongoDb from "@/app/(backend)/libs/mongodb";
import ExecutiveMember from "@/app/(backend)/models/executiveMember";
import { type NextRequest, NextResponse } from "next/server";
import { updateExecutiveMember, deleteExecutiveMember } from "@/app/(backend)/controllers/executiveController";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const memberId = params.id;
  await connectMongoDb();
  const member = await ExecutiveMember.findById(memberId);
  if (!member) {
    return NextResponse.json({
      status: 404,
      json: { message: "Executive member not found" },
    });
  } else {
    return NextResponse.json({
      status: 200,
      json: member,
    });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const memberId = params.id;
  await connectMongoDb();
  const data = await req.json();
  const result = await updateExecutiveMember(memberId, data);
  return NextResponse.json(result);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const memberId = params.id;
  await connectMongoDb();
  const result = await deleteExecutiveMember(memberId);
  return NextResponse.json(result);
} 