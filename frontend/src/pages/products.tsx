
import React, { useState } from 'react';

import { beauty } from '../assets/photos';
import { cart } from '../assets/icons';
import {
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
} from '../assets/logos';

// Components
import Header from '../components/Header';
import Nav from '../components/Nav';
import SerachBar from '../components/SerachBar';
import ListingCard from '../components/ListingCard';
import BusinessLogoCircle from '../components/BusinessLogoCircle';
import Cart from '../components/Cart';
import Footer from '../components/Home/Footer';

interface Business { id: number; logo: string; }
interface Product {
  id: number;
  name: string;
  seller: string;
  price: string;
  image: string;
}

const businesses: Business[] = [
  { id: 1, logo: logo1 }, { id: 2, logo: logo2 }, { id: 3, logo: logo3 },
  { id: 4, logo: logo4 }, { id: 5, logo: logo5 }, { id: 6, logo: logo6 },
  { id: 7, logo: logo7 }, { id: 8, logo: logo8 }, { id: 9, logo: logo9 },
  { id: 10, logo: logo10 },
];

const products: Product[] = Array.from({ length: 13 }, (_, i) => ({
  id: i,
  name: `Product ${i + 1}`,
  seller: `Seller ${i + 1}`,
  price: (1000 + i * 10).toString(),
  image: beauty,
}));

const PAGE_SIZE = 12;

const Products: React.FC = () => {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(products.length / PAGE_SIZE);
  const paginated = products.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <SerachBar />

      {/* Main container with tighter sides */}
      <div className="container mx-auto px-2 lg:px-6 flex flex-col flex-1">
        {/* Logos row */}
        <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto gap-6 justify-center my-6 px-2 lg:px-6">
          {businesses.map((b, i) => (
            <div key={b.id} className={i >= 9 ? 'hidden lg:block' : undefined}>
              <BusinessLogoCircle logo={b.logo} />
            </div>
          ))}
        </div>

        <div className="w-full max-w-[1250px] h-48 md:h-64 bg-gray-100 mx-auto" />

        {/* Nav + Cart */}
        <div className="flex items-center justify-between p-6">
          <Nav />
          <img src={cart} alt="Cart" className="w-6 h-6" />
        </div>

        {/* Sidebar & Products */}
        <section className="flex flex-col lg:flex-row flex-1">
          <aside className="w-full lg:w-72 mx-2 lg:mx-4 my-4 p-4 bg-[var(--tertiary-color)] border border-gray-300 rounded-2xl overflow-auto">
            <p>Your sidebar content here</p>
          </aside>

          <div className="flex-1 flex flex-col p-4 overflow-auto">
            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
              {paginated.map(prod => (
                <ListingCard
                  key={prod.id}
                  name={prod.name}
                  seller={prod.seller}
                  price={prod.price}
                  image={prod.image}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setPage(p => Math.max(p - 1, 0))}
                disabled={page === 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm">
                Page {page + 1} of {pageCount}
              </span>
              <button
                onClick={() => setPage(p => Math.min(p + 1, pageCount - 1))}
                disabled={page === pageCount - 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        {/* Home Cart */}
        <div className="py-10">
          <Cart />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Products;
