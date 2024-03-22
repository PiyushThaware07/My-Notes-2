import { NextResponse } from "next/server";

export function middleware(request) {
    console.log("Middleware is working...");
    // if(request.nextUrl.pathname !== "routes/auth/signin"){
    return NextResponse.redirect(new URL("/routes/auth/signin", request.url));
    // }
}

export const config = {
    // Single Matcher : when you try to acess the below route it will redirect to above middleware route
    // matcher: "/routes/college/students/:path*"

    // Multiple Matcher : 
    matcher : ["/routes/college/students/:path*","/routes/college/teachers/:path*"]
}