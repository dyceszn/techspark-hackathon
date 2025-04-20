import { FC } from "react";
import { aishat, ben, anita, yara } from "../../assets/photos";

const Spotlight: FC = () => {
  const profiles = [
    {
      id: 1,
      name: "Anita Oshowale",
      role: "Fashion Designer",
      image: anita,
      description: "mass comm girlie modeling her message one pose at a time",
      icon: "fas fa-code",
    },
    {
      id: 2,
      name: "Aishat Adewale",
      role: "Digital Artist",
      image: aishat,
      description: "makeup artist serving looks and breaking rules",
      icon: "fas fa-code",
    },
    {
      id: 3,
      name: "Ben Michael",
      role: "Photographer",
      image: ben,
      description: "writing pseudocode  by night, capturing moments by day",
      icon: "fas fa-code",
    },
    {
      id: 4,
      name: "Yara Chinaza",
      role: "Web Developer",
      image: yara,
      description: "creating fashion that speak louder than words.",
      icon: "fas fa-code",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">SPOTLIGHT</h2>
        <p className="ml-11 justify-center">Putting talent where they belong</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <div className="relative h-80">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex items-center mb-3">
                    <i className={`${profile.icon} text-2xl mr-3`}></i>
                    <h3 className="text-xl font-semibold">{profile.name}</h3>
                  </div>
                  <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {profile.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
            View All profiles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
