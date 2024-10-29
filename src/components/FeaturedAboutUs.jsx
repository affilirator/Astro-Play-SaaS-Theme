import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('src/images/quality-rabbit-hutches-construction-in-Kenya.jpeg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#A27055] opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Full-width Heading Section */}
        <div className="text-center text-white">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Building Bridges, Not Barriers
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We started Rabbit Choice Farms with the belief that true progress
            comes from empowering local communities.{" "}
          </motion.p>
          <p>
            Through our training programs, we impart farmers with best practices
            in rabbit care, breeding, and farming techniques.{" "}
          </p>
          <p>
            Our goal is to enable farmers to thrive independently, improving
            their livelihoods and local economies.
          </p>
        </div>

        {/* Three Subsections */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {/* Our Mission */}
          <motion.div
            className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl text-[#A27055] mr-3">🌍</div>{" "}
              {/* Replace with your icon */}
              <h2 className="text-2xl font-bold text-[#A27055]">Our Mission</h2>
            </div>
            <p className="text-gray-700">
              We’re transforming the future of rabbit farming by empowering
              farmers with the tools, knowledge, and support to succeed in
              commercial rabbit farming—starting here in Kenya, East Africa and
              reaching far beyond.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl text-[#A27055] mr-3">👁️</div>{" "}
              {/* Replace with your icon */}
              <h2 className="text-2xl font-bold text-[#A27055]">Our Vision</h2>
            </div>
            <p className="text-gray-700">
              We envision a world where our methods shape the future of rabbit
              farming—where every farm is a model of sustainability and every
              community benefits from the positive impact of our practices.
            </p>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl text-[#A27055] mr-3">🤝</div>{" "}
              {/* Replace with your icon */}
              <h2 className="text-2xl font-bold text-[#A27055]">
                Collaboration
              </h2>
            </div>
            <p className="text-gray-700">
              Be part of the transformation. Join us as we pave the way to a
              greener, more prosperous future for rabbit farming across East
              Africa and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
