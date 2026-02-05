"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import profile from "@/data/profile.json";
import ThemeSelect from "@/components/ThemeSelect";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/tools", label: "Tools" },
  { href: "/teaching", label: "Teaching" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-panel border-b border-soft">
      <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex flex-col">
          <span className="font-display text-xl text-ink">{profile.name}</span>
          <span className="text-xs uppercase tracking-[0.25em] text-muted">Bioinformatics Atlas</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeSelect />
          <a
            href={profile.cvPath}
            className="px-4 py-2 rounded-full border border-soft bg-white/80 text-sm font-semibold shadow-crisp hover:-translate-y-0.5 transition"
          >
            Download CV
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-[color:var(--accent)] text-white text-sm font-semibold shadow-crisp hover:-translate-y-0.5 transition"
          >
            Collaborate
          </Link>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden px-3 py-2 rounded-full border border-soft bg-white/80 text-xs uppercase tracking-[0.2em]"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-soft bg-white/90 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <ThemeSelect compact />
              <a
                href={profile.cvPath}
                className="px-4 py-2 rounded-full border border-soft bg-white text-sm font-semibold"
              >
                Download CV
              </a>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full bg-[color:var(--accent)] text-white text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Collaborate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
