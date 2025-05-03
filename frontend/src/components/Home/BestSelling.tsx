import React from "react";
import BestSellingCard from "./BestSellingCard";
import { bag, headphones, perfume, shoppingbag } from "../../assets/images";

const BestSelling = () => {
  const bestSellingItems = [
    { id: 1, name: "Perfume Set", price: "$49.99", image: perfume, sold: "90" },
    { id: 2, name: "Designer Bag", price: "$129.99", image: bag, sold: "80" },
    {
      id: 3,
      name: "Leather Wallet",
      price: "$79.99",
      image: shoppingbag,
      sold: "70",
    },
    {
      id: 4,
      name: "Headphones",
      price: "$199.99",
      image: headphones,
      sold: "120",
    },
  ];

  return (
    <div
      id="bestselling"
      className="flex flex-col items-center my-32 md:mt-58 md:mb-32"
    >
      <div className="mx-auto">
        <p className="text-3xl font-bold mb-12 md:mb-20 self-start">
          Best selling
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:grid-rows-1 lg:grid-cols-4 lg:gap-20 w-fit">
          {bestSellingItems.map((item) => (
            <BestSellingCard
              purchases={`${item.sold} purchases`}
              image={item.image}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
