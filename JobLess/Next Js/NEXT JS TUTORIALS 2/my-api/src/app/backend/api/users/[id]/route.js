import { NextResponse } from "next/server";
import { users } from "../../../db/data";


export function GET(request, content) {
    const mydata = users;
    const ID = content.params.id;

    const singleUserFilter = mydata.find((item) => item.id == ID);
    if (typeof singleUserFilter === "undefined") {
        // Empty 
        return NextResponse.json({ message: "unable to found the data with this ID." }, { status: 404 });
    }
    else {
        // Found
        return NextResponse.json({ message: singleUserFilter }, { status: 200 });
    }
}


// ^ NOTE : We have to create a put method always in a nested folder like [id] or [slug] as we are getting some parameter from url so
export async function PUT(request, content) {
    const payload = await request.json();
    const userID = content.params.id;
    const mydata = users;
    const index = mydata.findIndex((item) => item.id == userID);
    if (index !== -1) {
        mydata[index] = payload;
        return NextResponse.json({ success: true, message: mydata }, { status: 200 });
    } else {
        return NextResponse.json({ success: false, message: "Failed To Update Record" }, { status: 404 });
    }
}


export async function DELETE(request, content) {
    const userID = content.params.id;
    const mydata = users;
    const newArray = mydata.filter(record => record.id != userID);
    return NextResponse.json({ message: newArray }, { status: 200 });
}