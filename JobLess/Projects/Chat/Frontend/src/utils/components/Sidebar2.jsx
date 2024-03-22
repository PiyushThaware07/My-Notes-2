import React from 'react';
// ! COLOR Palette ========================================================
import { colorGradients } from '../tools/colorPalette';
// ~ ICONS ================================================================
import { IoClose } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";



export default function Sidebar2(props) {
    return (
        <div className='w-full h-full'>
            <div className={`h-24 w-full ${colorGradients.first} relative`}>
                <div className={`thumbnail h-24 w-24 ${colorGradients.second} rounded-full absolute translate-y-[50%] translate-x-[20px]`}></div>
                <button type='button' onClick={()=>props.setToggleAccountSidebar(false)} className='close-profile absolute right-3 top-3 text-sm font-medium text-slate-700 bg-slate-50 border-[1.4px] border-slate-700 flex flex-nowrap items-center px-2 py-1 rounded-full' >
                    <h1>Close</h1>
                    <IoClose className='text-lg' />
                </button>
            </div>
            <div className="pt-14 px-6">
                <div className="flex flex-nowrap items-center justify-between gap-1">
                    <h1 className='text-md font-semibold capitalize' >Piyush Thaware</h1>
                    <h1 className='text-[10px] font-semibold capitalize flex flex-nowrap items-center gap-1 bg-green-200 px-2 py-1 rounded-full' ><FaCircle className='text-[8px] text-green-500' /><span>online</span></h1>
                </div>
                <div className="mt-5">
                    <p className='text-[12px] font-medium' >Lorem ipsum dolor, sit 🤗 amet consectetur adipisicing elit. Atque facere alias dolores dicta fuga deserunt aut quae corrupti blanditiis doloremque!</p>
                </div>
            </div>
        </div>
    )
}
