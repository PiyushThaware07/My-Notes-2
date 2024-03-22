import React from 'react'
import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.div initial={{ y: "100px" }} animate={{ y: "0px" }} className='min-h-screen text-white'>
            <motion.h1 className='text-4xl cursor-pointer' whileHover={{ scaleX: -1.1 }} >About</motion.h1>
        </motion.div>
    )
}
