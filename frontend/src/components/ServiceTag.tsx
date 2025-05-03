// import React from "react";

// interface ServiceTagProps {
//   image: string;
//   text: string;
// }

// const ServiceTag: React.FC<ServiceTagProps> = ({ image, text }) => {
//   return (
//     <div className="px-5 py-3 rounded-full bg-[var(--tertiary-color)] flex w-fit items-center gap-3">
//       {/* Image container with circular mask */}
//       <div className="w-8 h-8 rounded-full overflow-hidden">
//         <img 
//           className="w-full h-full object-cover"
//           src={image} 
//           alt="service icon" 
//           style={{ 
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center center'
//           }}
//         />
//       </div>
//       <p className="text-sm lg:text-lg font-medium">{text}</p>
//     </div>
//   );
// };

// export default ServiceTag;
import React from "react";

interface ServiceTagProps {
  image: string;
  text: string;
}

const ServiceTag: React.FC<ServiceTagProps> = ({ image, text }) => {
  return (
    <div className="px-5 py-3 rounded-full bg-[var(--tertiary-color)] flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="service icon"
        />
      </div>
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
};

export default ServiceTag;