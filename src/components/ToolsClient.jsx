"use client";

import { useMemo, useState } from "react";
import tools from "@/data/tools.json";

export default function ToolsClient() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const webResources = useMemo(() => {
    const q = query.toLowerCase();
    return tools.webResources.filter((resource) => {
      const matchesType = filter === "all" || resource.type === filter;
      const haystack = `${resource.name} ${resource.description} ${resource.tags.join(" ")}`.toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      return matchesType && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2">
        {tools.software.map((tool) => (
          <div key={tool.name} className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
            <div className="text-xs uppercase tracking-[0.3em] text-muted">{tool.category}</div>
            <h3 className="font-display text-2xl text-ink mt-2">{tool.name}</h3>
            <p className="text-sm text-muted mt-2">{tool.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {tool.features.map((feature) => (
                <span key={feature} className="px-3 py-1 rounded-full text-xs bg-white/80 border border-soft text-muted">
                  {feature}
                </span>
              ))}
            </div>
            <a className="text-sm font-semibold text-ink underline mt-4 inline-flex" href={tool.link} target="_blank" rel="noreferrer">
              View {tool.type === "download" ? "Download" : "Repository"}
            </a>
          </div>
        ))}
      </div>

      <div className="bg-card border border-soft rounded-3xl p-5 shadow-soft flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 gap-3">
          <input
            className="flex-1 rounded-full border border-soft bg-white/80 px-4 py-2 text-sm"
            placeholder="Search web resources"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select
            className="rounded-full border border-soft bg-white/80 px-4 py-2 text-sm"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            <option value="all">All Types</option>
            <option value="database">Database</option>
            <option value="webserver">Web Server</option>
          </select>
        </div>
        <div className="text-sm text-muted">{webResources.length} resources</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {webResources.map((resource) => (
          <div key={resource.name} className="bg-card border border-soft rounded-2xl p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-ink">{resource.name}</h3>
              <span className="text-xs uppercase tracking-[0.3em] text-muted">{resource.type}</span>
            </div>
            <p className="text-sm text-muted mt-2">{resource.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {resource.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/80 border border-soft text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <a className="text-sm font-semibold text-ink underline mt-4 inline-flex" href={resource.link} target="_blank" rel="noreferrer">
              Visit Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
