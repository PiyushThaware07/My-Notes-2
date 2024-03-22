import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Icons
import { BsShop } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    const auth = localStorage.getItem('user');

    const navigate = useNavigate();
    function logout() {
        let removeUser = localStorage.removeItem("user");
        if (removeUser) {
            navigate('/signup');
        }
    }
    return (
        <nav className="bg-gray-50 py-5 px-8 md:flex flex-nowrap justify-between items-center">
            <div className="section-1 flex flex-nowrap items-center justify-between">
                <Link to='/' className="logo flex flex-nowrap items-center gap-1 font-bold text-xl"><BsShop />Shop</Link>
                <div className="menu font-bold text-xl hidden"><IoMenu /></div>
            </div>
            <div className="section-2">
                <ul className="md:flex flex-wrap items-center gap-5 font-semibold text-sm">
                    {
                        auth ?
                            <>
                                <li className="hover:text-blue-400 transition-all"><Link to='/'>Products</Link></li>
                                <li className="hover:text-blue-400 transition-all"><Link to='/add'>Add Product</Link></li>
                                <li className="hover:text-blue-400 transition-all"><Link to='/update'>Update Product</Link></li>
                                <li className="hover:text-blue-400 transition-all"><Link to='/profile'>Profile</Link></li>
                                <li className="hover:text-blue-400 transition-all"><Link onClick={logout} to="/signup">Logout - ({JSON.parse(auth).name})</Link></li>
                            </>
                            :
                            <>
                                <li className="hover:text-blue-400 transition-all"><Link to='/signin'>Signin</Link></li>
                                <li className="hover:text-blue-400 transition-all"><Link to='/signup'>Signup</Link></li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    )
}