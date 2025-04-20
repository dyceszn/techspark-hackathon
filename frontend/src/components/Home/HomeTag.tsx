import React from "react";

interface HomeTagProps {
  icon: string;
  text: string;
}

const HomeTag: React.FC<HomeTagProps> = ({ icon, text }) => {
  return (
    <div className=" px-4 py-2 rounded-full bg-[var(--primary-color)] flex w-fit items-center gap-2">
      <img className="size-4" src={icon} alt="" />
      <p className="text-xs lg:text-md">{text}</p>
    </div>
  );
};

export default HomeTag;
