import { NextResponse } from "next/server";
import Article from "../models/article";
import connectMongoDB from "../libs/mongodb";
import type {Article as ArticleType } from "../types/article";

// Function: get all research
export async function getAllArticle() {
  try {
    await connectMongoDB();
    const article = await Article.find({}).sort({ createdAt: -1 });
    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot fetch article papers" },
      { status: 500 }
    );
  }
}
// Function: get article by id
export async function getArticleById(id: string) {
  try {
    await connectMongoDB();
    const article = await Article.findById(id);
    if (!article) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot fetch article" },
      { status: 500 }
    );
  }
}

// Function: create article
export async function createArticle(data: Omit<ArticleType, '_id' | 'createdAt' | 'updatedAt'>) {
  try {
    await connectMongoDB();
    const article = await Article.create(data);
    return NextResponse.json(
      { message: "Article created successfully", article },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create article error:', error);
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
      runValidators: true
    });
    if (!article) {
      return NextResponse.json(
        { error: "Research not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Aricle updated successfully", article },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot update article, qua buon cho ban" },
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
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
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

// Function:  filter article by label
export async function filterArticleByLabel(label: string) {
  try {
    await connectMongoDB();
    const article = await Article.find({label}).sort({createdAt: -1 }); //newest first
    return NextResponse.json(article, { status: 200 });
  }
  catch (error){
    return NextResponse.json(
      { error: "Cannot filter article by label" },
      { status: 500 }
    );
  }
}