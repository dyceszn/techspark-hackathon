import React from "react";
import SellerTag from "./SellerTag";

interface SellerHeaderProps {
  username: string;
  image: string;
  sellerType: string;
}

const SellerHeader: React.FC<SellerHeaderProps> = ({
  username,
  image,
  sellerType,
}) => {
  return (
    <div className=" flex justify-between w-full items-center mb-28">
      <p className="text-2xl">Hi {username},</p>
      <div className=" flex items-center w-fit h-12">
        <SellerTag sellerType={sellerType} />
        <img
          className=" ml-4 bg-[var(--tertiary-color)] rounded-full h-full aspect-square"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default SellerHeader;
