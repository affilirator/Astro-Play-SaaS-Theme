import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing service! Really loved the experience.",
    avatar: "/avatars/avatar1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Highly recommend them to everyone!",
    avatar: "/avatars/avatar2.png",
  },
  // Add more reviews up to 10
];

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () =>
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () =>
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      {/* Reviews Container */}
      <div className="overflow-hidden relative">
        <motion.div
          key={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4 bg-[#A27055] rounded-lg shadow-xl p-8"
        >
          <div className="relative">
            {/* Speech Bubble */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#106f26] rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6M9 16h6M4 8h16M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6M4 12h16m0 0V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4z"
                />
              </svg>
            </div>
            <img
              src={reviews[currentIndex].avatar}
              alt={reviews[currentIndex].name}
              className="w-20 h-20 rounded-full border-4 border-white mx-auto"
            />
          </div>
          <p className="text-white text-lg">{reviews[currentIndex].review}</p>
          <p className="text-sm font-bold text-[#106f26]">
            {reviews[currentIndex].name}
          </p>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevReview}
          className="bg-[#106f26] text-white px-4 py-2 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={nextReview}
          className="bg-[#106f26] text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {reviews.map((_, index) => (
          <motion.div
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-[#A27055]" : "bg-gray-400"
            }`}
            animate={{ scale: index === currentIndex ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
