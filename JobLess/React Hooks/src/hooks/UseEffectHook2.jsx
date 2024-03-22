import React, { useState, useEffect } from 'react';
// ICONS
import { FaPlus, FaMinus } from "react-icons/fa";

export default function UseEffectHook2() {
    const [count, setCount] = useState(0);

    // 1. No Dependency Passed
    useEffect(() => {
        console.warn("useEffect is running...");
    });

    /*
    2. Empty Array : Run only on first render
    useEffect(() => {
        console.warn("useEffect is running...");
    },[]);
    */

    /*
    3. Change based on dependency 
    useEffect(() => {
        console.warn("useEffect is running...");
    },[count]); // Only re-run the effect if count changes
    */


    // Example : 2
    const [size,setSize] = useState(window.screen.width);

    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setSize(window.innerWidth)
        })
    })

    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className="h-[30%] w-[30%] text-white">
                <h1>Example 1</h1>
                <div className=" flex flex-nowrap items-center justify-around">
                    <button
                        type="button"
                        className="text-xl bg-gray-700 rounded-lg p-3"
                        onClick={() => setCount(count - 1)}>
                        <FaMinus />
                    </button>
                    <h1 className="text-7xl text-blue-700 font-bold">{count}</h1>
                    <button
                        type="button"
                        className="text-xl bg-gray-700 rounded-lg p-3"
                        onClick={() => setCount(count + 1)}>
                        <FaPlus />
                    </button>
                </div>



                <h1 className="mt-10">Example 2</h1>
                <h1 className="text-xl font-semibold flex flex-nowrap items-center gap-2">Size of window = <span className="text-blue-700 text-3xl font-bold">{size}</span></h1>

            </div>


            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">2. useEffect Hook</h1>
                <p className="text-sm text-white mt-5">
                    useEffect is another React Hook used for managing side effects in functional components. Side effects in React typically include things like data fetching, subscriptions, or manually changing the DOM in ways not covered by React's declarative model.
                    <br />
                    <br />
                    Note :
                    componentDidMount , componentDidUpdate , componentWillUnmount are combined into the single useEffect hook.
                    <br />
                    <br />
                    Example : Notification on whatsapp
                </p>
            </div>
        </div>
    )
}