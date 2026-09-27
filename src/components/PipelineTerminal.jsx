"use client";

import { useState } from "react";

const PIPELINES = [
  {
    id: "metanextviro",
    name: "MetaNextViro",
    subtitle: "Nextflow DSL2 Viral Metagenomics & Surveillance",
    badge: "Nextflow DSL2 • Slurm • Singularity",
    github: "https://github.com/navduhan/metanextviro",
    description:
      "A modular Nextflow pipeline for virus identification, taxonomic classification, host depletion, de novo assembly, viral genome quality assessment, and coverage analysis across local, containerized, and HPC environments.",
    command: `# Run MetaNextViro on high-performance compute cluster with Slurm & Singularity
nextflow run navduhan/metanextviro \\
  -profile slurm,singularity \\
  --input samplesheet_avian_swabs.csv \\
  --reference h5n1_clade2344b_reference.fasta \\
  --host_depletion true \\
  --host_index /hpc/ref/host_indices/gallus_gallus \\
  --kraken2_db /hpc/ref/kraken2_viral_2026 \\
  --min_depth 100 \\
  --call_isnv true \\
  --min_var_freq 0.05 \\
  --outdir ./results_hpai_surveillance`,
    outputs: [
      "consensus_genomes.fasta (iSNV-aware viral consensus)",
      "taxonomic_abundance_report.html (interactive Krona / Pavian)",
      "coverage_depth_qc.pdf (per-segment genome breadth & depth)",
      "multiqc_report.html (aggregate read quality & host depletion %)",
    ],
  },
  {
    id: "pyvirseq",
    name: "PyVirSeq",
    subtitle: "Viral Read Classification & Consensus Generator",
    badge: "Python 3.10+ • CLI • PyPI",
    github: "https://github.com/navduhan/pyvirseq",
    description:
      "A Python CLI package for reference-guided consensus generation, targeted amplicon sequencing, intra-host variant calling (iSNVs), and open-ended virome discovery with native SLURM cluster submission.",
    command: `# Assemble AMPV-A / AMPV-B targeted amplicons & detect intra-host variation
pyvirseq consensus \\
  --r1 diagnostic_sample_R1.fastq.gz \\
  --r2 diagnostic_sample_R2.fastq.gz \\
  --reference ampv_lineage_b_full_cds.fasta \\
  --min-depth 50 \\
  --min-var-freq 0.05 \\
  --call-indels \\
  --threads 16 \\
  --slurm-partition adrdl_hpc \\
  --output ./ampv_consensus_assembly.fasta`,
    outputs: [
      "ampv_consensus_assembly.fasta (validated full-length CDS)",
      "intrahost_variants.vcf (5%+ frequency iSNVs with amino-acid impact)",
      "amplicon_coverage_matrix.tsv (primer tile performance metrics)",
    ],
  },
  {
    id: "pyseqrna",
    name: "pySeqRNA",
    subtitle: "End-to-End High-Throughput RNA-Seq Analysis",
    badge: "Python • STAR • DESeq2 • 500+ Users",
    github: "https://github.com/navduhan/pyseqrna",
    description:
      "An automated Python package for complete next-generation RNA sequencing data analysis from adapter trimming and splice-aware alignment to differential gene expression, clustering, and pathway enrichment.",
    command: `# Execute automated RNA-Seq differential expression analysis
pyseqrna-run \\
  --samples targets_infection_vs_mock.txt \\
  --genome /ref/genomes/host_bovine_ars_ucd1.fa \\
  --gtf /ref/annotations/host_bovine_genes.gtf \\
  --aligner star \\
  --de-tool deseq2 \\
  --padj-cutoff 0.05 \\
  --log2fc-cutoff 1.5 \\
  --threads 32 \\
  --generate-report`,
    outputs: [
      "differential_expression_results.csv (log2FC, p-adj, normalized counts)",
      "volcano_and_heatmap_plots.pdf (publication-ready SVG/PDF figures)",
      "pathway_enrichment_kegg_go.tsv (perturbed host biological processes)",
    ],
  },
  {
    id: "deepnec",
    name: "deepNEC 2.0",
    subtitle: "Alignment-Free Protein Language Model for Enzymes",
    badge: "Protein LLM • PyTorch • Briefings in Bioinfo",
    github: "https://github.com/usubioinfo/deepnec-2.0",
    description:
      "An alignment-free protein language model for hierarchical enzyme and EC classification across ten nitrogen-metabolism pathways and 24 terminal outputs with >95% accuracy.",
    command: `# Classify uncharacterized proteins across hierarchical enzyme classes
deepnec predict \\
  --fasta uncharacterized_microbial_proteome.fasta \\
  --model protein_language_hierarchical_v2 \\
  --device cuda:0 \\
  --confidence-threshold 0.95 \\
  --output enzyme_classifications.tsv \\
  --generate-tree-viz`,
    outputs: [
      "enzyme_classifications.tsv (Enzyme Commission numbers & confidence scores)",
      "hierarchical_pathway_mapping.json (ten nitrogen mineralization classes)",
      "protein_embeddings_tsne.pdf (high-dimensional latent space representation)",
    ],
  },
];

export default function PipelineTerminal() {
  const [activeTab, setActiveTab] = useState("metanextviro");
  const [copied, setCopied] = useState(false);

  const activePipeline = PIPELINES.find((p) => p.id === activeTab) || PIPELINES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activePipeline.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="card-colorful p-6 md:p-8 bg-white space-y-6 border-2 border-sky-200">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-100 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            REPRODUCIBLE COMPUTATIONAL INFRASTRUCTURE
          </div>
          <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 mt-1">
            Production Pipelines &amp; Command-Line Tools
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Containerized Nextflow DSL2 workflows and open Python packages built for high-throughput diagnostic clusters.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
          {PIPELINES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition ${
                activeTab === p.id
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pipeline Description Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-sky-50/60 p-4 rounded-xl border border-sky-100">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-display font-bold text-slate-900 text-base">
              {activePipeline.name}
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-white border border-sky-200 text-sky-800 font-semibold">
              {activePipeline.badge}
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
            {activePipeline.description}
          </p>
        </div>
        <a
          href={activePipeline.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 shrink-0 hover:underline"
        >
          <span>View on GitHub</span> &rarr;
        </a>
      </div>

      {/* Terminal View with Syntax Highlighting Look */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-[11px] text-slate-400 ml-2 font-mono">
              bash — hpc-cluster: ~/{activePipeline.id}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] transition"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Command</span>
              </>
            )}
          </button>
        </div>

        {/* Code Command */}
        <div className="p-5 text-emerald-400 overflow-x-auto leading-relaxed select-all">
          <pre className="font-mono">{activePipeline.command}</pre>
        </div>

        {/* Output Artifacts Bar */}
        <div className="px-5 py-3.5 bg-slate-900/90 border-t border-slate-800 text-[11px] space-y-1.5">
          <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
            Expected Quality-Controlled Output Artifacts:
          </div>
          <div className="grid sm:grid-cols-2 gap-2 text-cyan-300">
            {activePipeline.outputs.map((out, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="truncate">{out}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
