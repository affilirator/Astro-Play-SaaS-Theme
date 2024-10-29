import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sections = [
  {
    title: "Rabbit Meat Production & Distribution",
    content:
      "We are proud producers and distributors of the Rabbit Choice Meat Brand—high-quality, organic rabbit meat catering to a growing market that values health, taste, and sustainability.",
  },
  {
    title: "Own Farm",
    content:
      "Our own farm is equipped with state-of-the-art facilities and has the capacity to produce a substantial amount of rabbit meat to meet market demand. We use the best practices in animal welfare and sustainable farming to ensure that our meat is of the highest quality.",
  },
  {
    title: "Sourcing from Local Farmers",
    content:
      "We purchase rabbits directly from our network of partner farmers, ensuring fair prices and economic empowerment within local communities.",
  },
  {
    title: "Processing & Quality Control",
    content:
      "Our processing facilities adhere to strict hygiene and quality standards, guaranteeing that our products meet and exceed industry benchmarks.",
  },
  {
    title: "Product Range",
    content:
      "We offer a wide variety of rabbit meat products, including fresh cuts and processed delicacies, to meet diverse culinary preferences and needs.",
  },
  {
    title: "Distribution Network",
    content:
      "We’re actively adding more points to our distribution channels to enable us to supply rabbit meat efficiently across Kenya and the broader East African region, ensuring timely delivery and customer satisfaction.",
  },
];

const RabbitFarmSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <Section
            key={index}
            index={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
};

const Section = ({ title, content, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="mb-10 p-6 rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-3xl font-custom text-primary mb-4">{title}</h2>
      <p className="text-lg text-gray-700">{content}</p>
    </motion.div>
  );
};

export default RabbitFarmSection;
