"use client"

import React, { useState } from "react";
import { motion} from "framer-motion";

const Notation = () => {
  // State to track selected items (default selection is "$")
  const [selectedItems, setSelectedItems] = useState(new Set(["equal"]));

  // Notation options
  const notations = [
    {
      key: "equal",
      label: <span>$</span>,
      description: "Denotes equal contributions",
    },
    {
      key: "undergrad",
      label: (
        <span>
          <u>U</u>
        </span>
      ),
      description: "Undergraduate student mentored",
    },
    {
      key: "grad",
      label: (
        <span>
          <u>
            <i>U</i>
          </u>
        </span>
      ),
      description: "Graduate student mentored",
    },
    {
      key: "collab",
      label: (
        <span>
          <sup>^</sup>
        </span>
      ),
      description: "Student of a collaborator mentored by Dr. Duhan",
    },
    {
      key: "correspond",
      label: <span>*</span>,
      description: "Corresponding author",
    },
  ];

  // Handle item click
  const handleClick = (key) => {
    setSelectedItems((prev) => {
      const newSet = new Set();

      if (prev.has(key)) {
        return new Set(["equal"]);
      }

      if (key !== "equal") {
        newSet.add(key);
      } else {
        newSet.add("equal");
      }

      return newSet;
    });
  };

  return (
 <motion.div
            
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="my-8 first:mt-0 last:mb-0 w-full flex flex-col items-center justify-between"
          >
      <div className="bg-gray-50 dark:bg-gray-50 border border-sky-300 shadow-lg rounded-2xl p-6 max-w-2xl">
        {/* Top Row: Clickable Notation Options */}
        <div className="flex justify-center space-x-4 cursor-pointer mb-4">
          {notations.map((item) => (
            <motion.span
              key={item.key}
              onClick={() => handleClick(item.key)}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer select-none
                                ${
                                  selectedItems.has(item.key)
                                    ? "bg-sky-600 text-white"
                                    : "bg-gray-200 text-black hover:bg-gray-400"
                                }`}
              whileTap={{ scale: 0.9 }} // Shrink effect when clicked
              whileHover={{ scale: 1.1 }} // Slight scale-up on hover
            >
              {item.label}
            </motion.span>
          ))}
        </div>

        {/* Bottom Row: Display Explanation for Selected Items */}
        <div className="mt-2 text-gray-700 dark:text-gray-700 text-center">
          {/* <AnimatePresence> */}
          {Array.from(selectedItems).map((key) => {
            const item = notations.find((n) => n.key === key);
            return (
              <motion.p
                key={key}
                className="text-sm"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {item.description}
              </motion.p>
            );
          })}
          {/* </AnimatePresence> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Notation;
