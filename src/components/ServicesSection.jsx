import { motion } from "framer-motion";
//import "./HeroSection.css"; // Import custom CSS for the gradient animation

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-primary text-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Parallax Layers */}
        <div className="h-full w-full bg-gradient-to-b from-[#6e4d33] to-secondary opacity-80" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('src/images/quality-rabbit-hutches-construction-in-Kenya.jpeg')] bg-no-repeat bg-cover" />
      </motion.div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-10 gradient-overlay" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-8 md:flex md:items-center md:justify-between">
        {/* Left Side - Heading */}
        <div className="w-full md:w-1/2 space-y-6">
          <motion.h1
            className="text-6xl lg:text-8xl font-serif leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            We Build <span className="text-secondary">Rabbit Farms</span> That
            Empower
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-light tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            Training farmers, building infrastructure, and providing premium
            quality rabbit meat to the community.
          </motion.p>
          {/* Call-to-action Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
          >
            <a
              href="#services"
              className="inline-block bg-secondary text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-primary hover:text-secondary transition-all"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>

        {/* Right Side - Image Showcase */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {/* Rotating Image Showcase */}
          <motion.div
            className="relative w-full h-80 md:h-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <img
              src="/images/services-farm.jpg"
              alt="Rabbit Farm Infrastructure"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
