import { NextResponse } from "next/server";

export async function GET(request, content) {
    console.log(content.params);
    return NextResponse.json({
        // message: "Catch All API Route"
        message: content.params
    }, { status: 200 })
}