import React, { useState } from "react";
import {
  SideNav,
  SideBar,
  SellerTag,
  SellerButton,
} from "../../components/Seller";
import { edit } from "../../assets/icons";
import { phio } from "../../assets/photos";
import { seller } from "../../data/SellerDummyData";

const Profile = () => {
  // State variables for when the user clicks on the edit button
  const [activeEdit, setActiveEdit] = useState<"personal" | "banking" | null>(
    null
  );
  // State variables for the form inputs
  const [name, setName] = useState<string>(seller.profile.name);
  const [email, setEmail] = useState<string>(seller.profile.email);
  const [phone, setPhone] = useState<string>(seller.profile.phone);
  const [address, setAddress] = useState<string>(seller.profile.address);
  const [about, setAbout] = useState<string>(seller.profile.about);
  const [accountNumber, setAccountNumber] = useState<string>(
    seller.profile.bankDetails.accountNumber
  );
  const [accountName, setAccountName] = useState<string>(
    seller.profile.bankDetails.accountName
  );
  const [bankName, setBankName] = useState<string>(
    seller.profile.bankDetails.bankName
  );
  const [image, setImage] = useState<string>(phio); // TODO: Set default Image to the Image Url in the seller data instead of phio
  const [imagePreview, setImagePreview] = useState<string>(phio); // TODO: Set default Image to the Image Url in the seller data instead of phio

  // Functions to handle edit Personal Information and Banking Information

  const handleEditPersonal = () => {
    // TODO: Logic to handle personal information edit
  };
  // Function to handle edit Banking Information
  const handleEditBanking = () => {
    // TODO: Logic to handle banking information edit
  };

  // Render:
  return (
    <div className="seller-page h-screen flex">
      {/* ----------Side Navigation------------ */}
      <SideNav SellerType={seller.profile.sellerType} />
      {/* ---------- Main Container------------ */}
      <section className=" w-[60%] h-full p-10 flex items-center">
        <div className="flex flex-col gap-12">
          {/* -----------------Row 1: Includes Images and Personal Information---------------------- */}
          <div className=" flex gap-12 items-center">
            <div className="size-80">
              <img
                className="bg-[var(--tertiary-color)] h-full w-full object-cover rounded-full "
                src={phio} // TODO: Set default Image to the Image Url in the seller data instead of phio
                alt=""
              />
            </div>

            <div className=" flex-grow flex flex-col gap-10">
              <div className=" flex justify-between items-center">
                <p className="font-semibold text-lg">Personal Information</p>
                <button onClick={() => setActiveEdit("personal")}>
                  <img className="size-7" src={edit} alt="" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <p>Name: {seller.profile.name}</p>
                <p>Email Address: {seller.profile.email}</p>
                <p>Phone number: {seller.profile.phone}</p>
                <p>Address: {seller.profile.address}</p>

                {seller.profile.sellerType === "Freelancer" && (
                  <p className="text-xs font-extralight">
                    Switch to a Student Business Account
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ------------Row 2: About, Banking Details and Seller Stats---------- */}
          <div className=" flex flex-col gap-8">
            <div className=" w-[50%] flex flex-col gap-4">
              <p className="font-bold">About</p>
              <p>{seller.profile.about}</p>
            </div>
            <div className=" flex gap-2">
              <SellerTag text={`Seller Type: ${seller.profile.sellerType}`} />
              <SellerTag text={`Category: ${seller.profile.category}`} />
              <SellerTag text={seller.profile.onlineStatus} />
            </div>

            <div className=" flex flex-col gap-4">
              <p>Seller Score: {seller.profile.sellerScore}</p>
              <p>Total Orders: {seller.profile.totalOrders}</p>
              <p>Completed Orders: {seller.profile.completedOrders}</p>
            </div>

            <div className=" w-[50%] flex flex-col gap-10">
              <div className=" flex justify-between items-center">
                <p className="font-semibold text-lg">Profile data</p>
                <button onClick={() => setActiveEdit("banking")}>
                  <img className="size-7" src={edit} alt="" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <p>Account Number: {seller.profile.bankDetails.accountName}</p>
                <p>Bank name: {seller.profile.bankDetails.bankName}</p>
                <p>Account name: {seller.profile.bankDetails.accountNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- Side Container----------- */}
      <div className=" w-[25%] flex flex-col justify-center">
        {!activeEdit && (
          <SideBar heading="Nothing to see here">
            <div className="flex items-center justify-center h-128">
              <p className="text-2xl opacity-25">Nothing to see here</p>
            </div>
          </SideBar>
        )}

        {activeEdit === "personal" && (
          <SideBar heading="Selected Edit Personal Information">
            <form className="flex flex-col gap-6" onSubmit={handleEditPersonal}>
              <p>Only fill in the field(s) you want to edit</p>

              {/* --------------------Image Input and Preview------------------- */}

              <div className="w-full flex gap-3">
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setImage(url);
                        setImagePreview(url);
                      }
                    }}
                  />

                  {imagePreview ? (
                    <img
                      src={image}
                      alt="Profile Picture"
                      className="bg-[var(--tertiary-color)] size-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="bg-[var(--tertiary-color)] w-16 h-16 rounded-full flex items-center justify-center text-xs">
                      Upload
                    </div>
                  )}
                </div>

                {/* ---------------------Image Input Ends Here--------------------- */}

                <input
                  className="bg-[var(--tertiary-color)] rounded-full flex-grow h-14 pl-10 lg:h-16"
                  type="text"
                  placeholder="Edit your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <input
                className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 lg:h-16"
                type="text"
                placeholder="Edit your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 lg:h-16"
                type="text"
                placeholder="Edit your Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 lg:h-16"
                type="text"
                placeholder="Edit your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 lg:h-16"
                type="text"
                placeholder="Edit your About"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
              <div className=" flex justify-end gap-3">
                <SellerButton text="Save" />
              </div>
            </form>
          </SideBar>
        )}

        {activeEdit === "banking" && (
          <SideBar heading="Selected Edit Banking Information">
            <form className="flex flex-col gap-6" onSubmit={handleEditBanking}>
              <p>Only fill in the field(s) you want to edit</p>
              <input
                className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 lg:h-16"
                type="text"
                placeholder="Edit your Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
              <input
                className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 lg:h-16"
                type="text"
                placeholder="Edit your Account Name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
              <input
                className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 lg:h-16"
                type="text"
                placeholder="Edit your Bank"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
              <div className=" flex justify-end gap-3">
                <SellerButton text="Save" />
              </div>
            </form>
          </SideBar>
        )}
      </div>
    </div>
  );
};

export default Profile;
