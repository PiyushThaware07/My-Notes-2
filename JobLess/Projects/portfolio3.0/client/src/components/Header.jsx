import React from 'react';
// Image
import hero from "../assets/img/hero.png";
import Resume from "../assets/pdf/Resume.pdf";

export default function Header() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center p-10 md:p-0">
                <div className="col md:p-8 lg:p-16 order-2 md:order-1">
                    <h1 className='text-xl' style={{ fontFamily: "'Pacifico', cursive" }}>Hello there 👋,</h1>
                    <h1 className='text-3xl sm:text-4xl font-bold sm:font-semibold'>My <span className=''>name</span> is <br /><span className=''>Piyush Thaware.</span></h1>
                    <h1 className='text-sm my-3 font-[500]'> I am an enthusiastic and dedicated individual, eager to utilize my skills and knowledge to create meaningful and impactful projects.</h1>
                    <br />
                    <a href={Resume} download="PiyushThwareResume" className='py-2 px-4 border-2 border-[black] bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold'>Download CV</a>
                </div>
                <div className="col h-[300px] order-1 md:order-2">
                    <img src={hero} alt="" className='h-full w-full object-contain' />
                </div>
            </div>
        </>
    )
}
