import React from "react";
import {
  logo1,
  logo10,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  pauLogo,
} from "../../assets/logos";
import BusinessLogoCircle from "./BusinessLogoCircle";

// const StudentBusinesses: FC = () => {
//   const businesses = [
//     { id: 1, name: "Business 1", logo: logo1 },
//     { id: 2, name: "Business 2", logo: logo2 },
//     { id: 3, name: "Business 3", logo: logo3 },
//     { id: 4, name: "Business 4", logo: logo4 },
//     { id: 5, name: "Business 5", logo: logo5 },
//     { id: 6, name: "Business 6", logo: logo6 },
//     { id: 7, name: "Business 7", logo: logo7 },
//     { id: 8, name: "Business 8", logo: logo8 },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between mb-12">
//           <div className="mb-6 md:mb-0 w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
//             <img
//               src={pauLogo}
//               alt="PAU Logo"
//               className="h-80 w-full object-contain"
//             />
//           </div>
//           <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
//             <p className="text-gray-600">
//               Some registered student businesses...
//             </p>
//             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
//               {businesses.map((business) => (
//                 <div
//                   key={business.id}
//                   className="aspect-square bg-white rounded-xl p-1 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <img
//                     src={business.logo}
//                     alt={business.name}
//                     className="w-8 h-8 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-gray-600 text-sm">
//             Join over 200+ student businesses already on our platform
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudentBusinesses;

const StudentBusinesses = () => {
  const businesses = [
    { id: 1, name: "Business 1", logo: logo1 },
    { id: 2, name: "Business 2", logo: logo2 },
    { id: 3, name: "Business 3", logo: logo3 },
    { id: 4, name: "Business 4", logo: logo4 },
    { id: 5, name: "Business 5", logo: logo5 },
    { id: 6, name: "Business 6", logo: logo6 },
    { id: 7, name: "Business 7", logo: logo7 },
    { id: 8, name: "Business 8", logo: logo8 },
    { id: 9, name: "Business 9", logo: logo9 },
    { id: 10, name: "Business 10", logo: logo10 },
  ];

  return (
    <div className=" w-full h-fit flex flex-col lg:flex-row justify-between my-20 md:my-40">
      <div className=" w-fit h-fit">
        <img
          className="h-full  lg:h-120 w-auto rounded-3xl bg-[var(--tertiary-color)]"
          src={pauLogo}
          alt=""
        />
      </div>
      <div className=" w-fit h-fit mt-8 lg:mt-56 flex flex-col justify-center items-center lg:items-start">
        <p className=" text-xl mb-16 font-bold text-center lg:text-left p-4 lg:p-0">
          Join over 70+ student businesses on our platform…
        </p>
        <div className=" grid grid-cols-3 grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 gap-4">
          {businesses.map((business, i) => (
            <div key={business.id} className={i >= 9 ? "hidden  lg:block" : ""}>
              <BusinessLogoCircle logo={business.logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentBusinesses;
