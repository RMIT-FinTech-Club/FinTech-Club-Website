import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import connectMongoDB from "@/app/(backend)/libs/mongodb";
import Article from "@/app/(backend)/models/article";
import {filterArticleByLabel, getAllArticle} from "@/app/(backend)/controllers/articleController";


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const label = searchParams.get("label");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const skip = (page - 1) * limit;

  if (page < 1 || limit < 1) {
    return NextResponse.json({ message: "Invalid pagination parameters" }, { status: 400 });
  }

  try {
    await connectMongoDB();
    // Build query
    const query: any = {};
    // If label is provided, add it to the query
    if (label) {
      query.label = new RegExp(`^${label}$`, "i"); // Case-insensitive match
    }

    const totalArticles = await Article.countDocuments(query);
    const totalPages = Math.ceil(totalArticles / limit);
    const articles = await Article.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({ articles,}, { status: 200 });

  } catch (error) {
    console.error("Error in GET /article:", error);
    return NextResponse.json(
      { error: "Cannot fetch articles" },
      { status: 500 }
    );
  }
}
