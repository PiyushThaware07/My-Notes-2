import React from 'react'
import Link from 'next/link';


export default function layout({ children }) {
    return (
        <div className='grid grid-cols-2'>
            <div className="">
                <h1>
                    Teacher Layout
                </h1>

                <ul className='bg-slate-100 border-slate-200 rounded-md p-10 list-disc max-w-[300px] w-full m-20'>
                    <li className='my-2'><Link href='student1'>Student1</Link></li>
                    <li className='my-2'><Link href='student2'>Student2</Link></li>
                    <li className='my-2'><Link href='student3'>Student3</Link></li>
                    <li className='my-2'><Link href='student4'>Student4</Link></li>
                    <li className='my-2'><Link href='student5'>Student5</Link></li>
                </ul>
            </div>
            <div className="">

                {children}
            </div>



        </div>
    )
}
