import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex flex-row justify-between items-center h-16 px-[10vw] bg-[var(--sec-color)] text-white">
      <Link to="/">
        <p className="font-bold">unimart</p>
      </Link>

      <nav>
        <ul className="flex flex-row gap-32">
          <Link to="/products">
            <li className="">Shop</li>
          </Link>
          <Link to="/services">
            <li className="">Hire</li>
          </Link>
          <Link to="/dashboard">
            <li className="">Sell</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
