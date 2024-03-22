import React from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    subsets: ["latin"],
    weight: "500"
});
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';

// CONNECT BACKEND WOTH FRONTEND
async function getUsers() {
    const request = await fetch("http://localhost:3000/backend/api/users");
    const response = await request.json();
    return response;
}

export default async function page() {
    const data = await getUsers();
    return (
        <div className={`${poppins.className} p-10`}>
            <div className="flex flex-nowrap items-center gap-2">
                <h1 className='text-xl'>Fetch Users List : </h1>
                <h1 className='px-4 py-1 tracking-[1px] text-sm rounded-md bg-green-500 text-white'>GET</h1>
            </div>

            <table className='my-5 border-[1.5px] border-slate-900'>
                <thead>
                    <tr className='bg-slate-700 text-white'>
                        <td className='px-10 py-2 border-2 border-slate-900'>Id</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>Name</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>Email</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>Age</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>Preview</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length !== 0
                        &&
                        (
                            data.map((item, index) => (
                                <tr key={index} className=''>
                                    <td className='px-10 py-2 border-2 border-slate-900'>{item.id}</td>
                                    <td className='px-10 py-2 border-2 border-slate-900'>{item.name}</td>
                                    <td className='px-10 py-2 border-2 border-slate-900'>{item.email}</td>
                                    <td className='px-10 py-2 border-2 border-slate-900'>{item.age}</td>
                                    <td className='px-10 py-2 border-2 border-slate-900 cursor-pointer'><Link href={`/frontend/users/${item.id}`} className='inline-flex text-sm gap-1 items-center' >Checkout <FiExternalLink /></Link></td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
