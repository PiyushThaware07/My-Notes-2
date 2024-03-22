import React, { useContext } from 'react'
import { MyContext } from '../main'

export default function UseContextHook05() {
    const mydata = useContext(MyContext);
    return (
        <div>
            <ul>
                <li>Fname : {mydata?.fname}</li>
                <li>Lname : {mydata?.lname}</li>
                <li>Email : {mydata?.email}</li>
                <li>Age : {mydata?.age}</li>
            </ul>
        </div>
    )
}
