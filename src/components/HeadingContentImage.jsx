//import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
//Stagger Animations
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
//End of stagger

// React component that displays a section with a heading, some text, and images
const HeadingContentImage = () => {
  return (
    <section className="bg-white mt-4 mb-4 items-center justify-center dark:bg-gray-900 overflow-hidden">
      <motion.div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* Text Content */}
        <motion.div
          className="font-normal text-gray-500 sm:text-lg dark:text-gray-400 overflow-hidden"
          variants={itemVariants.first}
          transition={transition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h2
            className="mb-4 text-4xl tracking-tight justify-center font-bold text-primary dark:text-white"
            variants={itemVariants.first}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            We Provide Free Educational Resources to
            <span> Passionate Rabbit Farmers</span>
          </motion.h2>
          <motion.p
            className="mb-4"
            variants={itemVariants.second}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Whether you're just starting or already in the game, our guides,
            tips, and expert insights are designed to elevate your rabbit
            farming business to the next level.
          </motion.p>
          <p>
            Don’t miss out on these valuable tools—explore our resources today
            and unlock your potential for success! Your future in sustainable
            rabbit farming starts here.
          </p>
          <motion.a
            href="/resources"
            variants={itemVariants.fourth}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Get Started Now
          </motion.a>
        </motion.div>

        {/* Images */}
        <motion.div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="src/images/quality-rabbit-hutches-construction-in-Kenya.jpeg"
            alt="Rabbit Hutches Construction"
            variants={itemVariants.second}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="src/images/kenyan-woman-feeding-kales-to-rabbits.jpeg"
            alt="Kenyan woman feeding rabbits"
            variants={itemVariants.second}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeadingContentImage;
