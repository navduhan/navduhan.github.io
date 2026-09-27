"use client";

import { useState } from "react";

export default function PublicationsList({ publications }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);

  const categories = [
    { id: "all", label: `All (${publications.length})` },
    { id: "viral", label: "Viral Genomics" },
    { id: "ai", label: "Deep Learning & AI" },
    { id: "interactome", label: "Interactomics" },
    { id: "genomics", label: "Genomics & Multi-Omics" },
  ];

  const filtered = publications.filter((p) => {
    const matchesCategory = filter === "all" || p.category === filter;
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.toLowerCase().includes(search.toLowerCase()) ||
      p.journal.toLowerCase().includes(search.toLowerCase()) ||
      p.year.toString().includes(search);
    return matchesCategory && matchesSearch;
  });

  const copyBibtex = (key, bibtex) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                filter === cat.id
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-white hover:bg-sky-50 text-slate-700 border border-sky-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search papers, authors, journal..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 pl-9 pr-3 py-1.5 text-xs font-mono rounded-lg border border-sky-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-2.5 top-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Publications Count */}
      <div className="text-xs font-mono text-slate-500">
        Showing <span className="font-bold text-sky-800">{filtered.length}</span> publications
      </div>

      {/* Publications Cards */}
      <div className="space-y-4">
        {filtered.map((pub) => (
          <div key={pub.key} className="card-colorful p-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-mono font-bold">
                  {pub.year}
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">{pub.journal}</span>
                {pub.category === "viral" && (
                  <span className="px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 text-[11px] font-mono border border-cyan-200">
                    Viral
                  </span>
                )}
                {pub.category === "ai" && (
                  <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[11px] font-mono border border-indigo-200">
                    AI / ML
                  </span>
                )}
                {pub.category === "interactome" && (
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-mono border border-emerald-200">
                    Interactomics
                  </span>
                )}
              </div>

              <button
                onClick={() => copyBibtex(pub.key, pub.bibtex)}
                className={`text-xs font-mono px-2.5 py-1 rounded border transition ${
                  copiedKey === pub.key
                    ? "bg-emerald-500 text-white border-emerald-500 font-bold"
                    : "bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-200"
                }`}
              >
                {copiedKey === pub.key ? "✓ Copied!" : "[Copy BibTeX]"}
              </button>
            </div>

            <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">
              {pub.title}
            </h3>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              {pub.authors}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 text-slate-500">
              {pub.doi && <span>DOI: {pub.doi}</span>}
              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Article</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
