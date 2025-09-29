import React from "react";
import { FaFacebookF, FaYoutube, FaGlobe } from "react-icons/fa";
import logo from "../assets/logo.jpeg"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: Logo + Mission */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Ministry Logo" className="w-24 h-24 mb-4 rounded-full" />
          <p className="text-sm italic text-gray-300 max-w-xs">
            An advanced society that enjoys the full benefits of development fairly and equally.
          </p>
        </div>

        {/* Center: Contact Info */}
        <div className="border-l-2 border-yellow-500 pl-6">
          <h3 className="text-lg font-bold text-yellow-500 mb-4">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <p>
              <i className="bi bi-geo-alt-fill text-yellow-500 mr-2"></i>
              9th Floor, Sethsiripaya (Stage III), Battaramulla, Sri Lanka
            </p>
            <p>
              <i className="bi bi-telephone-fill text-yellow-500 mr-2"></i>
              +94 112 877122 
            </p>
            <p>
              <i className="bi bi-printer-fill text-yellow-500 mr-2"></i>
              +94 112 887831
            </p>
            <p>
              <i className="bi bi-envelope-fill text-yellow-500 mr-2"></i>
              ruraldevelopmentbureau@gmail.com
            </p>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-lg font-bold text-yellow-500">Follow Us</h3>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="hover:text-yellow-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © Vihangana Roosarani. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
