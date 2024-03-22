import React from 'react';
// ~ ICONS ===============================================================
import { FaCircle } from "react-icons/fa";



export default function Sidebar() {
    return (
        <>
            <div className='sidebar-container w-full h-full border-e-[1.3px]  overflow-auto'>
                <div className="w-full h-full pt-[3.7rem] sm:pt-[12px]">
                    <ul className='chats-items px-2 sm:p-0'>
                        <li className='group chat-item cursor-pointer transition hover:bg-slate-100 rounded-md flex flex-nowrap justify-between sm:justify-around items-start p-2 my-2 first:mt-4 bg-white'>
                            <div className="chat-details flex flex-nowrap items-center gap-2">
                                <div className="chat-Icon bg-yellow-300 text-white h-10 w-10 rounded-full text-xl font-bold flex flex-nowrap items-center justify-center">
                                    <h1>PT</h1>
                                </div>
                                <div className="">
                                    <h1 className='chat-username text-sm font-semibold capitalize'>Piyush Thaware</h1>
                                    <p className='chat-description text-[10px] font-medium'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className="chat-timeStamp text-[11px] font-semibold mt-1 flex flex-col flex-nowrap items-center">
                                <h1>2.24 Am</h1>
                                <div className="text-[8px] font-bold px-2 py-1 bg-green-100 text-green-500 rounded-full flex flex-nowrap items-center gap-1 group-hover:animate-pulse"><FaCircle className='text-[5px] text-green-500' /><h1>Online</h1></div>
                            </div>
                        </li>
                        <li className='group chat-item cursor-pointer transition hover:bg-slate-100 rounded-md flex flex-nowrap justify-between sm:justify-around items-start p-2 my-2 first:mt-4 bg-white'>
                            <div className="chat-details flex flex-nowrap items-center gap-2">
                                <div className="chat-Icon bg-blue-300 text-white h-10 w-10 rounded-full text-xl font-bold flex flex-nowrap items-center justify-center">
                                    <h1>HS</h1>
                                </div>
                                <div className="">
                                    <h1 className='chat-username text-sm font-semibold capitalize'>Herik Sevak</h1>
                                    <p className='chat-description text-[10px] font-medium'>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className="chat-timeStamp text-[11px] font-semibold mt-1 flex flex-col flex-nowrap items-center">
                                <h1>2.24 Am</h1>
                                <div className="text-[8px] font-bold px-2 py-1 bg-red-100 text-red-500 rounded-full flex flex-nowrap items-center gap-1 group-hover:animate-pulse"><FaCircle className='text-[5px] text-red-500' /><h1>Offline</h1></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}
