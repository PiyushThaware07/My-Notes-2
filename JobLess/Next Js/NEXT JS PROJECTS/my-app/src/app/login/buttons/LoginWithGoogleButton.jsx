"use client"

import { signIn } from "next-auth/react"


// & ICONS ==========================================
import { FcGoogle } from "react-icons/fc";

export default function LoginWithGoogleButton() {
    return (
        <button onClick={() => signIn('google')} type='button' className='flex text-white flex-nowrap items-center justify-center gap-1 text-sm font-semibold tracking-[1px] bg-black w-full h-10  rounded-full'>Continue With <FcGoogle className='text-xl' /></button>
    )
}
