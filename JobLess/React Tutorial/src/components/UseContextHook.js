import React, { useContext } from "react";
import { FirstName, LastName, Details } from "../App";

export default function UseContextHook() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  const details = useContext(Details);
  return (
    <>
      <h1>
        <b>UseContext Hook</b>
      </h1>
      <small>{fname}</small> <br />
      <small>{lname}</small> <br />
      <small>{details.key1}</small>
      <small>{details.key2}</small>
    </>
  );
}
