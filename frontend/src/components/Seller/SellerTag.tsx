import React from "react";

interface SellerTagProps {
  sellerType: string;
}

const SellerTag: React.FC<SellerTagProps> = ({ sellerType }) => {
  return (
    <p className="px-10 py-3 rounded-full bg-[var(--tertiary-color)] w-fit text-nowrap">
      {sellerType}
    </p>
  );
};

export default SellerTag;
