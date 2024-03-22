import { NextResponse } from "next/server";

export function middleware(request) {
    console.log("Middleware is running...");
    // Example : 1
    // if (request.nextUrl.pathname === "/routes/college") {
    //     // jabhi koi new request ate hai usko redirect kar do signin page pe
    //     return NextResponse.redirect(new URL("/routes/auth/signin", request.url))
    // }

    // Example 2 : Below  
    return NextResponse.redirect(new URL("/routes/auth/signin", request.url))
}


export const config = {
    // SINGLE MATCH
    matcher: "/routes/college/:path*"

    // MULTIPLE MATCH
    // matcher: ["/routes/college/:path*", "/routes/blogs/:path*"]
}