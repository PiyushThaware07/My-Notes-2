import React, { useEffect, useState } from 'react';
// & RRD ==================================================================
import { Link,useNavigate } from "react-router-dom";
// ! COLOR Palette ========================================================
import { bgColorPalette, textColorPalette } from '../tools/colorPalette';
// ~ ICONS ================================================================
import { FcGoogle } from "react-icons/fc";
import { LiaUserSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
// ^ UTILS IMPORT =========================================================
import Navbar from '../components/Navbar';



export default function Signup() {
    const navigate = useNavigate();

    const [errorData, setErrorData] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });


    function handleChangeInput(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSignupForm(event) {
        event.preventDefault();
        console.log(formData);
    }

    useEffect(() => {
        function handleComparePassword() {
            if (formData.password1 === formData.password2) {
                setErrorData("");
            }
            else {
                setErrorData("Passwords are not matching please re-enter the passwords");
            }
        }
        handleComparePassword();
    }, [formData.password2])



    return (
        <>
            <div className="signup w-full">
                <Navbar />
                <div className="flex flex-nowrap items-center justify-center h-full w-full py-10 bg-white">
                    <div className="w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto bg-white sm:bg-slate-50 rounded-md flex flex-nowrap flex-col gap-3 p-6 sm:p-10">

                        <div className="headings">
                            <h1 className='text-2xl font-semibold my-3'>Hey!👋</h1>
                            <h1 className='text-2xl font-semibold my-3'>Welcome to <span className={`${textColorPalette.primaryColor}`}>Chatnow</span></h1>
                            <p className='text-sm font-medium text-slate-500'>Simplify your signup process with one-click Google access.</p>
                        </div>
                        {/* Google Login ================================================== */}
                        <div className="google-login">
                            <button type='button' className='flex flex-nowrap items-center justify-center gap-2 bg-slate-200  w-full rounded-md py-2' >
                                <FcGoogle className='text-lg' />
                                <h1 className='text-sm font-semibold text-slate-500'>Continue With Google</h1>
                            </button>
                        </div>

                        {/* or ============================================================= */}
                        <div className="flex flex-nowrap items-center gap-2">
                            <div className="line h-[1.4px] w-full bg-slate-300"></div>
                            <h1 className='text-nowrap text-slate-500 text-[13px]'>or Continue with</h1>
                            <div className="line h-[1.4px] w-full bg-slate-300"></div>
                        </div>

                        {/* Simple Login ================================================== */}
                        <form action="" onSubmit={handleSignupForm} >
                            <div className="simple-login flex flex-nowrap flex-col gap-3">
                                {/* ERROR HANDLING */}
                                {errorData !== "" &&
                                    <div className={`border-2 border-red-500 py-3 px-4 text-sm font-semibold capitalize rounded-md text-red-500 flex flex-nowrap items-center justify-between`}>
                                        <h1>{errorData}</h1>
                                        <button type='button' className='text-xl' ><IoClose /></button>
                                    </div>
                                }
                                <div className="username flex flex-nowrap items-center bg-white border-[1.4px] border-slate-300 rounded-md px-2 py-1">
                                    <LiaUserSolid className='text-slate-400' />
                                    <input type="text" name='username' value={formData.username} onChange={handleChangeInput} placeholder='Username' className='w-full py-1 px-2 focus:outline-none text-sm text-slate-500 font-medium' required />
                                </div>
                                <div className="username flex flex-nowrap items-center bg-white border-[1.4px] border-slate-300 rounded-md px-2 py-1">
                                    <HiOutlineMail className='text-slate-400' />
                                    <input type="email" name='email' value={formData.email} onChange={handleChangeInput} placeholder='Email' className='w-full py-1 px-2 focus:outline-none text-sm text-slate-500 font-medium' required />
                                </div>
                                <div className="username flex flex-nowrap items-center bg-white border-[1.4px] border-slate-300 rounded-md px-2 py-1">
                                    <RiLockPasswordLine className='text-slate-400' />
                                    <input type="password" name='password1' value={formData.password1} onChange={handleChangeInput} placeholder='Password' className='w-full py-1 px-2 focus:outline-none text-sm text-slate-500 font-medium' required />
                                </div>
                                <div className="username flex flex-nowrap items-center bg-white border-[1.4px] border-slate-300 rounded-md px-2 py-1">
                                    <RiLockPasswordLine className='text-slate-400' />
                                    <input type="password" name='password2' value={formData.password2} onChange={handleChangeInput} placeholder='Confirm Password' className='w-full py-1 px-2 focus:outline-none text-sm text-slate-500 font-medium' required />
                                </div>
                                <button type='submit' className={`${bgColorPalette.primaryColor} py-3 text-sm font-semibold capitalize rounded-md text-white`}>Continue</button>
                            </div>
                        </form>

                        {/* Already have an account ================================================== */}
                        <div className="flex flex-nowrap items-center justify-center text-[12px] sm:text-sm gap-2">
                            <h1 className='text-slate-500 font-medium text-nowrap'>Already have an Account ?</h1>
                            <Link to="/auth/signin" className={`font-semibold ${textColorPalette.primaryColor} text-nowrap`} >Signin</Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
