import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { hero } from "../../assets/photos";
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
      <div className="relative h-full flex flex-col items-center font-[Lexend]  text-white">
        <div className=" w-full flex flex-row justify-between items-center h-16 px-[10vw] text-white">
          <p className="font-bold"></p>
          <nav>
            <ul className="flex flex-row gap-36">
              <Link to={"/products"}>
                <li className="">Shop</li>
              </Link>
              <Link to={"/services"}>
                <li className="">Hire</li>
              </Link>
              <Link to={"/dashboard"}>
                <li className="">Sell</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className=" w-full md:w-[65%] flex flex-col justify-center items-center h-full">
          <div className="space-y-6">
            {/* Main heading with animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="overflow-hidden"
            >
              <p className="text-center md:text-left self-start font-bold text-lg mb-6 leading-relaxed pl-7">
                unimart
              </p>
              <h1 className=" text-3xl md:text-4xl lg:text-5xl font-lexend leading-tight text-center">
                The exclusive freelance & e-commerce platform for{" "}
                <span className="font-bold font-[#f0f4f8]">PAU</span> students
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
              <p className="hidden md:block  text-xs leading-relaxed">
                A space where students list, buy, sell, and hire — from custom
                products to creative services. Built to spark entrepreneurship
                and empower student-owned businesses on campus. Join our
                community today and start exploring opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
