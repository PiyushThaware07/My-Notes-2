import React, { createContext } from 'react';
// HOOKS
import UseStateHook1 from './hooks/UseStateHook1';
import UseEffectHook2 from './hooks/UseEffectHook2';
import UseContextHook3 from './hooks/UseContextHook3';
import UseReducerHook4 from "./hooks/UseReducerHook4";
import UseRefHook5 from './hooks/UseRefHook5';
import UseLayoutEffect6 from './hooks/UseLayoutEffect6';
import UseMemoHook7 from './hooks/UseMemoHook7';
import Testing from './hooks/Testing';


// It should be outside always
export const MyContext = createContext('name is piyush');

export const MyTestingContext = createContext("I am Testing my code");

export default function App() {
  const data = { fname: "Piyush", lname: "thaware" }


  return (
    <div className="overflow-hidden">
      <UseStateHook1 />
      <UseEffectHook2 />

      {/* Using the Provider component */}
      <MyContext.Provider value={data}>
        <UseContextHook3 />
      </MyContext.Provider>

      <UseReducerHook4 />
      <UseRefHook5 />
      <UseLayoutEffect6 />
      <UseMemoHook7 />

      <MyTestingContext.Provider value={data}>
        <Testing />
      </MyTestingContext.Provider>
    </div >
  )
}
