import { Route, Routes } from "react-router";
import "./App.css";
import { Cart, Checkout, Service, Home } from "./pages";
// import { Login, SignUp } from "./pages";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/service" element={<Service />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
