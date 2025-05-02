// import React from 'react';
// import NameTag from './NameTag';
// import { cart } from '../assets/icons';

// interface ListingCardProps {
//   name: string;
//   seller: string;
//   image: string;
//   price: string;
// }

// const ListingCard: React.FC<ListingCardProps> = ({ name, seller, image, price }) => {
//   // Define reusable class strings
//   const containerClasses = [
//     'bg-[var(--tertiary-color)]',
//     'rounded-2xl',
//     'overflow-hidden',
//     'flex',
//     'flex-col',
//     'w-48',
//     'md:w-62.5',
//     'h-87.5'
//   ].join(' ');

//   const imageWrapperClasses = [
//     'relative',
//     'h-55',
//     'bg-cover',
//     'bg-center',
//     'bg-no-repeat',
//     'p-3'
//   ].join(' ');

//   const badgeClasses = [
//     'absolute',
//     'top-3',
//     'right-3',
//     'flex',
//     'items-center',
//     'gap-2',
//     'bg-[var(--primary-color)]',
//     'p-2',
//     'rounded-full'
//   ].join(' ');

//   const sellerTagClasses = 'absolute bottom-2 left-2';
//   const contentClasses = 'p-4 flex flex-col justify-between flex-1';
//   const titleClasses = 'text-lg font-bold text-center break-words';
//   const priceWrapperClasses = 'self-end inline-flex items-baseline';

//   return (
//     <div className={containerClasses}>
//       <div
//         className={imageWrapperClasses}
//         style={{ backgroundImage: `url(${image})` }}
//       >
//         <div className={badgeClasses}>
//           <img src={cart} alt="Add to cart" className="w-4 h-4" />
//         </div>
//         <div className={sellerTagClasses}>
//           <NameTag text={seller} />
//         </div>
//       </div>

//       <div className={contentClasses}>
//         <h2 className={titleClasses}>{name}</h2>
//         <p className={priceWrapperClasses}>
//           <span className="text-xs font-medium">₦</span>
//           <span className="text-lg font-bold ml-1">{price}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ListingCard;
// src/components/ListingCard.tsx
// src/components/ListingCard.tsx
// src/components/ListingCard.tsx
import React from 'react';
import NameTag from './NameTag';
import { cart } from '../assets/icons';

interface ListingCardProps {
  name: string;
  seller: string;
  image: string;
  price: string;
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
        min-h-[20rem]
        transition-transform
        hover:scale-105
      "
    >
      {/* Top half: image background */}
      <div
        className="
          relative
          flex-1
          w-full
          bg-cover
          bg-center
          p-3
        "
        style={{ backgroundImage: `url(${image})` }}
      >
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

        {/* Seller tag */}
        <div className="absolute bottom-2 left-2">
          <NameTag text={seller} />
        </div>
      </div>

      {/* Bottom half: content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="text-base sm:text-lg font-bold text-center break-words mb-2">
          {name}
        </h2>
        <p className="self-end inline-flex items-baseline">
          <span className="text-xs sm:text-sm font-medium">₦</span>
          <span className="text-lg sm:text-xl font-bold ml-1">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
