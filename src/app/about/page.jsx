import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import profile from "@/data/profile.json";
import experience from "@/data/experience.json";
import education from "@/data/education.json";
import awards from "@/data/awards.json";
import skills from "@/data/skills.json";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 pt-12">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="About"
          title="A bioinformatician building bridges between data and discovery"
          description="Researcher, mentor, and builder of computational tools for genomics, systems biology, and host-pathogen interactions."
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-muted">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
            <div className="text-xs uppercase tracking-[0.3em] text-muted">Focus Areas</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.highlights.map((item) => (
                <span key={item} className="px-3 py-2 rounded-full text-xs bg-white/80 border border-soft text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Spotlight"
          title={profile.awardSpotlight.title}
          description={profile.awardSpotlight.description}
        />
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${profile.awardSpotlight.videoId}`}
                title={profile.awardSpotlight.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
          <div className="bg-card border border-soft rounded-3xl p-6 shadow-soft space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-muted">Recognition</div>
            <h3 className="font-display text-2xl text-ink">{profile.awardSpotlight.title}</h3>
            <p className="text-sm text-muted">{profile.awardSpotlight.description}</p>
            <div className="text-sm text-muted">
              This recognition highlights research contributions in computational biology, bioinformatics tool development, and interdisciplinary collaboration.
            </div>
          </div>
        </div>
      </Container>

      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Experience"
          title="Professional journey"
          description="Research and academic roles spanning bioinformatics, AI-driven discovery, and computational biology."
        />
        <div className="grid gap-6">
          {experience.map((role) => (
            <div key={role.title} className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl text-ink">{role.title}</h3>
                  <a className="text-sm text-[color:var(--accent)]" href={role.companyLink} target="_blank" rel="noreferrer">
                    {role.company}
                  </a>
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted">{role.time}</div>
              </div>
              <p className="text-sm text-muted mt-3">{role.address}</p>
              <p className="text-sm text-muted mt-4">{role.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Education"
          title="Training and academic foundations"
          description="Degrees and formal training in bioinformatics, plant sciences, and biology."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div key={item.title} className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="text-sm text-muted mt-2">
                <a className="text-[color:var(--accent)]" href={item.universityUrl} target="_blank" rel="noreferrer">
                  {item.university}
                </a>
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted mt-3">{item.period}</p>
              <p className="text-sm text-muted mt-2">{item.location}</p>
              <p className="text-sm text-muted mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Awards"
          title="Recognition and honors"
          description="Selected awards acknowledging research excellence and contributions to bioinformatics."
        />
        <div className="grid gap-6 md:grid-cols-2">
        {awards.map((award) => (
          <div key={`${award.title}-${award.description}`} className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
            <h3 className="font-display text-xl text-ink">{award.title}</h3>
            <p className="text-sm text-muted mt-3">{award.description}</p>
          </div>
        ))}
        </div>
      </Container>

      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Skills"
          title="Technical expertise"
          description="A summary of the tools, programming languages, and scientific domains I work with."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title} className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
              <h3 className="font-display text-xl text-ink">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-2 rounded-full text-xs bg-white/80 border border-soft text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
