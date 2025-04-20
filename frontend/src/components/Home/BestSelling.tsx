// import { FC } from "react";
// import { perfume, bag, shoppingbag, headphones } from "../../assets/images";

// const BestSelling: FC = () => {
//   const bestSellingItems = [
//     { id: 1, name: "Perfume Set", price: "$49.99", image: perfume, sold: "90" },
//     { id: 2, name: "Designer Bag", price: "$129.99", image: bag, sold: "80" },
//     {
//       id: 3,
//       name: "Leather Wallet",
//       price: "$79.99",
//       image: shoppingbag,
//       sold: "70",
//     },
//     {
//       id: 4,
//       name: "Headphones",
//       price: "$199.99",
//       image: headphones,
//       sold: "120",
//     },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between mb-10">
//           <h2 className="text-3xl font-bold text-gray-900">Best selling</h2>
//           <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
//             View All <i className="fas fa-arrow-right ml-2"></i>
//           </button>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {bestSellingItems.map((item) => (
//             <div key={item.id} className="group">
//               <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div
//                   className="absolute inset-0 bg-cover bg-no-repeat bg-center group-hover:bg-opacity-10 transition-opacity duration-300"
//                   style={{ backgroundImage: `url(${item.image})` }}
//                 ></div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="flex justify-start items-center">
//                     <img
//                       src="../assets/best-choice.svg"
//                       alt=""
//                       className="h-5 w-5"
//                     />
//                     <h3 className="ml-2">{item.sold} Purchases</h3>
//                   </div>
//                   <h3 className="text-gray-900 font-medium">{item.name}</h3>
//                   <p className="text-gray-600 mt-1">{item.price}</p>
//                 </div>
//                 <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black transition-colors duration-300">
//                   <i className="fas fa-plus text-gray-600"></i>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSelling;

import React from "react";
import BestSellingCard from "./BestSellingCard";
import { bag, headphones, perfume, shoppingbag } from "../../assets/images";

const BestSelling = () => {
  const bestSellingItems = [
    { id: 1, name: "Perfume Set", price: "$49.99", image: perfume, sold: "90" },
    { id: 2, name: "Designer Bag", price: "$129.99", image: bag, sold: "80" },
    {
      id: 3,
      name: "Leather Wallet",
      price: "$79.99",
      image: shoppingbag,
      sold: "70",
    },
    {
      id: 4,
      name: "Headphones",
      price: "$199.99",
      image: headphones,
      sold: "120",
    },
  ];

  return (
    <div className=" flex flex-col items-center my-32 md:mt-58 md:mb-32">
      <p className="text-3xl font-bold mb-12 md:mb-20 self-start">
        Best selling
      </p>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:grid-rows-1 lg:grid-cols-4 lg:gap-20 w-fit">
        {bestSellingItems.map((item) => (
          <BestSellingCard
            purchases={`${item.sold} purchases`}
            image={item.image}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
