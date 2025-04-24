import React, { useState } from "react";
import { login } from "../api/Auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await login({ email, password });
      console.log("Login successful:", data);
      // Will then redirect if truthy
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="single-page flex flex-col lg:flex-row w-full h-screen">
      {/* Side Image Section */}

      <aside className="w-full h-[25%] bg-[var(--tertiary-color)] lg:w-[40%] lg:h-full ">
        <img src={""} alt="" />
      </aside>

      {/* Form Section */}

      <section className=" w-full  h-[75%]  flex items-center justify-center lg:w-[60%] lg:h-full">
        <form
          className=" w-[85%] h-[55%] flex flex-col justify-between md:w-[70%] lg:w-[50%] lg:h-[40%]"
          onSubmit={handleLogin}
        >
          <p className=" text-center text-lg">Login</p>
          <div className=" flex w-fit mx-auto">
            <img
              className=" size-8 rounded-full bg-[var(--tertiary-color)] mx-2 "
              src=""
              alt=""
            />
            <img
              className=" size-8 rounded-full bg-[var(--tertiary-color)] mx-2 "
              src=""
              alt=""
            />
            <img
              className=" size-8 rounded-full bg-[var(--tertiary-color)] mx-2 "
              src=""
              alt=""
            />
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
            <p className="">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="text-blue-500">Create one</span>
              </Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
