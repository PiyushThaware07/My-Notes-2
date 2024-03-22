import React, { useState } from "react";

export default function Video17() {
  const [name, setName] = useState("");

  return (
    <>
      <h1>
        <b>useState Hook in React JS</b>
      </h1>
      <p>Name : {name}</p>
      <input type="text" onChange={(event)=>setName(event.target.value)} />
    </>
  );
}
