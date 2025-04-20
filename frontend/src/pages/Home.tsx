import React from "react";
import {
  Header,
  Footer,
  Hero,
  ProductGrid,
  BestSelling,
  BookCreative,
  Spotlight,
  StudentBusinesses,
} from "../components/Home";

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-scroll flex flex-col">
      <Header />
      <Hero />
      <section className="px-12 block ">
        <ProductGrid />
        <BestSelling />
        <BookCreative />
        <Spotlight />
        <StudentBusinesses />
      </section>
      <Footer />
    </div>
  );
};
export default Home;
