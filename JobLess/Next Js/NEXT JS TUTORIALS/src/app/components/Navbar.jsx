"use client"

import React from 'react';
// LINKING AND NAVIGATING
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'


export default function Navbar() {
    const router = useRouter()
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className="main-navbar bg-slate-950 px-5 py-4">
            <nav className='flex flex-nowrap items-center justify-between'>
                <div className="section1 text-white font-semibold text-lg">Next Js</div>
                <div className="section2 ">
                    {
                        pathname.includes("teachers") ||
                        <ul className='flex flex-nowrap items-center gap-3'>
                            <li className='text-white font-medium text-sm cursor-pointer'><Link href="/routes/college">College</Link></li>
                            <li><Link href="/routes/auth/signup" className='px-5 py-2 bg-slate-900 text-white border-[1.4px] border-slate-800 text-sm font-semibold rounded-md' >Sign Up</Link></li>
                            <li><button type="button" onClick={() => router.push("/routes/auth/signin")} className='px-5 py-2 bg-slate-900 text-white border-[1.4px] border-slate-800 text-sm font-semibold rounded-md' >Sign In</button></li>
                        </ul>
                    }

                </div>
            </nav>
        </div>
    )
}
