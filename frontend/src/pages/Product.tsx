import React from "react";
import { Back, Footer, Header, SingleComment } from "../components";
import { cart } from "../assets/icons";

const Product = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <Back />
      <div className=" flex-grow px-[10vw] flex justify-between">
        <section className="border-black border-1 w-[70%] h-[90%] flex flex-col justify-between">
          <div className="border-black border-1 w-full h-[80%] flex justify-between">
            <img
              className="w-[45%] h-full rounded-2xl bg-[var(--tertiary-color)]"
              src={""}
              alt=""
            />
            <div className=" border-black border-1 w-[52%]">
              <div>
                <p>Product name</p>
                <img className="" src={""} alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eleifend non ipsum vitae egestas. Suspendisse potenti. Etiam
                vestibulum sem quis massa rutrum, quis luctus odio
                condimentum... More
              </p>
              <div>
                <p>Delivery Options</p>
                <ul>
                  <li>To your doorstep</li>
                  <li>Pickup yourself</li>
                </ul>
              </div>
              <div>
                <p>Check out some logistics service providers</p>
                <div>
                  <img className="" src={""} alt="" />
                  <img className="" src={""} alt="" />
                  <img className="" src={""} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-black border-1 w-full h-[15%] flex items-center">
            <img
              className="size-16 rounded-full bg-[var(--tertiary-color)] mr-4"
              src={""}
              alt=""
            />
            <p className="text-lg">{"Styl by Janet"}</p>
          </div>
        </section>

        {/* Right Section */}

        <aside className="border-black border-1 w-[25%] h-[90%] flex flex-col justify-between">
          <SingleComment />

          <div className=" flex items-end justify-end">
            <button className="border-black border-3 size-16 rounded-full mr-6 flex justify-center items-center">
              <img className="size-10" src={cart} alt="" />
            </button>

            <div className=" flex flex-col text-center">
              <p className="font-semibold text-3xl mb-2">
                {"29,999"}{" "}
                <span className="font-extralight text-sm">naira</span>
              </p>
              <button className="bg-[var(--sec-color)] text-white px-10 py-4 rounded-full text-2xl">
                {"Add to cart"}
              </button>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
