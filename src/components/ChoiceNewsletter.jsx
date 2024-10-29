import React, { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission to ConvertKit or other services
    console.log("Email submitted:", email);
    setEmail(""); // Clear input after submission
  };

  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-16 px-4 text-gray-800 shadow-lg rounded-lg"
      style={{ backgroundImage: "url('src/images/rabbits-feeding.jpg')" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-wrap lg:flex-col justify-around items-center p-8 bg-white bg-opacity-80 rounded-lg shadow-xl">
        <motion.div
          className="flex-1 mb-8 lg:mb-0 lg:pr-8"
          initial={{ opacity: 0, x: -150, rotate: -180 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#A27055] mb-4 text-center">
            Join the Rabbit Farming Revolution!
          </h2>
          <p className="text-lg font-semibold text-gray-700 text-center mb-4">
            Get exclusive rabbit farming tips, the latest updates, <br />
            and special offers delivered straight to your inbox.
          </p>
        </motion.div>

        <motion.form
          className="flex flex-row w-auto gap-11 p-4 bg-white rounded-lg shadow-2xl transition-all duration-300 justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 w-full min-w-[250px] text-gray-800 rounded-full border-2 border-[#A27055] focus:outline-none focus:ring-2 focus:ring-[#42f56c] mb-4 transition-all duration-300 shadow-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#44634b] mt-1 min-w-[200px] max-h-11 px-8 hover:bg-[#0c4e1a] text-white rounded-full w-full transition-all duration-300 font-light shadow-xl transform hover:scale-105"
          >
            Subscribe Now
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSection;
