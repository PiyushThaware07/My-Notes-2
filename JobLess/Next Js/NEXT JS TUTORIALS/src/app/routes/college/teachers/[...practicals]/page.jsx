"use client"
import React from 'react'

export default function page({ params }) {
    console.log(params);
    return (
        <div>
            <h1>Hello i am catch-all segments</h1>
            <h1>{params.practicals[0]}</h1>
        </div>
    )
}
