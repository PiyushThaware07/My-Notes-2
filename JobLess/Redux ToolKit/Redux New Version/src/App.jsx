import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCounter, decrementCounter, incrementCounter } from "./redux/slices/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const myCounter = useSelector((data) => data.micro_reducer_counter);


  return (
    <div>
      <h1>Counter : {myCounter}</h1>
      <button type="button" onClick={() => dispatch(decrementCounter())}>Decrement --</button>
      &nbsp;
      <button type="button" onClick={() => dispatch(incrementCounter(100))} >Increment ++</button>
      &nbsp;
      <button type="button" onClick={() => dispatch(clearCounter())} >Clear Counter</button>
    </div>
  )
}
