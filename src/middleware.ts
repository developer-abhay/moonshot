import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/signup" || path.startsWith("/verify/");

  const token = request.cookies.get("token")?.value ?? "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/signup", "/verify/:path*"],
};
