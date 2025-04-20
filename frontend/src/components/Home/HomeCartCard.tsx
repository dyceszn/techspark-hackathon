import React from "react";
import Button from "../Button";

interface HomeCartCardProps {
  image: string;
}

const HomeCartCard: React.FC<HomeCartCardProps> = ({ image }) => {
  return (
    <div className=" bg-[var(--tertiary-color)] rounded-2xl h-fit w-100 md:w-122 md:h-72  p-6 flex flex-row">
      <div className=" w-[65%] flex flex-col justify-center items-center gap-6">
        <img className="h-32 w-auto" src={image} alt="" />
        <p className="font-bold">Product name</p>
      </div>
      <div className=" flex flex-col justify-between w-[35%]">
        <p>
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet...
        </p>
        <Button text="More" />
      </div>
    </div>
  );
};

export default HomeCartCard;
