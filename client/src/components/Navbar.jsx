import React from "react";
import { NavLink } from "react-router-dom";
import publicRequest from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const auth = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async () => {
    try {
      await publicRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (err) {
      toast.error("User cannot be logged out");
    }
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <NavLink to="/">
            {" "}
            <span className="ml-3 text-2xl font-sans bg-gradient-to-r from-red-500 via-orange-500 to-yellow-800 bg-clip-text text-transparent">
              Postify
            </span>
          </NavLink>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="flex gap-4">
            {auth ? (
              <div className="flex gap-2 items-center">
                <p>
                  Logged in as:{" "}
                  <span className="text-red-400 font-serif">{auth.name}</span>
                </p>
                <button
                  onClick={handleLogout}
                  className="bg-emerald-200 p-2 rounded-md hover:bg-lime-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <NavLink to="/login">
                  <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Login
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Signup
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
