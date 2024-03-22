import { count } from 'console';
import React from 'react'

export default function TwoFunction(props) {
    function counter() {
        alert("I am counter");
    }
    return (
        <div>
            <h1>{props.fname} {props.lname}</h1>
            <button type="button" onClick={counter} >Counter</button>
        </div>
    )
}
