import React from 'react'
import {Link, useNavigate} from "react-router-dom";
// & FMimport 
import { motion } from "framer-motion";



export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex flex-nowrap items-center justify-center">
            <motion.div animate={{height:"50%"}} className="w-[50%] text-center">
                <motion.h1 animate={{color:"blue",x:0,y:-30}} className='text-5xl font-semibold text-white'>Welcome Back</motion.h1>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, eligendi velit, saepe veritatis dolorem, harum ducimus laborum temporibus magni reprehenderit officiis animi quidem eveniet asperiores et soluta voluptas pariatur commodi suscipit voluptates numquam totam ex! Iusto atque rem libero repellendus excepturi minima, hic nesciunt non molestias quisquam aliquid esse natus.</p>
                <motion.button animate={{scale:1.5,opacity:.5}} type='button' className='bg-blue-500 px-5 py-2 text-white rounded-full text-sm my-5' onClick={()=>navigate("/about")}>Open Website</motion.button>
            </motion.div>
        </div>
    )
}
