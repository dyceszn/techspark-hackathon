import React from "react";
import { Back, Footer, Header } from "../components";
import { edit } from "../assets/icons";

const Checkout = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <Back />

      <div className=" flex-grow px-[10vw]">
        <div className=" h-[15%] flex items-center">
          <p className="text-3xl">Confirm Information</p>
        </div>

        <div className=" flex flex-row h-[50%] justify-between">
          <div className=" w-[40%]">
            <div className=" flex justify-between items-center">
              <p className="font-semibold text-lg">Customers information</p>
              <button>
                <img className="size-7" src={edit} alt="" />
              </button>
            </div>
            <div className=" h-[70%]">
              <p className="my-8">Full Name: {""}</p>
              <p className="my-8">Phone Number: {""}</p>
              <p className="my-8">Email: {""}</p>
              <p className="my-8">Profile type: {""}</p>
              <p className="my-8">Gender: {""}</p>
            </div>
          </div>

          <div className=" w-[40%]">
            <div className=" flex items-center justify-between">
              <p className="font-semibold text-lg">Delivery Address</p>
              <button>
                <img className="size-7" src={edit} alt="" />
              </button>
            </div>
            <div className=" h-[70%]">
              <p className="my-8">Address 1: {""}</p>
              <p className="my-8">Address 2: {""}</p>
              <p className="my-8">Hostel: {""}</p>
              <p className="my-8">School: Pan-Atlantic University</p>
            </div>
          </div>
        </div>

        <div className=" h-[30%] flex flex-col">
          <div className=" flex items-center justify-center w-full h-[50%]">
            <p className="">
              You will be redirected to our third party payment processor to
              complete your payment
            </p>
          </div>

          <div className=" flex justify-center">
            <button className="bg-[var(--sec-color)] py-4 px-12 text-white text-xl font-semibold rounded-full">
              Pay now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
