// import { FC } from "react";

// const Footer: FC = () => {
//   return (
//     <footer className="bg-black text-white py-12">
//       <div className=" container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <div className="mb-6">
//               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
//                 <span className="text-black font-bold text-xl">LOGO</span>
//               </div>
//             </div>
//             <p className="text-gray-400 text-sm">
//               The exclusive freelance & e-commerce platform for PAU students
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   FAQ
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Terms of Service
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Freelancing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   E-commerce
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Student Support
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   Business Registration
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <div className="mt-6">
//               <h4 className="text-sm font-semibold mb-2">
//                 Subscribe to our newsletter
//               </h4>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-600 flex-grow"
//                 />
//                 <button className="bg-white text-black px-6 py-2 rounded-r-full hover:bg-gray-200 transition-colors">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} PAU Marketplace. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white text-sm transition-colors"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white text-sm transition-colors"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white text-sm transition-colors"
//               >
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="bg-[var(--sec-color)] h-256 md:h-128 w-full flex flex-col md:flex-row px-[10vw] justify-between text-white">
      {/* ------------------------- */}

      {/* Logo and links */}
      <section className=" h-[70%] w-full md:h-full md:w-[55%] flex flex-col md:flex-row justify-between items-center">
        {/* Image part */}
        <div className="w-64 h-full flex flex-col items-center justify-center ">
          <img
            className="border-white border-3 size-36 rounded-full"
            src={""}
            alt=""
          />
          <p className="my-8 text-center font-[Lexend] font-extralight">
            The exclusive freelance & e-commerce platform for PAU students
          </p>
        </div>

        {/* Links */}
        <div className="  h-[80%] md:h-fit w-full md:w-fit flex flex-col items-center">
          <p className=" text-lg mb-8 text-center  md:self-start">
            Shop with confidence, buy with ease.
          </p>
          <div className=" flex w-full md:w-128 justify-between text-xs md:text-sm font-extralight">
            <ul className="text-center md:text-left  w-[30%] md:w-fit">
              <li className="my-6 font-bold">Quick Links</li>
              <li className="my-6">Shop</li>
              <li className="my-6">Product</li>
              <li className="my-6">About Us</li>
              <li className="my-6">Source Code</li>
            </ul>
            <ul className="text-center md:text-left text-xs md:text-sm w-[30%] md:w-fit">
              <li className="my-6 font-bold">Services</li>
              <li className="my-6">Freelancing</li>
              <li className="my-6">E-commerce</li>
              <li className="my-6">Student Support</li>
              <li className="my-6">Business Registration</li>
            </ul>
            <ul className="text-center md:text-left text-xs md:text-sm w-[30%] md:w-fit">
              <li className="my-6 font-bold">Documents</li>
              <li className="my-6">Data</li>
              <li className="my-6">Privacy Policy</li>
              <li className="my-6">T's and C's</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------- */}
      <div className=" bg-[var(--tertiary-color)] h-[65%] w-0.25 self-center rounded-full hidden md:block"></div>
      {/* ------------------------- */}

      <section className=" h-[30%] w-full  md:h-full md:w-[35%] flex-col flex items-end">
        <div className=" h-[80%] w-full flex flex-col justify-center">
          <form
            className=" rounded-full h-14 md:h-16 flex justify-between"
            action=""
          >
            <input
              className="bg-[var(--tertiary-color)] h-full w-[70%] md:w-[80%] rounded-l-full text-black pl-8"
              placeholder="Suscribe to our newsletter"
              type="text"
            />
            <button className=" bg-[var(--primary-color)] h-full w-[30%] md:w-[20%] rounded-r-full text-black font-bold">
              Suscribe
            </button>
          </form>
        </div>

        <div className="w-full md:w-64 flex flex-col items-center justify-between">
          <div className=" h-12 flex mb-4">
            <img
              className="  bg-[var(--tertiary-color)] size-10 rounded-full"
              src=""
              alt=""
            />
            <img
              className=" bg-[var(--tertiary-color)] size-10 rounded-full"
              src=""
              alt=""
            />
            <img
              className=" bg-[var(--tertiary-color)] size-10 rounded-full"
              src=""
              alt=""
            />
          </div>
          <p className=" mb-4">©️ G5 2025. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
