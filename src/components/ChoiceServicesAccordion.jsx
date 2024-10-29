// src/components/AccordionSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first accordion open

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-12 md:px-12 md:py-24 bg-white text-gray-900">
      {/* Header */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#A27055" }}
        >
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Discover the range of services we offer at Rabbit Choice Farms,
          designed to meet your needs with excellence.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="w-1/4 bg-primary text-white rounded-l-lg shadow-md cursor-pointer"
              onClick={() => toggleAccordion(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 flex items-center justify-center text-center">
                <h2 className="text-lg font-semibold">{service.title}</h2>
              </div>
            </motion.div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="w-3/4 bg-secondary text-white rounded-r-lg shadow-md p-4"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AccordionSection;
