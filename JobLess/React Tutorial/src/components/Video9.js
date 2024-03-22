import React from "react";

export default function Video9(props) {
  return (
    <>
      <h1>
        <b>Child to Parent data flow| lifting state up | upward data flow </b>
      </h1>
      <button
        onClick={() => {
          props.handler("Sahil");
        }}
      >
        Add Name
      </button>
    </>
  );
}
