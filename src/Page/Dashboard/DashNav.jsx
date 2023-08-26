import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import logo from '../../assets/logo/logo.png'

const DashNav = () => {
    const { user, logOut } = useContext(AuthContext);

    // Logout
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-primary text-white">
            <div className="navbar-start">
                <div className="dropdown text-black">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        

                        <li><Link to={'/productListView'}>product List View</Link></li>
                        {
                            user? <Link to={'/'} onClick={handleLogOut} className="btn btn-primary btn-outline lg:btn-white md:btn-white px-10 lg:text-white  md:text-white">Log out</Link>
                                :
                                <Link to={'/login'} className="btn btn-outline  lg:btn-white md:btn-white px-10 lg:text-white md:text-white">Login</Link>
                        }
                    </ul>
                </div>
                <div className='flex items-center'>
                    <Link to={'/'}><img src={logo} className="w-8 mr-3 mt-1" alt="" /></Link>
                    <Link to={'/'} className=" text-white normal-case font-bold text-2xl">  Home</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/'}>Home</Link></li>
                    {
                        user && <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    }
                    <li><Link to={'/productListView'}>product List View</Link></li>
                </ul>

            </div>
            <div className="navbar-end">

                {
                    user? <Link to={'/'} onClick={handleLogOut} className="btn btn-outline lg:btn-white md:btn-white px-10 pt-4 lg:text-white md:text-white lg:block md:block hidden ">Log out</Link>
                        :
                        <Link to={'/login'} className="btn btn-outline lg:btn-white md:btn-white px-10 pt-4 lg:text-white md:text-white lg:block md:block hidden">Login</Link>
                }
                <label htmlFor="my-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>


            </div>
        </div>
    );
};

export default DashNav;