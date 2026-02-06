import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Temporarily disabled for design preview
  // Protect dashboard routes when Supabase is set up
  // if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
