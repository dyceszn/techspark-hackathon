import React, { useState } from "react";
import { Back, Footer, Header } from "../components";
import { cart, edit } from "../assets/icons";
import { phio } from "../assets/photos";
import { buyer } from "../data/BuyerDummyData";
import { Link } from "react-router-dom";

const Profile = () => {
  // State variables for when the user clicks on the edit button
  const [activeEdit, setActiveEdit] = useState(false);

  // State variables for the form inputs
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [profileType, setProfileType] = useState<string>();

  const [image, setImage] = useState<string>(phio); // TODO: Set default Image to the Image Url in the seller data instead of phio
  const [imagePreview, setImagePreview] = useState<string>(phio); // TODO: Set default Image to the Image Url in the seller data instead of phio

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveEdit(false);
    // TODO: Add logic to update the profile information
  };

  return (
    <div className="main w-full h-screen flex flex-col">
      <Header />
      <Back />
      <div className=" flex-grow px-[10vw] flex flex-col lg:flex-row lg:justify-between">
        {/* Profile Section */}

        <section className=" w-[47%] h-full">
          <div className=" flex items-center justify-between h-[10%]">
            <p className="text-xl">Profile</p>
            <button onClick={() => setActiveEdit(true)}>
              <img className="size-8" src={edit} alt="" />
            </button>
          </div>

          <div className=" flex flex-col h-[90%] justify-evenly">
            <div className=" flex">
              <img
                className="size-68 rounded-full bg-[var(--tertiary-color)] mr-16"
                src={phio}
                alt=""
              />
              <ul className=" h-68 flex flex-col justify-between">
                <li>
                  Name: <span>{buyer.profile.name}</span>
                </li>
                <li>
                  Email address: <span>{buyer.profile.email}</span>
                </li>
                <li>
                  Phone number: <span>{buyer.profile.phone}</span>
                </li>
                <li>
                  Profile type: <span>{buyer.profile.profileType}</span>
                </li>
                <li className="text-red-500">Logout</li>
              </ul>
            </div>

            <div className=" h-72 flex flex-col justify-between">
              <p className="text-lg font-bold">Default Shipping & Billing </p>
              <ul className=" h-[80%] flex flex-col justify-between">
                <li>
                  Address 1: <span>{buyer.profile.address}</span>
                </li>
                <li>
                  Address 2: <span>{"N/A"}</span>
                </li>
                <li>
                  Hostel: <span>{"N/A"}</span>
                </li>
                <li>School: Pan-Atlantic University</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Order History Section */}
        {activeEdit === false && (
          <section className=" w-[47%] h-full">
            <div className=" flex items-center justify-between h-[10%]">
              <p className="text-xl">Order History</p>
              <Link to="/cart">
                <div className="border-black border-2 rounded-full size-8 flex items-center justify-center">
                  <img className="size-5 " src={cart} alt="" />
                </div>
              </Link>
            </div>
            <div className=" flex justify-center items-center h-[90%] w-full opacity-50">
              <p className="text-3xl font-extralight">
                Your order history will be shown here.
              </p>
            </div>
          </section>
        )}
        {activeEdit === true && (
          <section className=" w-[47%] h-full">
            <div className="flex items-center justify-between h-[10%]">
              <p className="text-xl">Edit Profile Information</p>
            </div>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
              <select
                name="profile-type"
                id=""
                className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 lg:h-16 appearance-none"
                value={profileType}
                onChange={(e) => setProfileType(e.target.value)}
              >
                <option value="buyer" disabled selected>
                  Switch your profile type
                </option>
                <option value="Freelancer">Seller: Freelancer</option>
                <option value="Student Business">
                  Seller: Student Business
                </option>
              </select>
              <div className=" flex justify-end gap-3">
                <button
                  className="bg-[var(--sec-color)] py-4 px-6 text-white text-md md:text-lg font-semibold rounded-full md:py-4 md:px-12"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
