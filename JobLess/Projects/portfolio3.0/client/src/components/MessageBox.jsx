import React, { useEffect } from 'react';
// AOS =============================================
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
// ICONS ===========================================
import { RiCloseCircleFill } from "react-icons/ri";


export default function MessageBox(props) {
    useEffect(() => {
        setTimeout(() => {
            props.setShowMessageBox(false);
        }, 5200);
    }, [])


    useEffect(() => {
        AOS.init({
            duration: 800,  // Animation duration in milliseconds
            easing: 'ease-in-out',  // Easing function
            offset: 50,  // Offset (in px) from the original trigger point
            once: true,  // Only animate once
        });
    }, []);


    return (
        <>
            <div className="fixed top-[4.4rem] right-5 z-[99]" data-aos="fade-right">
                <div className='bg-green-100 flex flex-nowrap items-center gap-2 p-2 rounded-t-md rounded-x-md rounded-b-0 text-sm font-semibold shadow-md'>
                    <h1>Thank You For Contacting</h1>
                    <button type='button' className='text-lg' onClick={() => props.setShowMessageBox(false)} ><RiCloseCircleFill className='text-green-500' /></button>
                </div>
                <div className="load bg-green-500 w-full h-[2px] animate-loading"></div>
            </div>
        </>
    )
}
