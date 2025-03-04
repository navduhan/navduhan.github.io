// Modified Articles.jsx component with improved Google Scholar integration
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { 
  FaBook, 
  FaFileAlt, 
  FaLink, 
  FaQuoteRight, 
  FaSearch, 
  FaFilter, 
  FaSortAmountDown, 
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaDownload,
  FaCopy,
  FaChevronUp,
  FaChevronDown,
  FaGraduationCap
} from "react-icons/fa";
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

const Articles = ({ scholar = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const [publications, setPublications] = useState([]);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filtering and sorting states
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // "newest", "oldest", "mostCited"
  const [filterYear, setFilterYear] = useState("all");
  const [availableYears, setAvailableYears] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  
  // New state for Google Scholar articles to cross-reference
  const [scholarArticles, setScholarArticles] = useState([]);
  const [citationData, setCitationData] = useState(null);

  // Toggle expanded state for a publication
  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Copy citation to clipboard
  const copyCitation = (citation) => {
    navigator.clipboard.writeText(citation.replace(/<[^>]*>/g, ''))
      .then(() => {
        alert("Citation copied to clipboard!");
      })
      .catch(err => {
        console.error('Failed to copy citation: ', err);
      });
  };

  // Function to verify if a URL is valid
  const isValidUrl = (url) => {
    if (!url) return false;
    try {
      new URL(url);
      return url !== "#" && !url.startsWith("javascript:");
    } catch (e) {
      return false;
    }
  };

  // Fetch Google Scholar articles for cross-referencing
  useEffect(() => {
    const fetchScholarArticles = async () => {
      try {
        // Try to get cached data from localStorage first
        const cachedArticles = localStorage.getItem('scholarArticles');
        
        if (cachedArticles) {
          setScholarArticles(JSON.parse(cachedArticles));
        } else {
          const response = await fetch("/api/scholar");
          if (!response.ok) throw new Error("Failed to fetch Google Scholar data");
          const data = await response.json();
          setScholarArticles(data);
          
          // Cache the data
          localStorage.setItem('scholarArticles', JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching Google Scholar articles:", error);
      }
    };

    // Fetch citation data
    const fetchCitationData = async () => {
      try {
        // Try to get cached data from localStorage first
        const cachedMetrics = localStorage.getItem('scholarMetrics');
        
        if (cachedMetrics) {
          setCitationData(JSON.parse(cachedMetrics));
        } else {
          const response = await fetch("/api/citations");
          if (!response.ok) throw new Error("Failed to fetch citation data");
          const data = await response.json();
          setCitationData(data);
          
          // Cache the data
          localStorage.setItem('scholarMetrics', JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching citation data:", error);
      }
    };

    fetchScholarArticles();
    fetchCitationData();
  }, []);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true);
        
        // Fetch from different sources based on the tab
        const source = scholar ? "/scholar-publications.json" : "/mypub.bib";
        
        if (scholar) {
          // Fetch JSON for scholar publications
          const response = await fetch(source);
          const data = await response.json();
          
          // Format the scholar publications
          const formattedPublications = data.map((entry, index) => ({
            id: index + 1,
            title: entry.title || "Untitled",
            authors: entry.author || "Unknown Authors",
            venue: entry.journal || "Unknown Venue",
            year: parseInt(entry.year) || 0,
            doi: entry.doi || null,
            cited: entry.cited || 0,
            citedLink: entry.citedLink || null,
            citation: `${entry.author}, ${entry.title}, ${entry.journal}, ${entry.year}`,
            link: entry.link || null,
          }));
          
          setPublications(formattedPublications);
        } else {
          // Fetch BIB for research publications
          const response = await fetch(source);
          const text = await response.text();
          const parsedBib = bibtexParse.toJSON(text);

          const formattedPublications = parsedBib.map((entry, index) => ({
            id: index + 1,
            title: parseLatex(entry.entryTags.title) || "Untitled",
            authors: parseLatex(entry.entryTags.author) || "Unknown Authors",
            venue: parseLatex(entry.entryTags.journal || entry.entryTags.booktitle) || "Unknown Venue",
            year: parseInt(entry.entryTags.year) || 0,
            doi: entry.entryTags.doi || null,
            url: entry.entryTags.url || null,
            pdf: entry.entryTags.pdf || null,
            abstract: parseLatex(entry.entryTags.abstract) || null,
            keywords: parseLatex(entry.entryTags.keywords) || null,
            citation: parseLatex(
              `${entry.entryTags.author}, ${entry.entryTags.title}, ${entry.entryTags.journal || entry.entryTags.booktitle}, ${entry.entryTags.year}`
            ),
            link: entry.entryTags.doi ? `https://doi.org/${entry.entryTags.doi}` : entry.entryTags.url || null,
          }));

          setPublications(formattedPublications);
        }
        
        setError(null);
      } catch (error) {
        console.error(`Error loading ${scholar ? "scholar" : "research"} publications:`, error);
        setError(`Failed to load ${scholar ? "scholar" : "research"} publications. Please try again later.`);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, [scholar]);

  // Extract available years for filtering
  useEffect(() => {
    if (publications.length > 0) {
      const years = new Set();
      publications.forEach(pub => {
        if (pub.year) years.add(pub.year.toString());
      });
      setAvailableYears(Array.from(years).sort((a, b) => b - a));
    }
  }, [publications]);

  // Function to find matching Google Scholar article - IMPROVED
  const findMatchingScholarArticle = (publication) => {
    if (!scholarArticles || scholarArticles.length === 0) return null;
    
    // Try to find a match based on title similarity
    const pubTitle = publication.title.toLowerCase().replace(/<[^>]*>/g, '');
    
    return scholarArticles.find(article => {
      const scholarTitle = article.title.toLowerCase();
      // Check if titles are similar enough (at least 70% match)
      return (
        scholarTitle.includes(pubTitle.substring(0, Math.floor(pubTitle.length * 0.7))) ||
        pubTitle.includes(scholarTitle.substring(0, Math.floor(scholarTitle.length * 0.7)))
      );
    });
  };

  // Function to get citation count for a publication - IMPROVED
  const getCitationCount = (publication) => {
    // First check if the publication already has a citation count
    if (publication.cited && !isNaN(parseInt(publication.cited))) {
      return parseInt(publication.cited);
    }
    
    // Otherwise try to find a matching Google Scholar article
    const scholarArticle = findMatchingScholarArticle(publication);
    return scholarArticle && scholarArticle.cited ? parseInt(scholarArticle.cited) || 0 : 0;
  };

  // Apply filters and sorting - IMPROVED CITATION SORTING
  useEffect(() => {
    let filtered = [...publications];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(pub => 
        pub.title.toLowerCase().includes(query) || 
        pub.authors.toLowerCase().includes(query) || 
        pub.venue.toLowerCase().includes(query)
      );
    }
    
    // Apply year filter
    if (filterYear !== "all") {
      filtered = filtered.filter(pub => pub.year.toString() === filterYear);
    }
    
    // Apply sorting - IMPROVED CITATION SORTING
    switch (sortOrder) {
      case "oldest":
        filtered.sort((a, b) => a.year - b.year);
        break;
      case "mostCited":
        // Enhanced citation sorting that considers both direct citation counts and Google Scholar matches
        filtered.sort((a, b) => {
          const aCitations = getCitationCount(a);
          const bCitations = getCitationCount(b);
          return bCitations - aCitations;
        });
        break;
      case "newest":
      default:
        filtered.sort((a, b) => b.year - a.year);
        break;
    }
    
    setFilteredPublications(filtered);
  }, [publications, searchQuery, sortOrder, filterYear]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Filters and Search */}
      <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-grow">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
            </div>
          </div>
          
          {/* Sort Order */}
          <div className="md:w-48">
            <div className="relative">
              <FaSortAmountDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 appearance-none"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="mostCited">Most Cited</option>
              </select>
            </div>
          </div>
          
          {/* Year Filter */}
          <div className="md:w-48">
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 appearance-none"
              >
                <option value="all">All Years</option>
                {availableYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Filter Tags */}
        {(searchQuery || filterYear !== "all") && (
          <div className="mt-4 flex flex-wrap gap-2">
            {searchQuery && (
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm flex items-center">
                Search: {searchQuery}
                <button 
                  onClick={() => setSearchQuery("")}
                  className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                >
                  &times;
                </button>
              </div>
            )}
            
            {filterYear !== "all" && (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm flex items-center">
                Year: {filterYear}
                <button 
                  onClick={() => setFilterYear("all")}
                  className="ml-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200"
                >
                  &times;
                </button>
              </div>
            )}
            
            <button 
              onClick={() => {
                setSearchQuery("");
                setFilterYear("all");
                setSortOrder("newest");
              }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Publications List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading publications...</p>
        </div>
      ) : error ? (
        <div className="text-center py-12 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      ) : filteredPublications.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <FaFilter className="mx-auto text-4xl text-gray-400 mb-4" />
          <p className="text-gray-600 dark:text-gray-400">No publications match your filters.</p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setFilterYear("all");
            }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="relative w-full">
          <div ref={ref} className="relative w-full md:w-[90%] mx-auto">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute -left-4 md:-left-8 top-0 w-[4px] h-full bg-gradient-to-b from-blue-500 to-purple-600 origin-top rounded-full shadow-lg z-10"
            />
            <div className="relative z-0">
              <AnimatePresence>
                {filteredPublications.map((pub) => {
                  // Find matching Google Scholar article
                  const scholarArticle = findMatchingScholarArticle(pub);
                  
                  // Get citation count - IMPROVED
                  const citationCount = getCitationCount(pub);
                  
                  // Check if Google Scholar link is valid - NEW
                  const hasValidScholarLink = scholarArticle && 
                                             scholarArticle.link && 
                                             isValidUrl(scholarArticle.link);
                  
                  // Check if abstract is available - NEW
                  const hasAbstract = pub.abstract && pub.abstract.trim() !== '';
                  
                  return (
                    <motion.div
                      key={pub.id}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="my-8 first:mt-0 last:mb-0 w-full flex flex-col items-center justify-between"
                    >
                      <div className="group relative w-full rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        {/* Publication Header */}
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white">
                              <FaBook size={20} />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            {/* Title */}
                            <h3
                              className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-3"
                              dangerouslySetInnerHTML={{ __html: pub.title }}
                            />
                            
                            {/* Authors */}
                            <div className="flex items-center gap-2 mb-2 text-gray-600 dark:text-gray-300">
                              <FaFileAlt className="text-gray-500 flex-shrink-0" />
                              <span
                                className="font-medium"
                                dangerouslySetInnerHTML={{ __html: pub.authors }}
                              />
                            </div>
                            
                            {/* Venue and Year */}
                            <div className="flex items-center gap-2 mb-3 text-gray-600 dark:text-gray-300">
                              <FaQuoteRight className="text-gray-500 flex-shrink-0" />
                              <span className="italic">
                                {pub.venue}, {pub.year}
                              </span>
                            </div>
                            
                            {/* Citation Metrics - IMPROVED */}
                            {citationCount > 0 && (
                              <div className="mb-3">
                                <span className="inline-flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                                  <FaQuoteRight className="mr-1" size={12} />
                                  {citationCount} citation{citationCount !== 1 ? 's' : ''}
                                  {scholarArticle && scholarArticle.citedLink && isValidUrl(scholarArticle.citedLink) && (
                                    <a 
                                      href={scholarArticle.citedLink} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
                                      title="View citations on Google Scholar"
                                    >
                                      <FaExternalLinkAlt size={10} />
                                    </a>
                                  )}
                                </span>
                              </div>
                            )}
                            
                            {/* Links and Actions */}
                            <div className="flex flex-wrap items-center gap-3 mt-4">
                              {/* DOI Link */}
                              {pub.doi && (
                                <a
                                  href={`https://doi.org/${pub.doi}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                                >
                                  <FaLink size={12} />
                                  <span className="text-sm">DOI: {pub.doi}</span>
                                </a>
                              )}
                              
                              {/* External URL */}
                              {pub.url && !pub.doi && isValidUrl(pub.url) && (
                                <a
                                  href={pub.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                                >
                                  <FaExternalLinkAlt size={12} />
                                  <span className="text-sm">View Publication</span>
                                </a>
                              )}
                              
                              {/* PDF Link */}
                              {pub.pdf && isValidUrl(pub.pdf) && (
                                <a
                                  href={pub.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                                >
                                  <FaDownload size={12} />
                                  <span className="text-sm">PDF</span>
                                </a>
                              )}
                              
                              {/* Google Scholar Link - IMPROVED with validation */}
                              {hasValidScholarLink && (
                                <a
                                  href={scholarArticle.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                                >
                                  <FaGraduationCap size={12} />
                                  <span className="text-sm">View in Google Scholar</span>
                                </a>
                              )}
                              
                              {/* Copy Citation Button */}
                              <button
                                onClick={() => copyCitation(pub.citation)}
                                className="flex items-center gap-1 px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
                              >
                                <FaCopy size={12} />
                                <span className="text-sm">Copy Citation</span>
                              </button>
                              
                              {/* Expand/Collapse Button - IMPROVED to show only when abstract or keywords exist */}
                              {(hasAbstract || pub.keywords) && (
                                <button
                                  onClick={() => toggleExpanded(pub.id)}
                                  className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ml-auto"
                                >
                                  {expandedItems[pub.id] ? (
                                    <>
                                      <FaChevronUp size={12} />
                                      <span className="text-sm">Less</span>
                                    </>
                                  ) : (
                                    <>
                                      <FaChevronDown size={12} />
                                      <span className="text-sm">More</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Expandable Content - IMPROVED to better handle abstracts */}
                        {expandedItems[pub.id] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 overflow-hidden"
                          >
                            {/* Abstract - IMPROVED with better validation */}
                            {hasAbstract && (
                              <div className="mb-4">
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Abstract</h4>
                                <p 
                                  className="text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md"
                                  dangerouslySetInnerHTML={{ __html: pub.abstract }}
                                />
                              </div>
                            )}
                            
                            {/* Keywords */}
                            {pub.keywords && (
                              <div>
                                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Keywords</h4>
                                <div className="flex flex-wrap gap-2">
                                  {pub.keywords.split(',').map((keyword, idx) => (
                                    <span 
                                      key={idx} 
                                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                                    >
                                      {keyword.trim()}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                        
                        {/* Citation */}
                        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                          <p
                            className="text-sm text-gray-600 dark:text-gray-300"
                            dangerouslySetInnerHTML={{
                              __html: `<span class="font-semibold">Citation:</span> ${pub.citation}`,
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;
