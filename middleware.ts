import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add caching headers for static pages
  if (request.nextUrl.pathname === "/coming-soon" || request.nextUrl.pathname === "/404") {
    response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=3600")
    response.headers.set("CDN-Cache-Control", "public, max-age=3600")
    response.headers.set("Vercel-CDN-Cache-Control", "public, max-age=3600")
  }

  return response
}

export const config = {
  matcher: ["/coming-soon", "/404", "/not-found"],
}
