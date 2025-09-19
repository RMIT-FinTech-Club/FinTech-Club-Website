import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Article from "../models/article";
import connectMongoDB from "../libs/mongodb";
import type { Article as ArticleType } from "../types/article";

// Function: get all research
export async function getAllArticle(request: NextRequest) {
  try {
    await connectMongoDB();
    const articles = await Article.find({})
      .select("_id title summary illustration_url labels publicationDate")
      .sort({ createdAt: -1 });
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot fetch article papers" },
      { status: 500 }
    );
  }
}
// Function: get article by id & return its related articles
export async function getArticleById(id: string, nextRequest?: NextRequest) {
  try {
    await connectMongoDB();
    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    } //Return the related articles based on main article's labels
    const relatedArticles = await Article.find({
      labels: { $in: article.labels }, // Match articles with the same labels
      _id: { $ne: article._id }, // Exclude the main article itself
    })
      .sort({ publicationDate: -1 })
      .limit(5);

    const suggestedRelatedArticles = relatedArticles.map((relatedArticle) => ({
      _id: relatedArticle._id,
      title: relatedArticle.title,
      publicationDate: relatedArticle.publicationDate,
      labels: relatedArticle.labels,
      illustration_url: relatedArticle.illustration_url,
    }));

    return NextResponse.json(
      { article, suggestedRelatedArticles },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot fetch article" },
      { status: 500 }
    );
  }
}

// Function: create article
export async function createArticle(
  data: Omit<ArticleType, "_id" | "createdAt" | "updatedAt">
) {
  try {
    await connectMongoDB();
    const article = await Article.create(data);
    return NextResponse.json(
      { message: "Article created successfully", article },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create article error:", error);
    return NextResponse.json(
      { error: "Cannot create article" },
      { status: 500 }
    );
  }
}

// Function: update article
export async function updateArticle(id: string, data: Partial<ArticleType>) {
  try {
    await connectMongoDB();
    const article = await Article.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Article updated successfully", article },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot update article" },
      { status: 500 }
    );
  }
}
// Function: delete article
export async function deleteArticle(id: string) {
  try {
    await connectMongoDB();
    const article = await Article.findByIdAndDelete(id);
    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Article deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot delete article" },
      { status: 500 }
    );
  }
}

// Function: filter article by label
export async function filterArticleByLabel(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const labels = searchParams.getAll("labels");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "5", 10);
  const skip = (page - 1) * limit;

  // Validate pagination parameters
  if (page < 1 || limit < 1) {
    return NextResponse.json(
      { message: "Invalid pagination parameters" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();

    // Build query - this handles the case where `labels` is empty
    const query: any = {};
    if (labels.length > 0) {
      query.labels = {
        $in: labels.map((label) => new RegExp(`^${label}$`, "i")),
      };
    }
    
    // Perform queries to get total count and the paginated articles
    const totalArticles = await Article.countDocuments(query);
    const totalPages = Math.ceil(totalArticles / limit);
    
    const articles = await Article.find(query)
      .select("_id title summary illustration_url labels publicationDate")
      .sort({ publicationDate: -1 })
      .skip(skip)
      .limit(limit);

    // ALWAYS return the same data structure
    return NextResponse.json(
      { 
        articles, 
        totalPages 
      }, 
      { status: 200 }
    );

  } catch (error) {
    console.error("Error in GET /article:", error);
    return NextResponse.json(
      { error: "Cannot fetch articles" },
      { status: 500 }
    );
  }
}
