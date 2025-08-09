import type { NextRequest } from "next/server";
import {getArticleById, updateArticle, deleteArticle} from "@/app/(backend)/controllers/articleController";

export async function GET(_request: NextRequest,{ params }: { params: { id: string } }){
    return getArticleById(params.id);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const data = await request.json();
    return updateArticle(params.id, data);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    return deleteArticle(params.id);
    
} 