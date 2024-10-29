import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPaw } from "react-icons/fa"; // Changed icon to FaPaw

// Data for the rabbit breeds
const breeds = [
  {
    name: "New Zealand White",
    image: "https://example.com/new-zealand-white.jpg",
    weight: "3.5 - 4.5 kg",
    meatQuality: "High",
    growthRate: "Fast",
    keyFeatures: "Large size, prolific breeder",
    benefits: "High yield, good adaptability",
  },
  {
    name: "California",
    image: "https://example.com/california.jpg",
    weight: "3 - 4 kg",
    meatQuality: "High",
    growthRate: "Medium",
    keyFeatures: "White fur, calm temperament",
    benefits: "Good meat quality, easy to handle",
  },
  {
    name: "Chinchilla",
    image: "https://example.com/chinchilla.jpg",
    weight: "2.5 - 3.5 kg",
    meatQuality: "Medium",
    growthRate: "Medium",
    keyFeatures: "Unique fur color, good mothering ability",
    benefits: "Attractive fur, good reproductive performance",
  },
];

const QualityRabbitBreeds = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="py-12 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-extrabold text-primary mb-4">
            Quality Rabbit Breeds
          </h1>
          <p className="text-lg text-gray-700">
            We supply a diverse range of premium rabbit breeds that are
            well-suited for commercial farming, ensuring high yield and
            profitability. Our experts guide you in selecting the ideal breeds
            based on their specific goals and environmental conditions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="overflow-x-auto bg-white shadow-md rounded-lg"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#A27055] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Breed Name and Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Weight (Adult)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Meat Quality
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Growth Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Key Features
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Benefits
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-50 divide-y divide-gray-200">
              {breeds.map((breed, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition-colors duration-300"
                >
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <img
                      src={breed.image}
                      alt={breed.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <span>{breed.name}</span>
                  </td>
                  <td className="px-6 py-4">{breed.weight}</td>
                  <td className="px-6 py-4">{breed.meatQuality}</td>
                  <td className="px-6 py-4">{breed.growthRate}</td>
                  <td className="px-6 py-4">{breed.keyFeatures}</td>
                  <td className="px-6 py-4">{breed.benefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default QualityRabbitBreeds;
