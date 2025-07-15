import { NextResponse } from "next/server";
import Research from "../models/Research";
import connectMongoDB from "../libs/mongodb";
import type { Research as ResearchType } from "../types/research";

export async function getAllResearch() {
  try {
    await connectMongoDB();
    const researches = await Research.find({}).sort({ createdAt: -1 });
    return NextResponse.json(researches, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot fetch research papers, qua buon cho ban" },
      { status: 500 }
    );
  }
}

export async function getResearchById(id: string) {
  try {
    await connectMongoDB();
    const research = await Research.findById(id);
    if (!research) {
      return NextResponse.json(
        { error: "Research not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(research, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot fetch research, qua buon cho ban" },
      { status: 500 }
    );
  }
}

export async function createResearch(data: Omit<ResearchType, '_id' | 'createdAt' | 'updatedAt'>) {
  try {
    await connectMongoDB();
    const research = await Research.create(data);
    return NextResponse.json(
      { message: "Research created successfully", research },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create research error:', error);
    return NextResponse.json(
      { error: "Cannot create research, qua buon cho ban" },
      { status: 500 }
    );
  }
}

export async function updateResearch(id: string, data: Partial<ResearchType>) {
  try {
    await connectMongoDB();
    const research = await Research.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
    if (!research) {
      return NextResponse.json(
        { error: "Research not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Research updated successfully", research },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot update research, qua buon cho ban" },
      { status: 500 }
    );
  }
}

export async function deleteResearch(id: string) {
  try {
    await connectMongoDB();
    const research = await Research.findByIdAndDelete(id);
    if (!research) {
      return NextResponse.json(
        { error: "Research not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Research deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot delete research, qua buon cho ban" },
      { status: 500 }
    );
  }
}

export async function filterResearchByLabel(label: string) {
  try {
    await connectMongoDB();
    const researches = await Research.find({ label }).sort({ createdAt: -1 }); //newest first
    return NextResponse.json(researches, { status: 200 });
  }
  catch (error){
    return NextResponse.json(
      { error: "Cannot filter research by label, so sad cho ban" },
      { status: 500 }
    );
  }
}