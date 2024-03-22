"use client"

import Link from "next/link"

import studentsList from "./studentsList.json";

export default function layout({ children }) {
    return (
        <div className="p-5 flex flex-nowrap items-start gap-5">
            <div className="students-list">
                <h1 className="my-5 font-bold text-2xl underline">Dynamic <span className="text-blue-700">Routing</span></h1>
                <h1 className="my-5 font-semibold">Students Lists</h1>
                <div className="card p-5 border-[1.4px] border-slate-300 rounded-lg w-[300px]">
                    <ul className="list-disc ps-5 capitalize">
                        {
                            studentsList.length !== 0 &&
                            <>
                                {
                                    studentsList.map((item, index) => (
                                        <li key={index} className="hover:text-blue-700"><Link href={`/routes/college/teachers/${item.id}`}>{item.fname} {item.lname}</Link></li>
                                    ))
                                }
                            </>
                        }
                    </ul>
                </div>
            </div>
            <div className="w-full students-show">
                {children}
            </div>
        </div>
    )
}
