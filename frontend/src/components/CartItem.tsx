import React from "react";
import { cancel } from "../assets/icons";

const CartItem = () => {
  return (
    <div className=" flex justify-between h-64 w-68">
      <div className=" flex flex-col justify-between">
        <div className="bg-[var(--tertiary-color)] h-52 w-56 rounded-2xl flex flex-col justify-end items-end">
          <p className="bg-[var(--primary-color)] px-4 py-2 rounded-full font-semibold w-max mx-2 my-4">
            {"2,999"} <span className="font-extralight text-xs">naira</span>
          </p>
        </div>

        <div className="  flex justify-between items-center text-lg">
          <p>{"Product name"}</p>
          <p>x {"1"}</p>
        </div>
      </div>

      <div>
        <button>
          <img
            className="size-7 bg-[var(--tertiary-color)] rounded-full"
            src={cancel}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
