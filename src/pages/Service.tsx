import React from "react";
import { Back, Footer, Header } from "../components";
import { back } from "../assets/icons";

const Service = () => {
  return (
    <div>
      <Header />
      <Back />

      <div className="border-black border-1 px-[10vw] h-[78vh] flex">
        <div className="border-black border-1 w-[50%] h-full flex flex-col justify-between">
          <div className="border-black border-1 h-[15%] flex flex-col justify-between">
            <p className="text-2xl font-[Lexend] font-semibold">
              From basic to bold. Let’s make your nails stand out.
            </p>

            <div className=" flex flex-row items-center">
              <img
                src=""
                alt=""
                className="size-8 bg-[var(--tertiary-color)] rounded-full"
              />
              <p className="pl-6">Shalom Jamime</p>
            </div>

            <div className=" flex flex-row items-center">
              <p className="px-6 py-2 rounded-full bg-[var(--tertiary-color)]">
                Beauty
              </p>
              <p className="px-6 py-2 ml-4 rounded-full bg-[var(--tertiary-color)]">
                Art
              </p>
            </div>
          </div>
          <div className="border-black border-1 flex h-[60%]">
            <div className="border-black border-1 w-[50%] h-[80%]">
              <img
                src=""
                alt=""
                className="h-[327px] w-[284px] bg-[var(--tertiary-color)] rounded-xl"
              />
            </div>

            <div className="border-black border-1 w-[50%] flex">
              <div className="border-black border-1">
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
              <div className="border-black border-1">
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

          <div className="border-black border-1 h-[20%]">
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

        <div className="border-black border-1 w-[50%] h-full">
          <ul>
            <li>
              <p>Price type</p>
              <p>Fixed</p>
            </li>
            <li>
              <p>Price type</p>
              <p>Fixed</p>
            </li>
            <li>
              <p>Price type</p>
              <p>Fixed</p>
            </li>
            <li>
              <p>Price type</p>
              <p>Fixed</p>
            </li>
          </ul>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eleifend non ipsum vitae egestas. Suspendisse potenti. - by Jude
              Samuel{" "}
            </p>
            <img src="" alt="" />
          </div>
          <div>
            <textarea name="message" id="message">
              write a note
            </textarea>
            <img src={back} alt="" />
          </div>
          <div className="border-black border-1 flex h-[70%] items-end">
            <img
              className="border-black border-1 size-16 rounded-full bg-[var(--tertiary-color)] mr-6"
              src="#"
              alt=""
            />
            <div className="border-black border-1 flex flex-col text-center">
              <p className="font-semibold text-3xl border-black border-1 mb-2">
                29,999 <span className="font-extralight text-sm">naira</span>
              </p>
              <button className="bg-[var(--sec-color)] text-white px-8 py-4 rounded-full text-2xl">
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

export default Service;
