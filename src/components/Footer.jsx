// src/components/Footer.jsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaGithub, 
  FaResearchgate, 
  FaGoogle, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaGraduationCap,
  FaFlask,
  FaLaptopCode,
  FaFileAlt,
  FaHome
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-gray-200 dark:border-gray-800 font-medium text-lg">
      <div className="bg-gray-100 dark:bg-gray-900">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                I'm Naveen Duhan, a bioinformatician specializing in computational biology, genomics, and machine learning applications in biological data analysis.
              </p>
              <div className="flex space-x-4">
                <SocialIcon href="https://twitter.com/naveenduhan" icon={<FaTwitter />} label="Twitter" />
                <SocialIcon href="https://www.linkedin.com/in/naveen-duhan/" icon={<FaLinkedinIn />} label="LinkedIn" />
                <SocialIcon href="https://github.com/navduhan" icon={<FaGithub />} label="GitHub" />
                <SocialIcon href="https://www.researchgate.net/profile/Naveen-Duhan" icon={<FaResearchgate />} label="ResearchGate" />
                <SocialIcon href="https://scholar.google.com/citations?user=YOUR_ID" icon={<FaGoogle />} label="Google Scholar" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <FooterLink href="/" icon={<FaHome />} text="Home" />
                <FooterLink href="/about" icon={<FaGraduationCap />} text="About" />
                <FooterLink href="/research" icon={<FaFlask />} text="Research" />
                <FooterLink href="/publications" icon={<FaFileAlt />} text="Publications" />
                <FooterLink href="/software" icon={<FaLaptopCode />} text="Software" />
                <FooterLink href="/contact" icon={<FaEnvelope />} text="Contact" />
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mt-1 mr-3" />
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Department of Plants, Soils and Climate<br />
                    Utah State University<br />
                    Logan, UT 84322
                  </span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-3" />
                  <a 
                    href="mailto:naveen.duhan@outlook.com" 
                    className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    naveen.duhan@outlook.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    +1 (435) 797-0000
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-200 dark:bg-gray-800 py-4">
          <div className="container mx-auto px-6 text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Naveen Duhan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialIcon = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300"
  >
    {icon}
  </motion.a>
);

const FooterLink = ({ href, icon, text }) => (
  <li>
    <Link 
      href={href}
      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      <span className="mr-2 text-blue-600 dark:text-blue-400">{icon}</span>
      {text}
    </Link>
  </li>
);

export default Footer;
