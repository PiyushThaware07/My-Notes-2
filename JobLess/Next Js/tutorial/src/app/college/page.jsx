import Link from 'next/link'
import React from 'react'

export default function College() {
    return (
        <div>
            <h1>College Page</h1>
            <Link href={'college/students'} style={{ textDecoration: "underline", color: "blue" }}>Students</Link>
            <br />
            <Link href={'college/teachers'} style={{ textDecoration: "underline", color: "blue" }}>Teachers</Link>
        </div>
    )
}
