/*

Example - 1
import React, { useState, useRef, useEffect } from 'react';
// ICONS
import { FaPlus, FaMinus } from "react-icons/fa";

export default function UseRefHook5() {
    const [userInput, setUserInput] = useState("");
    const count = useRef(0); // return an object with property named as current.
    console.log(count);

    useEffect(() => {
        console.log("count change useRef");
        count.current = count.current + 1;  // commit and uncommit to show output 
    })


    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className=" flex flex-nowrap flex-col items-center justify-around h-[30%] w-[30%]">
                <input type="text" placeholder="Enter a number" value={userInput} onChange={(event) => setUserInput(event.target.value)} className="px-5 py-2" />
                <h1 className="text-2xl font-semibold text-white">Render : {count.current}</h1>
            </div>

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">5. useRef Hook</h1>
                <p className="text-sm text-white mt-5">It create a mutable variable which will not re-render the components and can be used accross the DOM element directly.</p>
            </div>
        </div>
    )
}

*/



/*
// Example : 2
import React, { useState, useRef, useEffect } from 'react';

export default function UseRefHook5() {
    const ref = useRef(); // return an object with property named as current.
    function ChangeColor() {
        ref.current.style.backgroundColor = "green";
    }
    useEffect(() => {
        console.log("useEffect working...");
    })

    return (
        <div ref={ref} className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className=" flex flex-nowrap flex-col items-center justify-around h-[30%] w-[30%]">
                <button type="button" className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-semibold" onClick={ChangeColor}>Change Color</button>
            </div>

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">5. useRef Hook</h1>
                <p className="text-sm text-white mt-5">It create a mutable variable which will not re-render the components and can be used change the DOM element directly.</p>
            </div>
        </div>
    )
}
*/




// Example : 3
import React, { useRef } from 'react'
import { useState } from 'react';
export default function UseRefHook5() {
    const refElement = useRef("");
    console.log(refElement);

    const [name, setName] = useState('default');
    function handleReset() {
        setName("");
        refElement.current.focus();
        refElement.current.value = "piyush";
    }

    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className="">
                <input ref={refElement} type="text" placeholder='Enter Name' className='bg-slate-100 p-5' value={name} onChange={(e) => setName(e.target.value)} />
                <button type='button' className='bg-blue-500 text-white p-5' onClick={handleReset}>Clear</button>
            </div>

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">5. useRef Hook</h1>
                <p className="text-sm text-white mt-5">It create a mutable variable which will not re-render the components and can be used change the DOM element directly.</p>
            </div>
        </div>
    )
}

