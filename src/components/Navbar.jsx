import React from "react";
import logo from "../assets/fz-logo-1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
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

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/fazlulkareem">
          <FaLinkedin />
        </a>
        <a href="https://github.com/fazlul-01">
          <FaGithub />
        </a>
        <FaSquareXTwitter />
        <div className="">
          <button
            onClick={onButtonClick}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span className="text-sm text-gray-800">Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
