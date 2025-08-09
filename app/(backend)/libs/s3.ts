// lib/s3.ts
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { nanoid } from "nanoid";
import mime from "mime";

const s3 = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});

// Upload Function
export async function uploadToS3(fileName: string, fileType: string, folderName: string) {
  const fileExtension = mime.getExtension(fileType) || "bin" ;// mime is used to get the file extention.
  const key = `${folderName}${nanoid()}${fileName}.${fileExtension}`; // Put inside folder (article/, podcast/, etc.)
  console.log(`S3 key: ${key}`);

  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: key,
    ContentType: fileType,
  });
  // get the signed url
  const signedUrl = await getSignedUrl(s3, command, {expiresIn: 900});
 // return signed url and key
  return {
    uploadUrl: signedUrl,
    key,
  };
}

//Delete Function
export async function deleteFromS3(key: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: key,
  });
  try {
    await s3.send(command);
    console.log(`Deleted ${key} from S3`);
  } catch (error) {
    console.error(`Failed to delete ${key} from S3`, error);
  }
}

 

