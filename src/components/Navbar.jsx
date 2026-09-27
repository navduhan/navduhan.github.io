"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/research-grants/", label: "Research & Grants" },
    { href: "/software-tools/", label: "Software & Web Servers" },
    { href: "/publications/", label: "Publications" },
    { href: "/teaching/", label: "Teaching & Mentoring" },
    { href: "/blog/", label: "Blog" },
    { href: "/contact/", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-xs">
      {/* Top Research & Diagnostic Infrastructure Strip */}
      <div className="border-b border-sky-100/90 bg-white/95 backdrop-blur-md py-1.5 px-6 text-xs font-mono">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#138808]" />
            </span>
            <span className="font-bold text-slate-800 tracking-tight text-[11px] sm:text-xs">
              VIRAL SURVEILLANCE &amp; COMPUTATIONAL GENOMICS
            </span>
            <span className="hidden lg:inline text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 text-[11px]">
              Nextflow DSL2 &bull; SLURM HPC &bull; Protein LLMs
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-600 text-[11px] sm:text-xs">
            <span className="hidden sm:inline text-slate-400">Global Web Reach:</span>
            <span className="font-bold text-sky-900 bg-sky-100/70 px-2 py-0.5 rounded border border-sky-200 font-mono-nums">
              24,000+ Researchers &bull; 140+ Countries
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-sky-100/80">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* Brand Logo with Portrait */}
          <Link href="/" className="flex items-center gap-3 group text-decoration-none shrink-0">
            <img
              src="/naveen_duhan_portrait.png"
              alt="Dr. Naveen Duhan"
              className="w-11 h-11 rounded-full object-cover border-2 border-sky-300 shadow-sm group-hover:scale-105 group-hover:border-sky-600 transition ring-2 ring-sky-100"
            />
            <div>
              <div className="font-display font-bold text-slate-900 text-base tracking-tight leading-none group-hover:text-sky-700 transition">
                Naveen Duhan, <span className="font-normal text-sky-600">Ph.D.</span>
              </div>
              <div className="text-[12px] text-slate-500 font-medium mt-1">
                Computational Biologist
              </div>
            </div>
          </Link>

          {/* Simple Clean Text Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href.replace(/\/$/, "")));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Semi-large Screen Nav Links (1024px - 1280px) */}
          <nav className="hidden md:flex xl:hidden items-center gap-4 text-xs font-semibold">
            {navLinks.slice(0, 5).map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href.replace(/\/$/, "")));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-slate-600 hover:text-sky-700 transition ${isActive ? "text-sky-700 font-bold" : ""}`}
                >
                  {link.label.split(" ")[0]}
                </Link>
              );
            })}
            <Link href="/blog/" className={`text-slate-600 hover:text-sky-700 transition ${pathname?.startsWith("/blog") ? "text-sky-700 font-bold" : ""}`}>
              Blog
            </Link>
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/Naveen_Duhan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-xs sm:text-sm py-2 px-3 sm:px-4 text-decoration-none"
            >
              <span>CV [PDF]</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg bg-sky-50 text-slate-700 hover:bg-sky-100 transition"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden px-6 py-4 border-t border-sky-100 bg-white/98 space-y-2 font-mono text-xs">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-slate-700 hover:text-sky-700 font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
