/*
// Example - 1
import React, { useReducer } from 'react';
// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('Unsupported action type');
    }
};

function Counter() {
    // Initial state and dispatch function
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment + Payload</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
}
export default Counter;
*/



import React, { useReducer } from 'react'

export default function UseReducerHook06() {
    function MyReducer(state, action) {
        if (action.type === "INCREMENT") {
            return state + 1;
        }
        else if (action.type === "DECREMENT") {
            return state - 1;
        }
        else if (action.type === "INCREMENTBYPAYLOAD") {
            return state + action.payload;
        }
        else if (action.type === "DECREMENTBYPAYLOAD") {
            return state - action.payload;
        }
        else {
            return state;
        }
    }
    const initialValue = 100;
    const [state, dispatch] = useReducer(MyReducer, initialValue);
    return (
        <div>
            <h3><b>Count : {state}</b></h3>

            <button type='button' onClick={() => dispatch({ type: "INCREMENT" })}>Increment + 1</button>
            <button type='button' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement - 1</button>
            <button type='button' onClick={() => dispatch({ type: "INCREMENTBYPAYLOAD", payload: 10 })}>Increment + Payload</button>
            <button type='button' onClick={() => dispatch({ type: "DECREMENTBYPAYLOAD", payload: 10 })}>Decrement - Payload</button>
        </div>
    )
}
