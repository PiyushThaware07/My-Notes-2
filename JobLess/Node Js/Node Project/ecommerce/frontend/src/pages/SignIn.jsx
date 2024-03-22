import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate('/');
    }
    else {
      navigate('/signin');
    }
  }, [])

  async function LoginForm(event) {
    event.preventDefault();
    console.log(email, password);
    const searchUserDB = await fetch('http://localhost:1000/signin', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    let consoleResult = await searchUserDB.json()
    console.warn(consoleResult);
    if (consoleResult) {
      localStorage.setItem('user', JSON.stringify(consoleResult));
      navigate('/');
    }
    else {
      alert('please enter correct details');
    }
  }

  return (
    <div className='w-full h-[430px] flex flex-nowrap items-center justify-center' >
      <div className="w-[40%]">
        <h1 className='text-md font-bold'>Login Account</h1>
        <form action="" className='flex flex-nowrap flex-col' onSubmit={LoginForm}>
          <input
            name='email'
            type="email"
            placeholder='Email'
            className='border-b-[1.4px] focus:outline-none p-2 my-3'
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
          <input
            name='password'
            type="password"
            placeholder='Password'
            className='border-b-[1.4px] focus:outline-none p-2 my-3'
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
          <button type='submit' className='my-3 border-2 border-gray-300 text-gray-300 hover:text-white hover:bg-gray-300 transition-all shadow-sm p-3 font-bold text-sm w-[100px]'>Submit</button>
        </form>
      </div>
    </div>
  )
}
