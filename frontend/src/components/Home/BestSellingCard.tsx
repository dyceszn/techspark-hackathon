import React from "react";
import HomeTag from "./HomeTag";
import { best } from "../../assets/icons";

interface BestSellingCardProps {
  image: string;
  purchases: string;
}

const BestSellingCard: React.FC<BestSellingCardProps> = ({
  image,
  purchases,
}) => {
  return (
    <div className=" bg-[var(--tertiary-color)] rounded-2xl h-fit md:w-80 w-48 p-4 flex flex-col">
      <div className=" flex items-center justify-center p-2">
        <img className=" h-18 lg:h-40 w-auto" src={image} alt="" />
      </div>

      <div className="">
        <HomeTag icon={best} text={purchases} />
      </div>
    </div>
  );
};

export default BestSellingCard;
