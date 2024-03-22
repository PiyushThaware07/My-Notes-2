/*
import React, { useReducer } from 'react';
// ICONS
import { FaPlus, FaMinus } from "react-icons/fa";

export default function UseStateHook1() {
    const initialValue = 0;
    const [state, dispatch] = useReducer(reducer, initialValue);

    function reducer(state, action) {
        if (action.type === "INCREMENT") {
            return state + 1;
        }
        else if (action.type === "DECREMENT") {
            return state - 1;
        }
        else {
            return state;
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className=" flex flex-nowrap items-center justify-around h-[30%] w-[30%]">
                <button
                    type="button"
                    className="text-xl bg-gray-700 rounded-lg p-3"
                    onClick={() => dispatch({ type: "DECREMENT" })}>
                    <FaMinus />
                </button>
                <h1 className="text-7xl text-blue-700 font-bold">{state}</h1>
                <button
                    type="button"
                    className="text-xl bg-gray-700 rounded-lg p-3"
                    onClick={() => dispatch({ type: "INCREMENT" })}>
                    <FaPlus />
                </button>
            </div>

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">4. useReducer Hook</h1>
                <p className="text-sm text-white mt-5">useReducer is a React Hook that is used for managing more complex state logic in functional components. It offers an alternative to useState for managing state in a more predictable way, especially when state logic involves multiple sub-values or when the next state depends on the previous one. It's similar to how reducers work in Redux.</p>
            </div>
        </div>
    )
}
*/








import React, { useReducer } from 'react';
// ICONS
import { FaPlus, FaMinus } from "react-icons/fa";

export default function UseStateHook1() {
    const initialValue = 1000;
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    function reducerFunction(state, action) {
        console.log("I am reducer", action);
        if (action.type === "INC") {
            return state + action.payload;
        }
        else if (action.type === "DEC") {
            return state - 1;
        }
        else {
            return state;
        }
    }
    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className=" flex flex-nowrap items-center justify-around h-[30%] w-[30%]">
                <button
                    type="button"
                    className="text-xl bg-gray-700 rounded-lg p-3"
                    onClick={() => dispatch({ type: "DEC" })}>
                    <FaMinus />
                </button>
                <h1 className="text-7xl text-blue-700 font-bold">{state}</h1>
                <button
                    type="button"
                    className="text-xl bg-gray-700 rounded-lg p-3"
                    onClick={() => dispatch({ type: "INC", payload: 100 })}>
                    <FaPlus />
                </button>
            </div>

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">4. useReducer Hook</h1>
                <p className="text-sm text-white mt-5">useReducer is a React Hook that is used for managing more complex state logic in functional components. It offers an alternative to useState for managing state in a more predictable way, especially when state logic involves multiple sub-values or when the next state depends on the previous one. It's similar to how reducers work in Redux.</p>
            </div>
        </div>
    )
}
