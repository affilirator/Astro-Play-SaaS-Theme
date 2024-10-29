import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const hoverVariants = {
  scale: 1.05, // Slightly larger scale on hover
  transition: { type: "spring", stiffness: 300 },
  rotate: [0, 5, -5, 0], // Shake effect
  backgroundColor: ["#ff9999", "#99ff99", "#9999ff", "#ff9999"], // Change background color
};

const containerVariants = {
  hidden: { rotate: 30, scale: 0.5, x: -100 },
  visible: {
    rotate: 0,
    scale: 1,
    x: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.5,
      ease: "backInOut",
      duration: 0.9,
      delayChildren: 1,
    },
  },
};

const itemVariants = {
  first: {
    hidden: {
      scale: 0.5,
      x: -100,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    visible: {
      scale: 1,
      x: 0,
      transition: { type: "easeInOut", stiffness: 300, damping: 10 },
    },
  },
  second: {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: -45,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  },
  third: {
    hidden: {
      opacity: 0,
      y: 100,
      filter: "blur(10px)",
      transition: { type: "spring", stiffness: 300, damping: 26 },
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0)",
      transition: { type: "spring", stiffness: 300, damping: 28 },
    },
  },
  fourth: {
    hidden: {
      opacity: 0,
      y: 100,
      filter: "blur(10px)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0)",
      transition: { type: "spring", stiffness: 500, damping: 22 },
    },
  },
};

const transition = { duration: 1, ease: "easeOut" };

const FeatureSection = () => {
  return (
    <section className="bg-black dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className=" mb-4 lg:mb-8 justify-center justify-items-center">
          <h2 className="mb-8 text-4xl tracking-tight text-center justify-center font-extrabold text-gray-50 dark:text-white">
            We Are <span> Rabbit Choice Farms </span>
          </h2>{" "}
          <h3 className="text-gray-50 font-bold text-3xl bg-primary bg-opacity-34 rounded-full p-6 text-center justify-center tracking-tight sm:text-xl dark:text-gray-400">
            Learn More About Us & Try Our Meat Today
          </h3>
        </div>

        <motion.div
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Box 1 */}
          <motion.div
            className="w-custom-50 min-w-[450px] shadow-md rounded-lg mx-auto -mt-5 p-16 bg-white text-gray-500"
            variants={itemVariants.first}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
          >
            <div className="justify-center items-center mb-4 h-10 rounded-full bg-primary-900 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-10 h-10 text-primary lg:w-18 lg:h-18 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              At Rabbit Choice Farms, we provide the knowledge, resources, and
              support needed for farmers to thrive in commercial rabbit farming
              in East Africa and beyond. We produce high-quality, organic rabbit
              meat, promoting a healthier lifestyle.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            className="w-custom-47 min-w-[450px] flex-2 shadow-md mx-auto p-6 bg-white text-gray-500 rounded-lg"
            variants={itemVariants.second}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-10 h-10 text-primary lg:w-18 lg:h-18 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Our Vision
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our vision is to Lead the Way in Sustainable Rabbit Farming Across
              Africa. We’re not just producing meat—we’re building a better food
              system, one meal at a time. Every piece of rabbit meat you
              purchase from us supports a more sustainable and ethical way of
              farming.
            </p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            className="w-custom-60 min-w-[450px] mt-8 shadow-md mx-auto p-6 bg-white text-gray-500 rounded-lg"
            variants={itemVariants.third}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-10 h-10 text-primary lg:w-18 lg:h-18 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Our Story
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our journey began with a simple idea– to make commercial rabbit
              farming profitable, while providing a healthier, more sustainable
              alternative to traditional red meat.
            </p>

            <p>
              Recognizing the untapped potential of rabbit farming, we embarked
              on a mission to educate, support, and partner with farmers to
              create profitable and sustainable livelihoods while meeting the
              growing demand for healthy meat options.
            </p>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            className=" items-center mt-10 "
            variants={itemVariants.third}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <a
              href="#"
              className="px-6 items-center h-12 rounded-3xl text-primary-700 border border-gray-100 dark:border-gray-800 text-white bg-secondary duration-300 ease-linear flex justify-center w-full sm:w-auto mt-11"
            >
              Book a call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
