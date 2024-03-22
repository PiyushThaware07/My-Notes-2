import React, { useEffect, useState } from 'react'

export default function UseEffectHook02() {
    const [state, setState] = useState({ count: 0 });
    const [name, setName] = useState("Piyush")
    // 1. No Dependency Passed : Runs on every render.
    useEffect(() => {
        console.log("I am useEffect - 1");
    })

    // 2. An Empty Array Of Dependency : Runs only on the first render
    useEffect(() => {
        console.log("I am useEffect - 2");
    }, [])

    // 3. Array of Dependency : Runs on the first render & any time any dependency value changes
    useEffect(() => {
        console.log("I am useEffect - 3");
    }, [name])
    return (
        <div>
            <button type='button' onClick={() => setState({ count: state.count + 1 })}>Update Count : {state.count}</button>
            <button type='button' onClick={() => setName("Shreyash")}>Update Name : {name}</button>
        </div>
    )
}
