// Import necessary dependencies
import React from "react";
import { motion } from "framer-motion";

// Define the CTA component
const CTA = () => {
  return (
    <section className="">
      {/* Background Image with Overlay */}
      <div
        className="bg-fixed bg-cover bg-center bg-black"
        style={{
          backgroundImage:
            "url('src/images/quality-rabbit-hutches-construction-in-Kenya.jpeg')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
      </div>

      <div className="relative flex items-center justify-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <motion.div
          className="max-w-screen-md text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Let's find more that brings us together.
          </h2>
          <p className="mb-8 font-light text-gray-300 sm:text-xl">
            Flowbite helps you connect with friends, family and communities of
            people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups, Watch and Marketplace.
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
    </section>
  );
};

// Export the CTA component
export default CTA;
