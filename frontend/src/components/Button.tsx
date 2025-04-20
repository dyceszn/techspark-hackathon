import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-[var(--sec-color)] py-4 px-6 text-white text-md md:text-lg font-semibold rounded-full md:py-4 md:px-12">
      {text}
    </button>
  );
};

export default Button;
