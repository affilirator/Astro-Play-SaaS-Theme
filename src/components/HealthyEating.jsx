import React from "react";
import { motion } from "framer-motion";
import { FaAppleAlt } from "react-icons/fa";

const HealthyEatingSection = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-r from-[#A27055] via-[#106f26] to-[#A27055]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="p-8 bg-white shadow-lg rounded-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#A27055] opacity-30"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <FaAppleAlt className="text-6xl text-[#106f26] mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-[#A27055] mb-4">
              Advocacy for Healthy Eating
            </h2>
            <p className="text-lg text-gray-700">
              We know that rabbit meat is a healthy alternative to traditional
              red meat. Low in cholesterol and rich in protein, our products
              support healthier lifestyles and dietary choices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthyEatingSection;
