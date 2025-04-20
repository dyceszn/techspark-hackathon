import React from "react";
import {
  // Header,
  Footer,
  Hero,
  ProductGrid,
  BestSelling,
  BookCreative,
  Spotlight,
  StudentBusinesses,
} from "../components/Home";
import SerachBar from "../components/SerachBar";
import HomeCart from "../components/Home/HomeCart";
import Nav from "../components/Home/Nav";

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-scroll flex flex-col">
      {/* <Header /> */}
      <Hero />
      <section className="px-[5vw] md:px-[10vw]">
        <SerachBar />
        <Nav />
        <ProductGrid />
        <BestSelling />
        <BookCreative />
        <Spotlight />
        <StudentBusinesses />
        <HomeCart />
      </section>
      <Footer />
    </div>
  );
};
export default Home;
