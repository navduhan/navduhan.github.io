import { NextResponse } from 'next/server';
import bibtexParse from 'bibtex-parse-js';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

const parseLatex = (text) => {
  if (!text) return "";

  return text
    .replace(/\\textit{([^}]+)}/g, "<i>$1</i>")
    .replace(/\\textbf{([^}]+)}/g, "<b>$1</b>")
    .replace(/\\texttt{([^}]+)}/g, "<code>$1</code>")
    .replace(/\\underline{([^}]+)}/g, "<u>$1</u>")
    .replace(/\\textsuperscript{([^}]+)}/g, "<sup>$1</sup>")
    .replace(/\\emph{([^}]+)}/g, "<i>$1</i>")
    .replace(/\\&/g, "&")
    .replace(/--/g, "–")
    .replace(/\\\$/g, "$")
    .replace(/\{([^{}]+)\}/g, "$1")
    .trim();
};

export async function GET() {
  try {
    // Read the BIB file from the public directory
    const bibPath = path.join(process.cwd(), 'public', 'mypub.bib');
    const text = fs.readFileSync(bibPath, 'utf8');
    
    // Parse the BIB file
    const parsedBib = bibtexParse.toJSON(text);

    // Format the publications
    const publications = parsedBib.map((entry, index) => ({
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
      cited: entry.entryTags.cited || 0,
      citation: parseLatex(
        `${entry.entryTags.author}, ${entry.entryTags.title}, ${entry.entryTags.journal || entry.entryTags.booktitle}, ${entry.entryTags.year}`
      ),
      link: entry.entryTags.doi ? `https://doi.org/${entry.entryTags.doi}` : entry.entryTags.url || null,
    }));

    return NextResponse.json(publications);
  } catch (error) {
    console.error('Error fetching publications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch publications' },
      { status: 500 }
    );
  }
} 