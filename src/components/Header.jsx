import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allbooks"}>All Books</NavLink>
      </li>
      <li>
        <NavLink to="/addbook">Add Book</NavLink>
      </li>
      <li>
        <NavLink to={"/borrowedbooks"}>Borrowed Books</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-300">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book World</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
          {/* <li>
            <a>Item 1</a>
          </li>

          <li>
            <a>Item 3</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end ">
        {user && user?.email ? (
          <>
            <div className="flex items-center relative ">
              {/* <div className="opacity-100 z-99">
                <img
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div> */}
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />

              <div className="opacity-0 hover:opacity-100 absolute right-[50%]">
                <div className="flex  items-center">
                  <p>{user?.displayName}</p>
                  <button
                    className="btn btn-neutral rounded-xl"
                    onClick={signOutUser}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex gap-1">
            <Link className="btn btn-sm btn-neutral" to="/login">
              Log In
            </Link>

            <Link className="btn btn-sm btn-neutral" to="/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
