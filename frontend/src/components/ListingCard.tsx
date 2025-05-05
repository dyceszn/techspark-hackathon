import React from 'react';
import NameTag from './NameTag';
import { cart } from '../assets/icons';
import PriceTag from './PriceTag';

interface ListingCardProps {
  name: string;
  seller: string;
  image: string;
  price: number;
}

const ListingCard: React.FC<ListingCardProps> = ({ name, seller, image, price }) => {
  return (
    <div
      className="
        bg-[var(--tertiary-color)]
        rounded-2xl
        overflow-hidden
        flex
        flex-col
        w-full
        max-w-xs
        sm:max-w-sm
        md:max-w-md
        lg:max-w-lg
        min-h-[22rem]
        max-h-[22rem]
        transition-transform
        hover:scale-105
      "
    >
      {/* Image and Overlay */}
      <div className="relative h-[60%] w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          style={{ display: 'block' }}
        />
        {/* Overlay for Price and Seller */}
        <div className="absolute inset-0 flex items-end justify-between p-3">
          <NameTag text={seller} />
          <PriceTag price={price} />
        </div>

        {/* Add-to-cart badge */}
        <div
          className="
            absolute
            top-2
            right-2
            flex
            items-center
            gap-1
            bg-[var(--primary-color)]
            p-2
            rounded-full
            text-white
            text-xs
            sm:text-sm
          "
        >
          <img src={cart} alt="Add to cart" className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Bottom half: content */}
      <div className="p-4 flex flex-col justify-center flex-1">
        <h2 className="text-base sm:text-lg font-bold text-center break-words">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default ListingCard;
