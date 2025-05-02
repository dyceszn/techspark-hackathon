import React from "react";

interface SideBarProps {
  heading: string;
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ heading, children }) => {
  return (
    <div className="border-l-1 border-black h-max px-8 ">
      <p className="mb-16 text-xl font-semibold">{heading}</p>
      {children}
    </div>
  );
};

export default SideBar;
