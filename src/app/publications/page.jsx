import publications from "@/data/publications.json";
import PublicationsList from "@/components/PublicationsList";

export const metadata = {
  title: "Publications — Dr. Naveen Duhan",
  description: "Complete list of 34 peer-reviewed publications covering viral genomics, deep learning enzyme prediction, and host-pathogen interactomics.",
};

export default function PublicationsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <div className="space-y-3 border-b border-sky-100 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-800">
          <span className="w-2.5 h-1 rounded bg-sky-500" />
          Peer-Reviewed Research &bull; 34 Published Works &bull; 700+ Citations
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900">
          Publications &amp; Scientific Output
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Articles published in leading journals including <em>Briefings in Bioinformatics</em>, <em>Frontiers in Cellular &amp; Infection Microbiology</em>, <em>Pathogens</em>, <em>Viruses</em>, and <em>Planta</em>.
        </p>
      </div>

      {/* Publications Client with Filter & BibTeX */}
      <PublicationsList publications={publications} />
    </main>
  );
}
