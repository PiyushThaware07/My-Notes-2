import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateComponent() {
    // Use below code to check where user is loggedin or not
    const auth = localStorage.getItem('user');
    return (
        auth ?
            <Outlet />
            :
            <Navigate to='/signup' />
    )
}
