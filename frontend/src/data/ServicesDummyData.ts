
import { nail1, nail2,nail5 } from "../assets/images";
import { HairService1, HairService2} from "../assets/images"; // Assuming you have these imports
import { cornrwos } from "../assets/icons";
import { yara } from "../assets/photos";

export const services = [
  {
    serviceID: "GIG121",
    serviceTitle: "Nail Fix & Design",
    serviceDescription:
      "Professional nail fixing and design services for students and young professionals. Choose from a variety of colors, designs, and styles to fit your personality and occasion.",

    servicePrice: 3000, // price in Naira
    priceType: "Fixed",
    serviceImages: [nail1, nail2, nail5],

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

      sellerImage: yara,
      sellerID: 101,
      sellerName: "Teniola Ajala",
      sellerRating: 4.8,
      sellerLocation: "Lagos, Nigeria",
      sellerBio:
        "Experienced nail technician with 5+ years in the beauty industry. Passionate about helping clients express their creativity through custom nail art.",
    },
    isStudentDiscountAvailable: true, // Special discount for students
  },

  {
    serviceID: "GIG234",
    serviceTitle: "Professional Hair Styling",
    serviceDescription:
      "Get a stylish and professional haircut or hairstyle for any occasion. Our experienced stylists offer a range of services including cuts, braiding, weaving, and treatments.",
    servicePrice: 5000, // price in Naira
    priceType: "Fixed",
    serviceImages: [HairService1, HairService2, cornrwos],
    serviceCategory: "Beauty & Wellness",
    totalOrders: 85,
    serviceReviews: [
      {
        reviewer: "Sarah Jones",
        rating: 5,
        reviewText:
          "Amazing haircut! The stylist really understood what I wanted and did a fantastic job. Will definitely be back!",
      },
      {
        reviewer: "David Brown",
        rating: 4,
        reviewText:
          "Good service, my braids look great. The salon was clean and the staff were friendly.",
      },
    ],
    serviceDiscount: 5, // 5% off
    deliveryOptions: ["At Seller's Location (Salon)"],
    serviceCreatedAt: "2024-01-20",
    serviceUpdatedAt: "2024-03-01",
    serviceDuration: "1 - 3 hours (depending on style)",
    serviceSchedule: "Weekdays & Weekends",
    sellerInfo: {
      sellerImage: yara,
      sellerID: 102,
      sellerName: "Chinedu Okoro",
      sellerRating: 4.6,
      sellerLocation: "Ikeja, Lagos, Nigeria",
      sellerBio:
        "Highly skilled hairstylist with a passion for creating modern and classic looks. Specializes in natural hair care and styling.",
    },
    isStudentDiscountAvailable: false,
  },]

