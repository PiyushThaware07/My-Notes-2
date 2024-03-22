import React from "react";
// Tools

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deposite, withdraw } from "../Redux/action";

export default function Video14() {
  const myState = useSelector((state) => state.manageBankBalance);
  const dispatch = useDispatch();

  function moneyDeposite(arg) {
    console.log("money deposited");
    dispatch(deposite(arg));
  }
  function moneyWithdraw(arg) {
    console.log("money withdraw");
    dispatch(withdraw(arg));
  }
  return (
    <>
      <h1>
        <b>Complete Redux</b>
      </h1>
      <h3>Current Bank Balance : {myState}</h3>
      <input type="text" placeholder="Enter Amount" /> <br /> <br />
      <button onClick={() => moneyDeposite(100)}>deposite</button> &nbsp; &nbsp;
      <button onClick={() => moneyWithdraw(50)}>withdraw</button>
    </>
  );
}
