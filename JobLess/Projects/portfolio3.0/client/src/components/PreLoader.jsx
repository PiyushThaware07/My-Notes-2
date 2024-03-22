import React from 'react';
// * GIF ===============================================
import gif1 from "../assets/gif/browser.gif";

export default function PreLoader() {
    return (
        <div className='preloader min-h-screen w-full overflow-hidden flex flex-nowrap items-center justify-center bg-white'>
            <div className="flex flex-nowrap flex-col justify-center items-center gap-5">
                <img src={gif1} alt="Loading..." className='h-[150px] w-[150px] object-cover' />
                <h1 className='text-md sm:text-xl font-mono'>Initializing...</h1>
            </div>
        </div>
    )
}
