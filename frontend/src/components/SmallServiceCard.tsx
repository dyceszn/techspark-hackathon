// // import React from "react";
// // import CategoryTag from "./CategoryTag";

// // interface SmallServiceCardProps {
// //   image1: string;
// //   image2: string;
// //   profileImage: string;
// //   description: string;
// //   name: string;
// //   price: string;
// //   categories: string[];
// // }

// // const SmallServiceCard: React.FC<SmallServiceCardProps> = ({
// //   image1,
// //   image2,
// //   profileImage,
// //   description,
// //   name,
// //   price,
// //   categories
// // }) => {
// //   return (
// //     <div
// //       className="
// //         bg-[var(--secondary-color)]
// //         rounded-2xl
// //         overflow-hidden
// //         flex
// //         flex-col
// //         w-96
// //         max-w-xl
// //         transition-transform
// //         hover:scale-105
// //         shadow-lg
// //       "
// //     >
// //       {/* Images Section */}
// //       <div className="flex">
// //         <div
// //           className="bg-cover bg-center bg-no-repeat w-1/2 h-40 rounded-bl-2xl"
// //           style={{ backgroundImage: `url(${image1})` }}
// //         ></div>
// //         <div
// //           className="bg-cover bg-center bg-no-repeat w-1/2 h-40 rounded-br-2xl"
// //           style={{ backgroundImage: `url(${image2})` }}
// //         ></div>
// //       </div>

// //       {/* Text Section */}
// //       <div className="flex justify-between px-4 py-3">
// //         {/* Left - Description */}
// //         <div className="w-1/2 pr-2">
// //           <h3 className="text-base font-semibold">
// //             {description}
// //           </h3>
// //         </div>

// //         {/* Right - Name, Avatar, Price */}
// //         <div className="flex flex-col items-end text-right space-y-1">
// //           {/* Name & Avatar */}
// //           <div className="flex items-center space-x-2">
// //             <span className="text-sm font-medium">{name}</span>
// //             <img
// //               src={profileImage}
// //               alt={name}
// //               className="w-6 h-6 rounded-full object-cover"
// //             />
// //           </div>

// //           {/* Tags */}
// //           <div className="flex space-x-2">
// //             {categories.map((category, index) => (
// //               <span
// //                 key={index}
// //                 className="px-2 py-1 bg-white/30 rounded-full text-xs"
// //               >
// //                 <CategoryTag category={category} color="[var(--tertiary-color)]"/>
// //               </span>
// //             ))}
// //           </div>

// //           {/* Price */}
// //           <span className="text-sm font-bold">~ {price} naira</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SmallServiceCard;


// // // import React from "react";
// // // import { aishat } from "../assets/photos";
// // // import { yara } from "../assets/photos";
// // // import CategoryTag from "./CategoryTag";

// // // const SmallServiceCard = () => {
// // //   return (
// // //     <div
// // //       className="
// // //         bg-[var(--secondary-color)]
// // //         rounded-2xl
// // //         overflow-hidden
// // //         flex
// // //         flex-col
// // //         w-80
// // //         max-w-md
// // //         min-h-[10rem]
// // //         transition-transform
// // //         hover:scale-105
// // //         shadow-lg
// // //       "
// // //     >
// // //       {/* Images Section */}
// // //       <div className="flex">
// // //         <img
// // //           src={aishat}
// // //           alt="Aishat Photo"
// // //           className="w-1/2 h-auto max-h-20 object-contain bg-white rounded-br-2xl"
// // //         />
// // //       </div>

// // //       {/* Text Section */}
// // //       <div className="flex justify-between px-3 py-2">
// // //         {/* Left - Description */}
// // //         <div className="w-1/2 pr-2">
// // //           <h3 className="text-sm font-medium">
// // //             From basic to bold. Let’s make your hair stand out.
// // //           </h3>
// // //         </div>

// // //         {/* Right - Name, Avatar, Tags, Price */}
// // //         <div className="flex flex-col items-end text-right space-y-1">
// // //           {/* Name & Avatar */}
// // //           <div className="flex items-center space-x-1">
// // //             <span className="text-xs font-medium">Shalom Jamime</span>
// // //             <img
// // //               src={aishat}
// // //               alt="Shalom Jamime"
// // //               className="w-5 h-5 rounded-full object-cover"
// // //             />
// // //           </div>

