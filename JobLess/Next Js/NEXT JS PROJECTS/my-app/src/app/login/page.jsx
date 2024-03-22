import React from 'react';
// & ICONS =========================================
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import LoginWithGoogleButton from './buttons/LoginWithGoogleButton';


export default function Login() {
    return (
        <div className="login py-20">
            <div className="card max-w-[80%] mx-auto">
                <h1 className='text-3xl font-bold capitalize text-center'>Sign in</h1>
                <form action="" className='my-10 w-full sm:w-[60%] md:w-[50%] lg:w-[35%] mx-auto flex flex-nowrap flex-col gap-5 items-center justify-center'>
                    <div className="flex items-center gap-3 h-10 w-full border-[1.4px] border-slate-800 rounded-full px-5">
                        <MdOutlineAttachEmail className='text-lg' />
                        <input type="text" placeholder='Email' className='flex-1 h-full focus:outline-none text-md font-medium' />
                    </div>
                    <div className="flex items-center gap-3 h-10 w-full border-[1.4px] border-slate-800 rounded-full px-5">
                        <RiLockPasswordLine className='text-lg' />
                        <input type="text" placeholder='Password' className='flex-1 h-full focus:outline-none text-md font-medium' />
                    </div>
                    <button type='button' className='h-10 w-full rounded-full text-sm font-semibold border-2 border-black bg-[#1faf9f] capitalize'>Submit</button>

                    <div className="flex flex-nowrap items-center gap-3 w-full">
                        <div className="line h-[1.4px] w-full bg-slate-300 rounded-full"></div>
                        <div className="text-sm font-semibold uppercase text-slate-600">or</div>
                        <div className="line h-[1.4px] w-full bg-slate-300 rounded-full"></div>
                    </div>
                    <div className="w-full">
                        <LoginWithGoogleButton />
                    </div>
                </form>
            </div>
        </div>
    )
}
