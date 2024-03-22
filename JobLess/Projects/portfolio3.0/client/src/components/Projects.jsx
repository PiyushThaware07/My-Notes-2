import React from 'react';
import Carousel from 'react-elastic-carousel';
// ICONS ============================================
import { IoMdLink } from "react-icons/io";

// PROJECT - IMAGES =================================
import bg1 from "../assets/img/projects/01.jpg";
import bg2 from "../assets/img/projects/02.jpg";
import bg3 from "../assets/img/projects/03.jpg";
import bg4 from "../assets/img/projects/04.jpg";
import bg5 from "../assets/img/projects/05.jpg";
import bg6 from "../assets/img/projects/06.jpg";



export default function Projects(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const state = {
    items: [
      { id: 1, title: 'ShopNow - Ecommerce', image: bg1, url: "https://shopnowstore.netlify.app/" },
      { id: 2, title: 'FreeTube - Youtube clone', image: bg2, url: "https://freetubeapp.netlify.app/" },
      { id: 3, title: 'ChatBot - Telegram', image: bg3, url: "https://skycastweather.pythonanywhere.com/" },
      { id: 4, title: 'ChatNow - Chatting App', image: bg4, url: "https://chatnow.pythonanywhere.com" },
      { id: 5, title: 'StoryTeller - Blogging App', image: bg5, url: "https://storyteller.pythonanywhere.com" },
      { id: 6, title: 'ERMS', image: bg6, url: "https://github.com/PiyushThaware07/ERMS" },
    ]
  }




  return (
    <>
      <div className="px-3 sm:px-10 md:px-16 pb-10">
        <div className="mb-5 flex flex-nowrap items-center gap-3 px-4 md:px-0">
          <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
          <h1 className='text-lg font-bold text-center uppercase text-slate-500 text-nowrap'>Projects</h1>
          <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
        </div>

        <div className="flex flex-nowrap items-center pt-6">

          <Carousel
            breakPoints={breakPoints}
            showArrows={false}
            enableSwipe={true}
            enableMouseSwipe={true}
          >
            {
              state.items.map((item, index) => (
                <div className="card h-full card  flex-1 mx-1 rounded-lg relative" key={index}>
                  <div className="h-full border-[2px] border-slate-700 shadow-sm rounded-lg ">
                    <div className="thumbnail h-[200px]">
                      <a href={item.url} target='_blank'>
                        <img className='object-cover h-full w-full rounded-t-md' src={item.image} alt="Loading..." />
                      </a>
                    </div>
                    <div className=" flex flex-wrap gap-2 justify-end p-2">
                      {/* FRONT_END */}
                      <h1 className='text-md font-semibold' >{item.title}</h1>
                    </div>
                  </div>
                  <a href={item.url} target='_blank' className="cursor-pointer absolute bottom-[11%] left-[5%] h-[40px] w-[40px] bg-white shadow-md rounded-full flex flex-nowrap items-center justify-center">
                    <IoMdLink />
                  </a>
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
    </>
  );
}
