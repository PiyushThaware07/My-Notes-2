import Link from 'next/link'
import React from 'react'

export default function College() {
    return (
        <div className='p-5'>
            <div className="card p-5 border-[1.3px] border-slate-300 max-w-[400px] rounded-md my-5">
            <h1 className='text-md font-semibold'>College Route</h1>

            <ul className='mt-5 ps-5 list-disc text-md font-medium text-blue-700'>
                <li><Link href="/routes/college/students" className="text-slate-900" >Students</Link></li>
                <li><Link href="/routes/college/teachers" className="text-slate-900" >Teachers</Link></li>
            </ul>

            </div>
        </div>
    )
}
