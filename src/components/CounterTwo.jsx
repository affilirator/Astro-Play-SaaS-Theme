// Contains a Combine Component That Counts using ViewPort
// The Correct File to Use
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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

const Counters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const countersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Optionally reset visibility
        }
      },
      { threshold: 0.1 }, // Adjust threshold as needed
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={countersRef}
      className="relative flex flex-wrap justify-center gap-6 p-6 bg-fixed bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('src/images/Kenyan-woman-feeding-kales-to-rabbits-2048x2048.jpeg')",
      }}
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          About Us in Numbers
        </h2>
      </div>

      <div className="relative z-10 flex justify-center gap-6">
        <div className="w-full md:w-1/2 lg:w-1/4 text-center">
          <Counter start={0} end={100} duration={2000} isVisible={isVisible} />
          <p className="mt-2 text-lg">Rabbits Raised</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 text-center">
          <Counter start={0} end={200} duration={2000} isVisible={isVisible} />
          <p className="mt-2 text-lg">Rabbits Sold</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 text-center">
          <Counter start={0} end={50} duration={2000} isVisible={isVisible} />
          <p className="mt-2 text-lg">Breeding Pairs</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 text-center">
          <Counter start={0} end={500} duration={2000} isVisible={isVisible} />
          <p className="mt-2 text-lg">Total Revenue</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Counters;
