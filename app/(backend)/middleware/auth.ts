import jwt from "jsonwebtoken";

export async function checkAdminAuth(req: any) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return false;
  
  try {
    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    return decoded.role === "admin";
  } catch {
    return false;
  }
} 