import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import research from "@/data/research.json";

export const metadata = {
  title: "Research"
};

export default function ResearchPage() {
  return (
    <div className="space-y-20 pb-20 pt-12">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Research"
          title={research.statement.title}
          description={research.statement.paragraphs[0]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {research.statement.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph} className="text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Research Areas"
          title="Core themes and scientific focus"
          description="Four pillars guiding ongoing investigations, tool development, and collaborative projects."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {research.areas.map((area) => (
            <div key={area.title} className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
              <h3 className="font-display text-2xl text-ink">{area.title}</h3>
              <p className="text-sm text-muted mt-2">{area.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {area.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs bg-white/80 border border-soft text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Projects"
          title="Highlighted research platforms"
          description="Selected tools and resources spanning deep learning, RNA analysis, and host-pathogen interactions."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {research.projects.map((project) => (
            <div key={project.title} className="bg-card border border-soft rounded-3xl overflow-hidden shadow-soft">
              <div className="relative h-48">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-display text-2xl text-ink">{project.title}</h3>
                <p className="text-sm text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs bg-white/80 border border-soft text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  {project.github ? (
                    <a className="text-ink underline" href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  ) : null}
                  {project.link ? (
                    <a className="text-ink underline" href={project.link} target="_blank" rel="noreferrer">
                      Live Resource
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <div className="bg-card border border-soft rounded-3xl p-8 shadow-soft flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl text-ink">{research.cta.title}</h3>
            <p className="text-sm text-muted mt-2">{research.cta.description}</p>
          </div>
          <Link
            href={research.cta.button.href}
            className="px-5 py-3 rounded-full bg-[color:var(--accent)] text-white font-semibold shadow-crisp"
          >
            {research.cta.button.label}
          </Link>
        </div>
      </Container>
    </div>
  );
}
