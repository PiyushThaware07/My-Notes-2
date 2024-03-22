import React from "react";

export default function Video5() {
  function handleClick() {
    alert("clicked");
  }

  function handleClickWithArgument(name) {
    alert(`Hello ${name}`);
  }
  return (
    <>
      <h1>
        <b>ReactJS Event Handling | Binding Event Handlers</b>
      </h1>

      <button onClick={handleClick}>Button - 1</button>
      <button onClick={() => handleClickWithArgument("Piyush")}>
        Button - 2 with arg
      </button>
    </>
  );
}
