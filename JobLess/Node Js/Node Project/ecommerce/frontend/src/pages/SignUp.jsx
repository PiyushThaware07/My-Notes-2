import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = localStorage.getItem('user');
    useEffect(() => {
        if (auth) {
            navigate('/');
        }
    })

    async function SignupForm(event) {
        event.preventDefault();
        console.log(name, email, password);
        const storeToDB = await fetch('http://localhost:1000/signup', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })  // (url,method&body&headers)
        let consoleResult = await storeToDB.json()
        console.warn(consoleResult);
        if (consoleResult) {
            localStorage.setItem("user", JSON.stringify(consoleResult));
            navigate('/');
        }
        else {
            navigate('/signup');
        }
    }

    return (
        <div className='w-full h-[430px] flex flex-nowrap items-center justify-center' >
            <div className="w-[40%]">
                <h1 className='text-md font-bold'>Register Account</h1>
                <form action="" className='flex flex-nowrap flex-col' onSubmit={SignupForm}>
                    <input name='name' type="text" placeholder='Name' className='border-b-[1.4px] focus:outline-none p-2 my-3' value={name} onChange={(event) => setName(event.target.value)} />
                    <input name='email' type="email" placeholder='Email' className='border-b-[1.4px] focus:outline-none p-2 my-3' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input name='password' type="password" placeholder='Password' className='border-b-[1.4px] focus:outline-none p-2 my-3' value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button type='submit' className='my-3 border-2 border-gray-300 text-gray-300 hover:text-white hover:bg-gray-300 transition-all shadow-sm p-3 font-bold text-sm w-[100px]'>Submit</button>
                </form>
            </div>
        </div>
    )
}
