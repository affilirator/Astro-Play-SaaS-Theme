import React from "react";
import { motion } from "framer-motion";
import { FaCarrot, FaSeedling, FaAppleAlt, FaEgg } from "react-icons/fa"; // Example icons

const WhyUs = () => {
  const boxes = [
    {
      title: "Fresh Produce",
      icon: <FaCarrot className="w-8 h-8 text-[#A27055]" />,
      description:
        "We provide fresh and organic produce straight from our farms.",
    },
    {
      title: "Sustainable Practices",
      icon: <FaSeedling className="w-8 h-8 text-[#A27055]" />,
      description:
        "Our farming methods prioritize sustainability and environmental health.",
    },
    {
      title: "Quality Assurance",
      icon: <FaAppleAlt className="w-8 h-8 text-[#A27055]" />,
      description:
        "We ensure the highest quality standards for all our products.",
    },
    {
      title: "Farm Fresh Eggs",
      icon: <FaEgg className="w-8 h-8 text-[#A27055]" />,
      description: "Our eggs are collected daily from free-range hens.",
    },
  ];

  return (
    <section
      className="relative py-12 bg-cover bg-center"
      style={{ backgroundImage: 'url("/path/to/your/background.jpg")' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 relative">
          Why Us
          <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-[#A27055] to-[#106f26]"></div>
        </h2>
        <div className="flex flex-wrap -mx-4">
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-between w-full sm:w-1/2 p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div
                  className={`absolute top-0 right-0 w-6 h-6 rounded-full border-2 border-transparent bg-gradient-to-br from-[#A27055] to-[#106f26]`}
                ></div>
                {box.icon}
                <h3 className="mt-4 text-xl font-semibold">{box.title}</h3>
                <p className="mt-2 text-gray-600">{box.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
