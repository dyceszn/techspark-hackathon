import React from "react";
import { Back, Button, Footer, Header } from "../components";
import { edit } from "../assets/icons";

const Checkout = () => {
  return (
    <div className="single-page w-full h-screen flex flex-col">
      <Header />
      <Back />

      <div className="  flex-grow px-[10vw] flex flex-col justify-between md:justify-normal">
        {/* Checkout Header */}

        <div className=" h-[8%]  flex items-center md:h-[15%]">
          <p className="text-2xl md:text-3xl">Confirm Information</p>
        </div>

        <div className=" flex flex-col justify-evenly md:justify-between md:flex-row lg:h-[50%]">
          {/* Sibling 1: Customer's Information Section */}

          <div className=" w-[100%] md:w-[46%] lg:w-[40%]">
            <div className=" flex justify-between items-center">
              <p className="font-semibold text-lg">Profile data</p>
              <button>
                <img className="size-7" src={edit} alt="" />
              </button>
            </div>
            <div className=" md:h-[70%]">
              <p className="my-6 md:my-8">Full Name: {""}</p>
              <p className="my-6 md:my-8">Phone Number: {""}</p>
              <p className="my-6 md:my-8">Email: {""}</p>
              <p className="my-6 md:my-8">Profile type: {""}</p>
              <p className="my-6 md:my-8">Gender: {""}</p>
            </div>
          </div>

          {/* Sibling 2: Delivery Address Section */}

          <div className=" mt-2 w-[100%] md:w-[46%]  md:mt-0 lg:w-[40%]">
            <div className=" flex items-center justify-between">
              <p className="font-semibold text-lg">Delivery Address</p>
              <button>
                <img className="size-7" src={edit} alt="" />
              </button>
            </div>
            <div className=" h-[70%]">
              <p className="my-6 md:my-8">Address 1: {""}</p>
              <p className="my-6 md:my-8">Address 2: {""}</p>
              <p className="my-6 md:my-8">Hostel: {""}</p>
              <p className=" md:my-8">School: Pan-Atlantic University</p>
            </div>
          </div>
        </div>

        {/* Pay now button and alert text */}

        <div className=" h-[25%]  flex flex-col items-center justify-center lg:h-[30%]">
          <div className="  items-center justify-center w-full h-[50%] hidden md:flex ">
            <p className="text-center">
              You will be redirected to our third party payment processor to
              complete your payment
            </p>
          </div>

          <div className=" flex justify-center">
            <Button text="Pay now" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
