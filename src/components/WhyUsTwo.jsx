import React from "react";
import { motion } from "framer-motion";
import { FaSeedling, FaLeaf, FaHandsHelping, FaRecycle } from "react-icons/fa"; // Icons from React Icons

const WhyUs = () => {
  // Gradient Borders
  const borderStyles = [
    "bg-gradient-to-r from-green-400 to-blue-500",
    "bg-gradient-to-r from-pink-500 to-yellow-500",
    "bg-gradient-to-r from-purple-400 to-blue-300",
    "bg-gradient-to-r from-orange-400 to-red-500",
  ];

  return (
    <section
      className="py-12 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-background.jpg')" }} // Parallax Background Image
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-[#A27055] mb-8">
          Why Us
          <span
            className="block w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-[#106f26] to-[#A27055]"
            style={{ height: "3px" }}
          ></span>
        </h2>

        {/* Flex Container for Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Organic Farming",
              icon: <FaSeedling size={48} />,
              description: "We grow organic, high-quality rabbit meat.",
            },
            {
              title: "Sustainable Practices",
              icon: <FaRecycle size={48} />,
              description: "Sustainability is our core philosophy.",
            },
            {
              title: "Community Support",
              icon: <FaHandsHelping size={48} />,
              description: "Empowering local farmers.",
            },
            {
              title: "Eco-Friendly",
              icon: <FaLeaf size={48} />,
              description: "Committed to reducing environmental impact.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`relative bg-white p-6 rounded-lg shadow-xl ${borderStyles[index % borderStyles.length]} before:absolute before:inset-0 before:z-[-1] before:w-full before:h-full`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.2)", // Drop shadow
              }}
            >
              <div
                className={`absolute top-0 right-0 w-20 h-20 rounded-tr-lg ${borderStyles[index]} z-[-1]`}
                style={{
                  borderTopWidth: "6px",
                  borderRightWidth: "6px",
                  borderRadius: "0 6px 0 0",
                }}
              />
              <div className="flex items-center justify-center mb-4 text-[#106f26]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-2">
                {item.title}
              </h3>
              <p className="text-center text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
