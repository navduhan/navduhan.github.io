"use client";

import { useMemo, useState } from "react";
import publications from "@/data/publications.json";
import { parseLatexToHtml, normalizeText } from "@/lib/latex";

export default function PublicationsClient() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");

  const years = useMemo(() => {
    const allYears = publications
      .map((pub) => pub.year)
      .filter((value) => value)
      .sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
    return ["all", ...Array.from(new Set(allYears))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return publications.filter((pub) => {
      const matchesYear = year === "all" || pub.year === year;
      const haystack = `${pub.title} ${pub.authors} ${pub.journal}`.toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      return matchesYear && matchesQuery;
    });
  }, [query, year]);

  return (
    <div className="space-y-6">
      <div className="bg-card border border-soft rounded-2xl p-4 shadow-soft flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 gap-3">
          <input
            className="flex-1 rounded-full border border-soft bg-white/80 px-4 py-2 text-sm"
            placeholder="Search by title, author, or journal"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select
            className="rounded-full border border-soft bg-white/80 px-4 py-2 text-sm"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            {years.map((value) => (
              <option key={value} value={value}>
                {value === "all" ? "All Years" : value}
              </option>
            ))}
          </select>
        </div>
        <div className="text-sm text-muted">{filtered.length} publications</div>
      </div>

      <div className="grid gap-4">
        {filtered.map((pub) => (
          <div key={pub.key} className="bg-card border border-soft rounded-2xl p-5 shadow-soft">
            <h3
              className="font-display text-xl text-ink"
              dangerouslySetInnerHTML={{ __html: parseLatexToHtml(pub.title) }}
            />
            <p
              className="text-sm text-muted"
              dangerouslySetInnerHTML={{ __html: parseLatexToHtml(normalizeText(pub.authors)) }}
            />
            <p className="text-xs text-muted">
              {pub.journal}
              {pub.volume ? ` • ${pub.volume}` : ""}
              {pub.number ? `(${pub.number})` : ""}
              {pub.pages ? ` • ${pub.pages}` : ""}
              {pub.year ? ` • ${pub.year}` : ""}
            </p>
            <div className="flex flex-wrap gap-3 text-xs mt-3">
              {pub.doi ? (
                <a className="underline text-ink" href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer">
                  DOI
                </a>
              ) : null}
              {pub.url ? (
                <a className="underline text-ink" href={pub.url} target="_blank" rel="noreferrer">
                  Publisher Link
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
