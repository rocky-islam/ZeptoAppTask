import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {

  const {wishlist} = useContext(AuthContext)

  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? "text-blue-400 bg-blue-100 py-1 px-2 rounded-md text-base font-medium"
            : "mx-2 py-1 px-2 hover:text-blue-400 hover:bg-blue-100 hover:rounded-md text-base font-medium";
        }}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/wishlist"
        className={({ isActive }) => {
          return isActive
            ? "text-blue-400 bg-blue-100 py-1 px-2 rounded-md text-base font-medium"
            : "mx-2 py-1 px-2 hover:text-blue-400 hover:bg-blue-100 hover:rounded-md text-base font-medium";
        }}
      >
        <li>Wishlist</li>
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => {
          return isActive
            ? "text-blue-400 bg-blue-100 py-1 px-2 rounded-md text-base font-medium"
            : "mx-2 py-1 px-2 hover:text-blue-400 hover:bg-blue-100 hover:rounded-md text-base font-medium";
        }}
      >
        <li>Blog</li>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => {
          return isActive
            ? "text-blue-400 bg-blue-100 py-1 px-2 rounded-md text-base font-medium"
            : "mx-2 py-1 px-2 hover:text-blue-400 hover:bg-blue-100 hover:rounded-md text-base font-medium";
        }}
      >
        <li>Contact</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
              {navLink}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost md:text-xl">
            Zepto Apps
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Wishlist Item {wishlist.length}</a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
