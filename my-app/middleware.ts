import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const secret = req.headers.get('secret');
  
  if (secret !== 'naranja-labs') {
    const res = NextResponse.json({ message: "You don't have access to this route." }, { status: 401 });
    return res;
  }
  return null;
}

export const config = {
  matcher: "/api/jobs/:path*"
};