import tools from "@/data/tools.json";
import PipelineTerminal from "@/components/PipelineTerminal";
import WebServersCatalog from "@/components/WebServersCatalog";

export const metadata = {
  title: "Software & Web Servers — Dr. Naveen Duhan",
  description: "9 production bioinformatics software packages (Nextflow DSL2, Python CLIs, PyTorch LLMs) and 19 deployed web servers accessed by 24,000+ researchers in 140+ countries.",
};

export default function SoftwareToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-14">
      {/* Page Header */}
      <div className="space-y-3 border-b border-sky-100 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
          <span className="w-2.5 h-1 rounded bg-sky-500" />
          Full-Stack Bio-Computing &bull; 9 Software Packages &bull; 19 Deployed Web Platforms
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900">
          Software Architecture &amp; Web Infrastructure
        </h1>
        <p className="text-slate-600 max-w-3xl leading-relaxed">
          I engineer reproducible computational pipelines, high-performance command-line packages, and production
          databases that empower scientists worldwide to analyze complex omics data.
        </p>
      </div>

      {/* Production CLI & Nextflow Pipeline Terminal */}
      <PipelineTerminal />

      {/* Software Packages Catalog (9 Packages) */}
      <div className="space-y-6 pt-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-sky-100 pb-3">
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900">
              Production Software Packages (9)
            </h2>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Nextflow DSL2 pipelines, Python CLI utilities, Zenodo-checksummed models &amp; deep learning frameworks
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500">
            Open-Source on <span className="text-sky-700 font-bold">GitHub &bull; PyPI &bull; Zenodo</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.packages.map((pkg) => (
            <div key={pkg.name} className="card-colorful p-6 space-y-3.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-mono font-bold">
                    {pkg.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{pkg.version}</span>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pkg.summary}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 font-mono text-xs">
                <div className="text-sky-700 font-semibold text-[11px] truncate">
                  {pkg.stack}
                </div>
                <div className="flex items-center justify-between text-slate-500 pt-1">
                  <a
                    href={pkg.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-800 font-bold hover:underline"
                  >
                    GitHub Repository &rarr;
                  </a>
                  {pkg.doi && (
                    <span className="text-[10px] text-slate-400">
                      {pkg.doi.startsWith("10.") ? `DOI: ${pkg.doi}` : "Zenodo"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Authoritative 19 Deployed Web Servers Catalog */}
      <WebServersCatalog webServers={tools.webServers} />
    </main>
  );
}
