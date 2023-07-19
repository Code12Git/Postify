import React, { useState } from "react";
import publicRequest from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    const { email, password, username } = credentials;
    try {
      const res = await publicRequest.post("/auth/register", credentials);
      if (!email && !password && !username) {
        toast.error("Please enter your email,password and username");
      }
      res.data && navigate("/login");
      toast.success("User registration successful");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <ToastContainer />
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl bg-gradient-to-r from-lime-500 via-amber-500 to-red-700 bg-clip-text text-transparent ">
            Postify
          </h1>
          <p className="leading-relaxed mt-4 bg-gradient-to-r from-amber-600 via-orange-600 to-lime-600 bg-clip-text text-transparent ">
            Postify is a web application that allows users to create, read,
            update, and delete posts
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign up
          </h2>
          <div class="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={inputChangeHandler}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={inputChangeHandler}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-600">
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              onChange={inputChangeHandler}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={inputChangeHandler}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={submitHandler}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Sign Up
          </button>
          <p>
            Already have a account?{" "}
            <NavLink to="/login">
              <span className="text-red-400 ">Log in</span>
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
