import React, { useState, useEffect } from 'react';
// HOST
const backendURL = import.meta.env.VITE_REACT_APP_HOST_ENV == "production" ? import.meta.env.VITE_REACT_APP_BACKEND_ONLINE : import.meta.env.VITE_REACT_APP_BACKEND_OFFLINE

// CSS
import "./App.css";
// Components
import Navbar from './components/Navbar';
import Header from "./components/Header";
import TechStack from './components/TechStack';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import MessageBox from './components/MessageBox';
import SocialMedia from "./components/SocialMedia";
import PreLoader from "./components/PreLoader";


export default function App() {
  // Handle Website Loader ====================================================
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 2000);
  }, [])



  // Handle Contact Form ====================================================
  const [showContactModel, setshowContactModel] = useState(false);
  function toggleContactForm() {
    setshowContactModel(!showContactModel);
  }
  useEffect(() => {
    document.body.style.overflowY = showContactModel ? "hidden" : "scroll";
  }, [showContactModel])

  // Handle Message Box =====================================================
  const [showMessageBox, setShowMessageBox] = useState(false);


  return (
    <>
      {
        preLoader
          ?
          <PreLoader />
          :
          <div className='main min-h-screen max-w-7xl w-full mx-auto' style={{ fontFamily: "'Poppins', sans-serif" }} >
            <Navbar toggleContactForm={toggleContactForm} />
            <Header />
            <TechStack />
            <Projects backendURL={backendURL} />
            <Experience backendURL={backendURL} />
            <Resume />
            <Services />
            {showContactModel && <Contact backendURL={backendURL} toggleContactForm={toggleContactForm} setShowMessageBox={setShowMessageBox} />}
            {showMessageBox && <MessageBox setShowMessageBox={setShowMessageBox} />}
            {<SocialMedia />}
            <Footer />
          </div >
      }
    </>

  )
}
