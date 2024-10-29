// Import necessary dependencies
import React from "react";
import { motion } from "framer-motion";

// Define the CTA component
const CTA = () => {
  return (
    <motion.section
      className="relative flex flex-wrap justify-center gap-6 p-6  bg-cover bg-center text-white z-1"
      style={{
        backgroundImage:
          "url('src/images/Kenyan-woman-feeding-kales-to-rabbits-2048x2048.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 "></div>
      <div className="relative flex items-center justify-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 z-10">
        <motion.div
          className="max-w-screen-md text-center z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            About Us
          </h1>
          <p className="mb-8 font-light text-gray-300 sm:text-xl">
            We started <span>Rabbit Choice Farms</span> with the belief that
            true progress comes from empowering local communities. Through our
            training programs, we impart farmers with best practices in rabbit
            care, breeding, and farming techniques. Our goal is to enable
            farmers to thrive independently, improving their livelihoods and
            local economies.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <motion.a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get started
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              View more
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Export the CTA component
export default CTA;
