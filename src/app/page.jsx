import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import profile from "@/data/profile.json";
import research from "@/data/research.json";
import tools from "@/data/tools.json";
import publications from "@/data/publications.json";
import teaching from "@/data/teaching.json";
import blogs from "@/data/blog.json";
import { parseLatexToHtml, normalizeText } from "@/lib/latex";

const featuredPublications = publications.slice(0, 4);
const featuredBlogs = blogs.slice(0, 3);

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-soft bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted shadow-crisp">
                Computational Biology
                <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              </div>
              <h1 className="font-display text-4xl md:text-6xl text-ink">
                {profile.name}
              </h1>
              <p className="text-lg text-muted max-w-xl">{profile.tagline}</p>
              <p className="text-sm text-muted max-w-xl">{profile.summary[0]}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.cvPath}
                  className="px-5 py-3 rounded-full bg-[color:var(--accent)] text-white font-semibold shadow-crisp hover:-translate-y-0.5 transition"
                >
                  Download CV
                </a>
                <Link
                  href="/publications"
                  className="px-5 py-3 rounded-full border border-soft bg-white/80 font-semibold text-ink shadow-crisp hover:-translate-y-0.5 transition"
                >
                  View Publications
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-full border border-soft bg-white/50 font-semibold text-muted hover:text-ink hover:-translate-y-0.5 transition"
                >
                  Start a Collaboration
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {profile.metrics.map((metric) => (
                  <div key={metric.label} className="bg-card border border-soft rounded-2xl p-4 shadow-soft">
                    <div className="font-display text-2xl text-ink">{metric.value}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[color:var(--accent)]/20 via-white/40 to-[color:var(--accent-2)]/20 blur-2xl" />
              <div className="relative bg-card border border-soft rounded-[32px] p-6 shadow-soft">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px]">
                  <Image
                    src={profile.portrait}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 space-y-2">
                  <div className="text-xs uppercase tracking-[0.3em] text-muted">Current Focus</div>
                  <div className="text-lg font-semibold text-ink">AI-driven bioinformatics</div>
                  <p className="text-sm text-muted">
                    {profile.summary[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Research Focus"
            title="Where computation meets biology"
            description="A snapshot of the research themes and technologies guiding my work in genomics, systems biology, and AI."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {research.areas.map((area) => (
              <div key={area.title} className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
                <h3 className="font-display text-2xl text-ink mb-2">{area.title}</h3>
                <p className="text-sm text-muted mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
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
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Tools and platforms built for researchers"
            description="A selection of computational tools, databases, and web servers created to make complex biological data accessible."
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
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Publications"
            title="Recent peer-reviewed work"
            description="Selected publications from computational genomics, host-pathogen interactions, and AI-enabled biology."
          />
          <div className="grid gap-4">
            {featuredPublications.map((pub) => (
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
                  {pub.journal} {pub.volume ? `• ${pub.volume}` : ""} {pub.pages ? `• ${pub.pages}` : ""} ({pub.year})
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline"
          >
            View all publications
          </Link>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Teaching and Mentorship"
            title="Training the next generation of bioinformaticians"
            description="Coursework, workshops, and mentorship across US and international programs."
          />
          <div className="grid gap-6 md:grid-cols-4">
            {teaching.stats.map((stat) => (
              <div key={stat.label} className="bg-card border border-soft rounded-2xl p-5 shadow-soft text-center">
                <div className="font-display text-3xl text-ink">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
          <Link href="/teaching" className="text-sm font-semibold text-ink underline">
            Explore teaching portfolio
          </Link>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Tools and Resources"
            title="Software, databases, and web servers"
            description="A complete catalog of software tools and research web resources developed or maintained."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-card border border-soft rounded-2xl p-6 shadow-soft">
              <div className="text-xs uppercase tracking-[0.3em] text-muted">Software Tools</div>
              <div className="font-display text-3xl text-ink mt-2">{tools.software.length}</div>
              <p className="text-sm text-muted mt-2">Packages supporting RNA analysis, variant detection, and deep learning.</p>
            </div>
            <div className="bg-card border border-soft rounded-2xl p-6 shadow-soft">
              <div className="text-xs uppercase tracking-[0.3em] text-muted">Web Resources</div>
              <div className="font-display text-3xl text-ink mt-2">{tools.webResources.length}</div>
              <p className="text-sm text-muted mt-2">Databases and web servers covering host-pathogen interactions and genomic markers.</p>
            </div>
          </div>
          <Link href="/tools" className="text-sm font-semibold text-ink underline">
            View all tools and web resources
          </Link>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Latest Writing"
            title="Notes from the lab"
            description="Insights on reproducible bioinformatics, AI in genomics, and multi-omics strategy."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredBlogs.map((post) => (
              <div key={post.slug} className="bg-card border border-soft rounded-2xl p-6 shadow-soft">
                <div className="text-xs uppercase tracking-[0.3em] text-muted">{post.date}</div>
                <h3 className="font-display text-xl text-ink mt-3">{post.title}</h3>
                <p className="text-sm text-muted mt-3">{post.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/80 border border-soft text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-ink underline mt-4 inline-flex">
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
