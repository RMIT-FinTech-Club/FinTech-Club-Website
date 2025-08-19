import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { nanoid } from "nanoid";
import mime from "mime";

// Initialize S3 client using server-side credentials
const s3 = new S3Client({
  region: process.env.BUCKET_REGION || process.env.NEXT_PUBLIC_BUCKET_REGION || "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});

// Create a pre-signed PUT URL and return { uploadUrl, key }
export async function uploadToS3(fileName: string, fileType: string, folderName: string) {
  const safeFolder = folderName?.replace(/^\/+|\/+$/g, "") || "uploads"; // trim slashes
  const baseName = fileName.split(".").slice(0, -1).join(".") || "file";
  const ext = mime.getExtension(fileType) || "bin";
  const key = `${safeFolder}/${nanoid()}-${baseName}.${ext}`;

  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME || process.env.NEXT_PUBLIC_BUCKET_NAME,
    Key: key,
    ContentType: fileType,
  });

  const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 900 }); // 15 minutes
  return { uploadUrl, key };
}

// Delete an object by its key
export async function deleteFromS3(key: string): Promise<void> {
  const command = new DeleteObjectCommand({
    Bucket: process.env.BUCKET_NAME || process.env.NEXT_PUBLIC_BUCKET_NAME,
    Key: key,
  });
  await s3.send(command);
} 