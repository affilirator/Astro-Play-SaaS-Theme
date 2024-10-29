import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
//import TypingText from "./TypingText";

const phrases = [
  "Rabbit Farming Support & Consultation",
  "Farm Infrastructure Development",
  "Quality Rabbit Breeds",
  "Veterinary Services",
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentPhrase((prevPhrase) => {
          const currentIndex = phrases.indexOf(prevPhrase);
          const nextIndex = (currentIndex + 1) % phrases.length;
          return phrases[nextIndex];
        });
        setIsTyping(true);
      }, 2000); // Time before changing phrase
    }, 5000); // Time to display each phrase

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-800 flex items-center justify-center text-white">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#A27055] via-[#A27055] to-[#106f26]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 overflow-hidden">
        {/* Main Heading with Static and Dynamic Parts */}
        <div className="text-6xl font-extrabold mb-4 whitespace-nowrap">
          <span className="block">Welcome to Our</span>
          <div className="relative inline-block">
            <motion.h1
              className="text-6xl font-extrabold overflow-hidden whitespace-nowrap"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <TypingText text={currentPhrase} isTyping={isTyping} />
            </motion.h1>
            <span className="absolute top-0 right-0 w-2 h-full bg-[#A27055] animate-blink" />
          </div>
        </div>

        {/* Subheading */}
        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Discover the passion behind what we do and meet the amazing people who
          make it happen.
        </motion.p>

        {/* Call to Action */}
        <motion.a
          href="#about"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#A27055] rounded-full shadow-lg hover:bg-[#8d5b43] transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Learn More
        </motion.a>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

// Typing Text Component
const TypingText = ({ text, isTyping }) => {
  return (
    <span className="relative block overflow-hidden">
      {isTyping ? (
        <span className="inline-block">{text}</span>
      ) : (
        <span className="inline-block">{text}</span>
      )}
    </span>
  );
};

export default HeroSection;
