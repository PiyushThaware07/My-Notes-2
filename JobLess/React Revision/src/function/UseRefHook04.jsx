/*
Example : 01
import React, { useRef, useState } from 'react'

export default function UseRefHook04() {
    const [input, setInput] = useState('');
    const ref = useRef("red");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input);
        console.log("Input Value Using Ref : ", ref.current.value);
        setInput("");
        ref.current.focus();
        ref.current.style.backgroundColor = 'red';
        ref.current.style.color = "white";
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={ref} value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter Fullname' />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
*/



// Example : 02 : count re-render using useRef
import React, { useEffect, useRef, useState } from 'react'

export default function UseRefHook04() {
    const [state, setState] = useState(0);
    const render = useRef(0);
    useEffect(() => {
        render.current = render.current + 1;
    })
    return (
        <div>
            <h3><b>Render : {render.current}</b></h3>
            <button type='button' onClick={() => setState(state + 1)} >Update State : {state}</button>
        </div>
    )
}

