import React from 'react';
// ICONS
import { LuFigma } from "react-icons/lu";
import { LiaBugSolid } from "react-icons/lia";
import { TbBrandVscode } from "react-icons/tb";
import { MdOutlineVideoSettings } from "react-icons/md";


const services = [
    {
      name: "Graphic Design",
      icon: <LuFigma className='text-xl ' />
    },
    {
      name: "Software Development",
      icon: <TbBrandVscode className='text-xl ' />
    },
    {
      name: "Bugs Fixing",
      icon: <LiaBugSolid className='text-xl ' />
    },
    {
      name: "Content Editing",
      icon: <MdOutlineVideoSettings className='text-xl ' />
    },
  
  ]

export default function Services() {
    return (
        <>
            <div className="px-6 sm:px-10 md:px-16  pb-10">
                <div className="mb-5 flex flex-nowrap items-center gap-3">
                    <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
                    <h1 className=' text-lg font-bold text-center uppercase text-slate-500'>Services</h1>
                    <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        services.map((service, index) => {
                            return (
                                <div key={index} className="h-[130px] card border-2 hover:border-dotted border-spacing-2 border-white hover:border-black rounded-lg ">
                                    <div className="h-full border-2 border-black hover:bg-blue-100 rounded-lg hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all   px-5 py-3">
                                        <div className="my-3 md:my-5">
                                            {service.icon}
                                        </div>
                                        <div className="mb-3 md:mb-5">
                                            <h1 className='text-sm font-semibold'>{service.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
