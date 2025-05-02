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

const Inventory = () => {
  // State to manage the selected product ID from List
  const [selectedProductID, setSelectedProductID] = useState<string | null>(
    null
  );
  // Header for Inventory List
  const ListHeader: string[] = [
    "Product ID",
    "Product name",
    "Instock",
    "Status",
    "Date Listed",
  ];

  // Function to get selected productID from the clicked list item
  const handleItemClick = (productID: string) => {
    setSelectedProductID(productID);
  };
  // Get the selected product item based on the selectedProductID
  const selectedItem = (seller.inventory ?? []).find(
    (item) => item.productID === selectedProductID
  );

  // This Object takes the necessary values needed for the List
  const InventoryObject = (seller.inventory ?? []).map((inventory) => ({
    ProductID: inventory.productID.toString(),
    productName: inventory.productName,
    instock: inventory.instock.toString(),
    status: inventory.status,
    dateListed: inventory.dateListed,
  }));

  // Get the total number of products and low stock products for the StatusBox Comonent
  const totalInventory = seller.inventory?.length ?? 0;
  const lowStock =
    seller.inventory?.filter((item) => item.instock < 5).length ?? 0;

  // Functions to handle de-list, edit and restock
  const handleDeList = () => {
    // TODO: Pass productID as parameter for handling
    // TODO: Logic to de-list the product
  };
  const handleRestock = () => {
    // TODO: Pass productID as parameter for handling
    // Redirect to dashboard and pass the product id into input field
    // TODO: Logic to restock the product
  };
  const handleEdit = () => {
    // TODO: Pass serviceID as parameter for handling
    // TODO: Logic to edit the gig
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
      <SideNav SellerType="Student Business" />
      {/* ---------- Main Container------------ */}
      <section className=" w-[60%] h-full p-10 flex flex-col">
        <SellerHeader
          heading="Inventory"
          image={phio} // TODO: Set default Image to the Image Url in the seller data instead of phio
          sellerType="Student Business"
        />
        <div className=" w-full flex justify-between items-center mb-8">
          <div className="flex gap-8">
            <StatusBox status="Inventory" statusValue={totalInventory} />
            <StatusBox status="Low Stock" statusValue={lowStock} />
          </div>
          <div className="flex gap-8">
            {/* TODO: Add filter options */}
            <select name="Filter" id="" onChange={handleFilter}>
              <option value="Filter">Filter</option>
              <option value="Category">Low Stock</option>
              <option value="Orders">Medium Stock</option>
              <option value="Date Listed">High Stock</option>
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
            data={InventoryObject}
            onItemClick={handleItemClick}
            itemType="product"
          />
        </div>
      </section>
      {/* ----------- Side Container----------- */}
      <div className=" w-[25%] flex flex-col justify-center">
        <SideBar heading="Selected Product">
          {!selectedItem && (
            <div className="flex items-center justify-center h-96">
              <p className="text-2xl opacity-30">No items selected yet</p>
            </div>
          )}
          {selectedItem && (
            <div className="flex flex-col gap-6">
              <div className=" flex justify-between items-center">
                <p className="text-lg">{selectedItem.productID}</p>
                <p onClick={handleEdit} className="cursor-not-allowed">
                  Edit
                </p>
              </div>

              {/* -------Image Grid------- */}
              <ImageGrid
                image1={nail4} // TODO: Replace with selectedItem.image
                image2={nail2} // TODO: Replace with selectedItem.image
                image3={nail1} // TODO: Replace with selectedItem.image
                image4={nail3} // TODO: Replace with selectedItem.image
                image5={nail5} // TODO: Replace with selectedItem.image
              />

              <div className=" grid grid-cols-4 gap-4 grid-rows-2 font-bold">
                <p>{selectedItem.productName}</p>
                <p>{selectedItem.category}</p>
                <p>{selectedItem.dateListed}</p>
                <p>x {selectedItem.instock}</p>
                <p>{selectedItem.size}</p>
                <p>{selectedItem.price}</p>
                <p>{selectedItem.discount}</p>
                <p>{selectedItem.orders} orders</p>
              </div>
              <div>
                <p className="font-bold mb-2">Descrption</p>
                <p className="text-xs font-extralight">
                  {selectedItem.description}
                </p>
              </div>
              <div>
                <p className="font-bold mb-2">Delivery Options</p>
                <p className="text-xs font-extralight">
                  {selectedItem.deliveryOption}
                </p>
              </div>
              <div className=" flex justify-end gap-3">
                <SellerButton text="De-list" onClick={handleDeList} />
                <SellerButton text="Restock" onClick={handleRestock} />
              </div>
            </div>
          )}
        </SideBar>
      </div>
    </div>
  );
};

export default Inventory;
