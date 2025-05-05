import { Route, Routes } from "react-router";
import "./App.css";
import React, { Suspense } from "react";

// Lazy loading
const Home = React.lazy(() => import("./pages/Home"));
const Loading = React.lazy(() => import("./pages/Loading"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Service = React.lazy(() => import("./pages/Service"));
const Services = React.lazy(() => import("./pages/Services"));
const Alert = React.lazy(() => import("./pages/Alert"));
const Confirmation = React.lazy(() => import("./pages/Confirmation"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Product = React.lazy(() => import("./pages/Product"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Products = React.lazy(() => import("./pages/products"));

const Dashboard = React.lazy(() => import("./pages/Seller/Dashboard"));
const Inventory = React.lazy(() => import("./pages/Seller/Inventory"));
const Orders = React.lazy(() => import("./pages/Seller/Orders"));
const Gigs = React.lazy(() => import("./pages/Seller/Gigs"));
const Wallet = React.lazy(() => import("./pages/Seller/Wallet"));
const SellerProfile = React.lazy(() => import("./pages/Seller/Profile"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/service/:serviceID" element={<Service />} />
        <Route path="/" element={<Home />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/seller/profile" element={<SellerProfile />} />
        <Route path="/services" element={<Services/>}/>
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
