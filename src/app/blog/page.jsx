import articles from "@/data/blog.json";
import BlogClient from "@/components/BlogClient";

export const metadata = {
  title: "Bioinformatics Blog & Technical Guides — Dr. Naveen Duhan",
  description: "Comprehensive technical guides on viral quasispecies (iSNVs), Nextflow DSL2 metagenomics pipelines, protein language models (deepNEC 2.0), and splice-aware RNA-Seq.",
};

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 border-b border-sky-100 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
          <span className="w-2.5 h-1 rounded bg-sky-500" />
          Technical Writing &bull; Methodological Guides &bull; Diagnostic Practice
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
          Bioinformatics Insights &amp; Technical Guides
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-4xl leading-relaxed">
          Comprehensive, production-tested deep dives into intra-host viral quasispecies calling, Nextflow DSL2
          pipeline architecture, protein language models for enzyme classification, and rigorous statistical
          modeling in high-throughput transcriptomics.
        </p>
      </div>

      {/* Interactive Blog Listing Component */}
      <BlogClient articles={articles} />
    </main>
  );
}
