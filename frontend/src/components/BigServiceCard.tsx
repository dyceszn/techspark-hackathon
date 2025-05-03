// // // import React from "react";
// // // import PriceTag from "./PriceTag";

// // // interface BigServiceCardProps {
// // //   image: string;
// // //   price: string;
// // // }

// // // const BigServiceCard: React.FC<BigServiceCardProps> = ({ image, price }) => {
// // //   return (
// // //     <div
// // //       className="
// // //         rounded-2xl
// // //         overflow-hidden
// // //         flex
// // //         flex-col
// // //         w-192
// // //         max-w-xs
// // //         sm:max-w-sm
// // //         md:max-w-md
// // //         lg:max-w-lg
// // //         min-h-[20rem]
// // //         transition-transform
// // //         hover:scale-105
// // //         bg-cover
// // //         bg-center
// // //         bg-no-repeat
// // //       "
// // //       style={{ backgroundImage: `url(${image})` }}
// // //     >
// // //       <PriceTag price={price} />
// // //     </div>
// // //   );
// // // };

// // // export default BigServiceCard;
// // import React from "react";
// // import PriceTag from "./PriceTag";

// // interface BigServiceCardProps {
// //   image: string;
// //   price: string;
// // }

// // const BigServiceCard: React.FC<BigServiceCardProps> = ({ image, price }) => {
// //   return (
// //     <div
// //       className="
// //         relative
// //         rounded-2xl
// //         overflow-hidden
// //         flex
// //         flex-col
// //         w-full
// //         h-full
// //         transition-transform
// //         hover:scale-101
// //         bg-cover
// //         bg-center
// //         bg-no-repeat
// //       "
// //       style={{ backgroundImage: `url(${image})` }}
// //     >
// //       {/* PriceTag positioned bottom-right */}
// //       <div className="absolute bottom-4 right-4">
// //         <PriceTag price={price} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default BigServiceCard;

// import React from "react";
// import PriceTag from "./PriceTag";

// interface BigServiceCardProps {
//   image: string;
//   price: string;
// }

// const BigServiceCard: React.FC<BigServiceCardProps> = ({ image, price }) => {
//   return (
//     <div
//       className="
//         relative
//         rounded-2xl
//         overflow-hidden
//         w-full
//         aspect-w-4 aspect-h-3
//         transition-transform
//         hover:scale-105
//         bg-cover bg-center bg-no-repeat
//         max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
//       "
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* PriceTag positioned bottom-right */}
//       <div className="absolute bottom-4 right-4">
//         <PriceTag price={price} />
//       </div>
//     </div>
//   );
// };

// export default BigServiceCard;
import React from "react";
import PriceTag from "./PriceTag";

interface BigServiceCardProps {
  image: string;
  price: number;
  name?: string;
  description?: string;
}

const BigServiceCard: React.FC<BigServiceCardProps> = ({ 
  image, 
  price,
  name,
  description 
}) => {
  return (
    <div 
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full min-h-[400px]"
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
        {name && <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>}
        {description && <p className="text-white/90 mb-4">{description}</p>}
        <PriceTag price={price} />
      </div>
    </div>
  );
};

export default BigServiceCard;