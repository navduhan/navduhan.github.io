import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import teaching from "@/data/teaching.json";

export const metadata = {
  title: "Teaching"
};

export default function TeachingPage() {
  return (
    <div className="space-y-20 pb-20 pt-12">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Teaching"
          title="Teaching philosophy and mentorship"
          description="A commitment to interdisciplinary training in bioinformatics, computational biology, and data-driven discovery."
        />
        <div className="grid gap-6 md:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4 text-muted">
            {teaching.philosophy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="grid gap-4">
            {teaching.stats.map((stat) => (
              <div key={stat.label} className="bg-card border border-soft rounded-2xl p-4 shadow-soft text-center">
                <div className="font-display text-2xl text-ink">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Teaching Experience"
          title="Courses taught across institutions"
          description="Graduate and undergraduate coursework spanning bioinformatics, genomics, and computational biology."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
            <h3 className="font-display text-xl text-ink">US Teaching Experience</h3>
            <div className="mt-4 space-y-4">
              {teaching.experience.us.map((entry) => (
                <div key={entry.institution} className="border border-soft rounded-2xl p-4 bg-white/70">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-ink">{entry.institution}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted">{entry.years}</span>
                  </div>
                  <p className="text-xs text-muted mt-1">{entry.location}</p>
                  <div className="mt-3 space-y-2 text-sm text-muted">
                    {entry.courses.map((course) => (
                      <div key={course.code}>{course.code} - {course.title}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
            <h3 className="font-display text-xl text-ink">Punjab Agricultural University</h3>
            <p className="text-xs text-muted mt-2">{teaching.experience.india.location} • {teaching.experience.india.years}</p>
            <div className="mt-4 space-y-4 text-sm text-muted">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted">Graduate Courses</div>
                <div className="mt-2 space-y-1">
                  {teaching.experience.india.graduateCourses.map((course) => (
                    <div key={course.code}>{course.code} - {course.title}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted">Undergraduate Courses</div>
                <div className="mt-2 space-y-1">
                  {teaching.experience.india.undergraduateCourses.map((course) => (
                    <div key={course.code}>{course.code} - {course.title}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Invited Talks"
          title="Workshops and invited lectures"
          description="Talks delivered across universities and research institutes on bioinformatics, genomics, and scientific computing."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {teaching.invitedTalks.map((talk) => (
            <div key={`${talk.date}-${talk.title}`} className="bg-card border border-soft rounded-2xl p-5 shadow-soft">
              <div className="text-xs uppercase tracking-[0.3em] text-muted">{talk.date}</div>
              <h3 className="font-display text-lg text-ink mt-2">{talk.title}</h3>
              <p className="text-sm text-muted mt-2">{talk.venue}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
