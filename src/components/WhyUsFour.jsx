import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHandsHelping, FaSeedling, FaGlobe } from "react-icons/fa"; // Importing icons from react-icons
import "../styles/WhyUs.css"; // Custom styles for the parallax background

const WhyUs = () => {
  return (
    <section className="relative bg-cover bg-fixed py-16 px-6" id="why-us">
      {/* Background image parallax effect */}
      <div className="absolute inset-0 bg-opacity-60" />

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white relative z-10">
        Why Us
        <span className="block w-32 mx-auto h-1 mt-4 bg-gradient-to-r from-[#A27055] to-[#106f26]" />
      </h2>

      {/* Responsive grid for boxes */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Individual boxes */}
        {[
          {
            icon: <FaLeaf className="text-5xl text-[#A27055]" />,
            title: "Sustainability",
            description:
              "We focus on sustainable rabbit farming practices to empower communities.",
          },
          {
            icon: <FaHandsHelping className="text-5xl text-[#A27055]" />,
            title: "Community Support",
            description:
              "Supporting farmers through education and resources for success.",
          },
          {
            icon: <FaSeedling className="text-5xl text-[#A27055]" />,
            title: "Organic Products",
            description:
              "Our products are 100% organic, promoting healthy living.",
          },
          {
            icon: <FaGlobe className="text-5xl text-[#A27055]" />,
            title: "Global Reach",
            description:
              "Empowering farmers in Africa and beyond with our global initiatives.",
          },
        ].map((box, index) => (
          <motion.div
            key={index}
            className="bg-white border border-[#A27055] shadow-lg hover:shadow-xl p-8 rounded-md transition-all duration-300"
            whileHover={{ scale: 1.05 }} // Hover effect using Framer Motion
          >
            <div className="flex flex-col items-center">
              {box.icon}
              <h3 className="mt-6 text-xl font-semibold text-[#106f26]">
                {box.title}
              </h3>
              <p className="mt-4 text-center text-gray-700">
                {box.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action section */}
      <div className="relative z-10 mt-12 text-center">
        <h3 className="text-2xl font-semibold text-white">
          Join us in making a difference today!
        </h3>
        <button className="mt-6 px-6 py-3 bg-[#106f26] text-white font-bold rounded-full shadow-md hover:bg-[#0d5a1f] transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WhyUs;
