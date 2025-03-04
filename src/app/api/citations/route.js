// api/scholar/route.js
export const dynamic = 'force-static'; // Or 'auto' if appropriate
export const revalidate = 60; // Optional: if you want it to revalidate every 60 seconds

import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs"; // Import fs module

export async function GET(req) {
  try {
    const userId = 'kvf8JJQAAAAJ&hl'; // Replace with the Google Scholar user ID
    const url = `https://scholar.google.com/citations?user=${userId}&hl=en`;

    // Make a request to fetch the HTML of the user's profile
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    // Load the response HTML into cheerio for parsing
    const $ = cheerio.load(response.data);

    // Extract citation metrics
    const citationData = {};

    // Target the table containing the citation data
    $('#gsc_rsb_cit').each((index, element) => {
      const rows = $(element).find('#gsc_rsb_st tbody tr');
      rows.each((rowIndex, row) => {
        const label = $(row).find('td.gsc_rsb_sc1').text().trim();
        const allColumn = $(row).find('td.gsc_rsb_std').eq(0).text().trim();
        const since2020Column = $(row).find('td.gsc_rsb_std').eq(1).text().trim();

        // Store data based on the label
        if (label === 'Citations') {
          citationData.citations = { all: allColumn, since2020: since2020Column };
        } else if (label === 'h-index') {
          citationData.hIndex = { all: allColumn, since2020: since2020Column };
        } else if (label === 'i10-index') {
          citationData.i10Index = { all: allColumn, since2020: since2020Column };
        }
      });
    });

        // Extract year-wise citation data
        const yearWiseCitations = {};

        // Get the year elements and citation elements
        const years = [];
        const citations = [];
    
        // Extract all the years first
        $('span.gsc_g_t').each((i, yearElem) => {
          const year = $(yearElem).text().trim();
          years.push(year); // Store years in an array
        });
    
        // Extract all the citation counts
        $('a.gsc_g_a').each((i, citationElem) => {
          const citationCount = $(citationElem).find('span.gsc_g_al').text().trim();
          citations.push(citationCount); // Store citation counts in an array
        });
    
        // Match each year with its corresponding citation count
        years.forEach((year, index) => {
          const citationCount = citations[index];
          if (year && citationCount && !isNaN(citationCount)) {
            // Log each year and citation count to the file
            // const logContent = `Year: ${year} | Citation Count: ${citationCount}\n`;
            // fs.writeFileSync('yearWiseCitations.txt', logContent, { flag: 'a' }); // Append to the file
    
            // Store in the final object
            yearWiseCitations[year] = parseInt(citationCount, 10);
          }
        });
    
    citationData.yearWiseCitations = yearWiseCitations;

    // console.log(citationData);
    // Return the extracted citation data
    return new Response(JSON.stringify(citationData), { status: 200 });
  } catch (error) {
    console.error('Error fetching citation data:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch citation data' }),
      { status: 500 }
    );
  }
}
