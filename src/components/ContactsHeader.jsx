import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="src/images/kenyan-woman-feeding-kales-to-rabbits.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-moving-gradient opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center w-full h-full text-center">
        <div>
          <motion.h1
            className="text-5xl md:text-6xl font-serif text-white mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl font-monospace text-white"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            We’d love to hear from you. Reach out to us for any inquiries or
            support.
          </motion.p>

          <a
            href="#contact-form"
            className="mt-8 inline-block px-6 py-3 text-lg font-bold text-primary bg-secondary rounded-lg shadow-lg hover:bg-primary hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
