import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const SellerButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-[var(--sec-color)] py-3 px-8 text-white text-sm md:text-xs font-bold rounded-full md:py-3 md:px-10 text-nowrap"
      type={onClick ? "button" : "submit"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SellerButton;
