"use client"
import Script from 'next/script';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap"
})


import React, { useState } from 'react';
// Import Css Module
import Css from "../../css.module.css";
import Css2 from "../../css1.module.css";
// Import Style Outside The App Folder
import Style from "@/styles/style1.module.css";

import Image from 'next/image';
import bg1 from "../../../../public/bg1.jpg"

export default function page() {
  const [bg, setBg] = useState("")

  console.log(bg1);
  return (
    <div>
      Blogs route
      <button type="button" className="btn bg-blue-500 text-white px-5 py-2">All Posts</button>
      <h1 className={Css.btn} id={Css2.main}>Heading 1</h1>
      <h2 className={Style.main}>Heading 2</h2>
      <button type='button' className={bg === "btn" ? Css2.btn : Css2.btn1} onClick={() => setBg("btn")}>Change Color</button>


      <div className="mt-20 p-10">
        <h1 className='text-2xl font-semibold'>Image Optimization in next.js</h1>
        {/* <Image src={bg1} width={300} height={300} />
        <img src={bg1.src} alt="" /> */}

        {/* Direct Website Image */}
        <Image src={"https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} height={200} width={200} />

        <h1>Fonts Optimization</h1>
        {/* <h1 style={{ fontFamily: '"Poppins", sans-serif;',fontStyle:"italic" }}>Layout.jsx main</h1> */}
        <h1 className={roboto.className} >Layout.jsx NextJs default fonts</h1>


        <h1>Script component in next.js</h1>
        <Script src='/myscript.js' onLoad={() => {
          console.log("Script loaded successfully");
        }} />
      </div>
    </div >
  )
}

