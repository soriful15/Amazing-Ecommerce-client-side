import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Lottie from 'lottie-react'
import dashboard from '../../assets/82340-dashboard-bi.json'
// import { FaUserTie, FaUsers, FaWallet, FaHome, FaClipboardList, FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import {  FaUsers, FaHome,FaClipboardList, FaListAlt } from 'react-icons/fa';
import { HiUserAdd } from "react-icons/hi";


import { Helmet } from 'react-helmet-async';
const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Amazing Ecommerce | DashBoard Page</title>
            </Helmet>

            <div className="drawer drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-yellow-100">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content">
                        {/* Sidebar content here */}

                        <div className='w-full'>
                            <Lottie animationData={dashboard} loop={true} />
                        </div>
                        <h1 className='text-amber-800 text-2xl text-center font-medium'>DashBoard</h1>
                       

                        <div className='text-xl'>
                            <li><NavLink to='/dashboard/addProduct' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><HiUserAdd></HiUserAdd> Add Product  </NavLink ></li>

                            <li><NavLink to='/dashboard/productList' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><FaClipboardList></FaClipboardList>Product List</NavLink ></li>

                            <li><NavLink to='/dashboard/customersList' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><FaUsers></FaUsers>Customers List</NavLink ></li>
                            <li><NavLink to='/dashboard/orderList' className={({ isActive }) => isActive ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" : ''}><FaListAlt></FaListAlt>Order List</NavLink ></li>
                        </div>


                      
                        <div className="divider"></div>
                        <div className='text-xl'>
                            <li className=''><NavLink to='/' ><FaHome></FaHome>Home</NavLink ></li>
                        </div>

                    </ul>

                </div>
            </div>



        </>
    );
};

export default Dashboard;