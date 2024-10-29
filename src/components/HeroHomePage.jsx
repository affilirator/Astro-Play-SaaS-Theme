import { useState } from "react";
import { motion } from "framer-motion";
import "animate.css";
import Animate from "react-move/Animate";
import {
  Fade,
  Bounce,
  Flip,
  Hinge,
  AttentionSeeker,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const HomePageHero = () => {
  return (
    <section className=" w-full">
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="mx-auto px-20 py-20 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10 bg-[url('src/images/kenyan-woman-feeding-kales-to-rabbits.jpeg')] bg-cover bg-fixed custom-bg-position h-screen">
        <div className="flex flex-col relative z-10 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
          <Flip direction="vertical">
            <AttentionSeeker effect="bounce" direction="left" delay={500}>
              <h1 className=" font-semibold leading-tight text-white  text-4xl sm:text-5xl lg:text-6xl pl-8">
                Discover a Healthier, Leaner,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-orange-800">
                  and More Sustainable Meat Option.
                </span>
              </h1>
            </AttentionSeeker>
          </Flip>

          <Fade cascade delay={1000}>
            <p className=" pl-8 flex text-gray-100 text-2xl sm:text-xl lg:text-3xl dark:text-gray-300 tracking-tight md:font-bold max-w-xl mx-auto lg:max-w-none">
              Rabbit meat is lean, high in protein, and has less fat than
              chicken or beef. Perfect for health-conscious consumers.
            </p>
          </Fade>
          <div className="flex flex-col pt-8 lg:py-8 sm:flex-row items-center justify-center lg:justify-start gap-4 w-full pl-8">
            <motion.a
              href="#"
              className="px-6  items-center h-12 rounded-3xl bg-secondary text-white duration-300 ease-linear flex justify-center w-full sm:w-auto"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.a>
            <a
              href="#"
              className="px-6 items-center h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto"
            >
              Book a call
            </a>
          </div>
        </div>
        <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
          {/*<div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
              {/* <img
                src="/images/buildingImg.jpg"
                alt="buildind plan image"
                width={300}
                className="w-full h-full object-cover z-30"
              />

            </div>
            <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
               <img
                src="/images/working-on-housing-project.jpg"
                alt="working-on-housing-project"
                width={300}
                className="z-10 w-full h-full object-cover"
              />
            </div>*/}
        </div>
      </div>
    </section>
  );
};
export default HomePageHero;
