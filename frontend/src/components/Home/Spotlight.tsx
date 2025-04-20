// import { FC } from "react";
// import { aishat, ben, anita, yara } from "../../assets/photos";

// const Spotlight: FC = () => {
//   const profiles = [
//     {
//       id: 1,
//       name: "Anita Oshowale",
//       role: "Fashion Designer",
//       image: anita,
//       description: "mass comm girlie modeling her message one pose at a time",
//       icon: "fas fa-code",
//     },
//     {
//       id: 2,
//       name: "Aishat Adewale",
//       role: "Digital Artist",
//       image: aishat,
//       description: "makeup artist serving looks and breaking rules",
//       icon: "fas fa-code",
//     },
//     {
//       id: 3,
//       name: "Ben Michael",
//       role: "Photographer",
//       image: ben,
//       description: "writing pseudocode  by night, capturing moments by day",
//       icon: "fas fa-code",
//     },
//     {
//       id: 4,
//       name: "Yara Chinaza",
//       role: "Web Developer",
//       image: yara,
//       description: "creating fashion that speak louder than words.",
//       icon: "fas fa-code",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-gray-900 mb-10">SPOTLIGHT</h2>
//         <p className="ml-11 justify-center">Putting talent where they belong</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {profiles.map((profile) => (
//             <div
//               key={profile.id}
//               className="relative group cursor-pointer overflow-hidden rounded-xl"
//             >
//               <div className="relative h-80">
//                 <img
//                   src={profile.image}
//                   alt={profile.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
//                   <div className="flex items-center mb-3">
//                     <i className={`${profile.icon} text-2xl mr-3`}></i>
//                     <h3 className="text-xl font-semibold">{profile.name}</h3>
//                   </div>
//                   <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
//                     {profile.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
//             View All profiles
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Spotlight;

import React from "react";
import { aishat, anita, ben, yara } from "../../assets/photos";

const Spotlight = () => {
  return (
    <div className=" w-full flex flex-col items-center my-32 md:my-58">
      <div className=" flex justify-between items-center mb-16 md:mb-32 w-full">
        <p className="text-3xl font-bold">Spotlight</p>
        <p className="text-2xl hidden lg:block">
          Putting talent where they belong
        </p>
      </div>
      <div className=" overflow-x-scroll w-full">
        <div className="flex w-fit lg:grid lg:grid-cols-4 lg:grid-rows-1 gap-5 lg:w-fit">
          {/* Spotllight 1 */}

          <div className="w-92 h-144 bg-[var(--tertiary-color)] rounded-2xl relative font-[Montserrat]">
            <img
              className="h-full w-auto object-cover rounded-2xl"
              src={anita}
              alt=""
            />

            {/* Black overlay with 50% opacity */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

            {/* Content on top of the image */}
            <div className=" absolute inset-0 flex flex-col justify-start text-white p-8 gap-2">
              <p className=" text-2xl font-bold">Anita Oshowale</p>
              <p className=" w-62 text-md font-extralight">
                mass comm girlie her message one pose at a time{" "}
                <span
                  className="font-semibold"
                  style={{ fontFamily: "var(--sixth-font)" }}
                >
                  modeling{" "}
                </span>{" "}
                her message one pose at a time
              </p>
            </div>
          </div>

          {/* Spotllight 2 */}

          <div className="w-92 h-144 bg-[var(--tertiary-color)] rounded-2xl lg:mt-36 relative font-[Montserrat]">
            <img
              className="h-full w-auto object-cover rounded-2xl"
              src={aishat}
              alt=""
            />

            {/* Black overlay with 50% opacity */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

            {/* Content on top of the image */}
            <div className=" absolute inset-0 flex flex-col justify-end text-white p-8 gap-2">
              <p className=" text-2xl font-bold">Aishat Adewale</p>
              <p className=" w-64 text-lg font-extralight">
                makeup{" "}
                <span style={{ fontFamily: "var(--third-font)" }}>artist</span>{" "}
                serving looks and breaking rules
              </p>
            </div>
          </div>

          {/* Spotllight 3 */}

          <div className="w-92 h-144 bg-[var(--tertiary-color)] rounded-2xl relative font-[Montserrat]">
            <img
              className="h-full w-auto object-cover rounded-2xl"
              src={ben}
              alt=""
            />

            {/* Black overlay with 50% opacity */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

            {/* Content on top of the image */}
            <div className=" absolute inset-0 flex flex-col justify-start items-end text-white p-8 gap-2">
              <p className=" text-2xl font-bold">Ben Micheal</p>
              <p className=" w-62 text-md font-extralight text-right">
                writing pseudocode by night, capturing{" "}
                <span style={{ fontFamily: "var(--fifth-font)" }}>
                  moments{" "}
                </span>{" "}
                by day
              </p>
            </div>
          </div>

          {/* Spotllight 4 */}

          <div className="w-92 h-144 bg-[var(--tertiary-color)] rounded-2xl lg:mt-36 relative font-[Montserrat]">
            <img
              className="h-full w-auto object-cover rounded-2xl"
              src={yara}
              alt=""
            />

            {/* Black overlay with 50% opacity */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

            {/* Content on top of the image */}
            <div className=" absolute inset-0 flex flex-col justify-end text-white p-8 gap-2">
              <p className=" text-2xl font-bold">Yara Chinaza</p>
              <p className=" w-58 text-lg font-extralight">
                creating{" "}
                <span style={{ fontFamily: "var(--fourth-font)" }}>
                  fashion{" "}
                </span>{" "}
                that speak louder than words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
