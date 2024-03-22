import React, { useState } from 'react';
// * REACT HOOK FORM =================================================================
import { useForm } from "react-hook-form";

// * ICONS ===========================================================================
import { GoDotFill } from "react-icons/go";
import { MdError } from "react-icons/md";
import { BiLoaderAlt } from "react-icons/bi";

export default function Contact(props) {
  const [preLoader, setPreLoader] = useState(false);

  // ? REACT FORM HOOK ----------------------------------------------------------------
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  // ? HANDLE SUBMIT ------------------------------------------------------------------
  async function handleContactForm(data) {
    console.log("Request : ");
    console.table(data);
    try {
      // * set preloader -------------------------------------------------------------
      setPreLoader(true);
      const request = await fetch(`${props.backendURL}/api/contact`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = await request.json();
      console.warn("Response : ", response.success);
      // ^ Response -----------------------------------------------------------------
      if (response.success) {
        setPreLoader(false);
        props.toggleContactForm();
        props.setShowMessageBox(true);
      }
      else {
        setError("Sorry ,failed to submit data");
        props.setShowMessageBox(false);
      }
    }
    catch (error) {
      console.error("Failed to submit data there is some internal server error");
    }
  }

  return (
    <>
      <div className='main-contact fixed top-0 bottom-0 left-0 right-0 bg-[#151515e1] z-[9999] ' style={{ fontFamily: "'Poppins', sans-serif" }}></div>
      <div className="content fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] ">
        <div className="h-auto w-[330px] sm:w-[500px] md:px-5">
          <div className="h-full border-[4px] border-slate-950 bg-white  rounded-lg shadow-md">
            <div className="flex flex-nowrap items-center gap-2 bg-slate-950 border-y-[4px] border-slate-950 text-white p-4">
              <GoDotFill className='text-cyan-400 text-lg' />
              <h1 className='text-lg font-semibold capitalize'>Get In <span className=''>Touch</span></h1>
            </div>
            <form action="" className='p-5' onSubmit={handleSubmit(handleContactForm)}>

              {errors.fullname?.message || errors.email?.message ? (
                <div className="p-2 mb-4 bg-red-100 border-[1.4px] border-red-400 rounded-md flex flex-nowrap items-center gap-2">
                  <MdError className='text-red-500' />
                  <h1 className='text-md font-semibold text-red-500'>{errors.fullname?.message || errors.email?.message}</h1>
                </div>
              ) : null}


              <input type="text" placeholder='Full Name' className='border-b-2 border-black bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-semibold text-sm'
                {...register("fullname",
                  {
                    required: "Full Name is Required"
                  }
                )} />


              <input type="text" placeholder='@Email' className='border-b-2 border-black bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-semibold text-sm'
                {...register("email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Please Provide a valid email address"
                    }
                  }
                )} />


              <textarea placeholder='Leave a message here...' className='h-[130px] border-b-2 border-black bg-transparent focus:outline-none ps-2 pb-3 mb-5 w-full font-semibold text-sm'
                {...register("message")}>
              </textarea>


              <div className="flex flex-nowrap items-center gap-3">
                {
                  preLoader ?
                    <button type='submit' className='py-2 px-5 bg-cyan-500 text-white font-semibold text-sm rounded-md flex flex-nowrap items-center gap-2' >Sending <BiLoaderAlt className='animate-spin' /></button>
                    :
                    <button type='submit' className='py-2 px-5 bg-cyan-500 text-white font-semibold text-sm rounded-md' >Send</button>
                }
                <button type='button' className='py-2 px-5 bg-slate-950 text-white font-semibold text-sm rounded-md' onClick={props.toggleContactForm} >Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}















/*
<div className='main-contact fixed top-0 bottom-0 left-0 right-0 bg-[#151515e1] z-[9999] ' style={{ fontFamily: "'Poppins', sans-serif" }}></div>
            <div className="content fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] ">
                <div className="h-auto w-[330px] sm:w-[500px] md:px-5">
                    <div className="h-full border-2 border-[#47fffc] bg-[#212121] rounded-lg shadow-md p-8">
                        <div className="flex flex-nowrap items-center justify-between">
                            <h1 className='text-lg text-white font-mono capitalize'>Get In <span className='text-[#47fffc]'>Touch</span> With Me</h1>
                            <button type='button' className='h-[30px] w-[30px] flex flex-nowrap items-center justify-center text-[#47fffc] text-2xl border-0 outline-none'><IoClose className='border-0 outline-none' /></button>
                        </div>
                        <form className="mt-10 text-white">
                            <input type="text" name="user_name"  placeholder='FULL NAME' className='border-b-[1.5px] border-gray-200/20 bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-mono text-sm' required />
                            <br />
                            <input type="email" name="user_email"  placeholder='@EMAIL' className='border-b-[1.5px] border-gray-200/20 bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-mono text-sm' required />
                            <br />
                            <textarea name="user_message" className='border-b-[1.5px] border-gray-200/20 bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full h-[80px] font-mono text-sm' placeholder='MESSAGE'></textarea>
                            <button type='submit' className='px-3 py-2 bg-[#47fffccf] rounded-sm text-sm font-mono flex flex-nowrap items-center gap-2 '>Sending</button>
                            
                        </form>
                    </div>
                </div>
            </div>
*/