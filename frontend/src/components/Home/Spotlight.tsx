import React from "react";
import { aishat, anita, ben, yara } from "../../assets/photos";

const Spotlight = () => {
  return (
    <div
      id="spotlight"
      className=" w-full flex flex-col items-center my-32 md:my-58"
    >
      <div className="mx-auto">
        <div className=" flex justify-between items-center mb-16 md:mb-32 w-full">
          <p className="text-3xl font-bold">Spotlight</p>
          <p className="text-2xl hidden lg:block">
            Putting talent where they belong
          </p>
        </div>
        <div className=" overflow-x-scroll w-full">
          <div className="flex w-fit lg:grid lg:grid-cols-4 lg:grid-rows-1 gap-5 lg:w-fit">
            {/* Spotllight 1 */}

            <div className="w-92 h-144 bg-[var(--tertiary-color)] rounded-2xl relative font-[Montserrat]">
              <img
                className="h-full w-auto object-cover rounded-2xl"
                src={anita}
                alt=""
              />

              {/* Black overlay with 50% opacity */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

              {/* Content on top of the image */}
              <div className=" absolute inset-0 flex flex-col justify-start text-white p-8 gap-2">
                <p className=" text-2xl font-bold">Anita Oshowale</p>
                <p className=" w-62 text-md font-extralight">
                  mass comm girlie her message one pose at a time{" "}
                  <span
                    className="font-semibold"
                    style={{ fontFamily: "var(--sixth-font)" }}
                  >
                    modeling{" "}
                  </span>{" "}
                  her message one pose at a time
                </p>
              </div>
            </div>

            {/* Spotllight 2 */}

            <div className="w-92 h-144 bg-[var(--tertiary-color)] rounded-2xl lg:mt-36 relative font-[Montserrat]">
              <img
                className="h-full w-auto object-cover rounded-2xl"
                src={aishat}
                alt=""
              />

              {/* Black overlay with 50% opacity */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

              {/* Content on top of the image */}
              <div className=" absolute inset-0 flex flex-col justify-end text-white p-8 gap-2">
                <p className=" text-2xl font-bold">Aishat Adewale</p>
                <p className=" w-64 text-lg font-extralight">
                  makeup{" "}
                  <span style={{ fontFamily: "var(--third-font)" }}>
                    artist
                  </span>{" "}
                  serving looks and breaking rules
                </p>
              </div>
            </div>

            {/* Spotllight 3 */}

            <div className="w-92 h-144 bg-[var(--tertiary-color)] rounded-2xl relative font-[Montserrat]">
              <img
                className="h-full w-auto object-cover rounded-2xl"
                src={ben}
                alt=""
              />

              {/* Black overlay with 50% opacity */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

              {/* Content on top of the image */}
              <div className=" absolute inset-0 flex flex-col justify-start items-end text-white p-8 gap-2">
                <p className=" text-2xl font-bold">Ben Micheal</p>
                <p className=" w-62 text-md font-extralight text-right">
                  writing pseudocode by night, capturing{" "}
                  <span style={{ fontFamily: "var(--fifth-font)" }}>
                    moments{" "}
                  </span>{" "}
                  by day
                </p>
              </div>
            </div>

            {/* Spotllight 4 */}

            <div className="w-92 h-144 bg-[var(--tertiary-color)] rounded-2xl lg:mt-36 relative font-[Montserrat]">
              <img
                className="h-full w-auto object-cover rounded-2xl"
                src={yara}
                alt=""
              />

              {/* Black overlay with 50% opacity */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

              {/* Content on top of the image */}
              <div className=" absolute inset-0 flex flex-col justify-end text-white p-8 gap-2">
                <p className=" text-2xl font-bold">Yara Chinaza</p>
                <p className=" w-58 text-lg font-extralight">
                  creating{" "}
                  <span style={{ fontFamily: "var(--fourth-font)" }}>
                    fashion{" "}
                  </span>{" "}
                  that speak louder than words.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
