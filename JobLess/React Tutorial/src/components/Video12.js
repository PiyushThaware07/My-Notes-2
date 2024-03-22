import React from "react";

export default function Video12(props) {
  return (
    <>
      <h1>
        <b>React JS props.children | Children in JSX React JS</b>
      </h1>

      <div
        style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
      >
        {props.children}
      </div>
    </>
  );
}
