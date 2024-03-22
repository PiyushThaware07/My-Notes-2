import React from 'react';
// Icons
import {BiLogoRedux} from "react-icons/bi";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid px-5">
                    <a className="navbar-brand text-info d-flex flex-nowrap align-items-center gap-1" href="/"><BiLogoRedux/> Redux TooKit</a>
                </div>
            </nav>
        </>
    )
}
