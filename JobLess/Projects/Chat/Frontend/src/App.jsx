import React from 'react';
// ! CSS IMPORT =======================================
import "./App.css";
// & RRD SETUP ========================================
import { Routes, Route } from "react-router-dom";
// ^ UTILS IMPORT =====================================
import Signup from './utils/pages/Signup';
import Signin from './utils/pages/Signin';
import Layout from './utils/pages/Layout';
import Starter from './utils/pages/Starter';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/signin' element={<Signin />} />
        <Route path='/*' element={<Layout />} >
          <Route index element={<Starter />} />
        </Route>
      </Routes>
    </>
  )
}
