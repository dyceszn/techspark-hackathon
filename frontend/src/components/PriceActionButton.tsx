// import React from "react";
// import { Link } from "react-router";

// interface PriceActionButtonProps {
//   icon: string;
//   text: string;
//   price: string;
// }

// const PriceActionButton: React.FC<PriceActionButtonProps> = ({
//   icon,
//   text,
//   price,
// }) => {
//   return (
//     <div className="flex items-end justify-end">
// <Link to="/cart" className="border-black border-3 size-16 rounded-full mr-4 flex justify-center items-center">        <img className="size-8" src={icon} alt="" />
//       </Link>

//       <div className=" flex flex-col text-center">
//         <p className="font-semibold text-3xl mb-2">
//           {price} <span className="font-extralight text-sm">naira</span>
//         </p>
//         <button className="bg-[var(--sec-color)] text-white px-10 py-4 rounded-full text-xl">
//           {text}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PriceActionButton;

import React from "react";
import { Link } from "react-router-dom"; // Correct import for Link

interface PriceActionButtonProps {
  icon: string;
  text: string;
  price: number; // Using number for price for consistency with data
  onClick?: () => void; // Optional click handler
  linkToCart?: boolean; // Option to link to cart instead of onClick
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
