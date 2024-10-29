//import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('src/images/buy-farm-rabbit-hutches-in-Kenya.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-[#A27055] opacity-75"></div>
      <div className="relative container mx-auto px-4 py-16 text-white">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">The Values We Live By</h2>
          <p className="text-xl mt-2">Building Bridges, Not Barriers</p>
        </motion.div>

        {/* Sub-sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center text-black"
          >
            <div className="text-3xl mb-4">
              <i className="fas fa-bullseye"></i> {/* Replace with your icon */}
            </div>
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="mt-2">
              We’re transforming the future of rabbit farming by empowering
              farmers with the tools, knowledge, and support to succeed in
              commercial rabbit farming—starting here in Kenya, East Africa and
              reaching far beyond.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-3xl mb-4">
              <i className="fas fa-eye"></i> {/* Replace with your icon */}
            </div>
            <h2 className="text-xl font-semibold text-black">Our Vision</h2>
            <p className="mt-2 text-black">
              We envision a world where our methods shape the future of rabbit
              farming—where every farm is a model of sustainability and every
              community benefits from the positive impact of our practices.
            </p>
          </motion.div>

          {/* Collaboration Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-3xl mb-4">
              <i className="fas fa-handshake"></i>{" "}
              {/* Replace with your icon */}
            </div>
            <h2 className="text-xl text-black font-semibold">Collaboration</h2>
            <p className="mt-2 text-black">
              Be part of the transformation. Join us as we pave the way to a
              greener, more prosperous future for rabbit farming across East
              Africa and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
