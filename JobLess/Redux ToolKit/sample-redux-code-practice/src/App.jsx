import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCountReducer, incrementCountReducer } from './Redux/Slices/CounterSlice';

export default function App() {
  const counter = useSelector((state)=>state.counterRoot)
  const dispatch = useDispatch();
  console.warn(counter);


  return (
    <div>
      Current Count : {counter.count}
      <br />
      <hr />
      <br />
      <button onClick={() => dispatch(incrementCountReducer())}>Increment</button> &nbsp;
      <button onClick={() => dispatch(decrementCountReducer(100))}>Decrement</button>
    </div>
  )
}
