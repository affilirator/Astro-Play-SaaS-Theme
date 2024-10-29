import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const HeaderSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#A27055] via-[#106f26] to-[#A27055] animate-gradient bg-[length:200%_200%]">
      <div className="absolute inset-0 opacity-60 bg-gradient-to-b from-transparent to-black"></div>

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Fade triggerOnce>
          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight tracking-wide drop-shadow-lg">
            Sustainable Rabbit Farming
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-medium text-white drop-shadow-lg">
            Empowering African farmers with high-quality, organic rabbit meat
          </p>
          <motion.div
            className="mt-10 space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          >
            <a
              href="#shop"
              className="inline-block px-8 py-4 bg-[#A27055] text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition"
            >
              Shop Rabbit Meat
            </a>
            <a
              href="#learn-more"
              className="inline-block px-8 py-4 bg-[#106f26] text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition"
            >
              Learn More
            </a>
          </motion.div>
        </Fade>
      </motion.div>
    </section>
  );
};

export default HeaderSection;
