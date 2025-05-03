import React from "react";
import { Back, Footer, Header, SingleComment } from "../components";
import { back, cart } from "../assets/icons";
import CategoryTag from "../components/CategoryTag";
import PriceActionButton from "../components/PriceActionButton";
import { services } from "../data/ServicesDummyData";
import { nail1, nail2, nail3, nail4, nail5 } from "../assets/images";
import { phio } from "../assets/photos";

const Service = () => {
  const service = services[0]; // TODO: Get the service from the API

  return (
    <div className="w-full flex flex-col lg:h-screen">
      <Header />
      <Back />

      {/* Main Component */}

      <main className=" px-[10vw] flex-grow flex flex-col lg:flex-row lg:justify-between">
        {/* Section 1 */}

        <section className=" w-full lg:w-[50%] flex flex-col justify-between h-[90%]">
          {/* Heading, Seller, Tags */}
          <div className=" lg:h-[18%] flex flex-col gap-4 lg:gap-0 justify-between mb-10 lg:mb-0">
            <p className="text-lg lg:text-2xl font-[Lexend] font-semibold">
              {service.serviceTitle}
            </p>

            <div className=" flex flex-row items-center ml-1">
              <img
                src={phio}
                alt=""
                className="size-8 bg-[var(--tertiary-color)] rounded-full"
              />
              <p className="pl-6">{service.sellerInfo.sellerName}</p>
            </div>

            <div className="flex flex-row items-center">
              <CategoryTag category={service.serviceCategory} />
            </div>
          </div>

          {/* --------------------------Image grid-------------------------- */}

          <div className=" h-max md:h-[327px]  w-full lg:w-[95%]  mb-10 lg:mb-0">
            {/* -------Image Grid------- */}
            <div className=" w-full h-full flex gap-4">
              <div className="h-full w-[45%] bg-[var(--tertiary-color)] rounded-2xl">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={nail1}
                  alt=""
                />
              </div>
              <div className=" h-full w-[55%] grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-[var(--tertiary-color)] rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={nail2}
                    alt=""
                  />
                </div>
                <div className="bg-[var(--tertiary-color)] rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={nail3}
                    alt=""
                  />
                </div>
                <div className="bg-[var(--tertiary-color)] rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={nail4}
                    alt=""
                  />
                </div>
                <div className="bg-[var(--tertiary-color)] rounded-2xl">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={nail5}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" h-[20%] mb-10 lg:mb-0">
            <p className="font-bold mb-4 lg:my-4 text-lg">Description</p>
            <p className=" wrap-normal w-full lg:w-[80%]">
              {service.serviceDescription}
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------- */}

        <div className=" w-full lg:w-[30%] h-[80%] flex flex-col items-end  justify-between ">
          <ul className=" flex justify-between w-full mb-10 lg:mb-0 md:mb-18">
            <li className="text-center">
              <p className="mb-2">Price type</p>
              <p className="font-bold font-[Lexend]">{service.priceType}</p>
            </li>
            <li className="text-center">
              <p className="mb-2">Exp. Time frame</p>
              <p className="font-bold font-[Lexend]">
                {service.serviceDuration}
              </p>
            </li>
            <li className="text-center">
              <p className="mb-2">Avail. hours</p>
              <p className="font-bold font-[Lexend]">
                {service.serviceSchedule}
              </p>
            </li>
            <li className="text-center">
              <p className="mb-2">Comp. orders</p>
              <p className="font-bold font-[Lexend]">{service.totalOrders}</p>
            </li>
          </ul>

          <div className=" w-[80%] mb-10 lg:mb-0 md:mb-18 ">
            <SingleComment
              reviewer={service.serviceReviews[0].reviewer}
              review={service.serviceReviews[0].reviewText}
            />
          </div>

          <div className=" bg-[var(--tertiary-color)] w-full md:w-[80%] lg:w-[80%] h-[140px] flex flex-col justify-between p-4 rounded-2xl mb-10 lg:mb-0  md:mb-18">
            <textarea className="font-extralight" name="message" id="message">
              Write a note
            </textarea>
            <img className="size-6 scale-x-[-1] self-end" src={back} alt="" />
          </div>

          <div className=" flex items-end justify-end mb-16 lg:mb-0">
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
