import React from "react";
import { motion } from "framer-motion";

// TypingEffect Component
const TypingEffect = ({ staticText, dynamicWords, speed = 150 }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(true);

  React.useEffect(() => {
    let index = 0;
    const currentWord = dynamicWords[currentWordIndex];

    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (index < currentWord.length) {
          setDisplayedText(staticText + currentWord.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            index = currentWord.length;
            const deletingInterval = setInterval(() => {
              if (index > 0) {
                setDisplayedText(staticText + currentWord.slice(0, index - 1));
                index--;
              } else {
                clearInterval(deletingInterval);
                setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
                setIsTyping(true);
              }
            }, speed / 2); // Speed for deleting
          }, 1000); // Pause before deleting
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [dynamicWords, currentWordIndex, isTyping, staticText, speed]);

  return (
    <motion.h1
      className="text-4xl font-bold overflow-hidden whitespace-nowrap" // Fixed width to prevent layout shifts
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.h1>
  );
};

// HeroSection Component
const HeroSection = () => {
  const staticText = "Welcome to Our ";
  const dynamicWords = [
    "Rabbit Farming Support & Consultation",
    "Farm Infrastructure Development",
    "Quality Rabbit Breeds",
    "Veterinary Services",
  ];

  return (
    <section className="relative w-full h-screen bg-gray-800 flex items-center justify-center text-white">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#A27055] via-[#A27055] to-[#106f26]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Main Heading with Typing Effect */}
        <div className="text-6xl font-extrabold mb-4 whitespace-nowrap">
          <span className="block">Welcome to Our</span>
          <TypingEffect
            staticText={staticText}
            dynamicWords={dynamicWords}
            speed={150}
          />
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

export default HeroSection;
