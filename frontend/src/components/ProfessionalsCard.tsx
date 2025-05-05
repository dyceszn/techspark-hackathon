// // // import React from 'react';
// // // import { ben } from '../assets/photos';
// // // // import NameTag from './NameTag';

// // // // interface ProfessionalsCardProps {
// // // //   name: string;
// // // //   image: string;
// // // //   description: string;
// // // //   categories: string;
// // // // }

// // // const ProfessionalsCard = () => {
// // //   return (
// // //     <div
// // //       className="
// // //         bg-[var(--tertiary-color)]
// // //         rounded-2xl
// // //         overflow-hidden
// // //         flex
// // //         flex-col
// // //         w-3xs
// // //         max-w-xs
// // //         sm:max-w-sm
// // //         md:max-w-md
// // //         lg:max-w-lg
// // //         min-h-[20rem]
// // //         transition-transform
// // //         hover:scale-105
// // //       "
// // //     >
// // //         <div
// // //         className="
// // //           relative
// // //           flex-1
// // //           w-full
// // //           bg-cover
// // //           bg-center
// // //           p-3
         
// // //         "
// // //       >
// // //             <div className='h-full'
// // //             style={{ backgroundImage: `url(${ben})` }}>

// // //             </div>
// // //         </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProfessionalsCard;

// // import React from 'react';
// // import CategoryTag from './CategoryTag';

// // interface ProfessionalsCardProps {
// //   name: string;
// //   imageSrc: string;
// //   description: string;
// //   categories?: string[];
// // }

// // const ProfessionalsCard: React.FC<ProfessionalsCardProps> = ({
// //   name,
// //   imageSrc,
// //   description,
// //   categories = [],
// // }) => {
// //   return (
// //     <div
// //       className="
// //         bg-[var(--tertiary-color)]
// //         rounded-2xl
// //         overflow-hidden
// //         flex
// //         flex-col
// //         w-3xs
// //         max-w-xs
// //         sm:max-w-sm
// //         md:max-w-md
// //         lg:max-w-lg
// //         min-h-[20rem]
// //         transition-transform
// //         hover:scale-105
// //         shadow-lg
// //       "
// //     >
// //       {/* Profile Image */}
// //       <div className="flex justify-center p-4">
// //         <img
// //           src={imageSrc}
// //           alt={name}
// //           className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
// //         />
// //       </div>

// //       {/* Content Section */}
// //       <div className="flex-1 flex flex-col items-center text-center p-4">
// //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
// //         <p className="text-gray-600 text-sm mb-4">{description}</p>

// //         {/* Render any number of category tags */}
// //         {categories.length > 0 && (
// //           <div className="flex flex-wrap justify-center gap-2">
// //             {categories.map((cat, idx) => (
// //               <CategoryTag key={idx} category={cat} color='white' />
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfessionalsCard;
// import React from "react";
// import CategoryTag from "./CategoryTag";

// interface ProfessionalsCardProps {
//   name: string;
//   imageSrc: string;
//   description: string;
//   categories?: string[];
// }

// const ProfessionalsCard: React.FC<ProfessionalsCardProps> = ({
//   name,
//   imageSrc,
//   description,
//   categories = [],
// }) => {
//   return (
//     <div
//       className="
//         relative
//         bg-[var(--tertiary-color)]
//         rounded-2xl
//         overflow-hidden
//         flex flex-col
//         w-full
//         aspect-w-3 aspect-h-4
//         transition-transform
//         hover:scale-105
//         shadow-lg
//       "
//     >
//       {/* Profile Image */}
//       <div className="flex justify-center p-4">
//         <img
//           src={imageSrc}
//           alt={name}
//           className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
//         />
//       </div>

//       {/* Content Section */}
//       <div className="flex-1 flex flex-col items-center text-center p-4">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//           {name}
//         </h3>
//         <p className="text-gray-600 text-sm mb-4">
//           {description}
//         </p>

//         {/* Category Tags */}
//         {categories.length > 0 && (
//           <div className="flex flex-wrap justify-center gap-2">
//             {categories.map((cat, idx) => (
//               <CategoryTag key={idx} category={cat} color="white" />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProfessionalsCard;

import React from "react";
import CategoryTag from "./CategoryTag";

interface ProfessionalsCardProps {
  name: string;
  imageSrc: string;
  description: string;
  categories?: string[];
}

const ProfessionalsCard: React.FC<ProfessionalsCardProps> = ({
  name,
  imageSrc,
  description,
  categories = []
}) => {
  return (
    <div className="bg-[var(--tertiary-color)] rounded-2xl h-85 max-h-125 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6 flex flex-col items-center">
        <img
          src={imageSrc}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-white mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-center text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <CategoryTag 
              key={index} 
              category={category} 
              color="[var(--primary-color)]" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsCard;