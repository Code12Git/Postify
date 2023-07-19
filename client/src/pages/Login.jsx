import React, { useState } from "react";
import publicRequest from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    const { email, password } = credentials;
    try {
      const res = await publicRequest.post("/auth/login", credentials);
      if (!email && !password) {
        toast.error("Please enter your email and password");
      }
      await res.data;
      toast.success("Login successful");
      navigate("/");
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section class="text-gray-600 body-font">
      <ToastContainer />
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl bg-gradient-to-r from-lime-500 via-amber-500 to-red-700 bg-clip-text text-transparent ">
            Postify
          </h1>
          <p class="leading-relaxed mt-4 bg-gradient-to-r from-amber-600 via-orange-600 to-lime-600 bg-clip-text text-transparent ">
            Postify is a web application that allows users to create, read,
            update, and delete posts
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Sign In
          </h2>
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={inputChangeHandler}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={submitHandler}
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>
          <p>
            Don't have a account?
            <NavLink to="/register">
              {" "}
              <span className="text-red-600">Signup</span>
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
