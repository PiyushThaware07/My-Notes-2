"use client";
import { RiDeleteBin2Line } from "react-icons/ri";


import React from 'react'
export default function DeleteUser(props) {
    async function deleteUser() {
        const request = await fetch(`http://localhost:3000/backend/api/users/${props.id}`, {
            method: "DELETE",
        })
        const response = await request.json();
        alert("Record Deleted Successfully !!!");
    }

    return (
        <button type='button' className='inline-flex text-sm gap-1 items-center' onClick={deleteUser} >Delete <RiDeleteBin2Line /></button>
    )
}
