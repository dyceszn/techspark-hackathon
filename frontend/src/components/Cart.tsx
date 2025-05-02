// import React from "react";
// import CartCard from "./CartCard";
// import { tote } from "../assets/images";

// const Cart = () => {
//   return (
//     <div className=" my-32 md:my-40 flex flex-col items-center justify-center">
//       <p className="text-2xl font-bold mb-16 self-start">My Cart</p>
//       <div className="w-full overflow-x-scroll">
//         <div className="flex w-fit lg:grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-8">
//           {[...Array(3)].map((_, i) => (
//             <CartCard image={tote} key={i} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import CartCard from "./CartCard";
import { tote } from "../assets/images";

const Cart = () => {
  return (
    <div className="my-20 md:my-32 flex flex-col items-center px-4 md:px-10">
      {/* Title */}
      <p className="text-2xl md:text-3xl font-bold mb-10 self-start">My Cart</p>

      {/* Responsive layout */}
      <div className="w-full">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <CartCard image={tote} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