// // //           {/* Tags */}
// // //           <div className="flex space-x-1">
// // //             <CategoryTag category="Beauty" color="[var(--tertiary-color)]" />
// // //             <CategoryTag category="Art" color="[var(--tertiary-color)]" />
// // //           </div>

// // //           {/* Price */}
// // //           <span className="text-xs font-bold">~ 2,999 naira</span>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SmallServiceCard;


// // src/components/SmallServiceCard.tsx
// import React from "react";
// import CategoryTag from "./CategoryTag";

// interface SmallServiceCardProps {
//   image1: string;
//   image2: string;
//   profileImage: string;
//   description: string;
//   name: string;
//   price: string;
//   categories: string[];
// }

// const SmallServiceCard: React.FC<SmallServiceCardProps> = ({
//   image1,
//   image2,
//   profileImage,
//   description,
//   name,
//   price,
//   categories,
// }) => {
//   return (
//     <div
//       className="
//         bg-[var(--secondary-color)]
//         rounded-2xl
//         overflow-hidden
//         flex
//         flex-col
//         w-full
//         max-w-xs
//         sm:max-w-sm
//         md:max-w-md
//         transition-transform
//         hover:scale-105
//         shadow-lg
//       "
//     >
//       {/* Images Section */}
//       <div className="grid grid-cols-2 h-40 sm:h-48">
//         <div
//           className="bg-cover bg-center rounded-bl-2xl"
//           style={{ backgroundImage: `url(${image1})` }}
//         />
//         <div
//           className="bg-cover bg-center rounded-br-2xl"
//           style={{ backgroundImage: `url(${image2})` }}
//         />
//       </div>

//       {/* Text & Meta Section */}
//       <div className="flex flex-col sm:flex-row justify-between px-4 py-3 space-y-2 sm:space-y-0 sm:space-x-4">
//         {/* Left: Description */}
//         <div className="flex-1">
//           <h3 className="text-sm sm:text-base font-semibold line-clamp-2">
//             {description}
//           </h3>
//         </div>

//         {/* Right: User + Tags + Price */}
//         <div className="flex flex-col items-end text-right space-y-1">
//           {/* Name & Avatar */}
//           <div className="flex items-center space-x-2">
//             <span className="text-xs sm:text-sm font-medium">{name}</span>
//             <img
//               src={profileImage}
//               alt={name}
//               className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
//             />
//           </div>

//           {/* Category Tags */}
//           <div className="flex flex-wrap justify-end gap-1">
//             {categories.map((cat, idx) => (
//               <CategoryTag
//                 key={idx}
//                 category={cat}
//                 color="[var(--tertiary-color)]"
//               />
//             ))}
//           </div>

//           {/* Price */}
//           <span className="text-sm sm:text-base font-bold">
//             ~ {price} naira
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmallServiceCard;
import React from "react";
import CategoryTag from "./CategoryTag";

interface SmallServiceCardProps {
  image1: string;
  image2: string;
  profileImage: string;
  description: string;
  name: string;
  price: number;
  categories?: string[];
}

const SmallServiceCard: React.FC<SmallServiceCardProps> = ({
  image1,
  image2,
  profileImage,
  description,
  name,
  price,
  categories = []
}) => {
  return (
    <div className="bg-[var(--secondary-color)] rounded-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02] shadow-lg">
      <div className="flex">
        <div
          className="w-1/2 h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        />
        <div
          className="w-1/2 h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image2})` }}
        />
      </div>
      
      <div className="p-4 flex justify-between">
        <div className="w-1/2 pr-2">
          <h3 className="text-lg font-semibold">{description}</h3>
        </div>
        
        <div className="w-1/2 flex flex-col items-end">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium">{name}</span>
            <img
              src={profileImage}
              alt={name}
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((category, index) => (
              <CategoryTag key={index} category={category} color="[var(--tertiary-color)]" />
            ))}
          </div>
          
          <span className="text-lg font-bold">~{price} NGN</span>
        </div>
      </div>
    </div>
  );
};

export default SmallServiceCard;