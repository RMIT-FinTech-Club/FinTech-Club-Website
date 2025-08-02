export default async function uploadFile(file: File, folder: string) {
  //Get pre-signed URL
  const res = await fetch("api/v1/upload-url", {
    method: "POST",
    headers: {"Content-types":"application/json"},
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type,
      folderName: folder
    }),
  });
  const { uploadUrl, key } = await res.json();
  console.log(uploadUrl, key);
  //Upload to S3

  await fetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": file.type},
    body: file,
  });

  console.log(file.type)
  // Save key/URL to your DB if needed
  const fileUrl = `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_BUCKET_REGION}.amazonaws.com/${key}`;
  return fileUrl;

}