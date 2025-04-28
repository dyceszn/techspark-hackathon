// Dummy Data for testing purposes
import { phio } from "../assets/photos";
import { nail1, nail2, nail3, nail4, nail5 } from "../assets/images";

interface Seller {
  profile: {
    photo: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    sellerType: string;
    category: string;
    onlineStatus: string;
    sellerScore: number;
    totalOrders: number;
    completedOrders: number;
    bankDetails: {
      accountNumber: string;
      bankName: string;
      accountName: string;
    };
  };
  wallet: {
    totalBalance: number;
    withdrawableBalance: number;
    pendingBalance: number;
    transactions: Transaction[];
  };
  gigs?: Gig[];
  inventory?: InventoryItem[];
  orders: (OrderType1 | OrderType2)[];
}

interface Gig {
  serviceImages: string[];
  serviceID: string;
  serviceTitle: string;
  orders: number;
  category: string;
  dateListed: string;
  description: string;
  schedule: string;
  duration: string;
  price: string;
  discount: string;
  status: string;
  priceType: string;
}

interface InventoryItem {
  productImages: string[];
  productID: string;
  productName: string;
  instock: number;
  status: string;
  dateListed: string;
  category: string;
  price: string;
  description: string;
  discount: string;
  orders: number;
  size: string;
  deliveryOption: string;
}

interface OrderType1 {
  orderImages: string[];
  orderID: string;
  itemName: string;
  category: string;
  customerName: string;
  quantity: string;
  status: string;
  dateListed: string;
  totalPrice: string;
  discount: string;
  customer: Customer;
}

interface OrderType2 {
  orderImages: string[];
  orderID: string;
  itemName: string;
  category: string;
  quantity: string;
  status: string;
  dateListed: string;
  totalPrice: string;
  discount: string;
  customer: Customer;
}

interface Customer {
  name: string;
  email: string;
  number: string;
  deliveryChoice: string;
  deliveryAddress: string;
  logistics: string;
}

interface Transaction {
  type: string;
  amount: string;
  date: string;
  status: string;
}

// -------------------------------------------------------------------Student Business Dummy Data--------------------------------------------------------------

