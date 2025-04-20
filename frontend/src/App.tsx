import { Route, Routes } from "react-router";
import "./App.css";
import React, { Suspense } from "react";

// Lazy loading
const Home = React.lazy(() => import("./pages/Home"));
const Loading = React.lazy(() => import("./pages/Loading"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Service = React.lazy(() => import("./pages/Service"));
const Alert = React.lazy(() => import("./pages/Alert"));
const Confirmation = React.lazy(() => import("./pages/Confirmation"));
const Login = React.lazy(() => import("./pages/Login"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Product = React.lazy(() => import("./pages/Product"));
const Profile = React.lazy(() => import("./pages/Profile"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/service" element={<Service />} />
        <Route path="/" element={<Home />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/loading" element={<Loading />} /> */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
