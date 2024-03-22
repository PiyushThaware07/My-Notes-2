import React, { useState } from 'react';
// ^ UTILS IMPORT =========================================================
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// & RRD ==================================================================
import { Outlet } from "react-router-dom";
import Sidebar2 from '../components/Sidebar2';



export default function Layout() {
    // ! Sidebar(2) Management
    const [toggleAccountSidebar, setToggleAccountSidebar] = useState(false);

    return (
        <>
            <div className="main relative">
                <section className='main-navbar' ><Navbar setToggleAccountSidebar={setToggleAccountSidebar} /></section>
                <div className="flex flex-nowrap flex-col sm:flex-row absolute top-0 left-0 h-screen w-screen overflow-hidden sm:pt-16">
                    <aside className="main-sidebar w-full sm:w-96 md:w-96 h-full"><Sidebar /></aside>
                    <main className='main-container hidden sm:inline w-full h-full overflow-auto bg-yellow-50' ><Outlet /></main>
                </div>
                <aside className={` ${toggleAccountSidebar || "hidden"} absolute top-0 right-0 z-50 w-full min-h-screen bg-black/50 flex flex-nowrap justify-end`} >
                    <div className="content bg-white w-72 min-h-screen">
                        <Sidebar2 setToggleAccountSidebar={setToggleAccountSidebar} />
                    </div>
                </aside>
            </div>
        </>
    )
}
