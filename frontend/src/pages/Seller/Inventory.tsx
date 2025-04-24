import React from "react";
import SideNav from "../../components/Seller/SideNav";
import SideBar from "../../components/Seller/SideBar";
import SellerHeader from "../../components/Seller/SellerHeader";
import { anita } from "../../assets/photos";
import StatusBox from "../../components/Seller/StatusBox";
import List from "../../components/Seller/List";
import SellerButton from "../../components/Seller/SellerButton";
// import ListItem from "../../components/Seller/ListItem";

const Inventory = () => {
  const ListHeader: string[] = [
    "Product ID",
    "Product name",
    "Instock",
    "Status",
    "Date Listed",
  ];

  const ListItems: string[] = [
    "1234567",
    "Jordan 1",
    "x20",
    "unfulfilled",
    "2023-10-01",
  ];

  return (
    <div className="h-screen flex">
      <SideNav />
      {/* ---------------------- */}
      <section className=" w-[58%] h-full p-10">
        <SellerHeader
          username="User"
          image={anita}
          sellerType="Student Business"
        />
        <div className=" w-full flex justify-between items-center mb-8">
          <div className="flex gap-8">
            <StatusBox status="Inventory" statusValue="20" />
            <StatusBox status="Low Stock" statusValue="5" />
          </div>
          <div className="flex gap-8">
            <p>Filter</p>
            <p>Sort</p>
          </div>
        </div>
        <List headers={ListHeader} data={ListItems} />
      </section>
      {/* ---------------------- */}
      <div className=" w-[25%] flex flex-col justify-center">
        <SideBar heading="Selected Product">
          <div className="flex flex-col gap-6">
            <div className=" flex justify-between items-center">
              <p className="text-lg">{"#12345"}</p>
              <p>Edit</p>
            </div>
            <div className="border-1 border-black w-full h-60"></div>
            <div className=" grid grid-cols-4 gap-4 grid-rows-2 font-bold">
              <p>Jordan 1</p>
              <p>Clothing</p>
              <p>01-01-20</p>
              <p>x20 left</p>
              <p>Medium</p>
              <p>2999 naira</p>
              <p>No discount</p>
              <p>8 orders</p>
            </div>
            <div>
              <p className="font-bold mb-2">Descrption</p>
              <p className="text-xs font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eleifend non ipsum vitae egestas. Suspendisse potenti. Etiam
                vestibulum sem quis massa rutrum, quis luctus odio
                condimentum... More
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">Delivery Options</p>
              <p className="text-xs font-extralight">
                Pickup & Doorstep delivery
              </p>
            </div>
            <div className=" flex justify-end gap-3">
              <SellerButton text="De-list" />
              <SellerButton text="Restock" />
            </div>
          </div>
        </SideBar>
      </div>
    </div>
  );
};

export default Inventory;
