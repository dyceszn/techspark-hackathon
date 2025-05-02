import React, { useState } from "react";
import {
  SideNav,
  SideBar,
  SellerHeader,
  SellerButton,
  StatusBox,
  ImageGrid,
  List,
} from "../../components/Seller";
import { phio } from "../../assets/photos";
import { nail1, nail2, nail3, nail4, nail5 } from "../../assets/images";
import { seller } from "../../data/SellerDummyData";

const Orders = () => {
  // State to manage the selected order ID from List
  const [selectedOrderID, setSelectedOrderID] = useState<string | null>(null);
  // Header for Order List
  const ListHeader: string[] = [
    "Order ID",
    "Item name",
    "Customer",
    // "Quantity",
    "Status",
    "Date Ordered",
  ];

  // Function to get selected orderID from the clicked list item
  const handleItemClick = (orderID: string) => {
    setSelectedOrderID(orderID);
  };

  // Get the selected order item based on the selectedOrderID
  const selectedItem = seller.orders.find(
    (item) => item.orderID === selectedOrderID
  );

  // This Object takes the necessary values needed for the List
  const OrdersObject = seller.orders.map((order) => ({
    orderID: order.orderID,
    product: order.itemName,
    customer: order.customer.name,
    // quantity: order.quantity,
    status: order.status,
    dateListed: order.dateListed,
  }));

  // Get the total number of unfulfilled orders, and completed orders for the StatusBox Component
  const unfulfilledOrders = seller.orders.filter(
    (order) => order.status === "unfulfilled"
  ).length;
  const completedOrders = seller.orders.filter(
    (order) => order.status === "fulfilled"
  ).length;

  // Functions to handle mark as shipped and mark as fulfilled
  const handleMarkAsShipped = () => {
    // TODO: Pass orderID as parameter for handling
    // TODO: Logic to mark the order as shipped
  };
  const handleMarkAsFulfilled = () => {
    // TODO: Pass orderID as parameter for handling
    // TODO: Logic to mark the order as fulfilled
  };

  // Function to handle filter and sort
  const handleFilter = () => {
    // TODO: Logic to filter
  };
  const handleSort = () => {
    // TODO: Logic to sort
  };

  // Render:
  return (
    <div className="seller-page h-screen flex">
      {/* ----------Side Navigation------------ */}
      <SideNav SellerType={seller.profile.sellerType} />
      {/* ---------- Main Container------------ */}
      <section className=" w-[60%] h-full p-10 flex flex-col">
        <SellerHeader
          heading="Orders"
          image={phio} // TODO: Set default Image to the Image Url in the seller data instead of phio
          sellerType={seller.profile.sellerType}
        />
        <div className=" w-full flex justify-between items-center mb-8">
          <div className="flex gap-8">
            <StatusBox
              status="Unfulfilled Orders"
              statusValue={unfulfilledOrders}
            />
            <StatusBox
              status="Completed Orders"
              statusValue={completedOrders}
            />
          </div>
          <div className="flex gap-8">
            {/* TODO: Add filter options */}
            <select name="Filter" id="" onChange={handleFilter}>
              <option value="Filter">Filter</option>
              <option value="Category">Unfulfilled</option>
              <option value="Orders">Pending</option>
              <option value="Date Listed">Fulfilled</option>
            </select>
            {/* TODO: Add sort options */}
            <select name="Sort" id="" onChange={handleSort}>
              <option value="Sort">Sort</option>
              <option value="Category">Most Recent</option>
              <option value="Orders">Alphabetically</option>
              <option value="Date Listed">Lowest to Highest</option>
              <option value="Date Listed">Highest to Lowest</option>
            </select>
          </div>
        </div>
        <div className=" flex-grow overflow-y-auto">
          <List
            headers={ListHeader}
            data={OrdersObject}
            onItemClick={handleItemClick}
            itemType="order"
          />
        </div>
      </section>
      {/* ----------- Side Container----------- */}
      <div className=" w-[25%] flex flex-col justify-center">
        <SideBar heading="Selected Order">
          {!selectedItem && (
            <div className="flex items-center justify-center h-96">
              <p className="text-2xl opacity-30">No items selected yet</p>
            </div>
          )}
          {selectedItem && (
            <div className="flex flex-col gap-8">
              <div className=" flex justify-between items-center">
                <p className="text-lg">{selectedItem.orderID}</p>
              </div>
              {/* -------Image Grid------- */}
              <ImageGrid
                image1={nail4} // TODO: Replace with selectedItem.image
                image2={nail2} // TODO: Replace with selectedItem.image
                image3={nail1} // TODO: Replace with selectedItem.image
                image4={nail3} // TODO: Replace with selectedItem.image
                image5={nail5} // TODO: Replace with selectedItem.image
              />
              <div className="grid grid-cols-2 gap-3 grid-rows-7 font-bold">
                <p>
                  Product name:{" "}
                  <span className="font-extralight">
                    {selectedItem.itemName}
                  </span>
                </p>
                <p>
                  Customer:{" "}
                  <span className="font-extralight">
                    {selectedItem.customer.name}
                  </span>
                </p>
                <p>
                  Category:{" "}
                  <span className="font-extralight">
                    {selectedItem.category}
                  </span>
                </p>
                <p>
                  Customer Number:{" "}
                  <span className="font-extralight">
                    {selectedItem.customer.number}
                  </span>
                </p>
                {seller.profile.sellerType === "Student Business" && (
                  <p>
                    Quantity:{" "}
                    <span className="font-extralight">
                      {selectedItem.quantity}
                    </span>
                  </p>
                )}

                <p>
                  Customer Email:{" "}
                  <span className="font-extralight">
                    {selectedItem.customer.email}
                  </span>
                </p>
                <p>
                  Date ordered:{" "}
                  <span className="font-extralight">
                    {selectedItem.dateListed}
                  </span>
                </p>
                <p>
                  Delivery Choice:{" "}
                  <span className="font-extralight">
                    {selectedItem.customer.deliveryChoice}
                  </span>
                </p>
                <p>
                  Total price:{" "}
                  <span className="font-extralight">
                    {selectedItem.totalPrice}
                  </span>
                </p>
                <p>
                  Logistic Provider:{" "}
                  <span className="font-extralight">
                    {selectedItem.customer.logistics}
                  </span>
                </p>
                <p>
                  Discount:{" "}
                  <span className="font-extralight">
                    {selectedItem.discount}
                  </span>
                </p>
                <p>
                  Customer Address:{" "}
                  <span className="font-extralight">
                    {selectedItem.customer.deliveryAddress}
                  </span>
                </p>
                <p>
                  Status:{" "}
                  <span className="font-extralight">{selectedItem.status}</span>
                </p>
              </div>
              <div className=" flex justify-end gap-3">
                <SellerButton
                  text="Mark as Shipped"
                  onClick={handleMarkAsShipped}
                />
                <SellerButton
                  text="Mark as Fulfilled"
                  onClick={handleMarkAsFulfilled}
                />
              </div>
            </div>
          )}
        </SideBar>
      </div>
    </div>
  );
};

export default Orders;
