import grants from "@/data/grants.json";
import profile from "@/data/profile.json";

export const metadata = {
  title: "Research & Four Pillars — Dr. Naveen Duhan",
  description: "Four research pillars in computational biology: NGS and multi-omics, AI and machine learning, systems biology, and web servers and databases, supported by $2.27M in active research funding.",
};

const FOUR_PILLARS = [
  {
    number: "01",
    title: "NGS & Multi-Omics Analytics",
    tagline: "From raw reads to biological insight across viruses, crops, livestock, and human disease",
    accentColor: "border-sky-500",
    badgeBg: "bg-sky-100 text-sky-800",
    coreTools: ["pySeqRNA", "MetaNextViro", "miPyRNA", "SNVguru", "PyVirSeq"],
    description:
      "Sequencing data is abundant, but turning it into reproducible biological conclusions remains the bottleneck. This pillar develops and applies pipelines for RNA-Seq, small RNA, metagenomic, amplicon, and variant analysis, and integrates these layers into multi-omics views of how genotype shapes phenotype.",
    keyDirections: [
      "All-in-one transcriptomics workflows (pySeqRNA) that move from reads to annotated, publication-ready tables, including two-phase handling of unique and multi-mapped reads.",
      "Viral genomics: targeted amplicon and metagenomic sequencing of avian influenza, avian metapneumovirus, and PRRSV, with quantification of low-frequency intra-host variants (iSNVs) and quasispecies diversity.",
      "Plant and animal genomics: miRNA discovery and classification (miPyRNA), differential expression under drought, salt, heat, and pathogen stress in crops, and microsatellite and variant marker development.",
      "Integrating host and pathogen transcriptomes with variant, small RNA, and epigenomic data (ChIP-seq, Var-seq, dual RNA-seq) for multi-omics interpretation.",
    ],
  },
  {
    number: "02",
    title: "Artificial Intelligence & Machine Learning",
    tagline: "Sequence-based deep learning for annotation, interaction, and risk prediction",
    accentColor: "border-cyan-500",
    badgeBg: "bg-cyan-100 text-cyan-800",
    coreTools: ["deepNEC 2.0", "PRGminer", "MINpred", "RSLpred2", "AtSubP-2.0"],
    description:
      "Most genomes have far more sequence than experimental annotation. This pillar builds alignment-free deep learning and protein language model approaches that infer function, localization, and interaction properties directly from sequence, with benchmarking designed to avoid homology leakage.",
    keyDirections: [
      "Genome-wide feature annotation: enzyme classification (deepNEC, >95% accuracy), plant disease resistance genes (PRGminer), subcellular localization (AtSubP-2.0, RSLpred2), and mineral transporter prediction (MINpred).",
      "Protein language models and multimodal architectures that combine sequence embeddings, structural interfaces, and host-receptor orthology.",
      "Continuous binding affinity (ΔΔG) and receptor-specificity prediction, for example influenza hemagglutinin against α-2,3 and α-2,6 sialic acid linkages, to prioritize cross-species spillover risk.",
      "Homology-aware train/test partitioning and calibrated uncertainty so that reported performance holds for out-of-distribution sequences.",
    ],
  },
  {
    number: "03",
    title: "Systems Biology & Host–Pathogen Networks",
    tagline: "Interactomes, pathways, and regulatory networks across hosts, pathogens, and species",
    accentColor: "border-indigo-500",
    badgeBg: "bg-indigo-100 text-indigo-800",
    coreTools: ["deepHPI", "HuCoPIA", "HuPoxNET", "APinet", "GreeningDB"],
    description:
      "Disease outcomes arise from interacting molecular networks rather than single genes. This pillar models protein-protein interactions within and between species, and integrates them with expression, pathway, and regulatory data to explain susceptibility, resistance, and virulence.",
    keyDirections: [
      "Deep learning prediction of host-pathogen protein-protein interactions (deepHPI) and interactome atlases for human-coronavirus, human-monkeypox, citrus-greening, wheat-Karnal bunt, and cereal-pathogen systems.",
      "Comparative interactomics across reservoir and susceptible species, including host co-factors such as ANP32A/B and innate immune signaling (RIG-I, MDA5, interferon-stimulated genes).",
      "Network-level integration of transcriptomes, metabolic pathways, and gene regulatory networks to identify hub genes and candidate therapeutic or breeding targets.",
      "Prioritizing targets by combining network centrality with functional evidence such as CRISPR screens and mutant lines.",
    ],
  },
  {
    number: "04",
    title: "Web Servers, Databases & Reproducible Software",
    tagline: "Making methods and data usable by the wider research community",
    accentColor: "border-[#ff671f]",
    badgeBg: "bg-orange-100 text-[#e65100]",
    coreTools: ["13 Web Resources", "9 Software Packages", "Nextflow DSL2", "Docker / Singularity"],
    description:
      "A method only has impact if others can run it. This pillar delivers cost-effective prediction servers, curated databases, and containerized workflows, and maintains them for the long term. Public resources have been used by more than 11,000 researchers.",
    keyDirections: [
      "Curated databases: legumeSSRdb, citSATdb, ranchSATdb (microsatellite markers), GreeningDB, TritiKBdb, HuCoPIA, HuPoxNET (host-pathogen interactomes), and covidTracker.",
      "Prediction web servers for deepNEC, deepHPI, PRGminer, MINpred, AtSubP-2.0, and RSLpred2, hosted at kaabil.net and bioinfo.usu.edu.",
      "Containerized, portable pipelines (Nextflow DSL2, Slurm HPC, Docker, Singularity) such as MetaNextViro.",
      "Open-source Python packages on PyPI, GitHub, and Zenodo with versioned models, documentation, and regression tests, with results published in venues such as Nucleic Acids Research web server and database issues.",
    ],
  },
];

