// // // import React, { useState } from "react";
// // // import { Back, Footer, Header} from "../components";
// // // import { cart } from "../assets/icons";
// // // import PriceActionButton from "../components/PriceActionButton";

// // // interface Comment {
// // //   author: string;
// // //   text: string;
// // //   // Add other relevant properties like date
// // // }

// // // const DUMMY_COMMENTS: Comment[] = [
// // //   { author: "User 1", text: "Excellent service! Highly recommended." },
// // //   { author: "User 2", text: "Loved the results. Will book again." },
// // //   // ... more comments
// // // ];

// // // const Product = () => {
// // //   const [note, setNote] = useState("");
// // //   const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// // //       setNote(event.target.value);
// // //     };

// // //       const handleSendNote = () => {
// // //     if (note.trim()) {
// // //       // In a real application, you would send this note to the server
// // //       console.log("Note sent:", note);
// // //       setNote(""); // Clear the textarea after sending
// // //     }
// // //   };
// // //   return (
// // //     <div className="w-full h-screen flex flex-col">
// // //       <Header />
// // //       <Back />
// // //       <div className=" flex-grow px-[10vw] flex justify-between">
// // //         <section className="border-black border-1 w-[70%] h-[90%] flex flex-col justify-between">
// // //           <div className="border-black border-1 w-full h-[80%] flex justify-between">
// // //             <img
// // //               className="w-[45%] h-full rounded-2xl bg-[var(--tertiary-color)]"
// // //               src={""}
// // //               alt=""
// // //             />
// // //             <div className=" border-black border-1 w-[52%]">
// // //               <div>
// // //                 <p>Product name</p>
// // //                 <img className="" src={""} alt="" />
// // //               </div>
// // //               <p>
// // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
// // //                 eleifend non ipsum vitae egestas. Suspendisse potenti. Etiam
// // //                 vestibulum sem quis massa rutrum, quis luctus odio
// // //                 condimentum... More
// // //               </p>
// // //               <div>
// // //                 <p>Delivery Options</p>
// // //                 <ul>
// // //                   <li>To your doorstep</li>
// // //                   <li>Pickup yourself</li>
// // //                 </ul>
// // //               </div>
// // //               <div>
// // //                 <p>Check out some logistics service providers</p>
// // //                 <div>
// // //                   <img className="" src={""} alt="" />
// // //                   <img className="" src={""} alt="" />
// // //                   <img className="" src={""} alt="" />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="border-black border-1 w-full h-[15%] flex items-center">
// // //             <img
// // //               className="size-16 rounded-full bg-[var(--tertiary-color)] mr-4"
// // //               src={""}
// // //               alt=""
// // //             />
// // //             <p className="text-lg">{"Styl by Janet"}</p>
// // //           </div>
// // //         </section>

// // //         {/* Right Section */}

// // //         <aside className="w-full lg:w-[35%] flex flex-col gap-6">
// // //           <div className="bg-white shadow-md rounded-lg p-6">

// // //             <PriceActionButton price= "29,999" icon={cart} text="Add to cart" />
// // //           </div>

// // //           {/* Comments Section */}
// // //           <div className="bg-white shadow-md rounded-lg p-6">
// // //             <h2 className="font-bold mb-4 text-lg">Customer Reviews</h2>
// // //             {DUMMY_COMMENTS.map((comment, index) => (
// // //               <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
// // //                 <p className="font-semibold">{comment.author}</p>
// // //                 <p className="text-gray-700">{comment.text}</p>
// // //                 {/* Add timestamp or other comment details if available */}
// // //               </div>
// // //             ))}
// // //             {DUMMY_COMMENTS.length === 0 && <p className="text-gray-600">No reviews yet.</p>}
// // //             {/* In a real app, you'd have pagination or a "Load More" button */}
// // //           </div>

