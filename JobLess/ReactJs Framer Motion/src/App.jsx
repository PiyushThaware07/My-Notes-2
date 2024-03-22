import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

export default function App() {
  return (
    <div className='min-h-screen bg-black overflow-x-hidden'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
      </Routes>

    </div>
  )
}
