import React, { useEffect, useState } from "react";

export default function Video19() {
  // Alternative of components did mount in function based compoenents
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.warn("Component Did Mount");
    return () => {
      console.log("Component Unmount");
    };
  }, [count]);
  return (
    <>
      <h1>
        <b>useEffect Hook in React JS</b>
      </h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <p>Count : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Update Count</button>
    </>
  );
}
