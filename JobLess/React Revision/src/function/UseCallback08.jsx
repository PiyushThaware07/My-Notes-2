import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent';

export default function UseCallback08() {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(10);
    const Learning = useCallback(function Learning() {
        // some operations
    }, [state])  // Dependency array, re-create the function only if count changes
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count : {count}</button>
            <button onClick={() => setState(state + 2)}>state : {state}</button>
            <ChildComponent learning={Learning} />
        </div>
    )
}

// Note : when you click any button the ChildComponent will re-render again to prevent unnecessary re-render we can use useMemo as  well as useCallback 