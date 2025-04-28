import React from "react";
import SellerTag from "./SellerTag";
import { Link } from "react-router-dom";

interface SellerHeaderProps {
  heading: string;
  image: string;
  sellerType: string;
}

const SellerHeader: React.FC<SellerHeaderProps> = ({
  heading,
  image,
  sellerType,
}) => {
  return (
    <div className=" flex justify-between w-full items-center mb-28">
      <p className="text-2xl">{heading}</p>
      <div className=" flex items-center w-fit h-12">
        <SellerTag text={sellerType} />
        <div className="ml-4 bg-[var(--tertiary-color)] rounded-full h-full aspect-square">
          <Link to="/seller/profile">
            <img
              className="rounded-full h-full aspect-square"
              src={image}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
