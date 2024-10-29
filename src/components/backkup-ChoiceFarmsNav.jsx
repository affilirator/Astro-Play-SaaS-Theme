//import React from "react";
import { FaPlus } from "react-icons/fa"; // Importing the plus icon from react-icons

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#A27055] to-[#106f26] text-white py-4 px-6 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-wide">
          <a href="/" className="hover:text-gray-200 transition duration-300">
            Rabbit Choice Farms
          </a>
        </div>

        {/* Menu Links */}
        <nav>
          <ul className="hidden md:flex space-x-8 text-lg font-semibold">
            <li>
              <a
                href="/"
                className="hover:text-gray-200 hover:border-b-4 border-white transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-gray-200 hover:border-b-4 border-white transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-200 hover:border-b-4 border-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-200 hover:border-b-4 border-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-gray-200 hover:border-b-4 border-white transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>

        {/* Free Resources Button */}
        <div className="hidden md:block">
          <a
            href="#resources"
            className="flex items-center px-6 py-3 bg-white text-[#A27055] font-bold rounded-lg shadow-lg hover:bg-[#A27055] hover:text-white transition duration-300"
          >
            <FaPlus className="mr-2" />
            Free Resources
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* This button can trigger a dropdown or mobile menu, leaving the logic for further customization */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
