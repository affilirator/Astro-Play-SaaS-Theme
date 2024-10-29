import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// TypingEffect Component
const TypingEffect = ({ staticText, dynamicWords, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
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
      className="text-4xl font-bold w-[580px] overflow-hidden whitespace-nowrap" // Fixed width to prevent layout shifts
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.h1>
  );
};

// App Component
function App() {
  const staticText = "Hello, Welcome to my ";
  const dynamicWords = ["website", "Blog", "app", "ecommerce store"];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <TypingEffect
        staticText={staticText}
        dynamicWords={dynamicWords}
        speed={150}
      />
    </div>
  );
}

export default App;
