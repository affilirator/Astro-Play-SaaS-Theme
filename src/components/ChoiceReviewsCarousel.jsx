import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Speech icons from React Icons
import { useState, useEffect } from "react";
import { reviewsData } from "./reviewsData"; // Assuming the reviews are stored here
import { useInView } from "react-intersection-observer";

const ReviewCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviewsData.length);
    }, 5000); // Change review every 5 seconds
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#A27055] via-[#fff] to-[#106f26] py-16 text-center"
    >
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <h2 className="text-4xl font-bold text-[#A27055] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-[#106f26]">
          Hear from our most satisfied customers.
        </p>
      </motion.div>

      {/* Review Carousel */}
      <motion.div
        key={currentReview}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex justify-center items-center"
      >
        <div className="relative bg-white shadow-lg rounded-lg p-6 max-w-lg mx-4">
          {/* Speech Icon */}
          <FaQuoteLeft className="absolute top-0 left-0 text-[#A27055] text-4xl transform -translate-x-6 -translate-y-6 opacity-60" />
          <FaQuoteRight className="absolute bottom-0 right-0 text-[#A27055] text-4xl transform translate-x-6 translate-y-6 opacity-60" />

          {/* Review Text */}
          <p className="text-lg text-gray-700 italic">
            {reviewsData[currentReview].text}
          </p>

          {/* Reviewer Info */}
          <div className="mt-4 text-right">
            <p className="text-[#A27055] font-semibold">
              {reviewsData[currentReview].name}
            </p>
            <p className="text-[#106f26]">{reviewsData[currentReview].title}</p>
          </div>
        </div>
      </motion.div>

      {/* Dots for navigation */}
      <div className="mt-6 flex justify-center space-x-2">
        {reviewsData.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentReview === index
                ? "bg-[#A27055]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: currentReview === index ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewCarousel;
