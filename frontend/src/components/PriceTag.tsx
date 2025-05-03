import React from "react";

interface PriceTagProps {
  price: number;
}

const PriceTag:React.FC<PriceTagProps> = ({ price }) => {
  return (
    <div>
      <p className="bg-[var(--primary-color)] px-4 py-2 rounded-full font-semibold w-max mx-2 my-4">
        {price} <span className="font-extralight text-xs">naira</span>
      </p>
    </div>
  );
};

export default PriceTag;
