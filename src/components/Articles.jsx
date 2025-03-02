"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FaBook, FaFileAlt, FaLink, FaQuoteRight } from "react-icons/fa";
import bibtexParse from "bibtex-parse-js";

const parseLatex = (text) => {
  if (!text) return "";

  return text
    .replace(/\\textit{([^}]+)}/g, "<i>$1</i>") // Italic
    .replace(/\\textbf{([^}]+)}/g, "<b>$1</b>") // Bold
    .replace(/\\texttt{([^}]+)}/g, "<code>$1</code>") // Monospace
    .replace(/\\underline{([^}]+)}/g, "<u>$1</u>") // Underline
    .replace(/\\textsuperscript{([^}]+)}/g, "<sup>$1</sup>") // Superscript
    .replace(/\\emph{([^}]+)}/g, "<i>$1</i>") // Emphasized
    .replace(/\\&/g, "&") // Escaped ampersand
    .replace(/--/g, "–") // En-dash
    .replace(/\\\$/g, "$") // Dollar sign
    .replace(/\{([^{}]+)\}/g, "$1") // Remove unnecessary curly braces
    .trim();
};

const Articles = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch("/mypub.bib"); // Ensure .bib is in public/
        const text = await response.text();
        const parsedBib = bibtexParse.toJSON(text);

        const formattedPublications = parsedBib.map((entry, index) => ({
          id: index + 1,
          title: parseLatex(entry.entryTags.title) || "Untitled",
          authors: parseLatex(entry.entryTags.author) || "Unknown Authors",
          venue: parseLatex(entry.entryTags.journal || entry.entryTags.booktitle) || "Unknown Venue",
          year: parseInt(entry.entryTags.year) || 0, // Parse as number for sorting
          doi: entry.entryTags.doi || "N/A",
          citation: parseLatex(
            `${entry.entryTags.author}, ${entry.entryTags.title}, ${entry.entryTags.journal || entry.entryTags.booktitle}, ${entry.entryTags.year}`
          ),
          link: entry.entryTags.doi ? `https://doi.org/${entry.entryTags.doi}` : "#",
        }));

        // Sort by year (latest first)
        formattedPublications.sort((a, b) => b.year - a.year);

        setPublications(formattedPublications);
      } catch (error) {
        console.error("Error loading .bib file:", error);
      }
    };

    fetchPublications();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
     <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
        Research Articles
      </h2>

      <div ref={ref} className="relative w-full md:w-[90%] mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute  -left-4 md:-left-9 top-0 w-[4px] h-full bg-sky-500 origin-top dark:bg-purple-400"
        />

        {publications.map((pub) => (
          <motion.div
            key={pub.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="my-8 first:mt-0 last:mb-0 w-full flex flex-col items-center justify-between"
          >
            <div className="group relative  w-full rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 border border-sky-300 bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <FaBook className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-xl" />
                <h3
                  className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
                  dangerouslySetInnerHTML={{ __html: pub.title }}
                />
              </div>

              <div className="flex items-center gap-2 mb-2 text-gray-600 dark:text-gray-300">
                <FaFileAlt className="text-gray-500" />
                <span
                  className="font-medium"
                  dangerouslySetInnerHTML={{ __html: pub.authors }}
                />
              </div>

              <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-300">
                <FaQuoteRight className="text-gray-500" />
                <span className="italic">
                  {pub.venue}, {pub.year}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-4">
                {pub.doi !== "N/A" ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:text-purple-600 transition-colors"
                  >
                    <FaLink />
                    <span>DOI: {pub.doi}</span>
                  </a>
                ) : (
                  <span className="text-gray-500">No DOI Available</span>
                )}
              </div>

              <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                <p
                  className="text-sm text-gray-600 dark:text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: `<span class="font-semibold">Citation:</span> ${pub.citation}`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Articles;