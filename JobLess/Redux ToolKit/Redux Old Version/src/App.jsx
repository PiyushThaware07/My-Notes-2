import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {IncrementCounterAction,DecrementCounterAction} from "./redux/actions/myaction";

export default function App() {
  const dispatch = useDispatch();
  const myCounter = useSelector((state) => state.myReducer);
  console.warn(myCounter);

  return (
    <>
      <div>
        <h1>Counter : {myCounter}</h1>
        <button type="button" onClick={()=>dispatch(DecrementCounterAction())} >Decrement --</button>
        &nbsp;
        <button type="button" onClick={()=>dispatch(IncrementCounterAction(100))} >Increment ++</button>
      </div>
    </>
  )
}
