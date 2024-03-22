import React, { useMemo, useState } from 'react'

export default function UseMemoHook07() {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    const multiple = useMemo(() => {
        console.log("********************************");
        return add * 10;
    }, [add])
    return (
        <div>
            {multiple}
            <br />
            <button onClick={() => setAdd(add + 1)}>add {add}</button>
            <button onClick={() => setSub(sub - 1)}>sub {sub}</button>
        </div>
    )
}
