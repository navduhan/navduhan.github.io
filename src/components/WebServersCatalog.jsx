"use client";

import { useState } from "react";

export default function WebServersCatalog({ webServers }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const categories = [
    { id: "all", label: `All (${webServers.length})` },
    { id: "Interactomes", label: "Interactomes" },
    { id: "AI Models", label: "AI & Deep Learning" },
    { id: "Genomics & Markers", label: "Genomics & Markers" },
    { id: "Surveillance", label: "Surveillance" },
  ];

  const filtered = webServers.filter((s) => {
    const matchesCategory = filter === "all" || s.category === filter;
    const matchesSearch =
      search === "" ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      (s.summary || s.description || "").toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 pt-4">
      {/* Global Reach Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-sky-950 via-slate-900 to-cyan-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-sky-900/50">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-cyan-400/20 text-cyan-200 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            GLOBAL REACH &bull; GA4 VERIFIED
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            19 Deployed Web Platforms &bull; 24,000+ Researchers
          </h3>
          <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
            Production bioinformatics databases and AI servers deployed across kaabil.net and bioinfo.usu.edu,
            powering biological discovery in 140+ countries.
          </p>
        </div>
        <div className="flex gap-4 text-center font-mono shrink-0">
          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-cyan-300 font-mono-nums">24,000+</div>
            <div className="text-[11px] text-slate-300">Global Users</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-[#ff944d] font-mono-nums">140+</div>
            <div className="text-[11px] text-slate-300">Countries</div>
          </div>
          <div className="bg-white/10 p-4 rounded-xl border border-white/10">
            <div className="text-2xl font-bold text-emerald-300 font-mono-nums">19</div>
            <div className="text-[11px] text-slate-300">Platforms</div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center pt-2">
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
            placeholder="Search 19 web servers..."
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

      {/* Showing Count */}
      <div className="text-xs font-mono text-slate-500 flex justify-between items-center">
        <span>Showing <strong className="text-sky-800 font-mono-nums">{filtered.length}</strong> of 19 deployed web servers</span>
        <span className="text-[11px] text-slate-400">kaabil.net &bull; bioinfo.usu.edu</span>
      </div>

      {/* 19 Web Servers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((server) => {
          const isInteractome = server.category === "Interactomes";
          const isAI = server.category === "AI Models";
          const isSurveillance = server.category === "Surveillance";

          const badgeClass = isInteractome
            ? "bg-cyan-50 text-cyan-800 border-cyan-200"
            : isAI
            ? "bg-indigo-50 text-indigo-800 border-indigo-200"
            : isSurveillance
            ? "bg-rose-50 text-rose-800 border-rose-200"
            : "bg-emerald-50 text-emerald-800 border-emerald-200";

          return (
            <div
              key={server.name}
              className="card-colorful p-6 space-y-3.5 flex flex-col justify-between hover:border-sky-400 transition"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${badgeClass}`}>
                    {server.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 font-mono-nums">
                    {server.users} users
                  </span>
                </div>

                <h4 className="font-display font-bold text-slate-900 text-lg leading-snug">
                  {server.name}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {server.summary || server.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 text-[11px] truncate max-w-[150px]">
                  {server.url.replace(/^https?:\/\//, "")}
                </span>
                <a
                  href={server.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sky-600 hover:text-sky-800 hover:underline inline-flex items-center gap-1"
                >
                  <span>Launch Server</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
