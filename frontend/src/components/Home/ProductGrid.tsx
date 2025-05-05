import React from "react";
import ProductCard from "./ProductCard";
// import { products } from "../../data/ProductsDummyData";

const ProductGrid = () => {
  return (
    <div
      id="salesanddiscount"
      className="flex flex-col items-center justify-center my-20 md:my-40"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`${i >= 3 ? "hidden md:block" : ""}`}>
            <ProductCard
              productName="Product name"
              productSeller="Student business"
              originalPrice="2999"
              discountedPrice="1999"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
