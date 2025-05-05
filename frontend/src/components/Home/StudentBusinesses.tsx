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
    <div
      id="studentbusinesses"
      className=" w-full h-fit flex flex-col lg:flex-row justify-center gap-24 my-20 md:my-40"
    >
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
