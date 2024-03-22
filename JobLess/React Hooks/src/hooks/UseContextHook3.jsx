import React, { useContext } from 'react';
import { MyContext } from '../App';


export default function UseContextHook3() {
    const contextValue = useContext(MyContext);
    console.log(contextValue);


    return (
        <div className="h-screen w-screen bg-gray-950 flex flex-nowrap items-center justify-center relative">
            <div className=" flex flex-col flex-nowrap items-start h-[30%] w-[30%] text-white">
                <h1>Fname : {contextValue.fname}</h1>
                <h1>Lname : {contextValue.lname}</h1>
            </div>

            <div className="summary absolute top-5 left-5 p-5 bg-slate-800 max-w-[30%] border-2 border-slate-600 rounded-lg">
                <h1 className="text-white font-semibold text-xl">3. useContext Hook</h1>
                <p className="text-sm text-white mt-5">useContext is a React Hook that provides a way to consume context values in functional components. Context in React is a way to share values like themes, locale preferences, or authenticated user data between components without having to explicitly pass props through every level of the component tree. 
                <br />
                <br />
                Able to consume grandparent values in child components without the involvement of parent component
                </p>
            </div>
        </div>
    )
}
