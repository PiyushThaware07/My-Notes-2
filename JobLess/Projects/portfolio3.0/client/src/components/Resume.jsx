import React from 'react';
// ICONS
import { FaCircle } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

// IMAGE
import resume from "../assets/img/resume.png";
import ResumePDF from "../assets/pdf/Resume.pdf";


export default function Resume() {

    return (
        <>
            <div className="px-0 sm:px-10 md:px-16 pb-10">
                <div className="mb-5 flex flex-nowrap items-center gap-3 px-4 md:px-0">
                    <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
                    <h1 className='text-lg font-bold text-center uppercase text-slate-500 text-nowrap'>Resume</h1>
                    <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="about p-7 sm:p-10">
                        <h1 className='text-4xl sm:text-5xl font-bold capitalize text-slate-950'>Hey <span className='text-blue-600' >There !</span></h1>
                        <p className='mt-5 mb-2 text-md font-semibold text-slate-500'>
                            Hello there! I'm <span className='text-slate-700' >Piyush Thaware</span>, a final-year <span className='text-slate-700' >Computer Science Engineering student</span> with a deep interest in designing and programming. My journey involves continuous learning, with a commitment to evolving as a <span className='text-slate-700' >proficient designer and programmer</span>. Currently navigating the challenges of my <span className='text-slate-700' >B.Tech. (CSE) final year</span>, I'm enthusiastic about bridging the gap between my creative interests and technical skills. Beyond the digital landscape, you'll often find me sketching away, channeling my creativity into visual art.
                        </p>
                        <p className='mt-5 mb-2 text-md font-semibold text-slate-500' >
                            Join me as I embark on this exciting adventure of merging creativity and technology!
                        </p>

                        <h1 className='mt-5 mb-2 text-md font-bold text-slate-900'>Connect With Me.</h1>
                        <div className="flex flex-nowrap items-center gap-3">
                            <a href='https://linkedin.com/in/piyush-thaware/' target='_blank' className='cursor-pointer  px-8 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-sm rounded-md flex flex-nowrap items-center gap-1' >Linkedin <FaLinkedin className='text-lg' /></a>
                            <a href="mailto:piyushbthaware2@gmail.com?subject=Your%20Subject&body=Your%20Message" target="_blank" className='cursor-pointer  px-8 py-3 text-white bg-gradient-to-r from-red-500 to-pink-500 font-semibold text-sm rounded-md flex flex-nowrap items-center gap-1' >Email <MdMarkEmailUnread className='text-lg' /></a>
                        </div>
                    </div>
                    <div className="pdf border-[3px] border-slate-950 rounded-xl mx-5 sm:mx-10 md:m-10 min-h-[400px] sm:max-h-[500px] overflow-hidden relative">
                        <div className="flex flex-nowrap items-center gap-1 text-[13px] border-b-[3px] border-slate-950 p-5 shadow-sm bg-slate-950 rounded-t-lg sticky top-0 left-0 w-full">
                            <FaCircle className='text-blue-500' />
                            <FaCircle className='text-purple-500' />
                            <FaCircle className='text-pink-500' />
                        </div>
                        {/* PDF VIWER */}
                        <img src={resume} alt="Resume Loading..." />
                        <a href={ResumePDF} download="PiyushThawareResume" className='bg-gradient-to-r from-slate-950 to-slate-800 text-white text-sm px-5 py-3 font-semibold absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full flex flex-nowrap items-center gap-1 hover:shadow-xl hover:shadow-gray-200'>Download CV <FaFileDownload /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
