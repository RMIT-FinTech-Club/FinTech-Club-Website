import { NextRequest, NextResponse } from "next/server";
import { uploadToS3, deleteFromS3 } from "@/app/(backend)/libs/aws_s3";

export async function POST(req: NextRequest) {
  try {
    const { fileName, fileType, folderName } = await req.json();

    if (!fileName || !fileType || !folderName) {
      return NextResponse.json({ 
        error: "fileName, fileType, and folderName are required" 
      }, { status: 400 });
    }

    const { uploadUrl, key } = await uploadToS3(fileName, fileType, folderName);
    return NextResponse.json({ uploadUrl, key });

  } catch (error) {
    console.error("Error creating signed URL:", error);
    return NextResponse.json({ 
      error: "Failed to create signed URL" 
    }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { key } = await req.json();

    if (!key) {
      return NextResponse.json({ 
        error: "key is required" 
      }, { status: 400 });
    }

    await deleteFromS3(key);
    return NextResponse.json({ message: "File deleted successfully from S3" });

  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json({ 
      error: "Failed to delete file" 
    }, { status: 500 });
  }
} 