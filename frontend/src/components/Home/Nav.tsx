import React from "react";

const Nav = () => {
  return (
    <nav className="hidden md:flex w-full  justify-center my-30">
      <ul className=" w-fit flex gap-16 text-md">
        <li>Sales and Discount</li>
        <li>Best Selling</li>
        <li>Services</li>
        <li>Spotlight</li>
        <li>Student Businesses</li>
        <li>All Services</li>
        <li>All Products</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Nav;
