import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaWallet, FaHome, FaBook, FaUsers, FaUtensils, FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
// import useCart from '../hooks/useCart';
// import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    // const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data 

    // const isAdmin = true;

    // const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button absolute top-1 right-2   lg:hidden"
          >
          <img className="w-5 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />
  
          </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    
                         <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            
                        </> <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myclasses"><FaShoppingCart></FaShoppingCart> My Selected Class
                                    <span className="badge inl badge-secondary">length</span>
                                </NavLink>

                            </li>
                        </>
                    

                    
                    <div className='divider'></div>

                    <li>
                        <NavLink to='/'><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/instructors'>Instructors</NavLink>
                    </li>
                    <li>
                        <NavLink to='/classes'>Classes</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;