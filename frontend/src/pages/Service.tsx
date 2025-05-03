import React from "react";
import { useParams } from "react-router-dom";
import { Back, Footer, Header, SingleComment } from "../components";
import { back, cart } from "../assets/icons";
import CategoryTag from "../components/CategoryTag";
import PriceActionButton from "../components/PriceActionButton";
import { services } from "../data/ServicesDummyData";
import { phio } from "../assets/photos";

const Service = () => {
  const { serviceID } = useParams<{ serviceID: string }>();
  const service = services.find((svc) => svc.serviceID === serviceID);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Service not found.</p>
      </div>
    );
  }

  const { serviceImages } = service;

  return (
    <div className="w-full flex flex-col lg:h-screen bg-gray-100">
      <Header />
      <div className="px-[10vw] pt-6">
        <Back />
      </div>

      {/* Main Component */}
      <main className="px-[10vw] flex-grow flex flex-col lg:flex-row lg:justify-between">
        {/* Section 1 */}
        <section className="w-full lg:w-[50%] flex flex-col justify-between h-[90%]">
          {/* Heading, Seller, Tags */}
          <div className="lg:h-[18%] flex flex-col gap-4 lg:gap-0 justify-between mb-10 lg:mb-0">
            <h1 className="text-lg lg:text-2xl font-[Lexend] font-semibold text-gray-800">
              {service.serviceTitle}
            </h1>
            <div className="flex flex-row items-center ml-1">
              <img
                src={phio}
                alt={service.sellerInfo.sellerName}
                className="size-8 bg-[var(--tertiary-color)] rounded-full object-cover"
              />
              <p className="pl-3 text-gray-700">{service.sellerInfo.sellerName}</p>
            </div>
            <div className="flex flex-row items-center">
              <CategoryTag color= "[var(--tertiary-color)]" category={service.serviceCategory} />
            </div>
          </div>

          {/* Image grid */}
          <div className="h-max md:h-[327px] w-full lg:w-[95%] mb-10 lg:mb-0">
            <div className="w-full h-full flex gap-4">
              <div className="h-full w-[45%] bg-[var(--tertiary-color)] rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={serviceImages[0]}
                  alt={service.serviceTitle}
                />
              </div>
              <div className="h-full w-[55%] grid grid-cols-1 grid-rows-2 gap-4">
                {serviceImages[1] && (
                  <div className="bg-[var(--tertiary-color)] rounded-2xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src={serviceImages[1]}
                      alt={`${service.serviceTitle} - Image 2`}
                    />
                  </div>
                )}
                {serviceImages[2] && (
                  <div className="bg-[var(--tertiary-color)] rounded-2xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src={serviceImages[2]}
                      alt={`${service.serviceTitle} - Image 3`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="h-[20%] mb-10 lg:mb-0">
            <p className="font-bold mb-4 lg:my-4 text-lg text-gray-800">Description</p>
            <p className="wrap-normal w-full lg:w-[80%] text-gray-700 leading-relaxed">
              {service.serviceDescription}
            </p>
          </div>
        </section>

        {/* Right Section */}
        <div className="w-full lg:w-[30%] h-[80%] flex flex-col items-end justify-between">
          <ul className="flex justify-between w-full mb-10 lg:mb-0 md:mb-18 text-gray-700">
            <li className="text-center">
              <p className="mb-2 text-sm">Price type</p>
              <p className="font-bold font-[Lexend]">{service.priceType}</p>
            </li>
            <li className="text-center">
              <p className="mb-2 text-sm">Exp. Time frame</p>
              <p className="font-bold font-[Lexend]">{service.serviceDuration}</p>
            </li>
            <li className="text-center">
              <p className="mb-2 text-sm">Avail. hours</p>
              <p className="font-bold font-[Lexend]">{service.serviceSchedule}</p>
            </li>
            <li className="text-center">
              <p className="mb-2 text-sm">Comp. orders</p>
              <p className="font-bold font-[Lexend]">{service.totalOrders}</p>
            </li>
          </ul>

          <div className="w-[80%] mb-10 lg:mb-0 md:mb-18 ">
            <SingleComment
              reviewer={service.serviceReviews[0]?.reviewer}
              review={service.serviceReviews[0]?.reviewText}
            />
          </div>

          <div className="bg-[var(--tertiary-color)] w-full md:w-[80%] lg:w-[80%] h-[140px] flex flex-col justify-between p-4 rounded-2xl mb-10 lg:mb-0 md:mb-18">
            <textarea className="font-extralight text-gray-700" name="message" id="message" placeholder="Write a note" />
            <img className="size-6 scale-x-[-1] self-end text-gray-500 cursor-pointer" src={back} alt="" />
          </div>

          <div className="flex items-end justify-end mb-16 lg:mb-0">
            <PriceActionButton
              icon={cart}
              text="Add to cart"
              price={service.servicePrice}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Service;