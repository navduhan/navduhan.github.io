import grants from "@/data/grants.json";
import profile from "@/data/profile.json";

export const metadata = {
  title: "Research & Four Pillars — Dr. Naveen Duhan",
  description: "Four research pillars in computational biology: genomic surveillance, context-aware AI, comparative systems biology, and reproducible software infrastructure, supported by $1.95M in research funding.",
};

const FOUR_PILLARS = [
  {
    number: "01",
    title: "Viral Surveillance & Multi-Omics Discovery",
    tagline: "Tracking viral evolution, quasispecies, and intra-host variation at the animal–human interface",
    accentColor: "border-sky-500",
    badgeBg: "bg-sky-100 text-sky-800",
    coreTools: ["pySeqRNA", "SegVira", "MetaNextViro"],
    description:
      "Modern disease surveillance requires looking beyond consensus sequences to resolve the dynamic intra-host population structures of rapidly emerging pathogens. This pillar investigates the relationship between viral sequence variation and host transcriptional responses during infection and cross-species transmission events.",
    keyDirections: [
      "Targeted amplicon sequencing and whole-genome reconstruction of emerging avian influenza (clade 2.3.4.4b H5N1), avian metapneumovirus (AMPV-A and AMPV-B), and porcine reproductive and respiratory syndrome virus (PRRSV-2).",
      "Rigorous quantification of low-frequency intra-host single nucleotide variants (iSNVs ≥ 5%) and quasispecies diversity to capture adaptation before consensus fixation.",
      "Pairing high-throughput viral genomics with host RNA-Seq transcriptomics to model viral replication kinetics, local tissue load, and differential cellularity across infection timecourses.",
      "Deploying open Python and Cython analytical modules for automated variant calling, phylodynamic reconstruction, and diagnostic marker tracking.",
    ],
  },
  {
    number: "02",
    title: "Machine Learning & Context-Aware AI for Host–Pathogen Interactions",
    tagline: "Bridging sequence representations with structural biophysics to forecast spillover potential",
    accentColor: "border-cyan-500",
    badgeBg: "bg-cyan-100 text-cyan-800",
    coreTools: ["deepNEC 2.0", "deepHPI", "SKEMPI 2.0 / PDBbind"],
    description:
      "Sequence similarity alone often fails to explain why certain viral variants readily cross species barriers while closely related lineages remain restricted. This pillar develops multimodal machine learning architectures that combine sequence embeddings, structural interfaces, and host-receptor orthology to predict continuous interaction properties.",
    keyDirections: [
      "Predicting continuous biophysical binding affinities (ΔΔG and dissociation constants Kd) rather than static binary interaction labels, trained on curated structural interaction datasets.",
      "Quantitative sequence-to-affinity modeling of viral receptor-binding domains (e.g., influenza hemagglutinin) against α-2,3 and α-2,6 sialic acid glycan linkages from microarray profiles.",
      "Developing alignment-free protein language model architectures for functional annotation and enzymatic classification, as demonstrated in deepNEC with >95% accuracy.",
      "Enforcing strict homology-based test partitioning to prevent data leakage and ensure calibrated uncertainty estimation across out-of-distribution viral variants.",
    ],
  },
  {
    number: "03",
    title: "Comparative Systems Biology & Host Immune Networks",
    tagline: "Mapping host cellular perturbations and innate immune evasion across species",
    accentColor: "border-indigo-500",
    badgeBg: "bg-indigo-100 text-indigo-800",
    coreTools: ["HuCoPIA", "HuPoxNET", "Host Interactome Atlases"],
    description:
      "When a pathogen encounters a new host, differences in outcome are governed by how effectively viral proteins disrupt or co-opt the host's intracellular regulatory networks. This pillar uses comparative network biology to discover conserved immune vulnerabilities and explain species-specific virulence differences.",
    keyDirections: [
      "Comparative interactome modeling across reservoir species (wild aquatic birds, bats) and novel hosts (mammals, poultry, humans) to identify evolutionary divergence in host co-factors.",
      "Evaluating how viral polymerase adaptations alter physical interactions with host nuclear replication machinery (such as host ANP32A/B co-factors) across species.",
      "Analyzing how non-structural viral proteins (such as NS1 and PB1-F2) modulate pattern recognition receptors (RIG-I and MDA5) and dysregulate interferon-stimulated gene (ISG) cascades.",
      "Prioritizing prospective therapeutic targets by integrating network centrality perturbation with functional viability constraints from high-throughput CRISPR knockout screens.",
    ],
  },
  {
    number: "04",
    title: "Reproducible Software Architecture & Public Web Infrastructure",
    tagline: "Translating algorithmic research into production-grade pipelines and accessible global platforms",
    accentColor: "border-[#ff671f]",
    badgeBg: "bg-orange-100 text-[#e65100]",
    coreTools: ["Nextflow DSL2", "Docker / Singularity", "19 Deployed Web Servers"],
    description:
      "Scientific discovery is accelerated when complex computational workflows are accessible, reproducible, and easy to run across heterogeneous computing environments. This pillar focuses on architecting enterprise-grade pipelines and publicly deployed web portals that serve the international research community.",
    keyDirections: [
      "Engineering modular, containerized Nextflow DSL2 pipelines (MetaNextViro) with native support for Slurm HPC clusters, Docker, and Singularity runtime environments.",
      "Deploying and maintaining 19 interactive public web servers and databases accessed by more than 24,000 researchers across 140 countries (kaabil.net and bioinfo.usu.edu).",
      "Developing well-documented, open-source Python packages distributed via PyPI, GitHub, and Zenodo with checksum-verified model weights and versioned regression testing.",
      "Building evidence-linked portals that present raw sequences, variant calls, and machine learning predictions with auditable provenance and confidence intervals.",
    ],
  },
];

