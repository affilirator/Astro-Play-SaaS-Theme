import { motion } from "framer-motion";
import "./FarmSetupConsultancy.css"; // Custom CSS for this component

const FarmSetupConsultancy = () => {
  // Animation Variants
  const titleBounce = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, duration: 0.8 },
    },
  };

  const imageSlide = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.8, delay: 0.3 },
    },
  };

  const descriptionSlide = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.8, delay: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen bg-white flex flex-col md:flex-row items-center justify-between px-10 py-16">
      {/* Left Side - Heading & Image */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleBounce}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight mb-6">
          Farm Setup Consultancy
        </h2>
        <motion.img
          src="/assets/farm-consultancy.svg"
          alt="Farm Consultancy"
          className="w-3/4 mx-auto md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageSlide}
        />
      </motion.div>

      {/* Right Side - Description */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={descriptionSlide}
      >
        <div className="bg-secondary p-8 rounded-lg shadow-xl text-white text-lg">
          <p className="mb-6">
            We provide expert guidance to help you set up a successful rabbit
            farm. Our consultancy services cover farm design, infrastructure
            planning, and operational strategies.
          </p>
          <p className="mb-6">
            Whether you’re starting from scratch or looking to optimize an
            existing setup, we tailor our advice to your specific needs,
            ensuring your farm thrives.
          </p>
          <button className="bg-primary hover:bg-secondary hover:scale-110 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-lg">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Decorative Bouncing Elements */}
      <motion.div
        className="absolute top-5 left-5 w-16 h-16 bg-primary rounded-full opacity-70"
        animate={{ y: [0, -20, 20], scale: [1, 1.2, 1], rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 bg-secondary rounded-full opacity-50"
        animate={{ y: [0, -15, 15], scale: [1, 1.2, 1], rotate: [0, -360] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
    </section>
  );
};

export default FarmSetupConsultancy;
