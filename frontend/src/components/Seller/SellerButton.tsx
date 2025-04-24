import React from "react";

interface ButtonProps {
  text: string;
}

const SellerButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="bg-[var(--sec-color)] py-3 px-8 text-white text-sm md:text-md font-semibold rounded-full md:py-3 md:px-10">
        {text}
      </button>
    </div>
  );
};

export default SellerButton;
