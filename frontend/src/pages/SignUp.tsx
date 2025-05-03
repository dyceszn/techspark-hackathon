// src/components/SignUp.tsx

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { singupImage } from "../assets/photos";
import { apple, facebook, google } from "../assets/icons";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = "http://localhost:8000";



// Sign up function that calls FastAPI backend
async function signup(payload: {
  fullname: string;
  email: string;
  password: string;
  default_address: string;
  is_seller: boolean;
  phone_number: string;
}) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/register`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.detail || "Signup failed");
  }
}

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [seller, setSeller] = useState(false);
  const Navigate = useNavigate();
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await signup({
        fullname: name,
        email,
        password,
        default_address: address,
        is_seller: seller,
        phone_number: phone,
      });
      console.log("Signup successful:", data);
      alert("Signup successful!");
      Navigate("/Login");
     
        
     
      
      
    } catch (err: any) {
      console.error("Signup failed:", err.message);
      alert("Signup failed: " + err.message);
      alert(err.message)
    }
  };

  return (
    <div className="single-page flex flex-col w-full h-screen lg:flex-row">
      {/* Side Picture Section */}
      <aside className="w-full h-[25%] bg-[var(--tertiary-color)] lg:w-[40%] lg:h-full relative">
        <img
          src={singupImage}
          className="h-full w-full object-cover"
          alt="Signup illustration"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </aside>

      {/* Form Section */}
      <section className="w-full h-[75%] flex items-center justify-center lg:w-[60%] lg:h-full">
        <form
          className="w-[85%] h-[85%] flex flex-col justify-between md:w-[70%] lg:w-[50%] lg:h-[70%]"
          onSubmit={handleSignup}
        >
          <p className="text-center text-lg">Create Account</p>
          <div className="border-black border flex justify-center items-center w-fit mx-auto gap-5">
            <img className="size-6 rounded-full" src={facebook} alt="Facebook signup" />
            <img className="size-7 rounded-full" src={google} alt="Google signup" />
            <img className="size-6 rounded-full" src={apple} alt="Apple signup" />
          </div>

          {/* Input fields */}
          <div className="w-full h-[55%] flex flex-col justify-between lg:h-[60%]">
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Default address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign Up Button and toggle */}
          <div className="w-full h-[23%] flex flex-col justify-between md:h-[20%] lg:h-[20%]">
            <div className="flex items-center pl-2">
              <input
                type="checkbox"
                id="seller"
                checked={seller}
                onChange={(e) => setSeller(e.target.checked)}
              />
              <label className="ml-3" htmlFor="seller">
                Open a seller account
              </label>
            </div>
            <button
              type="submit"
              className="w-full h-14 rounded-2xl bg-[var(--sec-color)] font-[Lexend] text-lg font-bold text-white lg:h-16"
            >
              Sign up
            </button>
            <p>
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
