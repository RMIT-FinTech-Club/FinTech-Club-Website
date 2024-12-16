import { NextRequest } from "next/server";
import {
    getResearchById,
    updateResearch,
    deleteResearch,
} from "@/app/(backend)/controllers/researchController";

export async function GET(
    _request: NextRequest,
    { params }: { params: { id: string } }
) {
    return getResearchById(params.id);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const data = await request.json();
    return updateResearch(params.id, data);
}

export async function DELETE(
    _request: NextRequest,
    { params }: { params: { id: string } }
) {
    return deleteResearch(params.id);
} 