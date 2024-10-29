import React from "react";
import { motion } from "framer-motion";
import { AttentionSeeker } from "react-awesome-reveal";
import {
  FaLeaf,
  FaHandsHelping,
  FaChartLine,
  FaSeedling,
  FaRecycle,
  FaMoneyBillWave,
} from "react-icons/fa"; // Added new icon for the sixth benefit

const benefits = [
  {
    icon: <FaLeaf />,
    title: "Sustainable Farming",
    description:
      "Rabbit farming has a low environmental impact, making it ideal for sustainable agriculture in Kenya.",
    direction: { x: -150, y: 0 }, // Slide in from the left
  },
  {
    icon: <FaHandsHelping />,
    title: "Empowering Communities",
    description:
      "Rabbit farming offers a profitable opportunity to empower small-scale farmers across East Africa.",
    direction: { x: 15, y: 0 }, // Slide in from the right
  },
  {
    icon: <FaChartLine />,
    title: "High Market Demand",
    description:
      "The demand for organic, high-quality rabbit meat is rising rapidly, ensuring profitable returns.",
    direction: { x: 0, y: -15 }, // Slide in from the top
  },
  {
    icon: <FaSeedling />,
    title: "Low Maintenance",
    description:
      "Rabbits require minimal land and resources, making it easy for farmers to get started with small investments.",
    direction: { x: 0, y: 15 }, // Slide in from the bottom
  },
  {
    icon: <FaRecycle />,
    title: "Eco-Friendly",
    description:
      "Rabbit farming supports sustainable waste management by producing organic fertilizer from rabbit manure.",
    direction: { x: -150, y: 150 }, // Diagonal slide in (left-bottom)
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Low Cost, High Return",
    description:
      "With a low initial investment and high reproduction rate, rabbit farming offers an excellent return on investment.",
    direction: { x: 150, y: -150 }, // Diagonal slide in (right-top)
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#A27055] to-[#106f26] text-white">
      {/* Title Section */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">Why Choose Rabbit Farming?</h2>
        <p className="text-lg font-light max-w-2xl mx-auto">
          Rabbit farming presents an incredible opportunity for sustainable
          growth and profitability. Discover the key benefits of starting your
          rabbit farming journey today.
        </p>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">
          The Benefits of Rabbit Farming in Kenya
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white text-[#A27055] rounded-lg shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer"
              initial={{
                opacity: 0,
                x: benefit.direction.x,
                y: benefit.direction.y,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.2, ease: "easeInOut" }} // Faster and smoother transition
            >
              <AttentionSeeker effect="pulse" triggerOnce>
                <div className="flex items-center justify-center mb-4 text-6xl text-[#106f26]">
                  {benefit.icon}
                </div>
              </AttentionSeeker>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-lg">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-[#44634b] py-8 px-12 rounded-lg shadow-lg text-white inline-block"
          >
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Rabbit Farming Journey?
            </h3>
            <p className="text-lg mb-6">
              Join the growing community of rabbit farmers across Kenya and East
              Africa. Sign up to get our free guide and resources today.
            </p>
            <a
              href="/signup"
              className="bg-[#A27055] text-white font-medium py-3 px-8 rounded-full hover:bg-[#8f5d4b] transition-colors duration-300"
            >
              Get Started Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
