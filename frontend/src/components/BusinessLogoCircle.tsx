import React from "react";

interface BusinessLogoCircleProps {
  logo: string;
}

const BusinessLogoCircle: React.FC<BusinessLogoCircleProps> = ({ logo }) => {
  return (
    <div className=" size-14 lg:size-18 rounded-full flex justify-center items-center bg-[var(--tertiary-color)]">
      <img className="h-8 lg:h-10 w-auto" src={logo} alt="" />
    </div>
  );
};

export default BusinessLogoCircle;
