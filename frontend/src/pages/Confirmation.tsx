import React from "react";

const Confirmation = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[var(--primary-color)]">
      <div className=" w-[40%] h-[50%] flex flex-col justify-between">
        <div className=" w-full h-[80%] bg-[var(--tertiary-color)] rounded-2xl flex flex-col items-center justify-center p-4">
          <img
            className=" size-24 rounded-full bg-[var(--primary-color)]"
            src={""}
            alt=""
          />
          <div className=" h-20 w-full"></div> {/* Space between Objects */}
          <p className="text-lg">{"Would you like to proceed?"}</p>
        </div>

        <div className=" w-full h-[15%] flex justify-between">
          <button className=" bg-[var(--tertiary-color)] w-[48%] h-full rounded-2xl font-bold text-lg">
            Nah
          </button>
          <button className=" bg-[var(--tertiary-color)] w-[48%] h-full rounded-2xl font-bold text-lg">
            Yessurr
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
