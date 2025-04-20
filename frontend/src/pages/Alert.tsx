import React from "react";

const Alert = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[35%] h-[37%] bg-[var(--tertiary-color)] rounded-2xl flex flex-col items-center justify-center p-4">
        <img
          className="size-24 rounded-full bg-[var(--primary-color)]"
          src={""}
          alt=""
        />
        <div className="h-18 w-full"></div> {/* Space between Objects */}
        <p className="text-lg">
          {"Your item has been successfully added to cart"}
        </p>
      </div>
    </div>
  );
};

export default Alert;
