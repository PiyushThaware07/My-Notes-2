/*
// Example : 1
import React, { useEffect,useLayoutEffect } from 'react';

export default function UseLayoutEffect6() {
    useEffect(() => {
        console.log("I am First useEffect");
    }, [])

    useLayoutEffect(()=>{
        console.log("I am useLayoutEffect Hook");
    },[])

    useEffect(() => {
        console.log("I am Second useEffect");
    }, [])
    useEffect(() => {
        console.log("I am Third useEffect");
    }, [])



    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className=" flex flex-nowrap items-center justify-around h-[30%] w-[30%]">

            </div>

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">5. useLayoutEffect Hook</h1>
                <p className="text-sm text-white mt-5">This hook runs synchronously immediately after the DOM has been updated, but before the browser has painted. This means it runs before the browser has had a chance to paint the changes on the screen.
                    <br /><br />
                    The useLayoutEffect hook is useful when you need to perform DOM mutations or measurements and you want to make sure those are done before the browser updates the screen. This can be important for ensuring smooth animations or synchronizing measurements with layout changes.
                    <br /><br />
                    Note : useLayoutEffect run before the useEffect before data is being display on browser.
                    </p>
            </div>
        </div>
    )
}
*/





// Example : 2 : in this by default you will get a random value and you will also able to se 0 when data is begin updating... while useLayoutEffect prevent data flickering you wont be able to see "0" while data change
import React, { useEffect, useLayoutEffect, useState } from 'react';

export default function UseLayoutEffect6() {
    const [num, setNum] = useState(0);
    useLayoutEffect(() => {
        if (num === 0) {
            setNum(num + Math.random() * 100);
        }
    }, [num])



    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className=" flex flex-col flex-nowrap items-center justify-around h-[30%] w-[30%]">
                <h1 className='text-white'>New Random Number Is : {num}</h1>
                <button type='button' className='px-5 py-2 rounded-full bg-white font-semibold text-sm' onClick={() => setNum(0)}>Random Number</button>
            </div>

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">5. useLayoutEffect Hook</h1>
                <p className="text-sm text-white mt-5">This hook runs synchronously immediately after the DOM has been updated, but before the browser has painted. This means it runs before the browser has had a chance to paint the changes on the screen.
                    <br /><br />
                    The useLayoutEffect hook is useful when you need to perform DOM mutations or measurements and you want to make sure those are done before the browser updates the screen. This can be important for ensuring smooth animations or synchronizing measurements with layout changes.
                    <br /><br />
                    Note : useLayoutEffect run before the useEffect before data is being display on browser.
                </p>
            </div>
        </div>
    )
}