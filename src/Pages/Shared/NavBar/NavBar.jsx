import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from '../../../../public/logo.png'

const NavBar = () => {

    const navItems = <>
    <li className=' '>
        <Link to='/'>Home</Link>
    </li>
    <li>
        <Link to='#'>Instructors</Link>
    </li>
    <li>
        <Link to='#'>Classes</Link>
    </li>
    <li>
        <Link to=''>Dashboard</Link>
    </li>
    </>
    return (
        <div className='pt-4' >
            <div className="navbar items-center justify-center border rounded-full shadow-slate-200 shadow-md ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" gap-3  dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52 font-bold text-xl">
                           {navItems}
                        </ul>
                    </div>
                <div className='flex items-center justify-center'>
                <img src={logo} alt="" className='w-20 ' />
                <h1 className='text-3xl bg-transparent text-red-400 font-bold'>In Motion</h1>
                </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-4 px-1 font-bold text-xl">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        
                    }
                    <Link to='/login' className="btn font-bold rounded-full">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;