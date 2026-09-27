import Link from "next/link";
import { notFound } from "next/navigation";
import articles from "@/data/blog.json";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Dr. Naveen Duhan`,
    description: article.summary,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
        <Link href="/" className="hover:text-sky-700">Home</Link>
        <span>/</span>
        <Link href="/blog/" className="hover:text-sky-700">Technical Guides</Link>
        <span>/</span>
        <span className="text-slate-700 font-semibold truncate max-w-xs">{article.category}</span>
      </div>

      {/* Article Header */}
      <header className="space-y-5 border-b border-sky-100 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-bold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-slate-400">&bull;</span>
          <span className="text-slate-600 font-semibold">{article.date}</span>
          <span className="text-slate-400">&bull;</span>
          <span className="text-sky-700 font-bold bg-sky-50 px-2.5 py-0.5 rounded border border-sky-100">
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.18]">
          {article.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
          {article.lead}
        </p>

        {/* Author Bio Snippet */}
        <div className="flex items-center gap-3 pt-3">
          <img
            src="/naveen_duhan_portrait.png"
            alt="Dr. Naveen Duhan"
            className="w-12 h-12 rounded-full object-cover border-2 border-sky-300 ring-2 ring-sky-100 shadow-sm"
          />
          <div>
            <div className="font-display font-bold text-slate-900 text-sm">Dr. Naveen Duhan</div>
            <div className="text-xs text-slate-500 font-mono">
              ADRDL South Dakota State University &bull; Computational Biologist
            </div>
          </div>
        </div>
      </header>

      {/* Tags Bar */}
      <div className="flex flex-wrap gap-2 text-xs font-mono">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="bg-white border border-sky-200 text-sky-800 px-3 py-1 rounded-lg shadow-2xs font-semibold"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Article Body Sections */}
      <div className="space-y-10 text-slate-700 leading-relaxed text-base md:text-lg">
        {article.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight pt-2 border-t border-slate-100">
              {section.heading}
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              {section.content.split("\n\n").map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {section.code && (
              <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs my-4">
                <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400 text-[11px]">
                  <span>Source Implementation</span>
                  <span className="text-cyan-400">Production Code</span>
                </div>
                <pre className="p-5 text-emerald-400 overflow-x-auto leading-relaxed">
                  <code>{section.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Author Card & Back Button */}
      <div className="card-colorful p-8 bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40 space-y-4 border-2 border-sky-200 mt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/naveen_duhan_portrait.png"
              alt="Dr. Naveen Duhan"
              className="w-14 h-14 rounded-2xl object-cover border-2 border-sky-400 shadow-md ring-2 ring-sky-200"
            />
            <div>
              <h3 className="font-display font-bold text-slate-900 text-lg">Dr. Naveen Duhan</h3>
              <p className="text-xs text-sky-700 font-semibold">Animal Disease Research &amp; Diagnostic Lab</p>
              <p className="text-[11px] text-slate-500 font-mono">South Dakota State University</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/blog/" className="btn-gradient text-xs py-2 px-4 text-decoration-none">
              &larr; Back to All Guides
            </Link>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed border-t border-sky-100 pt-3">
          I direct computational genomics pipelines for real-time disease outbreaks, develop open-source bioinformatics
          software, and deploy public web resources accessed by over 24,000 researchers worldwide. Questions or ideas for
          collaboration? Feel free to reach out.
        </p>
      </div>
    </article>
  );
}
