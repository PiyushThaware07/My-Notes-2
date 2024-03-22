import React, { useRef } from "react";

export default function Video18() {
  const ref = useRef();

  function elementRotate() {
    ref.current.style.transform = "rotate(90deg)";
  }

  function stopRotate() {
    ref.current.style.transform = "rotate(0deg)";
  }

  return (
    <>
      <h1>
        <b>useRef Hook in React JS</b>
      </h1>

      <button
        ref={ref}
        onMouseEnter={() => elementRotate()}
        onMouseLeave={() => stopRotate()}
      >
        Hello Hover to rotate
      </button>
    </>
  );
}
