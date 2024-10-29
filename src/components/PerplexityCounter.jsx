import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Counter = ({ start, end, duration, isVisible }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return; // Do nothing if not visible

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(start + (end - start) * progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    // Reset count when visibility changes
    return () => {
      setCount(start); // Reset count when component unmounts or visibility changes
    };
  }, [start, end, duration, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold"
    >
      {count}
    </motion.div>
  );
};

export default Counter;
