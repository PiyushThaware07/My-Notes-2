import React, { useEffect, useMemo, useState } from 'react';

export default function UseMemoHook7() {
    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Working");
    })


    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className=" flex flex-nowrap flex-col items-center justify-around h-[30%] w-[30%] text-white">
                <h1>COUNT :  {count}</h1>

                {/* When you click any button from below it will still re-redner the whole component but why the hell setToggle is rendering the increase count ?? to fix this the useMemo comes into the picture. */}
                {/* suppose you are calling an heavy api that have 10000000... records so when you click any of button it will re-render the whole component leads to problem like long data time loading */}
                <button type='button' className='px-5 py-2 bg-white text-slate-900 rounded-md' onClick={() => setCount(count + 1)}>Increase Count</button>
                <button type='button' className={`px-5 py-2 bg-white text-slate-900 rounded-md`} onClick={() => setToggle(!toggle)}>{!toggle ? "Toggle Click" : "Clicked Already"}</button>
            </div>

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">7. useMemo Hook</h1>
                <p className="text-sm text-white mt-5">
                    The useMemo hook is a feature provided by React that allows you to memoize expensive calculations so that they are only recomputed when necessary. It's particularly useful for optimizing performance in React functional components by avoiding unnecessary re-renders caused by expensive computations.
                    <br /><br />
                    React will only recompute the memoized value when one of the dependencies has changed.
                    <br /><br />
                    If the dependencies have not changed since the last render, useMemo will return the memoized value without re-executing the function.
                    <br /><br />
                    you can return data in this while in useEffect it return a cleanup function code.
                </p>
            </div>
        </div>
    )
}
