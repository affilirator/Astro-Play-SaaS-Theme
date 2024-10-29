import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import servicesData from "./servicesData"; // Assume this imports the 7 services
//import "./OurServices.css"; // TailwindCSS + custom styling

const OurServices = () => {
  const [isInView, setIsInView] = useState(false);

  // Animations: Trigger on scroll
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.querySelector("#services");
      const bounding = servicesSection.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        setIsInView(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="services"
      className="relative min-h-screen bg-white py-16 px-8"
    >
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide text-primary text-center mb-12">
        Our Services
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={container}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            className="relative bg-secondary text-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-500"
            variants={item}
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
            <motion.div
              className="absolute top-2 right-2 bg-primary p-2 rounded-full"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
            >
              <img src={service.icon} alt={service.title} className="w-8 h-8" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative background elements */}
      <motion.div
        className="absolute -top-10 left-0 w-24 h-24 rounded-full bg-primary opacity-50"
        animate={{ x: [0, 20, -10], y: [0, -20, 10] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-secondary opacity-30"
        animate={{ x: [0, -20, 10], y: [0, 20, -10] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
    </section>
  );
};

export default OurServices;
