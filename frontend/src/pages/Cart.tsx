import React from "react";
import { CartItem, Footer, Header } from "../components";
import { nav } from "../assets/icons";

const Cart = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className=" flex-grow px-[10vw]">
        <p className=" h-[20%] text-3xl font-semibold flex items-center">
          Cart Summary
        </p>

        {/* ------------------------------------------------- */}
        <section className=" h-[50%]">
          <div className=" h-[70%] flex justify-evenly items-center">
            {[...Array(5)].map((_, i) => (
              <CartItem key={i} />
            ))}
          </div>
          <div className=" h-[30%] flex justify-between items-center px-16">
            <button>
              <img className="size-8" src={nav} alt="" />
            </button>
            <button>
              <img className="size-8 scale-x-[-1]" src={nav} alt="" />
            </button>
          </div>
        </section>
        {/* -------------------------------------------------- */}

        <div className=" flex flex-row h-[20%] justify-between">
          <div>
            <p className="my-6">No. of items: {""}</p>
            <p className="my-6">Est. Cost: {""}</p>
            <p className="my-6">Discount: {""}</p>
          </div>

          <div className="  flex h-[95%] items-end">
            <img
              className=" size-16 rounded-full bg-[var(--tertiary-color)] mr-6"
              src={""}
              alt=""
            />
            <div className=" flex flex-col text-center">
              <p className="font-semibold text-3xl  mb-2">
                {"29,999"}{" "}
                <span className="font-extralight text-sm">naira</span>
              </p>
              <button className="bg-[var(--sec-color)] text-white px-12 py-4 rounded-full text-2xl">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
