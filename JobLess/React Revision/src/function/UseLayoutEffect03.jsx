import React, { useRef } from 'react'
import { useLayoutEffect } from 'react';
import { useEffect } from 'react'

export default function UseLayoutEffect03() {
    const ref = useRef("red");
    useEffect(() => {
        ref.current = "blue";
        console.log("I am useEffect",ref);
    })

    useLayoutEffect(() => {
        console.log("I am useLayoutEffect",ref);
    })
    return (
        <div>

        </div>
    )
}
