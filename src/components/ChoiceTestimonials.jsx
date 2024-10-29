import { motion } from "framer-motion";
import { useState } from "react";

// Reviews data
const reviews = [
  {
    name: "John Doe",
    text: "Rabbit Choice Farms helped me start my own business. The quality of their services is unmatched!",
    rating: 5,
    avatar: "src/images/kenyan-woman-feeding-kales-to-rabbits.jpeg",
  },
  {
    name: "Jane Smith",
    text: "Absolutely thrilled with their rabbit farming mentorship program!",
    rating: 4,
    avatar: "src/images/new-zealand-rabbit.png",
  },
  // Add more reviews
];

// Variants for Framer Motion
const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    rotate: [-2, 2, 0], // Subtle rotation to give it a dynamic feel
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const ReviewCard = ({ name, text, avatar, rating }) => (
  <motion.div
    className="relative w-full md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
    variants={cardVariants}
  >
    <div className="w-full bg-white shadow-lg p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full border-4 border-secondary"
        />
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{name}</h3>
      <p className="text-sm text-gray-700">{text}</p>
      <div className="flex mt-4 justify-center">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <motion.span
              key={i}
              className="text-yellow-500 text-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
            >
              ★
            </motion.span>
          ))}
      </div>
    </div>
  </motion.div>
);

const ReviewsSection = () => {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary py-16">
      <div
        className="absolute inset-0 bg-fixed bg-no-repeat bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('src/images/quality-rabbit-hutches-construction-in-Kenya.jpeg')`,
        }}
      ></div>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
