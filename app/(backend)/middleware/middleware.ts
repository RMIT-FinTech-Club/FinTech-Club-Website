import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import * as jose from "jose";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define paths that are considered public (accessible without a token)
  const isPublicPath = path === '/login' || path === '/signup'

  // Get the token from the cookies
  const token = request.cookies.get('token')?.value || ''
  console.log(`check token: ${token}`)

  // Verify token
  const secretKey = await new TextEncoder().encode(process.env.JWT_SECRET);
  if (token) {
    const secretKey = await new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"],
    });
    // If trying to access a protected path without a token, redirect to the login page
    if (payload?.role !== "admin") {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    } else {
      return NextResponse.next()
    }
  } else {
    // If trying to access a public path with an invalid token, redirect to login page
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}

// It specifies the paths for which this middleware should be executed. 
export const config = {
    matcher: [
      '/cms',
      '/api/research',
      '/api/v1/projects/media',
      '/podcast-form'
    ]
}
