import { FC } from "react";
import { videography, programming, beauty, art } from "../../assets/photos";

const BookCreative: FC = () => {
  const services = [
    {
      id: 1,
      title: "Videography",
      image: videography,
      description: "Professional video production services",
      icon: "fas fa-video",
    },
    {
      id: 2,
      title: "Programming",
      image: programming,
      description: "Custom software development",
      icon: "fas fa-code",
    },
    {
      id: 3,
      title: "Beauty",
      image: beauty,
      description: "Professional beauty services",
      icon: "fas fa-spa",
    },
    {
      id: 4,
      title: "Art & Design",
      image: art,
      description: "Creative design solutions",
      icon: "fas fa-palette",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Book a creative
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <div className="relative h-80">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex items-center mb-3">
                    <i className={`${service.icon} text-2xl mr-3`}></i>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookCreative;
