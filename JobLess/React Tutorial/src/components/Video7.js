import React, { useState } from "react";

export default function Video7() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>
        <b>State in React JS | setState in React JS </b>
      </h1>
      <small>
        Counter : {counter}
        <br />
        <button onClick={() => setCounter(counter + 1)}>
          Increment Counter
        </button>
        <button onClick={() => setCounter(0)}>Clear</button>
      </small>
    </>
  );
}
