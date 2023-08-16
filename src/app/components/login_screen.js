"use client";

import { redirect } from "next/navigation";
import React, { useState } from "react";
import Toast from "./toast";

const Login = () => {
  const [email, setEmail] = useState("admin@sds.com");
  const [password, setPassword] = useState("admin");

  const [showAlert, setShowAlert] = useState(false);

  const login = async (e) => {
    const user_login = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const res = await user_login.json();
    console.log(res.message);

    if (res.message == "SUCCESS") {
      try {
        localStorage.setItem("userid", res.users[0].userid);
        localStorage.setItem("userDetails", JSON.stringify(res.users[0]));
      } catch (error) { }
      redirect("/dashboard");
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        redirect("/");
      }, 5000);
    }
    return res;
  };
  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full  max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Next Generation Project Monitering</div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal"> The Project Monitoring Web App is a powerful tool designed to streamline and enhance the process of overseeing and managing projects. It provides real-time visibility into project progress, performance, and key metrics, enabling project managers and stakeholders to make informed decisions and take timely actions. The web app offers a user-friendly interface and a range of features to facilitate efficient project monitoring.</div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Welcom Back!
              </h2>
              <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
            </div>
            <form className="mt-8 space-y-6" action={login} >
              {/* <input type="hidden" name="remember" value="true" /> */}
              <div className="relative">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                <input
                  className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-8 content-center">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autocomplete="current-password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="text-indigo-400 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                  Sign in
                </button>
                {showAlert && (
                  < Toast description ="Invalid Email or Password !" style="bg-red-500 hover:bg-red-600" setShowAlert={setShowAlert}/>)}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
