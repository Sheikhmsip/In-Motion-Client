import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaWallet, FaHome, FaSchool, FaUsers, FaUtensils, FaCalendarAlt, FaShoppingCart, FaChalkboardTeacher, } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {
    // const [cart] = useCart();

   const [isAdmin] = useAdmin();

   
    return (
        <div className="drawer lg:drawer-open bg-red-400">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                <Outlet></Outlet>
                <label
            htmlFor="my-drawer-2"
            className="btn bg-red-400  drawer-button absolute top-1 right-2   lg:hidden"
          >
          <img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />
  
          </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 text-lg w-80 h-full bg-base-200  text-base-content">
                    {/* Sidebar content here */}
                    { isAdmin ?
                         <>

                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manage-classes"><FaSchool></FaSchool> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manage-users"><FaUsers></FaUsers> Manage User</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/add-class"><FaHome></FaHome> Student Home</NavLink></li>
                            <li><NavLink to="/dashboard/my-enroll-classes"><FaCalendarAlt></FaCalendarAlt> My Enroll Classes</NavLink></li>
                            <li><NavLink to="/dashboard/payment-history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myclasses"><FaShoppingCart></FaShoppingCart> My Selected Classes
                                    {/* <span className="badge inl badge-secondary">length</span> */}
                                </NavLink>

                            </li>
                        </>
                        }
                    

                    
                    <div className='divider'></div>

                    <li>
                        <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/instructors'> <FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink>
                    </li>
                    <li>
                        <NavLink to='/classes'> <FaSchool></FaSchool> Classes</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;