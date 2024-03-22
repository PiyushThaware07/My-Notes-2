import React, { useState } from "react";

export default function Video10() {
  const [text, setText] = useState("");
  function handleInput(event) {
    setText(event.target.value);
  }
  return (
    <>
      <h1>
        <b>React JS Event Object for Form Input | e.target.value </b>
      </h1>

      <form action="">
        <textarea
          cols="30"
          rows="10"
          onChange={handleInput}
          placeholder="Enter something"
        ></textarea>
        <br />
        <small><b>Output : </b>{text}</small>
      </form>
    </>
  );
}