// // //           {/* Leave a Note */}
// // //           <div className="bg-white shadow-md rounded-lg p-6">
// // //             <h2 className="font-bold mb-4 text-lg">Leave a Note</h2>
// // //             <textarea
// // //               className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-500"
// // //               rows={3}
// // //               placeholder="Have a specific request or question?"
// // //               value={note}
// // //               onChange={handleNoteChange}
// // //             />
// // //             <button
// // //               className="bg-black text-white py-2 px-4 rounded-md mt-3 hover:bg-[var(--secondary-color)] focus:outline-none focus:ring focus:bg-[var(--secondary-color)] w-full"
// // //               onClick={handleSendNote}
// // //             >
// // //               Send Note
// // //             </button>
// // //           </div>
// // //         </aside>
// // //       </div>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default Product;

// // import React, { useState } from "react";
// // import { Back, Footer, Header } from "../components";
// // import { cart} from "../assets/icons";
// // import  {best}  from "../assets/icons";
// // import PriceActionButton from "../components/PriceActionButton";

// // interface Comment {
// //   author: string;
// //   text: string;
// //   date?: string; // Optional date for comments
// // }

// // const DUMMY_COMMENTS: Comment[] = [
// //   { author: "Chidi Okoro", text: "Absolutely stunning! The quality exceeded my expectations.", date: "2025-05-02" },
// //   { author: "Aisha Bello", text: "Great value for the price. Fast delivery too!", date: "2025-04-28" },
// //   { author: "Segun Adebayo", text: "The color is exactly as shown. Very satisfied.", date: "2025-04-20" },
// //   // ... more comments
// // ];

// // const Product = () => {
// //   const [note, setNote] = useState("");
// //   const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
// //     setNote(event.target.value);
// //   };

// //   const handleSendNote = () => {
// //     if (note.trim()) {
// //       // In a real application, you would send this note to the server
// //       console.log("Note sent:", note);
// //       setNote(""); // Clear the textarea after sending
// //     }
// //   };

// //   // Dummy product data - replace with actual data fetching
// //   const productName = "Premium Handcrafted Leather Bag";
// //   const productDescription =
// //     "Indulge in the luxury of our premium handcrafted leather bag. Made with the finest full-grain leather and featuring meticulous stitching, this timeless piece is perfect for everyday elegance. Its spacious interior and durable construction ensure both style and functionality. Available in classic brown and sophisticated black.";
// //   const productPrice = "49,999";
// //   const sellerName = "The Artisan Studio";
// //   const sellerImage = "https://via.placeholder.com/80/D3D3D3/808080?Text=Janet"; // Placeholder
// //   const productImage = "https://via.placeholder.com/600/C0C0C0/FFFFFF?Text=LeatherBag"; // Placeholder
// //   const deliveryOptions = ["Free Delivery within Lagos", "Express Pickup Available", "International Shipping"];
// //   const logisticsProviders = [
// //     { name: "GIG Logistics", logo: "https://via.placeholder.com/50/008000/FFFFFF?Text=GIG" },
// //     { name: "DHL", logo: "https://via.placeholder.com/50/FFD700/000000?Text=DHL" },
// //     { name: "NIPOST", logo: "https://via.placeholder.com/50/DC143C/FFFFFF?Text=NIP" },
// //   ];
// //   const sellerRating = 4.7;

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col">
// //       <Header />
// //       <Back />
// //       <div className="flex-grow px-6 md:px-12 lg:px-24 py-8 flex justify-between gap-8">
// //         {/* Left Section - Product Details */}
// //         <section className="bg-white rounded-lg shadow-md p-6 md:p-8 w-full lg:w-[65%] flex flex-col justify-between">
// //           {/* Product Image and Overview */}
// //           <div className="flex flex-col md:flex-row gap-6 mb-8">
// //             <img
// //               className="w-full md:w-[40%] rounded-xl bg-gray-200 object-cover aspect-square"
// //               src={productImage}
// //               alt={productName}
// //             />
// //             <div className="flex flex-col justify-between h-full">
// //               <div>
// //                 <h1 className="text-2xl font-semibold text-gray-800 mb-2">{productName}</h1>
// //                 <div className="flex items-center mb-2">
// //                   {[...Array(5)].map((_, index) => (
// //                     <img key={index} src={best} alt="best" className={`w-4 h-4 mr-1 ${index < Math.floor(sellerRating) ? 'text-yellow-500' : 'text-gray-400'}`} />
// //                   ))}
// //                   <span className="text-sm text-gray-600">({sellerRating.toFixed(1)})</span>
// //                 </div>
// //                 <p className="text-gray-700 leading-relaxed mb-4">{productDescription} <button className="text-blue-500 text-sm">More</button></p>
// //               </div>
// //               <div>
// //                 <h3 className="font-semibold text-gray-700 mb-2">Delivery Options</h3>
// //                 <ul className="list-disc list-inside text-gray-600 mb-4">
// //                   {deliveryOptions.map((option, index) => (
// //                     <li key={index}>{option}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //               <div>
// //                 <h3 className="font-semibold text-gray-700 mb-2">Logistics Providers</h3>
// //                 <div className="flex items-center gap-4">
// //                   {logisticsProviders.map((provider) => (
// //                     <div key={provider.name} className="flex items-center">
// //                       <img className="w-8 h-8 rounded-full mr-2" src={provider.logo} alt={provider.name} />
// //                       <span className="text-sm text-gray-600">{provider.name}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Seller Information */}
// //           <div className="border-t border-gray-200 pt-4 flex items-center">
// //             <img
// //               className="size-12 rounded-full bg-gray-200 mr-4 object-cover"
// //               src={sellerImage}
// //               alt={sellerName}
// //             />
// //             <div>
// //               <p className="text-lg font-semibold text-gray-800">{sellerName}</p>
// //               <p className="text-sm text-gray-600">View Seller Profile</p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Right Section - Actions and Notes */}
// //         <aside className="w-full lg:w-[30%] flex flex-col gap-6">
// //           {/* Price and Add to Cart */}
// //           <div className="bg-white shadow-md rounded-lg p-6">
// //             <PriceActionButton price={productPrice} icon={cart} text="Add to cart" />
// //           </div>