export default function ResearchGrantsPage() {
  const activeGrants = grants.filter((g) => g.status === "Awarded" || g.status === "Active");
  const submittedGrants = grants.filter((g) => g.status === "Submitted");

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 border-b border-sky-100 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
          <span className="w-2.5 h-1 rounded bg-sky-500" />
          Research Vision &bull; Computational Biology &bull; $2.27M Active Grants
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Research Programs &amp; Four Scientific Pillars
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-4xl leading-relaxed">
          My program turns sequencing data into biological understanding. I build NGS and multi-omics pipelines,
          sequence-based AI models, and systems-level network analyses, and I release them as public web servers and
          databases. Applications span viral pathogens, crops, livestock, and human disease.
        </p>

        {/* Domain Tags Strip */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
          <span className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider mr-1">Scientific Domains:</span>
          {[
            "NGS & Transcriptomics",
            "Multi-Omics Integration",
            "Deep Learning & AI",
            "Protein Language Models",
            "Systems Biology",
            "Host-Pathogen Interactomes",
            "Web Servers & Databases",
            "Viral Genomics",
            "Crop & Livestock Genomics"
          ].map((tag, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-sky-200 text-sky-800 font-medium shadow-2xs">
              #{tag.replace(/\s+/g, "")}
            </span>
          ))}
        </div>
      </div>

      {/* SECTION 1: DEEP EXPLANATION OF THE FOUR PILLARS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-800">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            Core Scientific Architecture
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
            The Four Pillars of My Research Program
          </h2>
          <p className="text-slate-600 text-sm max-w-3xl">
            Each pillar represents a fundamental thrust of my computational biology research program, operating synergistically
            while contributing algorithms, datasets, and predictive models to an integrated discovery engine.
          </p>
        </div>

        <div className="space-y-8">
          {FOUR_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className={`card-colorful p-8 md:p-10 border-l-6 ${pillar.accentColor} bg-white space-y-5`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-0.5 rounded font-mono text-xs font-bold ${pillar.badgeBg}`}>
                      PILLAR {pillar.number}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {pillar.coreTools.join(" • ")}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                </div>
                <div className="text-xs font-mono text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100 shrink-0">
                  {pillar.tagline}
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {pillar.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                  Key Research Directions &amp; Methodologies:
                </h4>
                <div className="grid md:grid-cols-2 gap-3 pt-1">
                  {pillar.keyDirections.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: COMPETITIVE AWARDED & ACTIVE GRANT PORTFOLIO ($2.27M) */}
      <section className="space-y-8 pt-4">
        <div className="space-y-2 border-b border-sky-100 pb-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-[#138808]" />
            Active Funding Portfolio &bull; $2,269,435 in Awarded Grants
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
            Awarded &amp; Active Research Grants
          </h2>
          <p className="text-slate-600 text-sm max-w-3xl">
            Federal and foundation awards supporting pathogen genomic surveillance, host-pathogen interactomics,
            and rapid outbreak diagnostic intervention across agricultural and biological systems.
          </p>
        </div>

        <div className="space-y-6">
          {activeGrants.map((grant) => {
            const isAphis = grant.agency.includes("APHIS");
            const borderClass = isAphis ? "border-l-sky-600" : "border-l-emerald-600";
            const badgeBg = isAphis ? "bg-sky-100 text-sky-800" : "bg-emerald-100 text-emerald-800";
            const amountColor = isAphis ? "text-sky-800" : "text-emerald-800";

            return (
              <div
                key={grant.id}
                className={`card-colorful p-8 border-l-6 ${borderClass} bg-white space-y-4`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className={`inline-block px-2.5 py-1 rounded font-mono text-xs font-bold mb-1 ${badgeBg}`}>
                      {grant.status.toUpperCase()} &bull; {grant.period} &bull; {grant.agency}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 leading-snug">
                      {grant.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700">
                      Investigator Role: <span className="text-sky-700 font-bold">{grant.role}</span>
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-2xl md:text-3xl font-mono font-extrabold font-mono-nums ${amountColor}`}>
                      {grant.amount}
                    </div>
                    {grant.subaward && (
                      <div className="text-xs text-slate-500 font-mono mt-0.5">{grant.subaward}</div>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {grant.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                  {grant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: SUBMITTED PROPOSALS & UNDER REVIEW */}
      {submittedGrants.length > 0 && (
        <section className="space-y-6 pt-4">
          <div className="space-y-2 border-b border-sky-100 pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Proposals in Pipeline &bull; $2,100,500 Under Review
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
              Submitted Proposals &amp; Grants Under Review
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl">
              Competitive research proposals submitted as Principal Investigator (PI) and Co-Investigator to USDA-AFRI
              and NIH R21 programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {submittedGrants.map((grant) => (
              <div
                key={grant.id}
                className="card-colorful p-6 border-l-4 border-l-amber-400 bg-white space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                      {grant.agency} &bull; {grant.role}
                    </span>
                    <span className="font-bold text-slate-800 font-mono text-sm">{grant.amount}</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base leading-snug">
                    {grant.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {grant.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 text-[11px] font-mono">
                  {grant.tags.map((tag) => (
                    <span key={tag} className="bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: COLLABORATIVE PHILOSOPHY & SCIENTIFIC HORIZONS */}
      <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 text-white space-y-6 border border-sky-800/50 shadow-xl">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Collaborative Horizons &bull; Computational Biology Direction
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
            Bridging High-Performance Computing with Diagnostic Reality
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-slate-300 text-sm md:text-base leading-relaxed">
          <p>
            Computational biology is at its best when algorithms are continually calibrated against real diagnostic
            samples and biological reality. By anchoring our computational pipelines directly in high-throughput sequencing
            workflows and active pathogen outbreak surveillance, our tools are tested against real-world biological complexity
            rather than idealized theoretical datasets.
          </p>
          <p>
            Whether uncovering novel zoonotic spillover markers, building containerized Nextflow pipelines for high-performance
            clusters, or deploying accessible web servers for global scientists, my program is committed to open, reproducible,
            and interdisciplinary computational science.
          </p>
        </div>
        <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
          <a
            href="/software-tools/"
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition flex items-center gap-1.5"
          >
            <span>Explore 9 Packages &amp; 13 Web Resources</span> &rarr;
          </a>
          <a
            href="/publications/"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sky-200 border border-white/15 font-bold transition flex items-center gap-1.5"
          >
            <span>Read 34 Peer-Reviewed Publications</span> &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
