import React from "react";
import { motion } from "framer-motion";
import {
  Fade,
  Bounce,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5,
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const transition = { duration: 1, ease: "easeOut" };

const variants = {
  hidden: { filter: "blur(10px)", opacity: 0, translateY: 20 },
  visible: { filter: "blur(0)", opacity: 1, translateY: 0 },
};

/**
 * ImageCTA Component
 * This component renders a call-to-action section with images, a heading, a description,
 * and a call-to-action button. It adapts to light and dark modes.
 */
const ImageCTA = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <motion.div
        className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mt-4 md:mt-0">
          {/* Heading for the call-to-action */}
          <motion.h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary dark:text-white variants={itemVariants}">
            Always at Your Service
          </motion.h2>

          {/* Description text */}
          <Roll>
            <p className="mb-6 font-light text-gray-700 md:text-lg dark:text-gray-400">
              Join a community of successful farmers benefiting from our
              cutting-edge techniques, proven strategies, and organic farming
              practices.{" "}
            </p>
          </Roll>
          <p>
            Our team of seasoned experts brings years of experience and a deep
            understanding of the unique challenges of rabbit farming in Kenya.
            We are committed to your success, and our goal is to empower you
            with the knowledge and resources needed to build a self-sustaining,
            profitable farm.
          </p>

          {/* Call-to-action button */}
          <a
            href="/contact-us"
            className="inline-flex items-center text-gray-700 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-lg px-2 py-4.5 text-center dark:focus:ring-primary-900"
          >
            Contact Us Now
            {/* Arrow icon */}
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <motion.img
          className="w-full "
          src="src/images/buy-farm-rabbit-hutches-in-Kenya.jpeg"
          alt="Buy rabbit farm hutches in Kenya"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView="visible"
          transition={{
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 1,
            x: { duration: 0.5 },
          }}
          viewport={{ amount: 0.5 }} // 50% of the element must be visible
        />
      </motion.div>
    </section>
  );
};

export default ImageCTA;