export default function ResearchGrantsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 border-b border-sky-100 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
          <span className="w-2.5 h-1 rounded bg-sky-500" />
          Research Vision &bull; Computational Biology &bull; $1.95M Awarded Grants
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Research Programs &amp; Four Scientific Pillars
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-4xl leading-relaxed">
          My computational biology laboratory investigates how viral genomic variation and host regulatory networks
          shape infection outcomes, cross-species spillover, and disease severity. By uniting high-throughput diagnostic
          sequencing with context-aware machine learning and scalable web engineering, our work bridges molecular
          mechanism with real-time epidemiological impact.
        </p>
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
            Each pillar operates as a cohesive, autonomous computational workstream while feeding data, models,
            and validation metrics into an integrated discovery engine.
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

      {/* SECTION 2: COMPETITIVE AWARDED GRANT PORTFOLIO ($1.95M) */}
      <section className="space-y-8 pt-4">
        <div className="space-y-2 border-b border-sky-100 pb-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-[#138808]" />
            Funding Portfolio &bull; $1,948,992 in Total Grants
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
            Awarded &amp; Active Research Grants
          </h2>
          <p className="text-slate-600 text-sm max-w-3xl">
            Federal and foundation awards supporting pathogen genomic surveillance, host interactomics, and
            rapid outbreak intervention across poultry and livestock systems.
          </p>
        </div>

        <div className="space-y-6">
          {grants.map((grant) => {
            const isAphis = grant.agency.includes("APHIS");
            const isNifa = grant.agency.includes("NIFA");

            const borderClass = isAphis
              ? "border-l-sky-600"
              : isNifa
              ? "border-l-emerald-600"
              : "border-l-[#ff671f]";

            const badgeBg = isAphis
              ? "bg-sky-100 text-sky-800"
              : isNifa
              ? "bg-emerald-100 text-emerald-800"
              : "bg-orange-50 text-[#e65100] border border-orange-200";

            const amountColor = isAphis
              ? "text-sky-800"
              : isNifa
              ? "text-emerald-800"
              : "text-[#ff671f]";

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

      {/* SECTION 3: COLLABORATIVE PHILOSOPHY & SCIENTIFIC HORIZONS */}
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
            samples and biological reality. By anchoring our computational pipelines directly in diagnostic workflows
            at South Dakota State University's ADRDL, our tools are tested against high-throughput real-world sequencing
            runs rather than idealized theoretical datasets.
          </p>
          <p>
            Whether uncovering novel zoonotic spillover markers, building containerized Nextflow pipelines for high-performance
            clusters, or deploying accessible web servers for global scientists, my laboratory is committed to open, reproducible,
            and interdisciplinary computational science.
          </p>
        </div>
        <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
          <a
            href="/software-tools/"
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition flex items-center gap-1.5"
          >
            <span>Explore 9 Packages &amp; 19 Web Servers</span> &rarr;
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
