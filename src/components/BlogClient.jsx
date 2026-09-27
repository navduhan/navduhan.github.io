"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogClient({ articles }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const categories = [
    { id: "all", label: `All (${articles.length})` },
    { id: "Viral Genomics", label: "Viral Genomics" },
    { id: "Pipelines & HPC", label: "Pipelines & HPC" },
    { id: "Machine Learning & AI", label: "Machine Learning & AI" },
    { id: "Transcriptomics", label: "Transcriptomics" },
  ];

  const filtered = articles.filter((a) => {
    const matchesCat = filter === "all" || a.category === filter;
    const q = search.toLowerCase();
    const matchesSearch =
      !search ||
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      (a.tags && a.tags.some((t) => t.toLowerCase().includes(q)));
    return matchesCat && matchesSearch;
  });

  const featured = articles[0];

  return (
    <div className="space-y-10">
      {/* Featured Deep Dive Marquee */}
      {featured && filter === "all" && !search && (
        <div className="banner-gradient rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-300/40 text-cyan-200 text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ff671f]" />
                Featured Technical Guide &bull; {featured.readTime}
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-snug">
                {featured.title}
              </h2>
              <p className="text-sky-100 text-sm md:text-base leading-relaxed max-w-2xl">
                {featured.summary}
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-cyan-100">
                {featured.tags.map((tag) => (
                  <span key={tag} className="bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end">
              <Link
                href={`/blog/${featured.slug}/`}
                className="btn-saffron text-sm text-decoration-none"
              >
                <span>Read Full Technical Guide</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Filter Buttons & Real-Time Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg transition ${
                filter === cat.id
                  ? "bg-sky-600 text-white shadow-xs"
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
            placeholder="Search guides, methods, code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-72 pl-9 pr-3 py-1.5 text-xs font-mono rounded-lg border border-sky-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
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

      {/* Results Count */}
      <div className="text-xs font-mono text-slate-500 flex justify-between items-center">
        <span>
          Showing <strong className="text-sky-800 font-mono-nums">{filtered.length}</strong> of {articles.length} in-depth technical guides
        </span>
        <span className="text-[11px] text-slate-400">Written from Diagnostic &amp; HPC Practice</span>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}/`}
            className="card-colorful p-8 space-y-4 flex flex-col justify-between group text-decoration-none hover:border-sky-400"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">
                  {article.category}
                </span>
                <span className="text-slate-400 font-mono-nums">{article.readTime}</span>
              </div>

              <h3 className="font-display font-bold text-slate-900 text-xl leading-snug group-hover:text-sky-700 transition">
                {article.title}
              </h3>

              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100 font-mono text-xs">
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] px-2 py-0.5 rounded"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sky-600 font-bold group-hover:text-sky-800 pt-1">
                <span>Read Complete Guide</span>
                <span className="group-hover:translate-x-1 transition">&rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
