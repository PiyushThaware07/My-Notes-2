"use client"
// Linking and Navigation 
import Link from 'next/link'
import { useRouter } from 'next/navigation';


import React from 'react';

export default function page() {
    const router = useRouter();
    return (
        <div>
            <b>Signin Route</b>
            <br />
            <Link href={"/signup"} style={{ background: "blue" }}>Signup</Link>
            <br />
            <button type='button' onClick={() => router.push("/about")}>Go To About US</button>
        </div>
    )
}
