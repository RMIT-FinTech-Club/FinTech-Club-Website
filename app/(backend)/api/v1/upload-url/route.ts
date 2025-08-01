import { NextRequest, NextResponse } from "next/server";
import { uploadToS3 } from "@/app/(backend)/libs/s3";

export async function POST(req: NextRequest) {
  const { fileName, fileType } = await req.json();

  try {
    const { uploadUrl, key } = await uploadToS3(fileName, fileType);
    return NextResponse.json({uploadUrl, key});

  }catch (error) {
    return NextResponse.json({ 
      error: "Failed to create signed URL" },{ 
      status: 500 });
  }
}