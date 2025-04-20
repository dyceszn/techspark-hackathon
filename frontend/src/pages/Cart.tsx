import React from "react";
import { CartItem, Footer, Header } from "../components";
import { cart, nav } from "../assets/icons";
import PriceActionButton from "../components/PriceActionButton";

const Cart = () => {
  return (
    <div className="single-page w-full h-screen flex flex-col">
      <Header />
      <div className=" flex-grow px-[10vw]">
        {/* Page Title */}
        <p className="h-[15%] text-3xl font-semibold flex items-center md:h-[20%]">
          Cart Summary
        </p>

        {/* ---------------------- Cart Items and Nav --------------------------- */}
        <section className=" h-[35%]  flex flex-col justify-evenly md:block md:h-[50%]">
          <div className="  gap-7 flex  items-center overflow-x-scroll md:h-[70%] lg:justify-evenly">
            {[...Array(5)].map((_, i) => (
              <CartItem key={i} />
            ))}
          </div>
          {/* Nav buttons */}

          <div className="hidden h-[30%] justify-between items-center px-2 md:px-16 md:h-[30%] md:flex">
            <button>
              <img className="size-8" src={nav} alt="" />
            </button>
            <button>
              <img className="size-8 scale-x-[-1]" src={nav} alt="" />
            </button>
          </div>
        </section>

        {/* ------------------------ Cart Summary and Action Button -------------------------- */}

        <div className=" flex flex-col  h-[35%]  justify-between md:flex-row md:h-[20%]">
          <div>
            <p className="my-6">No. of items: {""}</p>
            <p className="my-6">Est. Cost: {""}</p>
            <p className="my-6">Discount: {""}</p>
          </div>

          <div className=" flex h-[50%]  items-end justify-end md:justify-normal md:h-[95%]">
            <PriceActionButton icon={cart} text="Checkout" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