// //           {/* Comments Section */}
// //           <div className="bg-white shadow-md rounded-lg p-6">
// //             <h2 className="font-bold mb-4 text-lg text-gray-800">Customer Reviews</h2>
// //             {DUMMY_COMMENTS.map((comment, index) => (
// //               <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
// //                 <div className="flex items-baseline justify-between mb-1">
// //                   <p className="font-semibold text-gray-700">{comment.author}</p>
// //                   {comment.date && <span className="text-xs text-gray-500">{comment.date}</span>}
// //                 </div>
// //                 <p className="text-gray-700">{comment.text}</p>
// //               </div>
// //             ))}
// //             {DUMMY_COMMENTS.length === 0 && <p className="text-gray-600">No reviews yet.</p>}
// //             {/* In a real app, you'd have pagination or a "Load More" button */}
// //           </div>

// //           {/* Leave a Note */}
// //           <div className="bg-white shadow-md rounded-lg p-6">
// //             <h2 className="font-bold mb-4 text-lg text-gray-800">Leave a Note for Seller</h2>
// //             <textarea
// //               className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-500 text-gray-700"
// //               rows={3}
// //               placeholder="Have a specific request or question?"
// //               value={note}
// //               onChange={handleNoteChange}
// //             />
// //             <button
// //               className="bg-black text-white py-2 px-4 rounded-md mt-3 hover:bg-[var(--secondary-color)] focus:outline-none focus:ring focus:bg-[var(--secondary-color)] w-full"
// //               onClick={handleSendNote}
// //             >
// //               Send Note
// //             </button>
// //           </div>
// //         </aside>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Product;

// import React, { useState } from "react";
// import { Back, Footer, Header } from "../components";
// import { cart } from "../assets/icons";
// import PriceActionButton from "../components/PriceActionButton";

// interface Comment {
//   author: string;
//   text: string;
//   date?: string; // Optional date for comments
// }

