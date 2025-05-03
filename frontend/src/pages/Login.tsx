import React, { useState } from "react";
import axios from "axios";

//import { login } from "../api/Auth";

import { Link, useNavigate } from "react-router-dom";
import { loginImage } from "../assets/photos";
import { apple, facebook, google } from "../assets/icons";
const API_BASE_URL = "http://localhost:8000";

async function sigin(payload:
  {
    email:string,
    password:string,
  }
){
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/login`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.detail || "Login failed");
  }

}


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  // const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await sigin({ email, password });
      console.log("Login successful:", data);
      Navigate("/");
      // Will then redirect if truthy
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="single-page flex flex-col lg:flex-row w-full h-screen">
      {/* Side Image Section */}

      <aside className="w-full h-[25%] bg-[var(--tertiary-color)] lg:w-[40%] lg:h-full relative">
        <img src={loginImage} className="h-full w-full object-cover" alt="" />
        {/* Black overlay with 30% opacity */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </aside>

      {/* Form Section */}

      <section className=" w-full  h-[75%]  flex items-center justify-center lg:w-[60%] lg:h-full">
        <form
          className=" w-[85%] h-[55%] flex flex-col justify-between md:w-[70%] lg:w-[50%] lg:h-[40%]"
          onSubmit={handleLogin}
        >
          <p className=" text-center text-lg">Login</p>
          <div className="border-black border- flex justify-center items-center w-fit mx-auto gap-5">
            <img className=" size-6 rounded-full " src={facebook} alt="" />
            <img className=" size-7 rounded-full " src={google} alt="" />
            <img className=" size-6 rounded-full " src={apple} alt="" />
          </div>

          {/* Input bars */}

          <div className=" w-full h-[35%] flex flex-col justify-between lg:h-[37%]">
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-15  pl-10 font-black lg:h-16"
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-15  pl-10 font-black lg:h-16"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button and others */}

          <div className=" w-full h-[25%] flex flex-col justify-between lg:h-[25%]">
            <button
              type="submit"
              className=" w-full self-center  h-14  rounded-full  bg-[var(--sec-color)] font-[Lexend] text-lg font-semibold text-white lg:w-full lg:h-16"
            >
              Login
            </button>
            <div className=" w-full flex justify-between items-center">
              <p className="">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="text-blue-500">Create one</span>
                </Link>
              </p>
              <p>Forgot your password</p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
