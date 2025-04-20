import React from "react";
import HomeTag from "./HomeTag";
import { discount } from "../../assets/icons";
import { shirt } from "../../assets/images";

const ProductCard = () => {
  return (
    <div className=" bg-[var(--tertiary-color)] rounded-2xl h-fit md:w-122 w-96 p-4 flex flex-col">
      <div className="">
        <HomeTag icon={discount} text="sale" />
      </div>

      <div className=" flex flex-col items-center justify-center gap-2 mx-auto">
        <img className=" w-auto h-36" src={shirt} alt="" />
        <p className="font-bold text-lg">Product Name by Business</p>
        <p className="mb-2">
          {" "}
          9,999 <span>naira</span> 9,999 <span>naira</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
