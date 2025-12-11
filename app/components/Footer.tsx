import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wider">VYOMGARUD</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the future of drone technology with advanced remote operations and fleet management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Drone Valley</li>
              <li>Tech City, TC 90210</li>
              <li>Email: info@vyomgarud.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200 text-xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xl">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200 text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} VyomGarud. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
