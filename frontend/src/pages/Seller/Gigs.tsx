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

const Gigs = () => {
  // State to manage the selected gig ID from List
  const [selectedGigID, setSelectedGigID] = useState<string | null>(null);
  // Header for Gig List
  const ListHeader: string[] = [
    "Service ID",
    "Service Title",
    "Orders",
    "Category",
    "Date Listed",
  ];
  // Function to get selected serviceID from the clicked list item
  const handleItemClick = (serviceID: string) => {
    setSelectedGigID(serviceID);
  };
  // Get the selected gig item based on the selectedOrderID
  const selectedItem = (seller.gigs ?? []).find(
    (item) => item.serviceID === selectedGigID
  );

  // This Object takes the necessary values needed for the List
  const GigsObject = (seller.gigs ?? []).map((gig) => ({
    serviceID: gig.serviceID,
    serviceTitle: gig.serviceTitle,
    orders: gig.orders.toString(),
    category: gig.category,
    dateListed: gig.dateListed,
  }));

  // Get the total number of gigs and best performing gig for the StatusBox Comonent
  const totalGigs = seller.gigs?.length || 0;
  const bestPerforming = (seller.gigs ?? []).reduce((prev, current) =>
    prev.orders > current.orders ? prev : current
  );
  const bestPerformingID = bestPerforming.serviceID;

  // Functions to handle de-list and edit
  const handleDeList = () => {
    // TODO: Pass serviceID as parameter for handling
    // TODO: Logic to de-list the gig
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
      <SideNav SellerType={seller.profile.sellerType} />
      {/* ---------- Main Container------------ */}
      <section className=" w-[60%] h-full p-10 flex flex-col">
        <SellerHeader
          heading="Gigs"
          image={phio} // TODO: Set default Image to the Image Url in the seller data instead of phio
          sellerType={seller.profile.sellerType}
        />
        <div className=" w-full flex justify-between items-center mb-8">
          <div className="flex gap-8">
            <StatusBox status="Gigs" statusValue={totalGigs} />
            <StatusBox
              status="Best Performing"
              statusValue={bestPerformingID}
            />
          </div>
          <div className="flex gap-8">
            {/* TODO: Add filter options */}
            <select name="Filter" id="" onChange={handleFilter}>
              <option value="Filter">Filter</option>
              <option value="Active">Active</option>
              <option value="Discounted">Discounted</option>
              <option value="Fixed">Fixed Price</option>
              <option value="Negotiable">Negotiable Price</option>
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
            data={GigsObject}
            onItemClick={handleItemClick}
            itemType="gig"
          />
        </div>
      </section>
      {/* ----------- Side Container----------- */}
      <div className=" w-[25%] flex flex-col justify-center">
        <SideBar heading="Selected Gig">
          {!selectedItem && (
            <div className="flex items-center justify-center h-96">
              <p className="text-2xl opacity-30">No items selected yet</p>
            </div>
          )}
          {selectedItem && (
            <div className="flex flex-col gap-6">
              <div className=" flex justify-between items-center">
                <p className="text-lg">{selectedItem.serviceID}</p>
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

              <div className=" grid grid-cols-4 gap-4 grid-rows-3 font-bold">
                <p className="col-span-3">{selectedItem.serviceTitle}</p>
                <p>{selectedItem.category}</p>
                <p>{selectedItem.category}</p>
                <p>{selectedItem.dateListed}</p>
                <p>{selectedItem.orders} orders</p>
                <p>{selectedItem.schedule}</p>
                <p>{selectedItem.duration}</p>
                <p>{selectedItem.price}</p>
                <p>{selectedItem.discount}</p>
                <p>{selectedItem.priceType}</p>
              </div>
              <div>
                <p className="font-bold mb-2">Descrption</p>
                <p className="text-xs font-extralight">
                  {selectedItem.description}
                </p>
              </div>
              <div className=" flex justify-end">
                <SellerButton text="De-list" onClick={handleDeList} />
              </div>
            </div>
          )}
        </SideBar>
      </div>
    </div>
  );
};

export default Gigs;
