import React, { useState } from "react";
import "../App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar({ sendDataToParent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    sendDataToParent(false);
  };

  const handleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    sendDataToParent(newMenuState);
  };

  return (
    <div className="flex justify-between items-center sm:py-6 py-4 px-6 sm:px-12  max-md:block bg-gradient-to-br from-[#1b2a35] to-[#1b2a35] sticky top-0 bottom-0 z-[999]">
      {/* Logo */}
      <div className="flex justify-between w-full items-center">
        <a href="/">
          <h1
            className="text-4xl max-md:text-2xl italic font-extrabold 
            text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 
            hover:scale-105 transition-transform duration-300"
            onClick={handleLinkClick}
          >
           Nandakumar R
          </h1>
        </a>

        {/* Mobile Menu Button */}
        <button className="text-3xl hidden max-md:block text-yellow-300" onClick={handleMenu}>
          {menuOpen ? <IoMdClose className="text-yellow-300" /> : <IoMdMenu />}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`flex gap-8 sm:items-center items-inherit max-md:flex-col max-md:mt-6 ${
          menuOpen ? "max-md:flex" : "max-md:hidden"
        }`}
      >
        <ul className="flex gap-8 max-md:flex-col max-md:w-full">
          {["About", "Skills", "Projects", "Certificates", "Contact"].map(
            (item, index) => (
              <li key={index} className="max-md:w-full">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="inline-block w-full text-gray-300 
                  hover:text-white hover:scale-105 transition-transform duration-300 
                  relative text-lg font-semibold 
                  after:content-[''] after:absolute after:w-0 after:h-0.5 
                  after:bg-yellow-300 after:left-0 after:bottom-0 after:transition-all 
                  after:duration-300 hover:after:w-full"
                  onClick={handleLinkClick}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Download Resume Button */}
        <a
          href="/Nandakumar R Resume.pdf" // Link to the resume file inside the public folder
          download="Nandakumar_R_Resume.pdf" // Set the downloaded file name
          className="px-4 py-2 bg-yellow-300 whitespace-nowrap text-center text-black font-semibold rounded-lg 
                     hover:bg-orange-500 transition duration-300"
        >
          Download Resume
        </a>

        {/* Social Links */}
        <ul className="hidden justify-around mt-12 max-md:flex">
          <li>
            <a
              href="https://github.com/nandaKumar-reddy"
              className="text-4xl text-gray-400 hover:text-white transition-all duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nanda-r-b467ab210/"
              className="text-4xl text-gray-400 hover:text-blue-500 transition-all duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
