import React from "react";
import { Back, Footer, Header } from "../components";
import { cart, edit } from "../assets/icons";

const Profile = () => {
  return (
    <div className="main w-full h-screen flex flex-col">
      <Header />
      <Back />
      <div className="border-black border-1 flex-grow px-[10vw] flex flex-col lg:flex-row lg:justify-between">
        {/* Profile Section */}

        <section className="border-black border-1 w-[47%] h-full">
          <div className=" flex items-center justify-between h-[10%]">
            <p className="text-xl">Profile</p>
            <img className="size-8" src={edit} alt="" />
          </div>

          <div className=" flex flex-col h-[90%] justify-evenly">
            <div className=" flex">
              <img
                className="size-68 rounded-full bg-[var(--tertiary-color)] mr-16"
                src={""}
                alt=""
              />
              <ul className=" h-68 flex flex-col justify-between">
                <li>
                  Name: <span>{""}</span>
                </li>
                <li>
                  Email address: <span>{""}</span>
                </li>
                <li>
                  Phone number: <span>{""}</span>
                </li>
                <li>
                  Profile type: <span>{""}</span>
                </li>
                <li>
                  Gender: <span>{""}</span>
                </li>
              </ul>
            </div>

            <div className=" h-72 flex flex-col justify-between">
              <p className="text-lg font-bold">Default Shipping & Billing </p>
              <ul className=" h-[80%] flex flex-col justify-between">
                <li>
                  Address 1: <span>{""}</span>
                </li>
                <li>
                  Address 2: <span>{""}</span>
                </li>
                <li>
                  Hostel: <span>{""}</span>
                </li>
                <li>School: Pan-Atlantic University</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Order History Section */}

        <section className="border-black border-1 w-[47%] h-full">
          <div className=" flex items-center justify-between h-[10%]">
            <p className="text-xl">Order History</p>
            <div className="border-black border-2 rounded-full size-8 flex items-center justify-center">
              <img className="size-5 " src={cart} alt="" />
            </div>
          </div>
          <div className=" flex justify-center items-center h-[90%] w-full opacity-50">
            <p className="text-3xl font-extralight">
              Your order history will be shown here.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
