"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const MotionLink = motion(Link);

const Logo = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold border border-solid transition-colors duration-300 
          ${isDarkMode ? "text-gray-800 border-gray-800" : "text-gray-50 border-gray-50"}`}
        whileHover={{
          scale: 1.2,
          backgroundColor: [
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
          ],
          transition: { duration: 2.0, repeat: Infinity },
        }}
        whileTap={{ scale: 1.0 }}
        animate={{
          backgroundColor: isDarkMode ? "#f9fafb" : "#121212",
          transition: { duration: 1.0 },
        }}
      >
        ND
      </MotionLink>
    </div>
  );
};

export default Logo;
