import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaDove,
  FaIndustry,
  FaHandshake,
  FaTools,
  FaBoxOpen,
  FaShippingFast,
} from "react-icons/fa";

const sections = [
  {
    title: "Rabbit Meat Production & Distribution",
    content:
      "We are proud producers and distributors of the Rabbit Choice Meat Brand—high-quality, organic rabbit meat catering to a growing market that values health, taste, and sustainability.",
    bgColor: "bg-primary",
    textColor: "text-light",
    highlightColor: "text-accent",
    icon: <FaDove className="text-4xl" />,
  },
  {
    title: "Own Farm",
    content:
      "Our own farm is equipped with state-of-the-art facilities and has the capacity to produce a substantial amount of rabbit meat to meet market demand. We use the best practices in animal welfare and sustainable farming to ensure that our meat is of the highest quality.",
    bgColor: "bg-secondary",
    textColor: "text-light",
    highlightColor: "text-accent",
    icon: <FaIndustry className="text-4xl" />,
  },
  {
    title: "Sourcing from Local Farmers",
    content:
      "We purchase rabbits directly from our network of partner farmers, ensuring fair prices and economic empowerment within local communities.",
    bgColor: "bg-light",
    textColor: "text-dark",
    highlightColor: "text-primary",
    icon: <FaHandshake className="text-4xl" />,
  },
  {
    title: "Processing & Quality Control",
    content:
      "Our processing facilities adhere to strict hygiene and quality standards, guaranteeing that our products meet and exceed industry benchmarks.",
    bgColor: "bg-accent",
    textColor: "text-dark",
    highlightColor: "text-light",
    icon: <FaTools className="text-4xl" />,
  },
  {
    title: "Product Range",
    content:
      "We offer a wide variety of rabbit meat products, including fresh cuts and processed delicacies, to meet diverse culinary preferences and needs.",
    bgColor: "bg-primary",
    textColor: "text-light",
    highlightColor: "text-secondary",
    icon: <FaBoxOpen className="text-4xl" />,
  },
  {
    title: "Distribution Network",
    content:
      "We’re actively adding more points to our distribution channels to enable us to supply rabbit meat efficiently across Kenya and the broader East African region, ensuring timely delivery and customer satisfaction.",
    bgColor: "bg-light",
    textColor: "text-dark",
    highlightColor: "text-primary",
    icon: <FaShippingFast className="text-4xl" />,
  },
];

const RabbitFarmSection = () => {
  return (
    <div className="py-12 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <IconBox key={index} index={index} {...section} />
        ))}
      </div>
    </div>
  );
};

const IconBox = ({
  title,
  content,
  index,
  bgColor,
  textColor,
  highlightColor,
  icon,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.3 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`flex flex-col items-center p-6 rounded-lg shadow-lg ${bgColor} ${textColor} text-center`}
    >
      <div className={`mb-4 ${highlightColor}`}>{icon}</div>
      <h2 className={`text-2xl font-bold ${highlightColor} mb-2`}>{title}</h2>
      <p className={`text-base ${textColor}`}>{content}</p>
    </motion.div>
  );
};

export default RabbitFarmSection;
