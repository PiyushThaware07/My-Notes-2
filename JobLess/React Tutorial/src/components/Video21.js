import React, { useReducer } from "react";

function reducerFunction(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "CLEAR":
        return state*0;
    default:
      return state;
  }
}

export default function Video21() {
  const inititalState = 0;
  const [state, dispatch] = useReducer(reducerFunction, inititalState);
  return (
    <>
      <h1>
        <b>useReducer Hook in React JS</b>
      </h1>
      <h3>Count : {state}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment Count
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement Count
      </button>
      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Count
      </button>
    </>
  );
}
