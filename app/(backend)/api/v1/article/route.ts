import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";
import Article from "@/app/(backend)/models/article";
import {filterArticleByLabel, getAllArticle, createArticle, getArticleById} from "@/app/(backend)/controllers/articleController";

export async function GET(request: NextRequest) {
  return filterArticleByLabel(request);
}

export async function POST(request: NextRequest) {
  const article = await request.json();
  return createArticle(article);
}
