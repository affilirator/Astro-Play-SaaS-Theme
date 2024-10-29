import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-secondary sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ y: -22 }} // Start position
              whileInView={{
                y: [0, -10, 0], // Bounce effect
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                },
              }}
              viewport={{ once: false }} // Allow the animation to trigger each time it comes into view
            >
              Subscribe To Our Newsletter
            </motion.h1>
            <p className="mt-4 text-lg font-normal text-gray-100 sm:mt-8">
              Join 1000s of happy farmers who receive the latest news updates
              and tips about rabbit farming from Rabbit Choice Farms. Promise.
              You'll love it!
            </p>

            <form
              action="#"
              method="POST"
              className="relative mt-8 rounded-full sm:mt-12"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <div className="absolute rounded-full -inset-px bg-gradient-to-r from-[#A27055] to-[#106f26]"></div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                    <svg
                      className="w-5 h-5 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l9 6 9-6M3 8v11a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9 6m0-6l9 6"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Best Email Address."
                    className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-gray-200 border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                    required
                  />
                </div>
              </div>
              <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-200 bg-[#A27055] rounded-full sm:w-auto sm:py-3 hover:bg-[#106f26]"
                >
                  Get Access Now
                </motion.button>
              </div>
            </form>

            <div className="mt-8 sm:mt-12">
              <p className="text-lg font-normal text-white">
                Rabbit Choice Farms. Trusted by 5k+ Kenyans
              </p>
              <div className="flex items-center mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                        fill={`url(#b)`}
                      />
                      <defs>
                        <linearGradient
                          id="b"
                          x1="3.07813"
                          y1="3.8833"
                          x2="23.0483"
                          y2="6.90161"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#106f26" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <img
            src="src/images/newsletter.png"
            className="hidden lg:block"
          ></img>
          {/* Add any additional content for the second column here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
