import React from "react";
import SideNav from "../../components/Seller/SideNav";
import SideBar from "../../components/Seller/SideBar";
import SellerHeader from "../../components/Seller/SellerHeader";
import { anita } from "../../assets/photos";
import StatusBox from "../../components/Seller/StatusBox";
import List from "../../components/Seller/List";
import SellerButton from "../../components/Seller/SellerButton";

const Orders = () => {
  const ListHeader: string[] = [
    "Order ID",
    "Item name",
    "Customer",
    "Quantity",
    "Status",
    "Date Listed",
  ];
  const ListItems: string[] = [
    "1234567",
    "Jordan 1",
    "John Doe",
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
            <StatusBox status="Active Orders" statusValue="20" />
            <StatusBox status="Unfulfilled Orders" statusValue="5" />
            <StatusBox status="Completed Orders" statusValue="5" />
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
            <div className="border-1 border-black grid grid-cols-2 gap-1 grid-rows-7 font-bold">
              <p>Product name</p>
              <p>Customer</p>
              <p>Category</p>
              <p>Customer Number</p>
              <p>Quantity</p>
              <p>Customer Email</p>
              <p>Date ordered</p>
              <p>Delivery Choice</p>
              <p>Total price</p>
              <p>Logistic Provider</p>
              <p>Discount</p>
              <p>Customer Address</p>
              <p>Status</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eleifend non ipsum vitae egestas.
              </p>
            </div>
            <div className=" flex justify-end gap-3">
              <SellerButton text="Mark as Shipped" />
              <SellerButton text="Mark as Completed" />
            </div>
          </div>
        </SideBar>
      </div>
    </div>
  );
};

export default Orders;
