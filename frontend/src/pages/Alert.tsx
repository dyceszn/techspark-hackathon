import React from "react";

const Alert = () => {
  return (
    <div className="single-page w-full h-screen flex items-center justify-center">
      {/* Alert Box */}
      <div className="w-[85%] h-[27%] text-center p-10 bg-[var(--tertiary-color)] rounded-2xl flex flex-col items-center justify-center md:w-[50%] md:h-[30%] lg:w-[40%] lg:h-[30%] xl:w-[35%] xl:h-[37%]  ">
        <img
          className="size-20  rounded-full bg-[var(--primary-color)] md:size-24"
          src={""}
          alt=""
        />
        {/* Space Object between Objects */}
        <div className=" h-[25%]  w-full lg:h-16"></div> {/* Text */}
        <p className="text-[0.9rem]">
          {"Your item has been successfully added to cart"}
        </p>
      </div>
    </div>
  );
};

export default Alert;