// const DUMMY_COMMENTS: Comment[] = [
//   { author: "Chidi Okoro", text: "Absolutely stunning! The quality exceeded my expectations.", date: "2025-05-02" },
//   { author: "Aisha Bello", text: "Great value for the price. Fast delivery too!", date: "2025-04-28" },
//   { author: "Segun Adebayo", text: "The color is exactly as shown. Very satisfied.", date: "2025-04-20" },
//   // ... more comments
// ];

// const Product = () => {
//   const [note, setNote] = useState("");
//   const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);

//   const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setNote(event.target.value);
//   };

//   const handleSendNote = () => {
//     if (note.trim()) {
//       // In a real application, you would send this note to the server
//       console.log("Note sent:", note);
//       setNote(""); // Clear the textarea after sending
//     }
//   };

//   const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedDelivery(event.target.value);
//     // In a real application, you might want to update the total price or other relevant info based on the delivery option.
//     console.log("Selected delivery option:", event.target.value);
//   };

//   // Dummy product data - replace with actual data fetching
//   const productName = "Premium Handcrafted Leather Bag";
//   const productDescription =
//     "Indulge in the luxury of our premium handcrafted leather bag. Made with the finest full-grain leather and featuring meticulous stitching, this timeless piece is perfect for everyday elegance. Its spacious interior and durable construction ensure both style and functionality. Available in classic brown and sophisticated black.";
//   const productPrice = "49,999";
//   const sellerName = "The Artisan Studio";
//   const sellerImage = "https://via.placeholder.com/80/D3D3D3/808080?Text=Janet"; // Placeholder
//   const productImage = "https://via.placeholder.com/600/C0C0C0/FFFFFF?Text=LeatherBag"; // Placeholder
//   const deliveryOptions = ["Free Delivery within Lagos", "Express Pickup Available", "International Shipping"];
//   const logisticsProviders = [
//     { name: "GIG Logistics", logo: "https://via.placeholder.com/50/008000/FFFFFF?Text=GIG" },
//     { name: "DHL", logo: "https://via.placeholder.com/50/FFD700/000000?Text=DHL" },
//     { name: "NIPOST", logo: "https://via.placeholder.com/50/DC143C/FFFFFF?Text=NIP" },
//   ];
//   const sellerRating = 4.7;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Header />
//       <Back />
//       <div className="flex-grow px-6 md:px-12 lg:px-24 py-8 flex justify-between gap-8">
//         {/* Left Section - Product Details */}
//         <section className="bg-white rounded-lg shadow-md p-6 md:p-8 w-full lg:w-[65%] flex flex-col justify-between">
//           {/* Product Image and Overview */}
//           <div className="flex flex-col md:flex-row gap-6 mb-8">
//             <img
//               className="w-full md:w-[40%] rounded-xl bg-gray-200 object-cover aspect-square"
//               src={productImage}
//               alt={productName}
//             />
//             <div className="flex flex-col justify-between h-full">
//               <div>
//                 <h1 className="text-2xl font-semibold text-gray-800 mb-2">{productName}</h1>
//                 <div className="flex items-center mb-2">
//                   {[...Array(5)].map((_, index) => (
//                     <svg
//                       key={index}
//                       className={`w-4 h-4 mr-1 fill-current ${
//                         index < Math.floor(sellerRating) ? "text-yellow-500" : "text-gray-400"
//                       }`}
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         d="M10 15l-5.878 3.09 1.176-6.545L.587 7.645l6.545-.952L10 1l2.868 5.693 6.545.952-4.765 4.09L15.822 18.09z"
//                       />
//                     </svg>
//                   ))}
//                   <span className="text-sm text-gray-600">({sellerRating.toFixed(1)})</span>
//                 </div>
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   {productDescription} <button className="text-blue-500 text-sm">More</button>
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-700 mb-2">Delivery Options</h3>
//                 <div className="space-y-2">
//                   {deliveryOptions.map((option, index) => (
//                     <div key={index} className="flex items-center">
//                       <input
//                         type="radio"
//                         id={`delivery-${index}`}
//                         name="deliveryOption"
//                         value={option}
//                         className="form-radio h-4 w-4 text-black focus:ring-black"
//                         checked={selectedDelivery === option}
//                         onChange={handleDeliveryChange}
//                       />
//                       <label htmlFor={`delivery-${index}`} className="ml-2 text-gray-600">
//                         {option}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-700 mb-2">Logistics Providers</h3>
//                 <div className="flex items-center gap-4">
//                   {logisticsProviders.map((provider) => (
//                     <div key={provider.name} className="flex items-center">
//                       <img className="w-8 h-8 rounded-full mr-2" src={provider.logo} alt={provider.name} />
//                       <span className="text-sm text-gray-600">{provider.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Seller Information */}
//           <div className="border-t border-gray-200 pt-4 flex items-center">
//             <img
//               className="size-12 rounded-full bg-gray-200 mr-4 object-cover"
//               src={sellerImage}
//               alt={sellerName}
//             />
//             <div>
//               <p className="text-lg font-semibold text-gray-800">{sellerName}</p>
//               <p className="text-sm text-gray-600">View Seller Profile</p>
//             </div>
//           </div>
//         </section>

