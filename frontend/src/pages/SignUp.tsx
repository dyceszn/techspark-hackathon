import React, { useState } from "react";
import { signup } from "../api/Auth";
import { Link } from "react-router-dom";
import { singupImage } from "../assets/photos";
import { apple, facebook, google } from "../assets/icons";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [seller, setSeller] = useState(false);
  // const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await signup({
        name,
        email,
        phone,
        address,
        password,
        seller,
      });
      console.log("Signup successful:", data);
      // Will then redirect if truthy
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="single-page flex flex-col w-full h-screen lg:flex-row">
      {/* Side Picture Section */}
      <aside className="w-full h-[25%] bg-[var(--tertiary-color)] lg:w-[40%] lg:h-full relative">
        <img src={singupImage} className="h-full w-full object-cover" alt="" />
        {/* Black overlay with 30% opacity */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </aside>

      {/* Form Section */}

      <section className="w-full h-[75%] flex items-center justify-center lg:w-[60%] lg:h-full">
        <form
          className=" w-[85%] h-[85%] flex flex-col justify-between md:w-[70%] lg:w-[50%] lg:h-[70%]"
          onSubmit={handleSignup}
        >
          <p className=" text-center text-lg">Create Account</p>
          <div className="border-black border- flex justify-center items-center w-fit mx-auto gap-5">
            <img className=" size-6 rounded-full " src={facebook} alt="" />
            <img className=" size-7 rounded-full " src={google} alt="" />
            <img className=" size-6 rounded-full " src={apple} alt="" />
          </div>

          {/* Input bars */}

          <div className=" w-full h-[55%] flex flex-col justify-between lg:h-[60%]">
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Enter your Phone no"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Default Address: room no. and hostel"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign Up Button and others */}

          <div className=" w-full h-[23%] flex flex-col justify-between md:h-[20%] lg:h-[20%]">
            <div className=" flex items-center pl-2">
              <input
                type="checkbox"
                name="seller account"
                id="seller"
                checked={seller}
                onChange={(e) => setSeller(e.target.checked)}
              />{" "}
              <label className="ml-3" htmlFor="seller">
                Open a seller account
              </label>
            </div>
            <button
              type="submit"
              className=" w-full h-14 rounded-2xl bg-[var(--sec-color)] font-[Lexend] text-lg font-bold text-white lg:h-16"
            >
              Sign up
            </button>
            <p className="">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-blue-500">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
