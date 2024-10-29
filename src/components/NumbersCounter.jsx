import React from "react";
import { useSpring, animated } from "@react-spring/web";

import { useInView } from "react-intersection-observer";
//import { useSpring, animated } from "react-spring";

// Utility function to format numbers with commas
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const NumberItem = ({ count, label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger animation when 10% of the item is visible
  });

  // Define animation properties
  const props = useSpring({
    to: { number: inView ? count : 0 },
    config: { duration: 2000 }, // Animation duration in milliseconds
    from: { number: 0 },
    reset: false,
  });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
        <animated.span>
          {props.number.to((n) => formatNumber(Math.floor(n)))}
        </animated.span>
      </dt>
      <dd className="font-light text-gray-500 dark:text-gray-400">{label}</dd>
    </div>
  );
};

const NumbersCounter = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <NumberItem count={73000000} label="developers" />
          <NumberItem count={1000000000} label="contributors" />
          <NumberItem count={4000000} label="organizations" />
        </dl>
      </div>
    </section>
  );
};

export default NumbersCounter;
