import React from "react";
import { CONTACT } from "../constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.h1>
      <div className="text-center tracking-tighter">
        {/* <p className="my-4">{CONTACT.address}</p>  */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          href={`mailto:${CONTACT.email}`}
          className="my-4"
        >
          {CONTACT.email}
        </motion.a>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/fazlulkareem">
            <FaLinkedin />
          </a>
          <a href="https://github.com/fazlul-01">
            <FaGithub />
          </a>
          <FaSquareXTwitter />
        </div>
      </div>
    </div>
  );
};

export default Contact;
