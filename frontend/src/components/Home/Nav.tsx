import React from "react";
import { Link as RouterLink } from "react-router-dom"; // Renaming react-router-dom Link
import { Link as ScrollLink } from "react-scroll"; // Renaming react-scroll Link

const Nav = () => {
  return (
    <nav className="hidden md:flex w-full justify-center my-30">
      <ul className="w-fit flex gap-16 text-md">
        <ScrollLink to="salesanddiscount" smooth={true} duration={500}>
          <li className="cursor-pointer">Sales and Discount</li>
        </ScrollLink>
        <ScrollLink to="bestselling" smooth={true} duration={500}>
          <li className="cursor-pointer">Best Selling</li>
        </ScrollLink>
        <ScrollLink to="bookacreative" smooth={true} duration={500}>
          <li className="cursor-pointer">Services</li>
        </ScrollLink>
        <ScrollLink to="spotlight" smooth={true} duration={500}>
          <li className="cursor-pointer">Spotlight</li>
        </ScrollLink>
        <ScrollLink to="studentbusinesses" smooth={true} duration={500}>
          <li className="cursor-pointer">Student Businesses</li>
        </ScrollLink>
        <RouterLink to="/services">
          <li>All Services</li>
        </RouterLink>
        <RouterLink to="/products">
          <li>All Products</li>
        </RouterLink>
        <ScrollLink to="mycart" smooth={true} duration={500}>
          <li className="cursor-pointer">Cart</li>
        </ScrollLink>
      </ul>
    </nav>
  );
};

export default Nav;
