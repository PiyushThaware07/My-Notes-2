// import styles from "./page.module.css";
"use client"

import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  function myFunc(name) {
    alert(`Hello ${name},how you day !!!`);
  }

  function InnerComponent({ props, data }) {
    return (
      <>
        <h1>Hello I am inner component {props}</h1>
        <h1>{data}</h1>
      </>
    )
  }

  const someProp = "Hello";
  return (
    <main>
      <h1>Home Page</h1>
      <About name="piyush" />
      <button type="button" onClick={() => alert("Hello")}>click</button>
      <button type="button" onClick={() => myFunc("Piyush Thaware")}>Print Name</button>

      <h1>{counter}</h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>Increment++</button>
      <button type="button" onClick={() => setCounter(counter - 1)}>Decrement--</button>

      {InnerComponent({ props: someProp })}
      <InnerComponent data={"this will render"} />
    </main>
  );
}




// Component within the component
function About(props) {
  return (
    <>
      <h1>About Page</h1>
      <p>{props.name}</p>
    </>
  )
}