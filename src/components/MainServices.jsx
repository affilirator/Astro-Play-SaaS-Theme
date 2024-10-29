import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHome,
  FaAppleAlt,
  FaStethoscope,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";

// Array containing the section data
const sections = [
  {
    title: "Farm Infrastructure Development",
    content:
      "Expert advice and assistance in constructing efficient and humane rabbit hutches that promote optimal health and productivity. Our designs incorporate best practices in hygiene and farm management efficiency.",
    bgColor: "bg-[#A27055]", // Primary color for background
    textColor: "text-white", // White text on primary color background
    icon: <FaHome className="text-4xl" />,
  },
  {
    title: "Feeding & Nutrition Guidance",
    content:
      "Proper nutrition is critical for healthy and productive rabbits. We provide tailored feeding programs and recommendations on the best feeds to ensure rapid growth and high-quality meat production.",
    bgColor: "bg-[#106f26]", // Secondary color for background
    textColor: "text-white", // White text on secondary color background
    icon: <FaAppleAlt className="text-4xl" />,
  },
  {
    title: "Veterinary Services",
    content:
      "Our team of experienced veterinarians offers regular health checks, disease prevention strategies, and treatment services to maintain the well-being of your rabbit stock.",
    bgColor: "bg-[#A27055]", // Primary color for background
    textColor: "text-white", // White text on primary color background
    icon: <FaStethoscope className="text-4xl" />,
  },
  {
    title: "Training & Education",
    content:
      "We conduct comprehensive training programs and workshops for farmers and farmhands, covering all aspects of large-scale rabbit farming, including breeding, health management, and market strategies.",
    bgColor: "bg-[#106f26]", // Secondary color for background
    textColor: "text-white", // White text on secondary color background
    icon: <FaChalkboardTeacher className="text-4xl" />,
  },
  {
    title: "Contract Farming Partnerships",
    content:
      "Through our contract farming model, we partner with you to provide resources and guaranteed buy-back agreements, minimizing risks and ensuring steady income streams.",
    bgColor: "bg-[#A27055]", // Primary color for background
    textColor: "text-white", // White text on primary color background
    icon: <FaHandshake className="text-4xl" />,
  },
];

// Component to render each card
const IconCard = ({ title, content, index, bgColor, textColor, icon }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`relative flex flex-col items-center p-6 rounded-lg shadow-lg ${bgColor} ${textColor} text-center cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3`}
    >
      <div className={`mb-4 ${textColor}`}>{icon}</div>
      <h2 className={`text-2xl font-bold mb-2`}>{title}</h2>
      <p className={`text-base`}>{content}</p>
    </motion.div>
  );
};

// Main component to render all cards
const ServicesSection = () => {
  return (
    <div className="py-12 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <IconCard key={index} index={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
