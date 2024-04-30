import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink className to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className to="/allTouristSpot">
          All Tourist Spot
        </NavLink>
      </li>
      {/* {user && (
        <>
          {' '}
          <li>
            <NavLink className to="/addTouristSpot">
              Add Tourist Spot
            </NavLink>
          </li>{' '}
        </>
      )}
      <li>
        <NavLink className to="/myList">
          My List
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start mt-8">
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
            className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl lg:text-3xl -mt-2">
          {' '}
          <img
            className=" -mt-2 "
            src="https://i.ibb.co/3pLN798/logooo.png"
            alt=""
          />{' '}
          IQONIC TRAVEL
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
