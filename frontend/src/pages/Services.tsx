// src/pages/Services.tsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "../components/Home";
import SerachBar from "../components/SerachBar";
import ServiceTag from "../components/ServiceTag";
import SmallServiceCard from "../components/SmallServiceCard";
import BigServiceCard from "../components/BigServiceCard";
import ProfessionalsCard from "../components/ProfessionalsCard";
import Cart from "../components/Cart";
import { cart } from "../assets/icons";
import { serviceGirl, serviceimg } from "../assets/images";
import { services } from "../data/ServicesDummyData"; // Import the dummy data

const Servicex = Array(11).fill(services[1]);

const serviceTags = [
  { image: serviceGirl, text: "Ta Janetta" },
  { image: serviceGirl, text: "Maryann Cholloman" },
  { image: serviceGirl, text: "Jonn" },
  { image: serviceGirl, text: "Lionel James" },
  { image: serviceGirl, text: "Jonathan Rabiu" },
];

const categories = [
  "All",
  "Art & Illustration",
  "Beauty",
  "Coding",
  "Logistics",
  "Music",
  "Photography",
  "Video & Animation",
];

const backgroundImage = serviceimg;

const Services: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <SerachBar />

      {/* Tags */}
      <div className="flex flex-wrap gap-4 justify-center my-12">
        {serviceTags.map((tag, i) => (
          <ServiceTag key={i} {...tag} />
        ))}
      </div>

      {/* Banner */}
      <div
        className="w-full max-w-[1250px] h-48 md:h-64 bg-gray-100 mx-auto mb-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Categories + Cart */}
      <div className="flex flex-wrap gap-6 mb-8 items-center justify-between">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="px-5 py-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>
        <Link to="/cart">
          <img src={cart} alt="Cart" className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>

      {/* Services Grid */}
      <section className="flex flex-col lg:flex-row gap-4 mb-16">
        <aside className="w-full lg:w-72 p-4 bg-[var(--tertiary-color)] border border-gray-300 rounded-2xl overflow-auto">
          <p>Your sidebar content here</p>
        </aside>

        <div className="w-full lg:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {Servicex.slice(0, 3).map((svc) => (
              <Link key={svc.serviceID} to={`/service/${svc.serviceID}`}>
                <SmallServiceCard
                  image1={svc.serviceImages[0]}
                  image2={svc.serviceImages[1]}
                  profileImage={svc.sellerInfo.sellerImage}
                  description={svc.serviceDescription.substring(0, 60) + "..."}
                  name={svc.serviceTitle}
                  price={svc.servicePrice} // Corrected: Passing as a number
                  categories={[svc.serviceCategory]}
                />
              </Link>
            ))}

            {Servicex.length > 3 && (
              <Link to={`/service/${Servicex[3].serviceID}`}>
                <SmallServiceCard
                  image1={Servicex[3].serviceImages[0]}
                  image2={Servicex[3].serviceImages[1]}
                  profileImage={Servicex[3].sellerInfo.sellerImage}
                  description={
                    Servicex[3].serviceDescription.substring(0, 60) + "..."
                  }
                  name={Servicex[3].serviceTitle}
                  price={Servicex[3].servicePrice} // Corrected: Passing as a number
                  categories={[Servicex[3].serviceCategory]}
                />
              </Link>
            )}

            {Servicex.length > 4 && (
              <Link
                to={`/service/${services[0].serviceID}`}
                className="md:col-span-2 md:row-span-2"
              >
                <BigServiceCard
                  image={services[0].serviceImages[0]}
                  name={services[0].serviceTitle}
                  description={services[0].serviceDescription}
                  price={services[0].servicePrice} // Corrected: Passing as a number
                />
              </Link>
            )}

            {Servicex.slice(5, 9).map((svc) => (
              <Link key={svc.serviceID} to={`/service/${svc.serviceID}`}>
                <SmallServiceCard
                  image1={svc.serviceImages[0]}
                  image2={svc.serviceImages[1]}
                  profileImage={svc.sellerInfo.sellerImage}
                  description={svc.serviceDescription.substring(0, 60) + "..."}
                  name={svc.serviceTitle}
                  price={svc.servicePrice} // Corrected: Passing as a number
                  categories={[svc.serviceCategory]}
                />
              </Link>
            ))}

            {Servicex.length > 9 && (
              <Link
                to={`/service/${services[0].serviceID}`}
                className="md:col-span-2 md:row-span-2"
              >
                <BigServiceCard
                  image={services[0].serviceImages[0]}
                  name={services[0].serviceTitle}
                  description={services[0].serviceDescription}
                  price={services[0].servicePrice} // Corrected: Passing as a number
                />
              </Link>
            )}

            {Servicex.slice(1, 3).map((svc) => (
              <Link key={svc.serviceID} to={`/service/${svc.serviceID}`}>
                <SmallServiceCard
                  image1={svc.serviceImages[0]}
                  image2={svc.serviceImages[1]}
                  profileImage={svc.sellerInfo.sellerImage}
                  description={svc.serviceDescription.substring(0, 60) + "..."}
                  name={svc.serviceTitle}
                  price={svc.servicePrice} // Corrected: Passing as a number
                  categories={[svc.serviceCategory]}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <h2 className="text-3xl font-bold mb-12">Featured Professionals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {Servicex.slice(0, 4).map((svc) => (
          <ProfessionalsCard
            key={svc.sellerInfo.sellerID}
            name={svc.sellerInfo.sellerName}
            imageSrc={svc.sellerInfo.sellerImage}
            description={svc.sellerInfo.sellerBio}
            categories={[svc.serviceCategory]}
          />
        ))}
      </div>

      <Cart />
    </main>
    <Footer />
  </div>
);

export default Services;