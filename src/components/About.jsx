import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT_P1, ABOUT_TEXT_P2 } from "../constants";
import { motion } from "framer-motion";
import pdfFile from "../assets/Resume.pdf";

const onButtonClick = () => {
  const pdfUrl = pdfFile;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex-items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="mt-2 py-4 max-w-xl">{ABOUT_TEXT_P1}</p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <p className="mb-2 py-4 max-w-xl">{ABOUT_TEXT_P2}</p>
          </div>
          <button
            onClick={onButtonClick}
            className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span className="text-sm text-gray-800">Get My Resume</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
