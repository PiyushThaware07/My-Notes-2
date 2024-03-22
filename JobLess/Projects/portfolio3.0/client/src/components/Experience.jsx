import React, { useEffect, useState } from 'react';
// ICONS
import { MdCardTravel } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// AOS ANIMATION
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



export default function Experience(props) {

    /*
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", () => {
            const timelineCard = document.querySelectorAll(".timeline-card");
            console.log(timelineCard);
            timelineCard.forEach((element, index) => {
                // Checking if the index is even or odd
                if (index % 2 === 0) {
                    // Adding a custom attribute for even elements
                    element.setAttribute("data-aos", "fade-right");
                } else {
                    // Adding a custom attribute for odd elements
                    element.setAttribute("data-aos", "fade-left");
                }
            });
        })
    }, [])
    */

    const [experiences, setExperiences] = useState([]);
    async function handleExperienceReadData() {
        const request = await fetch(`${props.backendURL}/api/retriveExperience`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await request.json();
        // console.warn("Response : ", response.data);
        if (response.success) {
            setExperiences(response.data);
        }
        else {
            setExperiences([]);
        }
    }
    useEffect(() => {
        handleExperienceReadData();
    }, [])


    return (
        <>
            <div className="px-6 sm:px-10 md:px-16  pb-10">
                <div className="mb-5 flex flex-nowrap items-center gap-3">
                    <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
                    <h1 className=' text-lg font-bold text-center uppercase text-slate-500'>Experience</h1>
                    <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
                </div>

                <div className="timelineContainer w-full h-[100%] flex flex-nowrap items-center justify-center relative z-2 after:bg-slate-900">
                    <ul className="timeline-items w-[100%] md:w-[80%] mx-auto ps-10 md:ps-0 ">
                        {
                            experiences.length !== 0 ?
                                (
                                    experiences.map((item, index) => (
                                        <li key={index} className="timeline-item w-[100%]  md:w-[50%]  cursor-pointer relative z-[9] mt-8 md:mt-0 md:pt-8 mb-5" >
                                            <div className="timeline-card relative w-full h-auto shadow-md bg-slate-100 rounded-lg px-5 py-10  text-slate-800" >
                                                <h1 className='font-bold capitalize '>@{item.companyName}</h1>
                                                <h1 className='font-semibold text-[13px] text-slate-600'>{item.jobTitle}</h1>
                                                <h1 className='font-semibold text-[13px] text-slate-600'><span className='text-slate-800'>Duration : </span>{item.duration} Months</h1>
                                                <h1 className='font-semibold text-[13px] text-slate-800'>Responsibilities : </h1>
                                                <ul>
                                                    {
                                                        item.responsibilities.map((item, index) => (
                                                            <li key={index} className='font-semibold text-[11px] text-slate-600'>~ {item}</li>
                                                        ))
                                                    }
                                                </ul>
                                                <span className='location bg-white text-slate-900 px-2 py-1 rounded-lg text-sm font-semibold inline-flex items-center absolute bottom-2 right-2'
                                                    style={{ boxShadow: "inset 0 0 4px rgba(0, 0, 0, 0.2)" }}>
                                                    <FaLocationDot className='' />
                                                    <span className='text-[13px] font-semibold'>{item.location}</span>
                                                </span>
                                            </div>
                                            <span className="circle w-32 absolute flex flex-nowrap items-center justify-center gap-2 bg-slate-900 px-3 py-1 rounded-full z-[999]">
                                                <span className='icon text-white rounded-full '><MdCardTravel /></span>
                                                <span className='duration text-sm text-white font-semibold text-nowrap' >{item.startDate} - {item.endDate}</span>
                                            </span>
                                        </li>
                                    ))
                                )
                                :
                                <h1>Loading...</h1>
                        }


















                    </ul>
                </div>

            </div>
        </>
    )
}
