import React from "react";
import { Link } from "react-router-dom"; 

interface PriceActionButtonProps {
  icon: string;
  text: string;

  price: number; 
  onClick?: () => void; 
  linkToCart?: boolean; 
}

const PriceActionButton: React.FC<PriceActionButtonProps> = ({
  icon,
  text,
  price,

  onClick,
  linkToCart = false,

}) => {
  return (
    <div className="flex items-end justify-end">
      <div className="border-black border-3 size-16 rounded-full mr-4 flex justify-center items-center">
        <img className="size-8" src={icon} alt="" />
      </div>

      <div className=" flex flex-col text-center">
        <p className="font-semibold text-3xl mb-2">

          {price.toLocaleString()} <span className="font-extralight text-sm">naira</span>
        </p>
        {linkToCart ? (
          <Link
            to="/cart"
            className="bg-[var(--sec-color)] text-white px-10 py-4 rounded-full text-xl"
          >
            {text}
          </Link>
        ) : (
          <button
            className="bg-[var(--sec-color)] text-white px-10 py-4 rounded-full text-xl"
            onClick={onClick}
          >
            {text}
          </button>
        )}

      </div>
    </div>
  );
};

export default PriceActionButton;
