import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center lg:items-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-widest lg:mt-16 lg:text-8xl"
            >
              Fazlul Kareem
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent sm:text-3xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-center"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
