export const services = [
  {
    serviceID: "GIG121",
    serviceTitle: "Nail Fix & Design",
    serviceDescription:
      "Professional nail fixing and design services for students and young professionals. Choose from a variety of colors, designs, and styles to fit your personality and occasion.",
    servicePrice: 3000, // price in dollars or your local currency
    priceType: "Fixed", // "fixed" or "hourly"
    serviceImages: ["image1.jpg", "image2.jpg", "image3.jpg"],
    serviceCategory: "Beauty & Wellness",
    totalOrders: 150,
    serviceReviews: [
      {
        reviewer: "John Doe",
        rating: 5,
        reviewText:
          "Loved the nail design! The technician was professional and the service was super quick. Highly recommended!",
      },
      {
        reviewer: "Jane Smith",
        rating: 4,
        reviewText:
          "Great nail art, but the waiting time was a bit long. Still worth it for the results.",
      },
    ],
    serviceDiscount: 10, // 10% off
    deliveryOptions: [
      "Home Service",
      "At Seller's Location (Salon)",
      "Express Service (In-Salon)",
    ],
    serviceCreatedAt: "2023-03-10",
    serviceUpdatedAt: "2023-04-15",
    serviceDuration: "1.5 - 2 hours",
    serviceSchedule: "Weekends",
    sellerInfo: {
      sellerImage: "seller1.jpg",
      sellerID: 101,
      sellerName: "Teniola Ajala",
      sellerRating: 4.8,
      sellerLocation: "Lagos, Nigeria",
      sellerBio:
        "Experienced nail technician with 5+ years in the beauty industry. Passionate about helping clients express their creativity through custom nail art.",
    },
    isStudentDiscountAvailable: true, // Special discount for students
  },
];
