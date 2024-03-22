import { NextResponse } from "next/server";
import { users } from "../../db/data";

export function GET() {
    const mydata = users;
    return NextResponse.json(mydata, { status: 200 });
}


export async function POST(request, respose) {
    // GETTING DATA FROM FRONTEND
    let payload = await request.json();
    console.log(payload);
    const mydata = users;
    mydata.push(payload);
    return NextResponse.json({ success: true, message: mydata }, { status: 201 });
}
// & OUTPUT : { fname: 'Piyush Thaware' }
