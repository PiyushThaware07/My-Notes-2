"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    // CHECKING ACTIVE LINKS
    const pathname = usePathname();

    return (
        <div className='main-navbar bg-slate-950'>
            <nav className='flex flex-nowrap items-center justify-between border-b-[1.5px] px-5 py-3'>
                <div className="">
                    <Link href="/route/college">
                    <h1 className='text-md font-semibold text-white cursor-pointer'>Next <span className="text-blue-700">JS</span></h1>
                    </Link>
                </div>
                <div className="">
                    <ul className='flex flex-nowrap items-center gap-3'>
                        <li className={`px-2 py-2 ${pathname.includes("students") ? "text-blue-500" : "text-white"} rounded-md text-[13px] text-white font-medium cursor-pointer hover:text-blue-500`}><Link href={'/routes/college/students'}>Students</Link></li>
                        <li className={`px-2 py-2 ${pathname.includes("teachers") ? "text-blue-500" : "text-white"} rounded-md text-[13px] text-white font-medium cursor-pointer hover:text-blue-500`}><Link href={'/routes/college/teachers'}>Teachers</Link></li>
                        <li className={`px-5 py-2 ${pathname.includes("signin") ? "bg-white border-[1.4px] border-slate-700 text-slate-900" : "border-[1.4px] border-slate-700 text-slate-500 bg-slate-900"} rounded-md text-[13px] font-medium cursor-pointer`}><Link href={'/routes/auth/signin'}>Sign In</Link></li>
                        <li className={`px-5 py-2 ${pathname.includes("signup") ? "bg-white border-[1.4px] border-slate-700 text-slate-900" : "border-[1.4px] border-slate-700 text-slate-500 bg-slate-900"} rounded-md text-[13px] font-medium cursor-pointer`}><Link href={'/routes/auth/signup'}>Sign Up</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
