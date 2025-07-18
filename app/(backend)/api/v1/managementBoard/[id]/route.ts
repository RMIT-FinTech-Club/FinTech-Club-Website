
import connectMongoDb from "@/app/(backend)/libs/mongodb";
import { type NextRequest, NextResponse } from "next/server";
import { updateManagementBoard, deleteManagementBoard } from "@/app/(backend)/controllers/managementBoard";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const memberId = params.id;
    await connectMongoDb();
    const id = params.id;
    const data = await req.json();
    const result = await updateManagementBoard(id, data);
    return NextResponse.json(result, { status: result.status });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const memberId = params.id;
    await connectMongoDb();
    const id = params.id;
    const result = await deleteManagementBoard(id);
    return NextResponse.json(result, { status: result.status });
}