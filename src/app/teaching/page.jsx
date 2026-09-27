import teaching from "@/data/teaching.json";

export const metadata = {
  title: "Teaching & Mentoring — Dr. Naveen Duhan",
  description: "University courses taught at Utah State University and Punjab Agricultural University, hands-on workshops in NGS and machine learning, and computational biology mentoring philosophy.",
};

export default function TeachingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 border-b border-sky-100 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
          <span className="w-2.5 h-1 rounded bg-sky-500" />
          Pedagogical Record &bull; University Courses &bull; Specialized Workshops
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Teaching, Coursework &amp; Mentoring
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-4xl leading-relaxed">
          I am committed to equipping life scientists with computational autonomy, command-line confidence, and
          rigorous algorithmic reasoning. My instructional career spans formal graduate and undergraduate university
          courses, intensive hands-on workshops, and individualized research mentorship.
        </p>
      </div>

      {/* SECTION 1: PEDAGOGICAL PHILOSOPHY */}
      <section className="card-colorful p-8 md:p-10 bg-gradient-to-br from-white via-sky-50/40 to-blue-50/30 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Educational Philosophy
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
            {teaching.philosophy.title}
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-3xl leading-relaxed">
            {teaching.philosophy.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-2">
          {teaching.philosophy.pillars.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-sky-100 space-y-2.5 shadow-xs">
              <div className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                Principle 0{idx + 1}
              </div>
              <h3 className="font-display font-bold text-slate-900 text-lg">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: FORMAL UNIVERSITY COURSES TAUGHT */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-sky-100 pb-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
            <span className="w-2 h-2 rounded-full bg-[#138808]" />
            Formal University Curricula (7 Courses)
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
            University Courses &amp; Teaching Experience
          </h2>
          <p className="text-slate-600 text-sm max-w-3xl">
            Instructional record across Utah State University and Punjab Agricultural University, spanning graduate
            and undergraduate lecture courses, computational laboratory sessions, and curriculum revision.
          </p>
        </div>

        <div className="space-y-6">
          {teaching.courses.map((course) => {
            const isUsu = course.institution.includes("Utah State");
            const badgeBg = isUsu
              ? "bg-sky-100 text-sky-800"
              : "bg-emerald-100 text-[#138808]";
            const borderAccent = isUsu ? "border-l-sky-600" : "border-l-emerald-600";

            return (
              <div
                key={course.code}
                className={`card-colorful p-8 border-l-6 ${borderAccent} bg-white space-y-4`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className={`px-2.5 py-0.5 rounded font-mono text-xs font-bold ${badgeBg}`}>
                        {course.code}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {course.level} &bull; {course.term}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                      {course.title}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-right shrink-0">
                    <div className="font-bold text-slate-900">{course.institution}</div>
                    <div className="text-sky-700 font-semibold">{course.role}</div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    Core Modules &amp; Competencies Taught:
                  </div>
                  <div className="grid md:grid-cols-2 gap-2.5">
                    {course.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CURRICULUM DEVELOPMENT FROM CV */}
      {teaching.curriculumDevelopment && (
        <section className="card-colorful p-6 md:p-8 bg-gradient-to-r from-emerald-50/70 via-sky-50/40 to-white border-l-6 border-l-emerald-600 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-2.5 py-0.5 rounded font-mono text-xs font-bold bg-emerald-100 text-emerald-800">
              National Curriculum Development
            </span>
            <span className="text-xs font-mono text-slate-500 font-medium">
              {teaching.curriculumDevelopment.period}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-display font-bold text-slate-900">
            {teaching.curriculumDevelopment.title}
          </h3>
          <p className="text-xs font-mono text-emerald-800 font-semibold">
            {teaching.curriculumDevelopment.institution}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed pt-1">
            {teaching.curriculumDevelopment.description}
          </p>
        </section>
      )}

      {/* SECTION 3: WORKSHOPS & TECHNICAL CAPACITY BUILDING */}
      <section className="space-y-6">
        <div className="space-y-2 border-b border-sky-100 pb-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-800">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Practical Workshops &bull; Workforce Development
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
            Hands-On Technical Workshops
          </h2>
          <p className="text-slate-600 text-sm max-w-3xl">
            Intensive boot camps designed to transition experimental researchers and veterinary diagnosticians into
            confident computational practitioners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {teaching.workshops.map((ws, idx) => (
            <div key={idx} className="card-colorful p-7 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-100 text-cyan-800 font-bold">
                    {ws.duration}
                  </span>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">
                  {ws.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {ws.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 font-mono text-xs">
                <div className="text-[11px] text-slate-500">Audience: {ws.audience}</div>
                <div className="text-sky-700 font-semibold text-[11px] truncate">
                  Stack: {ws.stack}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: LONGITUDINAL MENTORING TRAJECTORY */}
      <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 text-white space-y-6 border border-sky-800/50 shadow-xl">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Mentoring Track Record &bull; 2010 – Present
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            Longitudinal Research Mentorship
          </h2>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            I prioritize structured, evidence-based mentorship that fosters independent intellectual ownership,
            first-author publications, and lasting career progression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-2">
          {teaching.mentoring.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/10 border border-white/10 space-y-2 text-xs md:text-sm text-slate-200"
            >
              <div className="flex items-center justify-between font-mono text-cyan-300 text-xs">
                <span className="font-bold">{item.institution}</span>
                <span>{item.period}</span>
              </div>
              <div className="font-semibold text-white text-sm">{item.role}</div>
              <p className="text-slate-300 leading-relaxed pt-1">{item.details}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
