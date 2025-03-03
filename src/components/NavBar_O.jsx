"use client"
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import {
  GithubIcon,
  GoogleScholarIcon,
  InstagramIcon,
  LinkedInIcon,
  ResearchGateIcon,
} from "./Icons";

import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "", onClick }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} relative group font-semibold text-black dark:text-white text-lg`}
      onClick={onClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block absolute left-0 -bottom-0.5 bg-gray-900 dark:bg-gray-100
          group-hover:w-full transition-[width] ease duration-300
          ${pathname === href ? "w-full" : "w-0"} `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const DropdownLink = ({ href, title, onClick }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`block px-4 py-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md ${
        pathname === href ? "bg-gray-100 dark:bg-gray-700" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => setIsOpen(true)}
        className="flex items-center space-x-1 font-semibold text-black dark:text-white text-lg"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>
        <IoChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div 
          className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-sky-300 ring-opacity-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

// Mobile dropdown menu component
const MobileDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center space-x-1 w-full py-2  text-lg"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>
        <IoChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="flex flex-col space-y-2 mt-2 items-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-6 md:px-16 py-6 md:py-8 font-medium flex justify-between items-center dark:text-light relative">
      
      {/* LOGO - Centered */}
      <div className="absolute left-1/2 top-5 transform -translate-x-1/2 z-50">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        
        {/* Academic Dropdown */}
        <Dropdown title="Academic">
          <DropdownLink href="/research" title="Research" />
          <DropdownLink href="/teaching" title="Teaching" />
          <DropdownLink href="/publications" title="Publications" />
        </Dropdown>
        
        {/* Tools Dropdown */}
        <Dropdown title="Tools">
          <DropdownLink href="/tools/softwares" title="Softwares" />
          <DropdownLink href="/tools/webservers" title="Web Servers" />
        </Dropdown>
        
        <CustomLink href="/contact" title="Contact" />
      </nav>

      {/* Social Icons and Theme Toggle on the right (Desktop Only) */}
      <div className="hidden lg:flex items-center space-x-6">
        <motion.a
          href="https://github.com/navduhan"
          target={"_blank"}
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="GitHub"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/navduhan"
          target={"_blank"}
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://scholar.google.com/citations?user=kvf8JJQAAAAJ&hl=en"
          target={"_blank"}
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Google Scholar"
        >
          <GoogleScholarIcon />
        </motion.a>
        <motion.a
          href="https://www.researchgate.net/profile/Naveen-Duhan?ev=hdr_xprf"
          target={"_blank"}
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="ResearchGate"
        >
          <ResearchGateIcon />
        </motion.a>
        <motion.a
          href="https://instagram.com/freaky_nav"
          target={"_blank"}
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Instagram"
        >
          <InstagramIcon />
        </motion.a>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={handleClick}
        className="lg:hidden z-50 text-3xl dark:text-light"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {/* Mobile Menu (Fixed Overlay) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-black/90 z-40 flex flex-col 
        items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 w-64">
          <CustomLink href="/" title="Home" onClick={handleClick} className="text-black dark:text-white" />
          <CustomLink href="/about" title="About" onClick={handleClick} className="text-black dark:text-white" />
          
          {/* Mobile Academic Dropdown */}
          <MobileDropdown title="Academic">
            <DropdownLink href="/research" title="Research" onClick={handleClick} />
            <DropdownLink href="/teaching" title="Teaching" onClick={handleClick} />
            <DropdownLink href="/publications" title="Publications" onClick={handleClick} />
          </MobileDropdown>
          
          {/* Mobile Tools Dropdown */}
          <MobileDropdown title="Tools">
            <DropdownLink href="/tools/softwares" title="Softwares" onClick={handleClick} />
            <DropdownLink href="/tools/webservers" title="Web Servers" onClick={handleClick} />
          </MobileDropdown>
          
          <CustomLink href="/contact" title="Contact" onClick={handleClick} className="text-black dark:text-white" />
        </div>
        
        {/* Social Icons in Mobile Menu */}
        <div className="flex items-center space-x-4 mt-10">
          <motion.a
            href="https://github.com/navduhan"
            target={"_blank"}
            className="w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/navduhan"
            target={"_blank"}
            className="w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://scholar.google.com/citations?user=kvf8JJQAAAAJ&hl=en"
            target={"_blank"}
            className="w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GoogleScholarIcon />
          </motion.a>
        </div>

        {/* Theme Toggle in Mobile Menu */}
        <div className="mt-8">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}