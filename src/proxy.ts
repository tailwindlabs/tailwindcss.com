import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Block direct access to /api/docs-md/* (only accessible via /docs/*.md rewrite)
  if (request.nextUrl.pathname.startsWith('/api/docs-md/')) {
    return NextResponse.rewrite(new URL('/404', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/docs-md/:path*',
}