//         {/* Right Section - Actions and Notes */}
//         <aside className="w-full lg:w-[30%] flex flex-col gap-6">
          

//           {/* Comments Section */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="font-bold mb-4 text-lg text-gray-800">Customer Reviews</h2>
//             {DUMMY_COMMENTS.map((comment, index) => (
//               <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
//                 <div className="flex items-baseline justify-between mb-1">
//                   <p className="font-semibold text-gray-700">{comment.author}</p>
//                   {comment.date && <span className="text-xs text-gray-500">{comment.date}</span>}
//                 </div>
//                 <p className="text-gray-700">{comment.text}</p>
//               </div>
//             ))}
//             {DUMMY_COMMENTS.length === 0 && <p className="text-gray-600">No reviews yet.</p>}
//             {/* In a real app, you'd have pagination or a "Load More" button */}
//           </div>

//           {/* Leave a Note */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="font-bold mb-4 text-lg text-gray-800">Leave a Note for Seller</h2>
//             <textarea
//               className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-500 text-gray-700"
//               rows={3}
//               placeholder="Have a specific request or question?"
//               value={note}
//               onChange={handleNoteChange}
//             />
//             <button
//               className="bg-black text-white py-2 px-4 rounded-md mt-3 hover:bg-[var(--secondary-color)] focus:outline-none focus:ring focus:bg-[var(--secondary-color)] w-full"
//               onClick={handleSendNote}
//             >
//               Send Note
//             </button>
//           </div>
//           {/* Price and Add to Cart */}
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <PriceActionButton price={productPrice} icon={cart} text="Add to cart" />
//           </div>
//         </aside>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Product;

