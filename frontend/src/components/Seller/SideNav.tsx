import React from "react";
import { Link } from "react-router";
import {
  dashboard,
  inventory,
  logout,
  orders,
  profile,
  shop,
  wallet,
} from "../../assets/icons";

const SideNav = () => {
  return (
    <div className="bg-[var(--tertiary-color)] h-screen w-[17%] flex flex-col px-8 py-4 items-center">
      <p className="text-lg w-full ">G5 PROJECT</p>
      {/* ----------------- */}
      <div className=" w-[80%] flex flex-col gap-16 items-center mt-20 font-light">
        <p className="text-xs font-extralight w-full">Overview</p>
        <ul className=" flex flex-col gap-14 text-md w-[80%]">
          <Link to="/dashboard">
            <li className="flex gap-3 items-center text-[0.9rem]">
              <img className="size-6" src={dashboard} alt="" /> Dashboard
            </li>
          </Link>
          <Link to="/inventory">
            <li className="flex gap-3 items-center text-[0.9rem]">
              <img className="size-6" src={inventory} alt="" /> Inventory
            </li>
          </Link>
          <Link to="/orders">
            <li className="flex gap-3 items-center text-[0.9rem]">
              <img className="size-6" src={orders} alt="" /> Orders
            </li>
          </Link>
          <Link to="/wallet">
            <li className="flex gap-3 items-center text-[0.9rem]">
              <img className="size-6" src={wallet} alt="" /> Wallet
            </li>
          </Link>
          <Link to="">
            <li className="flex gap-3 items-center text-[0.9rem]">
              <img className="size-6" src={profile} alt="" /> Profile
            </li>
          </Link>
        </ul>
        <p className="text-xs font-extralight w-full">Others</p>
        <ul className=" flex flex-col gap-14 text-md w-[80%]">
          <Link to="/">
            <li className="flex gap-3 items-center text-[0.9rem]">
              <img className="size-6" src={shop} alt="" /> Shop
            </li>
          </Link>

          <li className="flex gap-3 items-center text-[0.9rem]">
            <img className="size-6" src={logout} alt="" /> Log Out
          </li>
        </ul>
      </div>
      {/* ----------------- */}
      <p className="mt-auto text-xs">©️ G5 2025. All rights reserved.</p>
    </div>
  );
};

export default SideNav;
