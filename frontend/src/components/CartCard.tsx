// import React from "react";
// import Button from "./Button";

// interface CartCardProps {
//   image: string;
// }

// const CartCard: React.FC<CartCardProps> = ({ image }) => {
//   return (
//     <div className=" bg-[var(--tertiary-color)] rounded-2xl h-fit w-100 md:w-122 md:h-72  p-6 flex flex-row">
//       <div className=" w-[65%] flex flex-col justify-center items-center gap-6">
//         <img className="h-32 w-auto" src={image} alt="" />
//         <p className="font-bold">Product name</p>
//       </div>
//       <div className=" flex flex-col justify-between w-[35%]">
//         <p>
//           Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet...
//         </p>
//         <Button text="More" />
//       </div>
//     </div>
//   );
// };

// export default CartCard;
// src/components/CartCard.tsx
import React from "react";
import Button from "./Button";

interface CartCardProps {
  image: string;
}

const CartCard: React.FC<CartCardProps> = ({ image }) => {
  return (
    <div
      className="
        bg-[var(--tertiary-color)]
        rounded-2xl
        overflow-hidden
        flex
        flex-col
        md:flex-row
        w-full
        max-w-xs
        sm:max-w-sm
        lg:max-w-md
        p-4
        gap-4
        mx-auto
      "
    >
      {/* Image & Title */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex flex-col items-center justify-center gap-3">
        <img src={image} alt="Product" className="h-28 w-auto object-contain" />
        <p className="font-bold text-center text-sm sm:text-base">Product Name</p>
      </div>

      {/* Description & Button */}
      <div className="flex flex-col justify-between flex-1 text-sm sm:text-base">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        </p>
        <div className="self-end">
          <Button text="More" />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
