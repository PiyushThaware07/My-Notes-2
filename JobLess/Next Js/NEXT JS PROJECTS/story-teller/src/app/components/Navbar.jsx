import React from 'react'
import { FaBookDead } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className='navbar h-14 shadow-sm w-full'>
            <div className="flex flex-nowrap items-center justify-between h-full px-6">
                <div className="section01">
                    <a href="" className='flex flex-nowrap items-center gap-1'>
                        <FaBookDead className='text-xl text-blue-500' />
                        <h1 className='text-md font-semibold'>StoryBook</h1>
                    </a>
                </div>
                <div className="section02 h-full flex flex-nowrap items-center ">
                    <ul className='h-full flex flex-nowrap items-center gap-2'>
                        <li className=''>
                            <a href="/" className='bg-white text-slate-800 py-2 px-5 rounded-[3px] capitalize text-[13px] font-semibold'>Log In</a>
                        </li>
                        <li className=''>
                            <a href="/" className='bg-blue-500 text-white py-2 px-5 rounded-[3px] capitalize text-[13px]'>Register yourself</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
