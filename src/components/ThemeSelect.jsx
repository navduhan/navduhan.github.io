"use client";

import { useEffect, useState } from "react";
import themes from "@/data/themes.json";

const STORAGE_KEY = "nd-theme";
const DEFAULT_THEME = "blue";

const applyTheme = (value) => {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = value;
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch (error) {
    // Ignore write errors (e.g., private mode)
  }
};

export default function ThemeSelect({ compact = false }) {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    const initial = saved || document.documentElement.dataset.theme || DEFAULT_THEME;
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setTheme(value);
    applyTheme(value);
  };

  return (
    <label className={`flex items-center gap-2 ${compact ? "text-xs" : "text-sm"}`}>
      <span className="uppercase tracking-[0.2em] text-muted">Theme</span>
      <select
        aria-label="Select theme"
        value={theme}
        onChange={handleChange}
        className="rounded-full border border-soft bg-white/80 px-3 py-2 text-xs font-semibold text-ink shadow-crisp"
      >
        {themes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
