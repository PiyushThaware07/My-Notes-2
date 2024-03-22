import React from 'react';
// IMPORT COMPONENTS
import Navbar from '../components/Navbar';

export default function layout({ children }) {
    return (
        <div className="main">
            <Navbar />
            {children}
        </div>
    )
}
