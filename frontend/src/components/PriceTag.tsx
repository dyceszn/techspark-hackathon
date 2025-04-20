import React from "react";

const PriceTag = () => {
  return (
    <div>
      <p className="bg-[var(--primary-color)] px-4 py-2 rounded-full font-semibold w-max mx-2 my-4">
        {"2,999"} <span className="font-extralight text-xs">naira</span>
      </p>
    </div>
  );
};

export default PriceTag;
