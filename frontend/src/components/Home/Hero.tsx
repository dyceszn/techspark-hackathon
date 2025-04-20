// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { asian } from "../../assets/photos"; // Adjust the import path as necessary
// const Hero = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section
//       ref={ref}
//       className="relative h-screen w-full overflow-hidden"
//       style={{
//         backgroundImage: `url(${asian})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Dark overlay for better text readability */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Semi-transparent black foreground for the right side */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-black/50" />

//       {/* Main content container */}
//       <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-white">
//         <div className="space-y-6">
//           {/* Main heading with animation */}
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={inView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.8 }}
//             className="overflow-hidden"
//           >
//             <h1 className=" text-3xl md:text-4xl lg:text-5xl font-lexend font-thin leading-tight text-center">
//               The exclusive freelance & e-commerce platform for PAU students
//             </h1>
//           </motion.div>

//           {/* Description paragraphs with staggered animation */}
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={inView ? { y: 0, opacity: 1 } : {}}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             className="ml-[55%] space-y-2"
//             style={{ fontFamily: "Comfortaa" }}
//           >
//             <p className="text-xs leading-relaxed">
//               A space where students list, buy, sell, and hire — from custom
//               products to creative services.
//             </p>
//             <p className="text-xs leading-relaxed">
//               Built to spark entrepreneurship and empower student-owned
//               businesses on campus.
//             </p>
//             <p className="text-xs leading-relaxed">
//               Join our community today and start exploring opportunities.
//             </p>
//           </motion.div>

//           {/* Department label */}
//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             animate={inView ? { y: 0, opacity: 1 } : {}}
//             transition={{ delay: 0.2, duration: 0.7 }}
//             className="absolute bottom-8 left-0 p-4"
//           >
//             <h2 className="text-2xl md:text-3xl font-bold">
//               Information Science
//             </h2>
//           </motion.div>

//           {/* Tagline with border accent */}
//           <div className="absolute bottom-8 right-0 space-y-1 p-4 text-right">
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               className="text-2xl md:text-3xl font-bold"
//             >
//               Model · Entrepreneur
//             </motion.p>
//             <p className="text-xs md:text-sm opacity-80">
//               Student Business Owner
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { hero } from "../../assets/photos"; // Adjust the import path as necessary
const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main content container */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-white">
        <div></div>
        <div className="space-y-6">
          {/* Main heading with animation */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="overflow-hidden"
          >
            <h1 className="border-white border-1 text-3xl md:text-4xl lg:text-5xl font-lexend font-thin leading-tight text-center">
              The exclusive freelance & e-commerce platform for PAU students
            </h1>
          </motion.div>

          {/* Description paragraphs with staggered animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="ml-[55%] space-y-2"
            style={{ fontFamily: "Comfortaa" }}
          >
            <p className=" border-white border-1 text-xs leading-relaxed">
              A space where students list, buy, sell, and hire — from custom
              products to creative services. Built to spark entrepreneurship and
              empower student-owned businesses on campus. Join our community
              today and start exploring opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
