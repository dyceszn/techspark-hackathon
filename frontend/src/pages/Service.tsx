import React from "react";
import { Back, Footer, Header, SingleComment } from "../components";
import { back, cart } from "../assets/icons";
import CategoryTag from "../components/CategoryTag";
import PriceActionButton from "../components/PriceActionButton";

const Service = () => {
  return (
    <div className="w-full flex flex-col lg:h-screen">
      <Header />
      <Back />

      {/* Main Component */}

      <main className=" px-[10vw] flex-grow flex flex-col lg:flex-row lg:justify-between">
        {/* Section 1 */}

        <section className=" w-full lg:w-[50%] flex flex-col justify-between h-[90%]">
          {/* Heading, Seller, Tags */}
          <div className=" lg:h-[18%] flex flex-col gap-4 lg:gap-0 justify-between mb-10 lg:mb-0">
            <p className="text-lg lg:text-2xl font-[Lexend] font-semibold">
              {"From basic to bold. Let's make your nails stand out."}
            </p>

            <div className=" flex flex-row items-center ml-1">
              <img
                src=""
                alt=""
                className="size-8 bg-[var(--tertiary-color)] rounded-full"
              />
              <p className="pl-6">{"Shalom Jamime"}</p>
            </div>

            <div className="flex flex-row items-center">
              <CategoryTag category="Beauty" />
              <CategoryTag category="Art" />
            </div>
          </div>

          {/* --------------------------Image grid-------------------------- */}

          <div className="border-black border-1 h-max md:h-[327px] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows- w-full lg:w-[95%] justify-between items-center mb-10 lg:mb-0">
            {/* <div className="border-black border-1 bg-[var(--tertiary-color)] h-full w-[284px]"></div>
            <div className="border-black border-1 h-full grid grid-cols-2 grid-rows-2 gap-4 w-fill">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-full aspect-square bg-[var(--tertiary-color)] flex items-center justify-center"
                >
                  Item {i + 1}
                </div>
              ))}
            </div> */}
          </div>

          <div className=" h-[20%] mb-10 lg:mb-0">
            <p className="font-bold mb-4 lg:my-4 text-lg">Description</p>
            <p className=" wrap-normal w-full lg:w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eleifend non ipsum vitae egestas. Suspendisse potenti. Etiam
              vestibulum sem quis massa rutrum, quis luctus odio condimentum...
              More Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi eleifend non ipsum vitae egestas.{" "}
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------- */}

        <div className=" w-full lg:w-[30%] h-[80%] flex flex-col items-end  justify-between ">
          <ul className=" flex justify-between w-full mb-10 lg:mb-0 md:mb-18">
            <li className="text-center">
              <p className="mb-2">Price type</p>
              <p className="font-bold font-[Lexend]">Fixed</p>
            </li>
            <li className="text-center">
              <p className="mb-2">Exp. Time frame</p>
              <p className="font-bold font-[Lexend]">3 hrs</p>
            </li>
            <li className="text-center">
              <p className="mb-2">Avail. hours</p>
              <p className="font-bold font-[Lexend]">Sat</p>
            </li>
            <li className="text-center">
              <p className="mb-2">Comp. orders</p>
              <p className="font-bold font-[Lexend]">33</p>
            </li>
          </ul>

          <div className=" w-[80%] mb-10 lg:mb-0 md:mb-18 ">
            <SingleComment />
          </div>

          <div className=" bg-[var(--tertiary-color)] w-full md:w-[80%] lg:w-[80%] h-[140px] flex flex-col justify-between p-4 rounded-2xl mb-10 lg:mb-0  md:mb-18">
            <textarea className="font-extralight" name="message" id="message">
              Write a note
            </textarea>
            <img className="size-6 scale-x-[-1] self-end" src={back} alt="" />
          </div>

          <div className=" flex items-end justify-end mb-16 lg:mb-0">
            <PriceActionButton icon={cart} text="Add to cart" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Service;
