import React, { useState } from 'react'

export default function UseStateHook01() {
    const [state, setState] = useState(0);
    return (
        <div>
            <button type='button' onClick={() => setState(state + 1)}>count {state}</button>
        </div>
    )
}
