import { NextRequest } from "next/server";
import {
  getAllResearch,
  createResearch,
} from "@/app/(backend)/controllers/researchController";

export async function GET() {
  return getAllResearch();
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return createResearch(data);
}