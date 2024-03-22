import React from 'react';
// & Function Based Components 
import { Temp1, Temp2 } from "./components/Function/OneFunction";

// ^ Class Based Components
import OneClass from './components/Class/OneClass';

// ~ Pure Components
import OnePure from './components/Pure/OnePure';
import TwoFunction from './components/Function/TwoFunction';


export default function App() {
  return (
    <div>
      {/* Function Based */}
      <Temp1 />
      <Temp2 />

      <TwoFunction fname="Piyush" lname="Thaware" /> {/* Click Event ,state management , props passing */}



      {/* Class Based */}
      <OneClass />



      {/* Pure Based */}
      <OnePure />
    </div>
  )
}
