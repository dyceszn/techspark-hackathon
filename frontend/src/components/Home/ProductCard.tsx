import React from "react";
import HomeTag from "./HomeTag";
import { discount } from "../../assets/icons";
import { shirt } from "../../assets/images";

interface ProductCardProps {
  productName: string;
  productSeller: string;
  originalPrice: string;
  discountedPrice: string;
  productImage?: string;
  onclick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productSeller,
  originalPrice,
  discountedPrice,
  productImage,
  onclick,
}) => {
  return (
    <div
      className=" bg-[var(--tertiary-color)] rounded-2xl h-fit md:w-122 w-96 p-4 flex flex-col"
      onClick={onclick}
    >
      <div className="">
        <HomeTag icon={discount} text="sale" />
      </div>

      <div className=" flex flex-col items-center justify-center gap-2 mx-auto">
        <img className=" w-auto h-36" src={productImage ?? shirt} alt="" />
        <p className="font-bold text-lg">
          {productName} <span>by {productSeller}</span>
        </p>
        <div className="flex gap-2 mb-2">
          <p className="line-through text-red-500">
            {originalPrice} <span>naira</span>
          </p>
          <p>
            {discountedPrice} <span>naira</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
