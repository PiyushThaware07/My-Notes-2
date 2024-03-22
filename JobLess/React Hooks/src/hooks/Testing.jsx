import React, { useContext } from 'react'
import { MyTestingContext } from '../App';

export default function Testing() {
    const myContextValues = useContext(MyTestingContext);
    console.log(myContextValues);
    return (
        <div>
            <h1>UseContextHook</h1>
            <h1 className='text-black '>{myContextValues.fname}</h1>
            <h1 className='text-black '>{myContextValues.lname}</h1>
        </div>
    )
}
