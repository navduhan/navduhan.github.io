// src/utils/bibParser.js
// Function to parse LaTeX formatting to HTML
export const parseLatex = (text) => {
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

// Function to determine categories based on title and journal
const determineCategories = (title, journal) => {
  const categories = [];
  
  if (!title && !journal) return categories;
  
  // Remove LaTeX formatting for category detection
  const cleanTitle = title ? title.replace(/\\[a-zA-Z]+{([^{}]*)}/g, '$1').replace(/{|}/g, '') : '';
  const titleLower = cleanTitle.toLowerCase();
  const journalLower = (journal || '').toLowerCase();
  
  // Check for common research areas
  if (titleLower.includes('deep learning') || titleLower.includes('neural network')) {
    categories.push('Deep Learning');
  }
  
  if (titleLower.includes('genom')) {
    categories.push('Genomics');
  }
  
  if (titleLower.includes('proteom')) {
    categories.push('Proteomics');
  }
  
  if (titleLower.includes('bioinformatic')) {
    categories.push('Bioinformatics');
  }
  
  if (titleLower.includes('host') && titleLower.includes('pathogen')) {
    categories.push('Host-Pathogen');
  }
  
  if (titleLower.includes('wheat') || journalLower.includes('wheat')) {
    categories.push('Wheat');
  }
  
  if (titleLower.includes('rice') || journalLower.includes('rice')) {
    categories.push('Rice');
  }
  
  // If no categories were determined, add a default one
  if (categories.length === 0) {
    categories.push('Research');
  }
  
  return categories;
};

// Parse BibTeX file
export const parseBibFile = (bibText) => {
  const entries = [];
  const entryRegex = /@(\w+)\s*\{\s*([^,]*),\s*([\s\S]*?)\n\}/g;
  const fieldRegex = /\s*(\w+)\s*=\s*\{([\s\S]*?)\},?/g;
  
  let match;
  while ((match = entryRegex.exec(bibText)) !== null) {
    const [, type, key, fieldsText] = match;
    
    if (type.toLowerCase() !== 'article' && type.toLowerCase() !== 'inproceedings') {
      continue; // Skip non-article entries
    }
    
    const entry = { key };
    let fieldMatch;
    
    while ((fieldMatch = fieldRegex.exec(fieldsText)) !== null) {
      const [, fieldName, fieldValue] = fieldMatch;
      entry[fieldName.toLowerCase()] = fieldValue.trim();
    }
    
    // Extract and format required fields
    const title = entry.title || '';
    const authors = entry.author ? entry.author.replace(/\n/g, ' ').replace(/\s+/g, ' ') : '';
    const journal = entry.journal || entry.booktitle || '';
    const year = entry.year ? parseInt(entry.year) : null;
    const volume = entry.volume || '';
    const pages = entry.pages ? entry.pages.replace(/--/g, '-') : '';
    const doi = entry.doi || null;
    const abstract = entry.abstract || null;
    
    // Determine categories
    const categories = determineCategories(title, journal);
    
    // Create formatted publication object
    entries.push({
      title,
      authors,
      journal,
      year,
      volume,
      pages,
      doi,
      abstract,
      categories,
      citations: Math.floor(Math.random() * 30), // Placeholder for demo
      impact: (Math.random() * 10).toFixed(2), // Placeholder for demo
    });
  }
  
  // Sort by year (newest first)
  entries.sort((a, b) => (b.year || 0) - (a.year || 0));
  
  return entries;
};
