import React, { useState } from 'react';
// ICONS ====================================
import { FaMeta, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdAttachEmail } from "react-icons/md";

const social_links = [
  {
    name: "Facebook",
    icon: <FaMeta className='text-xl text-blue-500' />,
    url: "https://www.facebook.com/piyush.thaware.351/"
  },
  {
    name: "Instagram",
    icon: <FaInstagram className='text-xl text-pink-500' />,
    url: "https://www.instagram.com/piyushthaware07/"
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn className='text-xl text-yellow-400' />,
    url: "https://www.linkedin.com/in/piyush-thaware/"
  },
  {
    name: "Github",
    icon: <TbBrandGithubFilled className='text-2xl text-slate-800' />,
    url: "https://github.com/PiyushThaware07"
  },
  {
    name: "Email",
    icon: <MdAttachEmail className='text-xl text-[red]' />,
    url: "mailto:https://piyushbthaware2@gmail.com?subject=Your%20Subject&body=Your%20Message"
  },
]


export default function SocialMedia() {
  const [toggleSocial, setToggleSocial] = useState(false);
  return (
    <div className='fixed bottom-5 sm:bottom-10 right-5 sm:right-10 z-10'>


      {
        toggleSocial
        &&
        <div className="flex flex-nowrap flex-col gap-2 transition-all">
          {
            social_links.map((item, index) => (
              <a href={item.url} target='_blank' type='button' key={index} className='tarnsition h-[50px] w-[50px] shadow-md p-3 bg-white  rounded-full flex flex-nowrap items-center justify-center hover:bg-gray-100 last:mb-2' >{item.icon}</a>
            ))
          }
        </div>
      }


      <button type='button' className='h-[50px] w-[50px] border-[1.4px] shadow-md p-3 bg-blue-50  rounded-full flex flex-nowrap items-center justify-center hover:bg-gray-100' onClick={() => setToggleSocial(!toggleSocial)}>
        {
          toggleSocial
            ?
            <lord-icon
              src="https://cdn.lordicon.com/nqtddedc.json"
              trigger="loop"
              delay="500"
              style={{ width: "100%", height: "100%" }}>
            </lord-icon>
            :
            <lord-icon
              src="https://cdn.lordicon.com/ercyvufy.json"
              trigger="loop"
              delay="500"
              style={{ width: "100%", height: "100%" }}>
            </lord-icon>
        }

      </button>
    </div>
  )
}
