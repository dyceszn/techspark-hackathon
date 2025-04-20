import React from "react";
import HomeCartCard from "./HomeCartCard";
import { tote } from "../../assets/images";

const HomeCart = () => {
  return (
    <div className=" my-32 md:my-40 flex flex-col items-center justify-center">
      <p className="text-2xl font-bold mb-16 self-start">My Cart</p>
      <div className="w-full overflow-x-scroll">
        <div className="flex w-fit lg:grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-8">
          {[...Array(3)].map((_, i) => (
            <HomeCartCard image={tote} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCart;
