import { NextRequest, NextResponse } from "next/server";
import { chineseLocaleEnabled, defaultLocale, isLocale } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const first = pathname.split("/").filter(Boolean)[0];

  // Temporarily block public Chinese access while keeping zh content in the repo.
  if (!chineseLocaleEnabled && (pathname === "/zh" || pathname.startsWith("/zh/"))) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/zh" ? "/" : pathname.slice("/zh".length) || "/";
    return NextResponse.redirect(url);
  }

  if (first && isLocale(first)) {
    const response = NextResponse.next();
    response.headers.set("x-locale", first);
    response.cookies.set("NEXT_LOCALE", first, { path: "/" });
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set("x-locale", defaultLocale);
  response.cookies.set("NEXT_LOCALE", defaultLocale, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|videos|.*\\..*).*)"],
};
