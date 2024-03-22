import React, { useState } from 'react';
// ICONS
import { FaPlus, FaMinus } from "react-icons/fa";

export default function UseStateHook1() {
    const [count, setCount] = useState(0);


    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className=" flex flex-nowrap items-center justify-around h-[30%] w-[30%]">
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

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">1. useState Hook</h1>
                <p className="text-sm text-white mt-5">useState is a React Hook that allows functional components in React to manage state.</p>
            </div>
        </div>
    )
}
