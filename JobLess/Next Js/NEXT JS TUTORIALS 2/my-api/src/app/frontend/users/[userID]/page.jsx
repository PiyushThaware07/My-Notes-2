import React from 'react';
import {FiExternalLink} from "react-icons/fi";

// Import Components
import DeleteUser from './DeleteUser';


import Link from 'next/link';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    subsets: ["latin"],
    weight: "500"
});


// CONNECT BACKEND WOTH FRONTEND
async function getUsers(id) {
    const request = await fetch(`http://localhost:3000/backend/api/users/${id}`);
    const response = await request.json();
    return response;
}


export default async function page({ params }) {
    const ID = params.userID;
    const data = await getUsers(ID);
    return (
        <div className={`${poppins.className} p-10`}>
            <div className="flex flex-nowrap items-center gap-2">
                <h1 className='text-xl'>Fetch User Based On ID : </h1>
                <h1 className='px-4 py-1 tracking-[1px] text-sm rounded-md bg-green-500 text-white'>GET</h1>
            </div>

            <table className='my-5 border-[1.5px] border-slate-900'>
                <thead>
                    <tr className='bg-slate-700 text-white'>
                        <td className='px-10 py-2 border-2 border-slate-900'>Id</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>Name</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>Email</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>Age</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>Edit</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className=''>
                        <td className='px-10 py-2 border-2 border-slate-900'>{data.message.id}</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>{data.message.name}</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>{data.message.email}</td>
                        <td className='px-10 py-2 border-2 border-slate-900'>{data.message.age}</td>
                        <td className='px-10 py-2 border-2 border-slate-900 cursor-pointer'><Link href={`/frontend/users/${ID}/update`} className='inline-flex text-sm gap-1 items-center' >Update <FiExternalLink /></Link></td>
                        <td className='px-10 py-2 border-2 border-slate-900 cursor-pointer'><DeleteUser id={data.message.id} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
