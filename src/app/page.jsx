import Link from "next/link";
import profile from "@/data/profile.json";
import grants from "@/data/grants.json";
import articles from "@/data/blog.json";
import teaching from "@/data/teaching.json";

export default function HomePage() {
  const featuredGrant = grants.find((g) => g.highlight) || grants[0];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-12 gap-10 items-center pt-2">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#138808]" />
            Computational Biologist &bull; ADRDL South Dakota State University
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Predictive genomics of viral emergence &amp; host response using{" "}
            <span className="hero-gradient-text">machine learning</span> &amp; scalable web systems.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            I develop computational methods for genomic and transcriptomic analysis, sequence-based machine learning,
            and molecular interactomes. At South Dakota State University's Animal Disease Research and Diagnostic
            Laboratory (ADRDL), I lead computational genomics for surveillance and host diagnostics, directing bioinformatics
            infrastructure for emerging viral pathogens and respiratory disease outbreaks.
          </p>

          {/* Quick Credentials Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-white border border-sky-100 text-slate-700 font-semibold shadow-xs">
              🎓 Ph.D. Dec 2024 &bull; Utah State University
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-sky-100 text-slate-700 font-semibold shadow-xs">
              🏢 ADRDL Research Associate III
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[#138808] font-semibold shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#138808]" />
              $1.95M Awarded Grant Portfolio
            </span>
          </div>
        </div>

        {/* Hero Metric & Portrait Card */}
        <div className="lg:col-span-4">
          <div className="p-7 rounded-2xl bg-gradient-to-br from-white via-sky-50/60 to-blue-50/80 border border-sky-200 shadow-xl shadow-sky-500/10 space-y-5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-sky-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4">
              <img
                src="/naveen_duhan_portrait.png"
                alt="Dr. Naveen Duhan"
                className="w-16 h-16 rounded-2xl object-cover shadow-lg shadow-sky-500/25 border-2 border-white ring-2 ring-sky-300"
              />
              <div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Dr. Naveen Duhan</h3>
                <p className="text-xs text-sky-700 font-semibold">Animal Disease Research &amp; Diagnostic Lab</p>
                <p className="text-[11px] text-slate-500 font-mono">naveen.duhan@sdstate.edu</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-sky-100 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Awarded Research Funding</span>
                <span className="font-bold text-sky-800 bg-sky-100/70 px-2 py-0.5 rounded font-mono-nums">
                  {profile.metrics.grantsFunding}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Global Web Server Reach</span>
                <span className="font-bold text-cyan-800 bg-cyan-100/70 px-2 py-0.5 rounded font-mono-nums">
                  {profile.metrics.globalUsers} Users
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Peer-Reviewed Papers</span>
                <span className="font-bold text-indigo-800 bg-indigo-100/70 px-2 py-0.5 rounded font-mono-nums">
                  {profile.metrics.publications} Works
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Software &amp; Web Resources</span>
                <span className="font-bold text-[#138808] bg-emerald-50 px-2 py-0.5 rounded font-mono-nums">
                  9 Packages &bull; 19 Servers
                </span>
              </div>
            </div>

            <Link
              href="/research-grants/"
              className="w-full py-2.5 rounded-xl bg-white hover:bg-sky-50 text-sky-700 border border-sky-300 font-semibold text-xs transition flex items-center justify-center gap-1.5 shadow-xs text-decoration-none"
            >
              <span>Explore Four Research Pillars</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED AWARD BANNER (USDA-APHIS Interactome Grant) */}
      <section className="banner-gradient rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-300/40 text-cyan-200 text-xs font-mono font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ff671f] shadow-xs shadow-orange-500" />
              Featured Award &bull; {featuredGrant.period}
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-snug">
              Co-PI on <span className="text-[#ff944d] font-extrabold">{featuredGrant.amount}</span>{" "}
              {featuredGrant.agency} Poultry-HPAI Interactome Award
            </h2>
            <p className="text-sky-100 text-sm md:text-base leading-relaxed max-w-2xl">
              {featuredGrant.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-cyan-100">
              {featuredGrant.tags.map((tag) => (
                <span key={tag} className="bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3 justify-center items-start md:items-end">
            <Link href="/research-grants/" className="btn-saffron text-sm text-decoration-none">
              <span>View All $1.95M Grants</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <span className="text-xs text-sky-200 font-mono">Co-I on USDA-NIFA ($500K) &amp; FFAR ($300K)</span>
          </div>
        </div>
      </section>

      {/* FOUR SCIENTIFIC RESEARCH PILLARS */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sky-100 pb-3 gap-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
              <span className="w-2.5 h-1 rounded bg-sky-500" />
              Research Program &bull; Four Scientific Pillars
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mt-1">
              Host–Pathogen Genomics &amp; Predictive Interactomes
            </h2>
          </div>
          <Link
            href="/research-grants/"
            className="text-xs font-mono font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 hover:underline"
          >
            <span>Explore Four Scientific Pillars</span> &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pillar 1 */}
          <div className="card-colorful p-7 space-y-3.5 border-l-4 border-l-sky-500">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-mono font-bold">
                PILLAR 01
              </span>
              <span className="text-xs font-mono text-slate-400">pySeqRNA &bull; SegVira</span>
            </div>
            <h3 className="font-display font-bold text-slate-900 text-lg">
              Viral Surveillance &amp; Multi-Omics Discovery
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Investigates the relationship between viral genomic variation and host transcriptional responses during infection,
              reservoir maintenance, and cross-species spillover. Integrates targeted amplicon and metagenomic sequencing with host
              transcriptomics to resolve low-frequency intra-host single nucleotide variants (iSNVs) and quasispecies diversity.
            </p>
            <div className="text-xs font-mono text-sky-700 pt-2 flex flex-wrap gap-2">
              <span className="bg-sky-50 px-2 py-0.5 rounded border border-sky-100">Viral Surveillance</span>
              <span className="bg-sky-50 px-2 py-0.5 rounded border border-sky-100">Host Multi-Omics</span>
              <span className="bg-sky-50 px-2 py-0.5 rounded border border-sky-100">iSNV Profiling</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="card-colorful p-7 space-y-3.5 border-l-4 border-l-cyan-500">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded bg-cyan-100 text-cyan-800 text-xs font-mono font-bold">
                PILLAR 02
              </span>
              <span className="text-xs font-mono text-slate-400">deepNEC 2.0 &bull; deepHPI</span>
            </div>
            <h3 className="font-display font-bold text-slate-900 text-lg">
              Machine Learning &amp; Context-Aware AI for Interactions
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Develops multimodal machine learning architectures and protein language models that combine sequence representations,
              structural interfaces, and host-receptor orthology. Predicts continuous biophysical binding affinities (ΔΔG) and receptor
              specificity (including α-2,3 and α-2,6 sialic acids) to prioritize cross-species spillover risk.
            </p>
            <div className="text-xs font-mono text-teal-700 pt-2 flex flex-wrap gap-2">
              <span className="bg-teal-50 px-2 py-0.5 rounded border border-teal-100">Protein Language Models</span>
              <span className="bg-teal-50 px-2 py-0.5 rounded border border-teal-100">Continuous Affinities (ΔΔG)</span>
              <span className="bg-teal-50 px-2 py-0.5 rounded border border-teal-100">Spillover Forecasting</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="card-colorful p-7 space-y-3.5 border-l-4 border-l-indigo-500">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800 text-xs font-mono font-bold">
                PILLAR 03
              </span>
              <span className="text-xs font-mono text-slate-400">HuCoPIA &bull; Host Atlases</span>
            </div>
            <h3 className="font-display font-bold text-slate-900 text-lg">
              Comparative Systems Biology &amp; Host Immune Networks
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Investigates how sequence-divergent pathogens converge on shared host regulatory networks. Analyzes species-specific
              host co-factors (such as ANP32A/B) and viral disruption of conserved innate immune signaling pathways (RIG-I, MDA5,
              interferon cascades) across reservoir species and susceptible hosts.
            </p>
            <div className="text-xs font-mono text-indigo-700 pt-2 flex flex-wrap gap-2">
              <span className="bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">Comparative Interactomics</span>
              <span className="bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">Host Co-factors</span>
              <span className="bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">Innate Immunity</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="card-colorful p-7 space-y-3.5 border-l-4 border-l-[#ff671f]">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded bg-orange-100 text-[#e65100] text-xs font-mono font-bold">
                PILLAR 04
              </span>
              <span className="text-xs font-mono text-slate-400">Nextflow &bull; 19 Servers</span>
            </div>
            <h3 className="font-display font-bold text-slate-900 text-lg">
              Reproducible Software Architecture &amp; Public Infrastructure
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Translates algorithmic discoveries into production-grade pipelines and publicly accessible web infrastructure.
              Engineers containerized Nextflow DSL2 workflows (MetaNextViro) for high-performance computing clusters and maintains
              19 public web servers accessed by over 24,000 researchers across 140 countries.
            </p>
            <div className="text-xs font-mono text-[#e65100] pt-2 flex flex-wrap gap-2">
              <span className="bg-orange-50 px-2 py-0.5 rounded border border-orange-200">Nextflow DSL2 Workflows</span>
              <span className="bg-orange-50 px-2 py-0.5 rounded border border-orange-200">19 Deployed Web Platforms</span>
              <span className="bg-orange-50 px-2 py-0.5 rounded border border-orange-200">24,000+ Global Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED METHODOLOGICAL TRAJECTORY & RESEARCH LEADERSHIP */}
      <section className="card-colorful p-8 md:p-12 space-y-6 bg-gradient-to-br from-white via-sky-50/40 to-blue-50/30">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
            <span className="w-2.5 h-1 rounded bg-sky-500" />
            Research Vision &bull; Methodological Trajectory &bull; Research Leadership
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
            From molecular classification to predictive host–pathogen interactomes.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-slate-600 leading-relaxed text-sm md:text-base">
          <div className="space-y-4">
            <p>
              I have built an independent methodological trajectory spanning from sequence-level classification to proteome-scale
              host–pathogen interactomes. To resolve functional properties directly from sequence, I developed{" "}
              <strong className="text-slate-900 font-semibold">SNVguru</strong> for variant analysis (adopted by 50+ research
              groups worldwide). As first author of <strong className="text-slate-900 font-semibold">deepNEC</strong>, I conceived
              and developed an alignment-free architecture achieving &gt;95% accuracy in classifying metabolic enzymes, establishing
              the deep learning foundation to predict viral variant effects in host cellular contexts.
            </p>
            <p>
              I next expanded this foundation to transcriptomics and interactomics. To integrate expression dynamics with interactome
              networks, I developed <strong className="text-slate-900 font-semibold">pySeqRNA</strong> (500+ users), and as first
              author of <strong className="text-slate-900 font-semibold">HuCoPIA</strong>, conceived a coronavirus interactome atlas
              spanning viral families. For <strong className="text-slate-900 font-semibold">deepHPI</strong>, I designed feature
              extraction and modeling pipelines achieving AUROC &gt; 0.90, part of 19 deployed web servers accessed by &gt;24,000
              researchers across 140 countries.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              At South Dakota State University's Animal Disease Research and Diagnostic Laboratory (ADRDL), I translated these
              capabilities into pathogen surveillance and research leadership. To track rapidly evolving viruses during outbreaks,
              I led computational genomics for our 2026 targeted amplicon sequencing study of 91 avian metapneumovirus (AMPV) genomes
              as first and co-corresponding author, and co-authored studies on PRRSV-2 diversity.
            </p>
            <div className="border-l-2 border-sky-500 pl-4 py-2 bg-sky-50/70 rounded-r-lg text-slate-800 text-xs md:text-sm font-medium">
              "My research program develops computational methods to understand how genomic variation and host regulatory
              networks shape infection outcomes, cross-species spillover, and disease pathogenesis. A central question is how
              cellular context and molecular networks explain differences in virulence and phenotype that sequence alone cannot predict."
            </div>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono font-bold">
              <Link href="/research-grants/" className="text-sky-700 hover:text-sky-900 underline underline-offset-4">
                View Awarded Grants ($1.95M) &rarr;
              </Link>
              <Link href="/software-tools/" className="text-teal-700 hover:text-teal-900 underline underline-offset-4">
                Explore Software &amp; 19 Web Servers &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* BIOINFORMATICS TECHNICAL GUIDES & METHODOLOGICAL INSIGHTS */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sky-100 pb-3 gap-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
              <span className="w-2.5 h-1 rounded bg-[#ff671f]" />
              Bioinformatics Technical Guides &bull; Hands-on Protocols
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mt-1">
              Methodological Deep Dives &amp; Computational Insights
            </h2>
          </div>
          <Link
            href="/blog/"
            className="text-xs font-mono font-bold text-[#e65100] hover:text-[#b23b00] flex items-center gap-1 hover:underline"
          >
            <span>Browse All {articles.length} Technical Guides</span> &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <div
              key={article.slug}
              className="card-colorful p-6 flex flex-col justify-between space-y-4 hover:border-sky-300 transition group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-800 font-bold border border-sky-100">
                    {article.category}
                  </span>
                  <span className="text-slate-400 font-medium">{article.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base leading-snug group-hover:text-sky-700 transition">
                  <Link href={`/blog/${article.slug}/`} className="text-decoration-none text-current">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-500">
                  {article.tags.slice(0, 2).map((t) => (
                    <span key={t} className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                      #{t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${article.slug}/`}
                  className="text-xs font-mono font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 group-hover:translate-x-0.5 transition"
                >
                  <span>Read</span> &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEACHING, COURSEWORK & COMPUTATIONAL MENTORING */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sky-100 pb-3 gap-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
              <span className="w-2.5 h-1 rounded bg-[#138808]" />
              Pedagogy &amp; Education &bull; 7 Formal University Curricula
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mt-1">
              Teaching, Coursework &amp; Computational Mentoring
            </h2>
          </div>
          <Link
            href="/teaching/"
            className="text-xs font-mono font-bold text-[#138808] hover:text-[#0d6006] flex items-center gap-1 hover:underline"
          >
            <span>Explore Full Teaching Dossier</span> &rarr;
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Core Courses Card */}
          <div className="lg:col-span-8 card-colorful p-7 space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-slate-900 text-base">
                Featured University Curricula
              </span>
              <span className="text-xs font-mono text-slate-400">USU &bull; PAU</span>
            </div>

            <div className="space-y-4">
              {teaching.courses.slice(0, 3).map((course, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gradient-to-r from-sky-50/60 to-white border border-sky-100/90 space-y-1.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-mono font-bold">
                      {course.code}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {course.institution} &bull; {course.term}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">
                    {course.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <Link
                href="/teaching/"
                className="text-xs font-mono font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 hover:underline"
              >
                <span>View all 7 courses, workshops, and syllabi</span> &rarr;
              </Link>
            </div>
          </div>

          {/* Mentoring & Philosophy Card */}
          <div className="lg:col-span-4 card-colorful p-7 flex flex-col justify-between space-y-5 bg-gradient-to-br from-white via-emerald-50/30 to-sky-50/40 border-2 border-emerald-100">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/70 text-[#138808] text-xs font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#138808]" />
                Pedagogical Philosophy
              </div>
              <h3 className="font-display font-bold text-slate-900 text-base leading-snug">
                Terminal-First Learning &amp; Rigorous Trainee Ownership
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {teaching.philosophy.summary}
              </p>

              <div className="space-y-2 pt-2 border-t border-emerald-100/80 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Direct Trainees Mentored</span>
                  <span className="font-bold text-slate-900">18+ Scholars</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Formal Curricula</span>
                  <span className="font-bold text-slate-900">7 University Courses</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Hands-on Workshops</span>
                  <span className="font-bold text-[#138808]">Linux &bull; NGS &bull; ML</span>
                </div>
              </div>
            </div>

            <Link
              href="/teaching/"
              className="w-full py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-[#138808] border border-emerald-300 font-semibold text-xs transition flex items-center justify-center gap-1.5 shadow-xs text-decoration-none mt-4"
            >
              <span>Explore Teaching Dossier</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
