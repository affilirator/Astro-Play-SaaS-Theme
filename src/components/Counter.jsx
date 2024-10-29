import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const incrementTime = (duration / (end - start)) * 1000; // Time per increment in milliseconds

    const interval = setInterval(() => {
      if (count < end) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, incrementTime);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [start, end, duration, count]);

  return (
    <motion.h1
      animate={{ opacity: [0, 1], scale: [0.5, 1] }}
      transition={{ duration: 0.5 }}
      className="text-8xl font-bold"
    >
      {count}
    </motion.h1>
  );
};

export default Counter;
