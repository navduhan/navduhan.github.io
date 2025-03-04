
// api/scholar/route.js
export const dynamic = 'force-static'; // Or 'auto' if appropriate
export const revalidate = 60; // Optional: if you want it to revalidate every 60 seconds
import axios from "axios";
import * as cheerio from "cheerio";


export async function GET(req) {
  try {
    const userId = "kvf8JJQAAAAJ&hl"; // Replace with the Google Scholar user ID
    const url = `https://scholar.google.com/citations?user=${userId}&hl=en`;

    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    })

    const $ = cheerio.load(response.data);
    let articles = [];

    $("#gsc_a_b .gsc_a_t").each((index, element) => {
      const title = $(element).find(".gsc_a_at").text();
      const link = "https://scholar.google.com" + $(element).find(".gsc_a_at").attr("href");
      const author = $(element).find(".gsc_a_at + .gs_gray").text();
      const journal = $(element).find(".gs_gray + .gs_gray").text();

      articles.push({ title, link, author, journal, cited: "0", citedLink: "#" });
    });

    $("#gsc_a_b .gsc_a_c").each((index, element) => {
      const cited = $(element).find(".gs_ibl").text();
      const citedLink = "https://scholar.google.com" + $(element).find(".gs_ibl").attr("href");

      if (articles[index]) {
        articles[index].cited = cited || "0";
        articles[index].citedLink = citedLink;
      }
    });

    return Response.json(articles);
  } catch (error) {
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}