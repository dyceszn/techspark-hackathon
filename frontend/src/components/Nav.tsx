import React from "react";

const Nav = () => {
  return (
    <nav className="hidden md:flex justify-center w-fit">
      <ul className=" w-fit flex gap-8 text-md">
        <li>Clothing</li>
        <li>Technology</li>
        <li>Beauty</li>
        <li>Care</li>
        <li>Food & snacks</li>
        <li>Accessories</li>
        <li>Fitness</li>
        <li>Stationery</li>
        <li>Decor</li>
        <li>Hygiene</li>
      </ul>
    </nav>
  );
};

export default Nav;
