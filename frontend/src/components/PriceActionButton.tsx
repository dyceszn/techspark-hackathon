import React from "react";

interface PriceActionButtonProps {
  icon: string;
  text: string;
}

const PriceActionButton: React.FC<PriceActionButtonProps> = ({
  icon,
  text,
}) => {
  return (
    <div className="flex items-end justify-end">
      <button className="border-black border-3 size-16 rounded-full mr-4 flex justify-center items-center">
        <img className="size-8" src={icon} alt="" />
      </button>

      <div className=" flex flex-col text-center">
        <p className="font-semibold text-3xl mb-2">
          {"29,999"} <span className="font-extralight text-sm">naira</span>
        </p>
        <button className="bg-[var(--sec-color)] text-white px-10 py-4 rounded-full text-xl">
          {text}
        </button>
      </div>
    </div>
  );
};

export default PriceActionButton;
