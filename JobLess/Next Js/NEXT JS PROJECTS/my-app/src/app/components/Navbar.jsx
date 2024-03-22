import Link from "next/link"
import { SiLinktree } from "react-icons/si";

import { Pacifico } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutWithGoogleButton from "../login/buttons/LogoutWithGoogleButton";



const pacifico = Pacifico({
    subsets: ["cyrillic-ext"],
    weight: "400"
});

export default async function Navbar() {
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <nav className="navbar h-16 w-full flex flex-nowrap items-center px-5 py-5 shadow-sm">
            <div className="section01 h-full grid items-center">
                <Link href="/" className="flex flex-nowrap items-center gap-1" >
                    <h1 className={`text-xl font-semibold text-slate-950`}>MyLink</h1>
                    <SiLinktree className="text-2xl text-[#1faf9f]" />
                </Link>
            </div>
            <div className="section02 h-full w-full">
                {
                    !session && (
                        <>
                            <ul className="flex flex-nowrap items-center justify-end h-full w-full gap-3">
                                <li className="h-full flex items-center">
                                    <Link href={'/login'} className="bg-[white] capitalize text-sm font-bold px-6 py-3 rounded-sm" >Log in</Link>
                                </li>
                                <li className="h-full flex items-center">
                                    <Link href={'/'} className="bg-[#1faf9f] capitalize text-white text-sm font-bold px-6 py-3 rounded-full" >Sign up</Link>
                                </li>
                            </ul>
                        </>
                    )
                }

                {
                    !!session && (
                        <>
                            <ul className="flex flex-nowrap items-center justify-end h-full w-full gap-3">
                                <li className="text-md font-semibold">
                                    <Link href={'/account'}>Hello , {session?.user?.name}</Link>
                                </li>
                                <li className="h-full flex items-center">
                                   <LogoutWithGoogleButton/>
                                </li>
                            </ul>
                        </>
                    )
                }

            </div>
        </nav>
    )
}