import React, { useState, useEffect } from "react";
import { Back, Footer, Header } from "../components";
import { cart } from "../assets/icons";
import PriceActionButton from "../components/PriceActionButton";
import { products as productData } from "../data/ProductsDummyData"; // Assuming your products data is in '../data/products.ts'
import { useParams, useNavigate } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);
  const [product, setProduct] = useState<typeof productData[0] | null>(null);

  useEffect(() => {
    if (productId) {
      const foundProduct = productData.find((p) => p.productID === productId);
      setProduct(foundProduct || null);
    } else {
      // If no productId in the URL, maybe redirect back to products page or show an error
      navigate('/products');
    }
  }, [productId, navigate]);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const handleSendNote = () => {
    if (note.trim()) {
      console.log("Note sent:", note);
      setNote("");
    }
  };

  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDelivery(event.target.value);
    console.log("Selected delivery option:", event.target.value);
  };

  if (!product) {
    return <div>Loading product details...</div>; // Or a "Product not found" message
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <Back />
      <div className="flex-grow px-6 md:px-12 lg:px-24 py-8 flex justify-between gap-8">
        {/* Left Section - Product Details */}
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8 w-full lg:w-[65%] flex flex-col justify-between">
          {/* Product Image and Overview */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {product.productImages && product.productImages.length > 0 && (
              <img
                className="w-full md:w-[40%] rounded-xl bg-gray-200 object-cover aspect-square"
                src={product.productImages[0]}
                alt={product.productName}
              />
            )}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.productName}</h1>
                {product.sellerInfo && (
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 mr-1 fill-current ${
                          index < Math.floor(product.sellerInfo.sellerRating) ? "text-yellow-500" : "text-gray-400"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M10 15l-5.878 3.09 1.176-6.545L.587 7.645l6.545-.952L10 1l2.868 5.693 6.545.952-4.765 4.09L15.822 18.09z"
                        />
                      </svg>
                    ))}
                    <span className="text-sm text-gray-600">({product.sellerInfo.sellerRating.toFixed(1)})</span>
                  </div>
                )}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {product.productDescription} <button className="text-blue-500 text-sm">More</button>
                </p>
              </div>
              {product.deliveryOptions && product.deliveryOptions.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Delivery Options</h3>
                  <div className="space-y-2">
                    {product.deliveryOptions.map((option, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="radio"
                          id={`delivery-${index}`}
                          name="deliveryOption"
                          value={option}
                          className="form-radio h-4 w-4 text-black focus:ring-black"
                          checked={selectedDelivery === option}
                          onChange={handleDeliveryChange}
                        />
                        <label htmlFor={`delivery-${index}`} className="ml-2 text-gray-600">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {product.sellerInfo && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Seller</h3>
                  <p className="text-gray-600">{product.sellerInfo.sellerName}</p>
                  {/* You might want to fetch and display more seller info here */}
                </div>
              )}
              {/* Add other product details here if needed */}
            </div>
          </div>

          {/* Seller Information (moved seller info here) */}
          {product.sellerInfo && (
            <div className="border-t border-gray-200 pt-4 flex items-center">
              {/* Replace with actual seller image if available in the data */}
              <div className="size-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                {product.sellerInfo.sellerName.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">{product.sellerInfo.sellerName}</p>
                <p className="text-sm text-gray-600">View Seller Profile</p>
              </div>
            </div>
          )}
        </section>

        {/* Right Section - Actions and Notes */}
        <aside className="w-full lg:w-[30%] flex flex-col gap-6">
          {/* Price and Add to Cart */}
          {product.productPrice !== undefined && (
            <div className="bg-white shadow-md rounded-lg p-6">
              <PriceActionButton price={product.productPrice} icon={cart} text="Add to cart" />
            </div>
          )}

          {/* Comments Section */}
          {product.productReviews && product.productReviews.length > 0 && (
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="font-bold mb-4 text-lg text-gray-800">Customer Reviews</h2>
              {product.productReviews.map((comment, index) => (
                <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <p className="font-semibold text-gray-700">{comment.reviewer}</p>
                    {/* You might want to format the date if available */}
                  </div>
                  <p className="text-gray-700">{comment.reviewText}</p>
                </div>
              ))}
              {product.productReviews.length === 0 && <p className="text-gray-600">No reviews yet.</p>}
            </div>
          )}

          {/* Leave a Note */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="font-bold mb-4 text-lg text-gray-800">Leave a Note for Seller</h2>
            <textarea
              className="w-full p-3 border rounded-md text-sm focus:outline-none focus:ring focus:border-blue-500 text-gray-700"
              rows={3}
              placeholder="Have a specific request or question?"
              value={note}
              onChange={handleNoteChange}
            />
            <button
              className="bg-black text-white py-2 px-4 rounded-md mt-3 hover:bg-[var(--secondary-color)] focus:outline-none focus:ring focus:bg-[var(--secondary-color)] w-full"
              onClick={handleSendNote}
            >
              Send Note
            </button>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Product;