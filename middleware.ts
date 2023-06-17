import { NextRequest, NextResponse } from "next/server"
import { verifyAuth } from "./utils/auth"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value

  const verifyToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.log(err)
    }))

  if (request.nextUrl.pathname.startsWith("/login") && !verifyToken) {
    return
  }

  const url = request.url
  if (request.url.includes("/login") && verifyToken) {
    return NextResponse.redirect(new URL("/dashboard", url))
  }

  if (!verifyToken) {
    return NextResponse.redirect(new URL("/login", url))
  }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard",
    "/product",
    "/category",
    "/headlessUI",
  ],
}
