import React from "react";

const SerachBar = () => {
  return (
    <div className=" w-full flex items-center justify-center my-24">
      <div className="w-[85%] md:w-[45%] flex items-center justify-between">
        <img
          className="size-14 rounded-full bg-[var(--tertiary-color)] mr-2 md:mr-4"
          src=""
          alt=""
        />
        <form
          action=""
          className="h-14 w-full bg-[var(--tertiary-color)] flex rounded-full"
        >
          <input
            className="w-[80%] h-full rounded-l-full bg-[var(--tertiary-color)] px-6"
            type="text"
            placeholder="Searching for something..."
          />
          <button className="w-[20%] h-full rounded-r-full bg-[var(--tertiary-color)]"></button>
        </form>
      </div>
    </div>
  );
};

export default SerachBar;
