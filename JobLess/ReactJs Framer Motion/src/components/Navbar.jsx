import React from 'react';
import { motion } from "framer-motion";


export default function Navbar() {
    return (
        <motion.nav initial={{y:-250}} animate={{y:0}} transition={{delay:"0.2",type:"spring",stiffness:30}} className='w-full p-5 bg-white'>
            <motion.h1 className='text-md font-semibold cursor-pointer' initial={{color:"black"}} animate={{color:"blue"}} transition={{delay:0.2,duration:5,type:"spring",stiffness:500}} >Framer Motion</motion.h1>
        </motion.nav>
    )
}
