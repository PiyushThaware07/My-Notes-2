"use client"


import { signOut } from "next-auth/react";
export default function LogoutWithGoogleButton() {
  return (
    <button type="button" onClick={()=>signOut()} className="bg-[#1faf9f] capitalize text-white text-sm font-bold px-6 py-3 rounded-full" >Log Out</button>
  )
}
