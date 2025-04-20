import React from "react";

const Header = () => {
  return (
    <div className=" flex flex-row justify-between items-center h-16 px-[10vw] bg-[var(--sec-color)] text-white">
      <p className="font-bold">G5 Project</p>

      <nav>
        <ul className="flex flex-row w-48 justify-between">
          <li className="">Shop</li>
          <li className="">Sell</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
