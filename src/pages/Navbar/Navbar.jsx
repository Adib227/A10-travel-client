import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Tippy from '@tippyjs/react';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // const [displayName, photoURL] = user;

  const handleLogOut = () => {
    logOut();
    alert('logged out successfully')
      .then(() => console.log('Logged out successfully'))
      .catch(error => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <Tippy
          content="Home"
          className="bg-stone-700 p-2 rounded-md text-white"
        >
          <NavLink className to="/">
            Home
          </NavLink>
        </Tippy>
      </li>
      <li>
        <NavLink className to="/allTouristSpot">
          All Tourist Spot
        </NavLink>
      </li>
      {
        <li>
          <NavLink className to="/addTouristSpot">
            Add Tourist Spot
          </NavLink>
        </li>
      }
      <li>
        <NavLink className to="/myList">
          My List
        </NavLink>
      </li>
      {user && (
        <>
          {' '}
          <li>
            {/* <NavLink className to="/updatePage">
              Update Page
            </NavLink> */}
          </li>{' '}
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div
        className="navbar-start mt-8"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
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

        <Tippy
          content="IQONIC TRAVEL"
          className="text-white text-lg bg-zinc-700 p-3 rounded-md"
        >
          <Link to="/">
            <a className="btn btn-ghost text-2xl lg:text-3xl -mt-2">
              {' '}
              <img
                className=" -mt-2 "
                src="https://i.ibb.co/WymXq0G/logooo.png"
                alt=""
              />{' '}
              IQONIC TRAVEL
            </a>
          </Link>
        </Tippy>
      </div>
      <div
        className="navbar-center hidden lg:flex"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end" data-aos="fade-left" data-aos-duration="2000">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
        {user ? (
          <>
            <Tippy
              content={user.email}
              className="bg-pink-500 text-black font-semibold p-4 rounded-lg"
            >
              <img className="w-10 rounded-full" alt="" src={user.photoURL} />
            </Tippy>
            <Tippy
              content="Please Sign Out"
              className="bg-pink-500 text-black font-semibold rounded-lg p-3"
            >
              <button onClick={handleLogOut} className="btn btn-active">
                Sign Out
              </button>
            </Tippy>
          </>
        ) : (
          <Link to="/login">
            <Tippy
              content="Please Login"
              className="bg-pink-500 text-black font-bold rounded-lg p-3"
            >
              <button className="btn btn-active">Login</button>
            </Tippy>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
