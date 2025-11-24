import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const country = request.headers.get("CF-IPCountry");
  if (country) {
    requestHeaders.set("X-Tailwind-Country", country);
  } else {
    requestHeaders.set("X-Tailwind-Country", "Missing");
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: ["/plus", "/plus/:path*"],
};
