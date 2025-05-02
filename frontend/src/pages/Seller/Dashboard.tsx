import React, { useState } from "react";
import {
  SideNav,
  SideBar,
  SellerHeader,
  SellerButton,
  StatusBox,
} from "../../components/Seller";
import { phio } from "../../assets/photos";
import { seller } from "../../data/SellerDummyData";
import { Link } from "react-router-dom";
import { camera } from "../../assets/icons";

const Dashboard = () => {
  // State to manage the visibility of the new item form
  const [newItem, setNewItem] = useState(false);

  // State for the form data
  const [formData, setFormData] = useState<{
    Images: File[];
    itemID: string;
    price: string;
    discount: string;
    categories: string;
    description: string;
  }>({
    Images: [],
    itemID: "",
    price: "",
    discount: "",
    categories: "",
    description: "",
  });
  const [productFormData, setProductFormData] = useState({
    productName: "",
    quantity: "",
    deliveryOptions: "",
  });

  const [serviceFormData, setServiceFormData] = useState({
    serviceTitle: "",
    availableHours: "",
    priceType: "",
    expectedTimeFrame: "",
  });

  // Get the total number of gigs/inventory, pending orders for the StatusBox Component
  // Determine the status box status and value based on the seller type
  let statusBoxStatus: string;
  let statusBoxStatusValue: number;

  if (seller.profile.sellerType === "Student Business") {
    statusBoxStatus = "Inventory";
    statusBoxStatusValue = seller.inventory?.length ?? 0;
  } else if (seller.profile.sellerType === "Freelancer") {
    statusBoxStatus = "Gigs";
    statusBoxStatusValue = seller.gigs?.length ?? 0;
  } else {
    statusBoxStatus = "None";
    statusBoxStatusValue = 0;
  }
  const pendingOrders = seller.orders.filter(
    (order) => order.status === "pending"
  ).length;

  // Function to handle the form submission
  const handleFormSubmit = () => {
    // TODO: Logic for Form Submission
  };

  // Render:
  return (
    <div className="seller-page h-screen flex">
      {/* ----------Side Navigation------------ */}
      <SideNav SellerType={seller.profile.sellerType} />
      {/* ---------- Main Container------------ */}
      <main className=" w-[60%] p-10">
        <SellerHeader
          heading={`${seller.profile.name}, welcome back!`}
          image={phio} // TODO: Set default Image to the Image Url in the seller data instead of phio
          sellerType={seller.profile.sellerType}
        />
        <div className=" flex flex-col gap-10">
          <div className="w-full bg-[var(--tertiary-color)] h-52 rounded-2xl"></div>
          <div className="w-full flex gap-8">
            <StatusBox
              status={statusBoxStatus}
              statusValue={statusBoxStatusValue}
            />
            <StatusBox status="Pending Orders" statusValue={pendingOrders} />
            <StatusBox
              status="Wallet (naira)"
              statusValue={seller.wallet.totalBalance}
            />
          </div>
          <div className=" flex gap-10 h-100">
            <div className="bg-[var(--tertiary-color)] h-full w-[50%] flex flex-col p-8 rounded-2xl">
              <p className="font-bold">Notifications and Reviews</p>
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl opacity-20">Coming Soon...</p>
              </div>
            </div>
            {/* -----orders */}
            <div className=" h-full w-[50%] flex flex-col gap-8 items-center">
              <div className="flex justify-between w-full">
                <p className="font-bold text-lg">Orders</p>
                <Link to="/orders">
                  <p className="cursor-pointer">View all</p>
                </Link>
              </div>
              <div className=" w-[90%] flex flex-col gap-6 overflow-scroll">
                <table className="w-full">
                  <tbody>
                    {seller.orders.map((order, i) => (
                      <tr key={i} className="">
                        <td className="py-4">{order.itemName}</td>
                        <td className="py-4 text-center">{order.quantity}</td>
                        <td className="py-4 text-center">{order.status}</td>
                        <td className="py-4 text-right">{order.dateListed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* ----------- Side Container----------- */}
      <div className=" w-[25%] flex flex-col justify-center">
        <SideBar heading="New Item">
          {!newItem && (
            <div className="w-full flex items-center justify-center h-128 cursor-pointer">
              <p
                className="text-2xl opacity-25"
                onClick={() => setNewItem(true)}
              >
                Click here to list a new item.
              </p>
            </div>
          )}

          {newItem && (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
              <div className=" w-full flex flex-col gap-4">
                {/* Image Uplaod */}
                <div className="flex justify-between gap-4">
                  <div className="bg-[var(--tertiary-color)] flex-grow rounded-2xl relative flex items-center justify-center overflow-hidden">
                    <input
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      type="file"
                      name="Images"
                      id=""
                      multiple
                      required
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        const limitedFiles = files.slice(0, 5); // Limits it to 5 images
                        setFormData({
                          ...formData,
                          Images: limitedFiles,
                        });
                      }}
                    />
                    <img
                      className="size-18 z-0"
                      src={camera}
                      alt="Upload images"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="font-bold my-2">Image recommendation</p>
                    <p>Products: 4:3 aspect ratio</p>
                    <p>Services: 1:1 aspect ratio</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>{formData.Images.length}/5 uploaded</p>
                  <p>Choose all images in a single selection</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p>General Form</p>
                <div className="flex gap-4">
                  <input
                    className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4"
                    placeholder="Price per item"
                    required
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: e.target.value,
                      })
                    }
                  />
                  <select
                    name="Discount"
                    id=""
                    className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4 appearance-none"
                    required
                    value={formData.discount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        discount: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled selected>
                      Discount
                    </option>
                    <option value="No discount">No Discount</option>
                    <option value="5%">5% off</option>
                    <option value="10%">10% off</option>
                    <option value="15%">15% off</option>
                    <option value="20%">20% off</option>
                  </select>
                </div>

                {/* --------Select Category Field--------- */}

                <select
                  required
                  className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4 appearance-none"
                >
                  <option value="" disabled selected>
                    Select Categories
                  </option>
                  <option value="Technology">Technology</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Art">Art</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Food">Food</option>
                  <option value="Health">Health</option>
                  <option value="Sports">Sports</option>
                  <option value="Education">Education</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Finance">Finance</option>
                  <option value="Home">Home</option>
                  <option value="Music">Music</option>
                  <option value="Photography">Photography</option>
                  <option value="Writing">Writing</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Crafts">Crafts</option>
                  <option value="Other">Other</option>
                </select>

                {/* --------Select Category Field Ends--------- */}

                <input
                  className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4"
                  placeholder="Add description"
                  type="text"
                  required
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              {seller.profile.sellerType === "Student Business" && (
                <div className="flex flex-col gap-4">
                  <p>Product Specific Data</p>
                  <input
                    className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4"
                    placeholder="Product name"
                    type="text"
                    required
                    value={productFormData.productName}
                    onChange={(e) =>
                      setProductFormData({
                        ...productFormData,
                        productName: e.target.value,
                      })
                    }
                  />
                  <div className="flex gap-4">
                    <input
                      className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4"
                      placeholder="Quantity"
                      type="number"
                      required
                      value={productFormData.quantity}
                      onChange={(e) =>
                        setProductFormData({
                          ...productFormData,
                          quantity: e.target.value,
                        })
                      }
                    />
                    <input
                      className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4"
                      placeholder="Select available delivery options"
                      type="text"
                      required
                      value={productFormData.deliveryOptions}
                      onChange={(e) =>
                        setProductFormData({
                          ...productFormData,
                          deliveryOptions: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}

              {seller.profile.sellerType === "Freelancer" && (
                <div className="flex flex-col gap-4">
                  <p className="font-bold">Freelance Specific Data</p>
                  <input
                    className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4"
                    placeholder="Service Title"
                    type="text"
                    required
                    value={serviceFormData.serviceTitle}
                    onChange={(e) =>
                      setServiceFormData({
                        ...serviceFormData,
                        serviceTitle: e.target.value,
                      })
                    }
                  />
                  <div className="flex gap-4">
                    <input
                      className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4"
                      placeholder="Avail. Hours"
                      type="text"
                      required
                      value={serviceFormData.availableHours}
                      onChange={(e) =>
                        setServiceFormData({
                          ...serviceFormData,
                          availableHours: e.target.value,
                        })
                      }
                    />

                    <select
                      name="Price Type"
                      id=""
                      className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4 appearance-none"
                      required
                      value={serviceFormData.priceType}
                      onChange={(e) =>
                        setServiceFormData({
                          ...serviceFormData,
                          priceType: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled selected>
                        Price Type
                      </option>
                      <option value="Negotiable" disabled>
                        Negotiable
                      </option>
                      <option value="Fixed">Fixed</option>
                    </select>
                    <input
                      className="bg-[var(--tertiary-color)] h-12 w-full rounded-full p-4"
                      placeholder="Expected time frame"
                      type="text"
                      required
                      value={serviceFormData.expectedTimeFrame}
                      onChange={(e) =>
                        setServiceFormData({
                          ...serviceFormData,
                          expectedTimeFrame: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              )}

              <div className=" flex justify-end">
                <SellerButton text="List" />
              </div>
            </form>
          )}
        </SideBar>
      </div>
    </div>
  );
};

export default Dashboard;
