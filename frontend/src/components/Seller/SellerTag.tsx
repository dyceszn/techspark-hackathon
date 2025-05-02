import React from "react";

interface SellerTagProps {
  text: string;
}

const SellerTag: React.FC<SellerTagProps> = ({ text }) => {
  return (
    <p className="px-10 py-3 rounded-full bg-[var(--tertiary-color)] w-fit text-nowrap">
      {text}
    </p>
  );
};

export default SellerTag;
