"use client"
import Link from "next/link"
// & COMPONENTS
import Navbar from "@/app/components/Navbar"
import { usePathname } from "next/navigation"

export default function layout({ children }) {
    const pathname = usePathname();

    return (
        <div>
            <Navbar />
            {children}
            <div className="all routes p-5">
                <div className={`card border-[1.3px] border-slate-300 w-[300px] rounded-md p-6  ${pathname.includes("/teachers") || pathname.includes("/company") && "hidden"} `}>
                    <h1 className="uppercase font-semibold">All Routes</h1>
                    <ul className={`list-disc ps-5 text-[13px] `}>
                        <li><Link href={'/routes/auth/signin'} className="text-blue-500">Signin</Link></li>
                        <li><Link href={'/routes/auth/signup'} className="text-blue-500">Signup</Link></li>
                        <li><Link href={'/routes/college/teachers'} className="text-blue-500">Teachers</Link></li>
                        <li><Link href={'/routes/college/students'} className="text-blue-500">Students</Link></li>
                        <li><Link href={'/routes/company'} className="text-blue-500">Company</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
