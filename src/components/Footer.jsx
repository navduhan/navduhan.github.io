import Link from "next/link";
import profile from "@/data/profile.json";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/tools", label: "Tools" },
  { href: "/teaching", label: "Teaching" },
  { href: "/blog", label: "Blog" }
];

export default function Footer() {
  return (
    <footer className="border-t border-soft bg-white/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <h3 className="font-display text-2xl mb-3">{profile.name}</h3>
          <p className="text-sm text-muted leading-relaxed">
            {profile.role}. Building AI-driven bioinformatics tools and data resources
            for genomics, host-pathogen interactions, and systems biology.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-muted mb-3">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-ink hover:text-[color:var(--accent)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-muted mb-3">Contact</h4>
          <div className="text-sm text-muted space-y-2">
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
            <p>{profile.location}</p>
            <a className="text-ink hover:text-[color:var(--accent)]" href={`https://${profile.website}`}>
              {profile.website}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-soft text-xs text-muted px-6 py-4 text-center">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
