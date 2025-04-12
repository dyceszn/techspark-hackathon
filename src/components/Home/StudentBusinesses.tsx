import { FC } from "react";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  pauLogo,
} from "../../assets/logos";

const StudentBusinesses: FC = () => {
  const businesses = [
    { id: 1, name: "Business 1", logo: logo1 },
    { id: 2, name: "Business 2", logo: logo2 },
    { id: 3, name: "Business 3", logo: logo3 },
    { id: 4, name: "Business 4", logo: logo4 },
    { id: 5, name: "Business 5", logo: logo5 },
    { id: 6, name: "Business 6", logo: logo6 },
    { id: 7, name: "Business 7", logo: logo7 },
    { id: 8, name: "Business 8", logo: logo8 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="mb-6 md:mb-0 w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <img
              src={pauLogo}
              alt="PAU Logo"
              className="h-80 w-full object-contain"
            />
          </div>
          <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <p className="text-gray-600">
              Some registered student businesses...
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {businesses.map((business) => (
                <div
                  key={business.id}
                  className="aspect-square bg-white rounded-xl p-1 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={business.logo}
                    alt={business.name}
                    className="w-8 h-8 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Join over 200+ student businesses already on our platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentBusinesses;