// export const seller: Seller = {
//   profile: {
//     photo: phio,
//     name: "TeniGadgets",
//     email: "teni.studentbiz@example.com",
//     phone: "+2348012345678",
//     address: "W20 Amethyst Hall, University of Lagos",
//     about:
//       "Affordable tech and accessories for students. Keeping you connected at the best prices!",
//     sellerType: "Student Business",
//     category: "Electronics",
//     onlineStatus: "Online",
//     sellerScore: 9.2,
//     totalOrders: 235,
//     completedOrders: 220,
//     bankDetails: {
//       accountNumber: "1234567890",
//       bankName: "GTBank",
//       accountName: "Teniola Johnson",
//     },
//   },
//   wallet: {
//     totalBalance: 82500,
//     withdrawableBalance: 70000,
//     pendingBalance: 12500,
//     transactions: [
//       { type: "Credit", amount: "7000", date: "05-04-25", status: "Completed" },
//       {
//         type: "Credit",
//         amount: "12000",
//         date: "07-04-25",
//         status: "Completed",
//       },
//       { type: "Debit", amount: "4000", date: "08-04-25", status: "Completed" },
//       { type: "Credit", amount: "6500", date: "09-04-25", status: "Pending" },
//       { type: "Debit", amount: "2500", date: "11-04-25", status: "Completed" },
//       { type: "Credit", amount: "9000", date: "14-04-25", status: "Completed" },
//       { type: "Credit", amount: "5000", date: "15-04-25", status: "Completed" },
//       { type: "Debit", amount: "3500", date: "16-04-25", status: "Pending" },
//     ],
//   },
//   inventory: [
//     {
//       productImages: [nail1, nail2, nail3, nail4, nail5],
//       productID: "INV001",
//       productName: "Wireless Earbuds",
//       instock: 35,
//       status: "High Stock",
//       dateListed: "2023-09-20",
//       category: "Electronics",
//       price: "7500 Naira",
//       description:
//         "Noise-cancelling, high-quality wireless earbuds perfect for online classes and calls.",
//       discount: "5% off",
//       orders: 18,
//       size: "One size",
//       deliveryOption: "Pickup & Doorstep delivery",
//     },
//     {
//       productImages: [nail1, nail2, nail3, nail4, nail5],
//       productID: "INV002",
//       productName: "Phone Holder",
//       instock: 60,
//       status: "Very High Stock",
//       dateListed: "2023-10-12",
//       category: "Accessories",
//       price: "1200 Naira",
//       description: "Flexible phone holder for desks and beds.",
//       discount: "10% off",
//       orders: 25,
//       size: "Adjustable",
//       deliveryOption: "Pickup only",
//     },
//     {
//       productImages: [nail1, nail2, nail3, nail4, nail5],
//       productID: "INV003",
//       productName: "USB-C Charging Cable",
//       instock: 40,
//       status: "Medium Stock",
//       dateListed: "2023-11-05",
//       category: "Electronics",
//       price: "800 Naira",
//       description: "Durable fast-charging USB-C cable, 1.5m length.",
//       discount: "No discount",
//       orders: 32,
//       size: "1.5 meters",
//       deliveryOption: "Pickup & Doorstep delivery",
//     },
//     {
//       productImages: [nail1, nail2, nail3, nail4, nail5],
//       productID: "INV004",
//       productName: "Bluetooth Speaker",
//       instock: 10,
//       status: "Low Stock",
//       dateListed: "2023-09-25",
//       category: "Electronics",
//       price: "9500 Naira",
//       description: "Mini waterproof Bluetooth speaker. Big sound, small size.",
//       discount: "15% off",
//       orders: 7,
//       size: "Portable",
//       deliveryOption: "Doorstep delivery only",
//     },
//     {
//       productImages: [nail1, nail2, nail3, nail4, nail5],
//       productID: "INV005",
//       productName: "Ring Light (10 inches)",
//       instock: 25,
//       status: "Medium Stock",
//       dateListed: "2023-10-30",
//       category: "Accessories",
//       price: "6500 Naira",
//       description: "Perfect for content creators. Comes with tripod stand.",
//       discount: "5% off",
//       orders: 16,
//       size: "10 inches",
//       deliveryOption: "Pickup & Doorstep delivery",
//     },
//   ],
//   orders: [
//     {
//       orderImages: [nail1, nail2, nail3, nail4, nail5],
//       orderID: "ORD001",
//       itemName: "Wireless Earbuds",
//       category: "Electronics",
//       customerName: "Amaka Okafor",
//       quantity: "x2",
//       status: "fulfilled",
//       dateListed: "2024-04-01",
//       totalPrice: "14250 Naira",
//       discount: "5% off",
//       customer: {
//         name: "Amaka Okafor",
//         email: "amaka.okafor@studentmail.com",
//         number: "+2348098765432",
//         deliveryChoice: "Pickup",
//         deliveryAddress: "UNILAG Hostel, Yaba, Lagos",
//         logistics: "None",
//       },
//     },
//     {
//       orderImages: [nail1, nail2, nail3, nail4, nail5],
//       orderID: "ORD002",
//       itemName: "Phone Holder",
//       category: "Accessories",
//       quantity: "x5",
//       status: "unfulfilled",
//       dateListed: "2024-04-03",
//       totalPrice: "5400 Naira",
//       discount: "10% off",
//       customer: {
//         name: "Emmanuel Bassey",
//         email: "emma.b@studentmail.com",
//         number: "+2347011122233",
//         deliveryChoice: "Home delivery",
//         deliveryAddress: "25 Bode Thomas, Surulere",
//         logistics: "GIG Logistics",
//       },
//     },
//     {
//       orderImages: [nail1, nail2, nail3, nail4, nail5],
//       orderID: "ORD003",
//       itemName: "USB-C Charging Cable",
//       category: "Electronics",
//       quantity: "x3",
//       status: "fulfilled",
//       dateListed: "2024-04-05",
//       totalPrice: "2400 Naira",
//       discount: "No discount",
//       customer: {
//         name: "Fatima Bello",
//         email: "fatima.b@student.com",
//         number: "+2348155554444",
//         deliveryChoice: "Pickup",
//         deliveryAddress: "A2 Crystal Hall, UI, Ibadan",
//         logistics: "None",
//       },
//     },
//     {
//       orderImages: [nail1, nail2, nail3, nail4, nail5],
//       orderID: "ORD004",
//       itemName: "Bluetooth Speaker",
//       category: "Electronics",
//       quantity: "x1",
//       status: "fulfilled",
//       dateListed: "2024-04-06",
//       totalPrice: "8075 Naira",
//       discount: "15% off",
//       customer: {
//         name: "Tolu Ogunlesi",
//         email: "tolu.o@studentmail.com",
//         number: "+2348133332222",
//         deliveryChoice: "Home delivery",
//         deliveryAddress: "Ikoyi, Lagos",
//         logistics: "Konga Express",
//       },
//     },
//     {
//       orderImages: [nail1, nail2, nail3, nail4, nail5],
//       orderID: "ORD005",
//       itemName: "Ring Light (10 inches)",
//       category: "Accessories",
//       quantity: "x2",
//       status: "pending",
//       dateListed: "2024-04-07",
//       totalPrice: "12350 Naira",
//       discount: "5% off",
//       customer: {
//         name: "Chidera Nnaji",
//         email: "chidera.n@studentmail.com",
//         number: "+2348022221111",
//         deliveryChoice: "Pickup",
//         deliveryAddress: "Nnamdi Azikiwe Hostel, UNN",
//         logistics: "None",
//       },
//     },
//     // Add more orders here as needed
//   ],
// };

