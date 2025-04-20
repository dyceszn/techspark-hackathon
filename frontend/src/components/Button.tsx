import React from "react";

interface ButtonProps {
  prop: string; // prop that will be passed to the Button component
}

const Button: React.FC<ButtonProps> = ({ prop }) => {
  return (
    <div>
      <p>{prop}</p>
    </div>
  );
};

export default Button;
