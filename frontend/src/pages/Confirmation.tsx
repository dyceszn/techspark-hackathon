import React from "react";

const Confirmation = () => {
  return (
    <div className="single-page h-screen w-screen flex items-center justify-center bg-[var(--primary-color)] px-[10vw]">
      <div className=" w-[100%]  h-[50%] flex flex-col justify-between md:w-[70%] lg:w-[45%] lg:h-[45%]">
        {/* Main box */}

        <div className="  w-full h-[60%] lg:h-[80%] bg-[var(--tertiary-color)] rounded-2xl flex flex-col items-center justify-center p-4">
          <img
            className=" size-24 rounded-full bg-[var(--primary-color)]"
            src={""}
            alt=""
          />
          <div className=" h-20 w-full"></div> {/* Space between Objects */}
          <p className="text-[0.9rem]">{"Would you like to proceed?"}</p>
        </div>

        {/* Buttons */}
        <div className="  w-full h-[35%]  flex flex-col-reverse  justify-between lg:h-[15%] lg:flex-row">
          <button className=" bg-[var(--tertiary-color)] w-full  h-[42%]  rounded-2xl font-bold text-[0.9rem] lg:w-[48%] lg:h-full">
            Nah
          </button>
          <button className=" bg-[var(--tertiary-color)] w-full  h-[42%]  rounded-2xl font-bold text-[0.9rem] lg:w-[48%] lg:h-full">
            Yessurr
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