// ------------------------------------------------------------------- Freelancer Dummy Data --------------------------------------------------------------

export const seller: Seller = {
  profile: {
    photo: phio,
    name: "Amaka Beauty",
    email: "amaka.nails@example.com",
    phone: "+2348098765432",
    address: "Ikoyi, Lagos, Nigeria",
    about:
      "Certified nail technician specializing in luxury nail fixes, pedicure, manicure, and eyebrow care. Making beauty accessible, one session at a time.",
    sellerType: "Freelancer",
    category: "Beauty and Care",
    onlineStatus: "Offline",
    sellerScore: 9.5,
    totalOrders: 250,
    completedOrders: 245,
    bankDetails: {
      accountNumber: "9876543210",
      bankName: "Access Bank",
      accountName: "Amaka Beauty Services",
    },
  },
  wallet: {
    totalBalance: 175000,
    withdrawableBalance: 150000,
    pendingBalance: 25000,
    transactions: [
      {
        type: "Credit",
        amount: "15000",
        date: "02-04-25",
        status: "Completed",
      },
      { type: "Credit", amount: "5000", date: "06-04-25", status: "Pending" },
      { type: "Debit", amount: "20000", date: "07-04-25", status: "Completed" },
      {
        type: "Credit",
        amount: "35000",
        date: "10-04-25",
        status: "Completed",
      },
      { type: "Debit", amount: "10000", date: "15-04-25", status: "Completed" },
      {
        type: "Credit",
        amount: "25000",
        date: "18-04-25",
        status: "Completed",
      },
    ],
  },
  gigs: [
    {
      serviceImages: [nail1, nail2, nail3, nail4, nail5],
      serviceID: "1234567",
      serviceTitle: "Fix your nails",
      orders: 45,
      category: "Beauty",
      dateListed: "2023-10-01",
      description:
        "Premium nail care and fixes. From basic designs to luxury nail art, we provide it all.",
      schedule: "Saturdays",
      duration: "3 hrs",
      price: "2999 Naira",
      discount: "No discount",
      status: "Active",
      priceType: "Fixed",
    },
    {
      serviceImages: [nail1, nail2, nail3, nail4, nail5],
      serviceID: "1234568",
      serviceTitle: "Eyebrow Shaping",
      orders: 30,
      category: "Beauty",
      dateListed: "2023-11-05",
      description:
        "Get perfectly shaped eyebrows to enhance your facial features. Customize the shape to your liking.",
      schedule: "Fridays",
      duration: "1 hr",
      price: "1500 Naira",
      discount: "10% off",
      status: "Active",
      priceType: "Fixed",
    },
    {
      serviceImages: [nail5, nail1, nail2, nail3, nail4],
      serviceID: "1234569",
      serviceTitle: "Luxury Pedicure",
      orders: 25,
      category: "Beauty",
      dateListed: "2024-01-15",
      description:
        "Revitalize your feet with our luxury pedicure services. Soft, clean, and polished!",
      schedule: "Sundays",
      duration: "2 hrs",
      price: "5000 Naira",
      discount: "5% off",
      status: "Active",
      priceType: "Fixed",
    },
    {
      serviceImages: [nail2, nail3, nail5, nail1, nail4],
      serviceID: "1234570",
      serviceTitle: "Acrylic Nail Fix",
      orders: 20,
      category: "Beauty",
      dateListed: "2024-02-10",
      description:
        "Professional acrylic nail extensions with custom designs available. Durable and stylish.",
      schedule: "Wednesdays",
      duration: "2.5 hrs",
      price: "4500 Naira",
      discount: "15% off",
      status: "Active",
      priceType: "Fixed",
    },
    {
      serviceImages: [nail3, nail1, nail4, nail5, nail2],
      serviceID: "1234571",
      serviceTitle: "Gel Polish Application",
      orders: 18,
      category: "Beauty",
      dateListed: "2024-03-01",
      description:
        "Glossy and long-lasting gel polish for your nails. Wide range of colors to choose from.",
      schedule: "Thursdays",
      duration: "1.5 hrs",
      price: "2500 Naira",
      discount: "5% off",
      status: "Active",
      priceType: "Fixed",
    },
  ],
  orders: [
    {
      orderImages: [nail1, nail2, nail3, nail4, nail5],
      orderID: "ORD001",
      itemName: "Luxury Pedicure",
      category: "Beauty",
      customerName: "Jane Smith",
      quantity: "x1",
      status: "fulfilled",
      dateListed: "2024-03-15",
      totalPrice: "5000 Naira",
      discount: "5% off",
      customer: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        number: "+2348011122233",
        deliveryChoice: "At Seller's Location",
        deliveryAddress: "Ikoyi, Lagos",
        logistics: "N/A",
      },
    },
    {
      orderImages: [nail1, nail2, nail3, nail4, nail5],
      orderID: "ORD002",
      itemName: "Eyebrow Shaping",
      category: "Beauty",
      customerName: "Tolu Ade",
      quantity: "x2",
      status: "fulfilled",
      dateListed: "2024-04-01",
      totalPrice: "2700 Naira",
      discount: "10% off",
      customer: {
        name: "Tolu Ade",
        email: "tolu.ade@example.com",
        number: "+2348014455667",
        deliveryChoice: "Home Service",
        deliveryAddress: "60 Pearl Hall",
        logistics: "N/A",
      },
    },
    {
      orderImages: [nail1, nail2, nail3, nail4, nail5],
      orderID: "ORD003",
      itemName: "Fix your nails",
      category: "Beauty",
      customerName: "Bola Peters",
      quantity: "x1",
      status: "pending",
      dateListed: "2024-04-10",
      totalPrice: "2999 Naira",
      discount: "No discount",
      customer: {
        name: "Bola Peters",
        email: "bola.peters@example.com",
        number: "+2348099988776",
        deliveryChoice: "Home Service",
        deliveryAddress: "40 Pearl Hall",
        logistics: "N/A",
      },
    },
    {
      orderImages: [nail1, nail2, nail3, nail4, nail5],
      orderID: "ORD004",
      itemName: "Gel Polish Application",
      category: "Beauty",
      customerName: "Chika Okafor",
      quantity: "x1",
      status: "unfulfilled",
      dateListed: "2024-04-18",
      totalPrice: "2500 Naira",
      discount: "5% off",
      customer: {
        name: "Chika Okafor",
        email: "chika.okafor@example.com",
        number: "+2348076543210",
        deliveryChoice: "At Seller's Location",
        deliveryAddress: "20 Cedar Hall",
        logistics: "N/A",
      },
    },
    {
      orderImages: [nail1, nail2, nail3, nail4, nail5],
      orderID: "ORD005",
      itemName: "Acrylic Nail Fix",
      category: "Beauty",
      customerName: "Amina Bello",
      quantity: "x1",
      status: "fulfilled",
      dateListed: "2024-04-20",
      totalPrice: "4500 Naira",
      discount: "15% off",
      customer: {
        name: "Amina Bello",
        email: "amina.bello@example.com",
        number: "+2348065432198",
        deliveryChoice: "Home Service",
        deliveryAddress: "30 Trezadel Hall",
        logistics: "N/A",
      },
    },
  ],
};
