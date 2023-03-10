import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(authContext)
    const handleLogout = () => {
        logout()
    }
    const menuItems = <React.Fragment>
        <Link to='/'> Home</Link>
        <Link to='/about'> About</Link>
        <Link to='/appoinment'> Appoinment</Link>

        <Link to='/contactus'> Contact Us</Link>
        {
            user?.uid ? <>
                <Link to='/dashboard'> Dashboard</Link>
                <button onClick={handleLogout}>Sing out</button>
            </>
                :
                <>
                    <Link to='/login'> Login</Link>
                    <Link to="/singup">Sing up</Link>
                </>

        }
    </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Docotrs portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        {menuItems}
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Navbar;