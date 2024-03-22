import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { TbLogout } from 'react-icons/tb';
// tools
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function SigninWithGoogle() {
    const navigate = useNavigate();
    const handleLogin = async () => {
        await signInWithPopup(auth, provider);
        navigate("/loginsuccess");
    }

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    }

    return (
        <>
            <h1><b>Signin with google</b></h1>
            <button style={{ padding: "10px 15px" }} onClick={() => handleLogin()} ><FcGoogle size={12} />  Signin with google</button>
            <button style={{ padding: "10px 15px" }} onClick={() => handleLogout()} ><TbLogout size={12} />  Logout</button>
            <br /><br /><br />
        </>
    )
}
