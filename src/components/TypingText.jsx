import { useState, useEffect } from "react";

const TypingText = ({ text, isTyping }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        index += 1;
        if (index === text.length) {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust the speed of typing here
    } else {
      // Simulate clearing text
      let index = text.length;
      const clearingInterval = setInterval(() => {
        setDisplayedText((prev) => prev.slice(0, index - 1));
        index -= 1;
        if (index < 0) {
          clearInterval(clearingInterval);
        }
      }, 50); // Adjust the speed of clearing here
    }
  }, [text, isTyping]);

  return (
    <span className="relative inline-block">
      {displayedText}
      <span className="absolute top-0 right-0 w-2 h-full bg-[#A27055] animate-blink" />
    </span>
  );
};

export default TypingText;
