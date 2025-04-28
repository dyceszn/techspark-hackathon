import React from "react";

interface ImageGridProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  return (
    <div className=" w-full h-60 flex gap-2">
      <div className="h-full w-[45%] bg-[var(--tertiary-color)] rounded-2xl">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={image1}
          alt=""
        />
      </div>
      <div className=" h-full w-[55%] grid grid-cols-2 grid-rows-2 gap-2">
        <div className="bg-[var(--tertiary-color)] rounded-2xl">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={image2}
            alt=""
          />
        </div>
        <div className="bg-[var(--tertiary-color)] rounded-2xl">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={image3}
            alt=""
          />
        </div>
        <div className="bg-[var(--tertiary-color)] rounded-2xl">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={image4}
            alt=""
          />
        </div>
        <div className="bg-[var(--tertiary-color)] rounded-2xl">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={image5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
