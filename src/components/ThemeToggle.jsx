"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa"; // Importing the React Icons

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect to ensure this code only runs on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until mounted

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-200 rounded-full text-gray-800 dark:text-yellow-500 shadow-lg"
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;