import React from 'react';
import { Routes, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// IMPORT PAGES
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn';
import PrivateComponent from './pages/PrivateComponent'; // use this where you want to hide before signup from use
import AddProduct from './pages/AddProduct';
import ProductsList from "./pages/ProductsList";
import UpdateProduct from "./pages/UpdateProduct";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route element={<PrivateComponent />}>
          <Route path='/' element={<ProductsList />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update/:id' element={<UpdateProduct/>} />
          <Route path='/logout' element={<h1>Logout</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>
      <Footer />
    </div>
  )
}
