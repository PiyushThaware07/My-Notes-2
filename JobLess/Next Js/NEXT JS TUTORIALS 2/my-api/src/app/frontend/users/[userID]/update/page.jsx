"use client"

import React, { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    subsets: ["latin"],
    weight: "500"
});

export default function page({ params }) {
    let id = params.userID;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState('');

    async function getUser() {
        const request = await fetch(`http://localhost:3000/backend/api/users/${id}`);
        const response = await request.json();
        setName(response.message.name);
        setEmail(response.message.email);
        setAge(response.message.age);
    }
    useEffect(() => {
        getUser();
    }, [])


    async function handleSubmit(event) {
        event.preventDefault();
        const request = await fetch(`http://localhost:3000/backend/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id:id,name: name, age: age, email: email })
        });
        const response = await request.json();
        setMessage("Data Updated Successfully");
    }



    return (
        <div className={`${poppins.className} p-10`}>
            <div className="flex flex-nowrap items-center gap-2">
                <h1 className='text-xl'>Update User : </h1>
                <h1 className='px-4 py-1 tracking-[1px] text-sm rounded-md bg-blue-500 text-white'>PUT</h1>
            </div>
            <div className="my-10 border-[1.5px] border-slate-500 bg-slate-100 rounded-md p-5 max-w-full sm:max-w-[60%] md:max-w-[50%] lg:max-w-[30%]">
                <form action="" onSubmit={handleSubmit}>
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name' className='border-[1.6px] w-full rounded-md my-3 p-3' />
                    <br />
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' className='border-[1.6px] w-full rounded-md my-3 p-3' />
                    <br />
                    <input required value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder='Enter Age' className='border-[1.6px] w-full rounded-md my-3 p-3' />
                    <button type="submit" className='px-3 py-2 bg-slate-900 text-white rounded-md text-sm' >Submit</button>
                </form>
            </div>

            <div className="">
                Message :
                {message !== ""
                    &&
                    <p>{message}</p>
                }
            </div>

        </div>
    )
}
