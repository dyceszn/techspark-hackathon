import { FC } from "react";
import { shirt } from "../../assets/images";

const ProductGrid: FC = () => {
  const products = [
    { id: 1, name: "Product Name", price: "$19.99", image: shirt },
    { id: 2, name: "Product Name", price: "$19.99", image: shirt },
    { id: 3, name: "Product Name", price: "$19.99", image: shirt },
    { id: 4, name: "Product Name", price: "$19.99", image: shirt },
    { id: 5, name: "Product Name", price: "$19.99", image: shirt },
    { id: 6, name: "Product Name", price: "$19.99", image: shirt },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Products</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
              <i className="fas fa-filter mr-2"></i>Filter
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
              <i className="fas fa-sort mr-2"></i>Sort
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <i className="fas fa-heart text-gray-400 hover:text-red-500"></i>
                  </button>
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-md font-semibold text-gray-900">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-900 font-sm">{product.price}</span>
                  <button className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
