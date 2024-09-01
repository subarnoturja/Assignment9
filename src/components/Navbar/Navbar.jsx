import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const navLinks = (
    <>
        <li>
            <Link to='/'>Home</Link>
        </li>
    </>
    )

    const { user, userLogout } = useContext(AuthContext);

    const handleSignOut = () =>{
      userLogout()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message)
      })
    }

  return (
    <div className="navbar mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">QuickRent</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        { 
          user? (
            <div className="flex gap-4">
            <div title={user?.displayName}>
                <img 
                   className='mt-1 w-10 rounded-full'
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
              <button className="btn btn-outline btn-accent"
            onClick={handleSignOut}>Logout</button>
            </div>
          ) : (
            <Link to='/login'><button className="btn btn-accent">Login</button></Link>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
