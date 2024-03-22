"use client"
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function HeroForm() {
    const [username, setUsername] = useState('');
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(username);
        if (username !== "") {
            window.localStorage.setItem("desiredUsername", username);
            await signIn('google');
        }
    }

    useEffect(() => {
        if ('localStorage' in window && window.localStorage.getItem("desiredUsername")) {
            const username = window.localStorage.getItem("desiredUsername");
            window.localStorage.removeItem("desiredUsername")
            redirect('/account?desiredUsername='+username);
        }
    }, [])

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap sm:flex-nowrap flex-row items-center  gap-2 md:gap-0 h-10 justify-between bg-white">
            <div className="h-full flex items-center gap-1 text-sm font-semibold bg-white ps-5" >
                <h1 className='text-slate-600'>@username</h1>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder='your name' className='flex-1 h-full focus:outline-none bg-transparent text-[#1e293b]' />
            </div>
            <div className="h-full w-full sm:w-auto">
                <button type='submit' className='bg-[#1e293b] w-full md:w-auto h-full text-white px-6 text-nowrap text-sm font-semibold'>Claim your linktree</button>
            </div>
        </form>
    )
}
