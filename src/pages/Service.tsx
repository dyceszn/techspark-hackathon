import React from "react";
import { Back, Footer, Header } from "../components";
import { back, cart, comment } from "../assets/icons";

const Service = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <Back />

      <div className=" px-[10vw] flex-grow flex justify-between">
        <div className=" w-[50%] flex flex-col justify-between h-[90%]">
          <div className=" h-[18%] flex flex-col justify-between">
            <p className="text-2xl font-[Lexend] font-semibold">
              {"From basic to bold. Let’s make your nails stand out."}
            </p>

            <div className=" flex flex-row items-center">
              <img
                src=""
                alt=""
                className="size-8 bg-[var(--tertiary-color)] rounded-full"
              />
              <p className="pl-6">{"Shalom Jamime"}</p>
            </div>

            <div className=" flex flex-row items-center">
              <p className="px-6 py-2 rounded-full bg-[var(--tertiary-color)]">
                {"Beauty"}
              </p>
              <p className="px-6 py-2 ml-4 rounded-full bg-[var(--tertiary-color)]">
                {"Art"}
              </p>
            </div>
          </div>

          {/* --------------------------Image grid-------------------------- */}

          <div className=" flex h-max w-[95%] justify-between items-center">
            <div className=" w-max h-max">
              <img
                src=""
                alt=""
                className="h-[327px] w-[284px] bg-[var(--tertiary-color)] rounded-xl"
              />
            </div>

            <div className=" w-[51.5%] h-[327px] flex justify-between">
              <div className=" flex flex-col justify-between">
                <img
                  src=""
                  alt=""
                  className="size-[152px] bg-[var(--tertiary-color)] rounded-xl"
                />
                <img
                  src=""
                  alt=""
                  className="size-[152px] bg-[var(--tertiary-color)] rounded-xl"
                />
              </div>
              <div className=" flex flex-col justify-between">
                <img
                  src=""
                  alt=""
                  className="size-[152px] bg-[var(--tertiary-color)] rounded-xl"
                />
                <img
                  src=""
                  alt=""
                  className="size-[152px] bg-[var(--tertiary-color)] rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className=" h-[20%]">
            <p className="font-bold my-4 text-lg">Description</p>
            <p className=" wrap-normal w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eleifend non ipsum vitae egestas. Suspendisse potenti. Etiam
              vestibulum sem quis massa rutrum, quis luctus odio condimentum...
              More Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi eleifend non ipsum vitae egestas.{" "}
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------- */}

        <div className=" w-[30%] h-[80%] flex flex-col items-end justify-between">
          <ul className=" flex justify-between w-full">
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

          <div className=" flex w-[70%]">
            <p className="font-extralight text-md mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eleifend non ipsum vitae egestas. Suspendisse potenti.
              <br />
              <span className="font-bold">{"- by Jude Samuel"}</span>
            </p>
            <img className="size-10" src={comment} alt="" />
          </div>

          <div className=" bg-[var(--tertiary-color)] w-[80%] h-[140px] flex flex-col justify-between p-4 rounded-2xl">
            <textarea className="font-extralight" name="message" id="message">
              Write a note
            </textarea>
            <img className="size-6 scale-x-[-1] self-end" src={back} alt="" />
          </div>

          <div className=" flex items-end justify-end">
            <button className="border-black border-3 size-16 rounded-full bg-[var(--tertiary-color)] mr-6 flex justify-center items-center">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
