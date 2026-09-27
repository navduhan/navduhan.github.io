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
              Computational Biologist &bull; Genomics, ML &amp; Systems Biology
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
      <div className="space-y-12 text-slate-700 leading-relaxed text-base md:text-lg">
        {article.sections.map((section, idx) => (
          <section key={idx} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight pt-4 border-t border-slate-200/80">
              {section.heading}
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              {section.content.split("\n\n").map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Scientific Callout Box */}
            {section.callout && (
              <div
                className={`p-5 rounded-2xl border-l-4 my-5 shadow-xs ${
                  section.callout.type === "warning"
                    ? "bg-amber-50/90 border-amber-500 text-amber-950"
                    : section.callout.type === "tip"
                    ? "bg-emerald-50/90 border-[#138808] text-emerald-950"
                    : "bg-sky-50/90 border-sky-600 text-sky-950"
                }`}
              >
                <div className="font-display font-bold text-sm flex items-center gap-2 mb-1.5">
                  <span className="text-base">
                    {section.callout.type === "warning" ? "⚠️" : section.callout.type === "tip" ? "💡" : "ℹ️"}
                  </span>
                  <span>{section.callout.title}</span>
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-slate-700">
                  {section.callout.text}
                </p>
              </div>
            )}

            {/* Mathematical Formula Container */}
            {section.formula && (
              <div className="my-6 p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 text-white border border-sky-800/80 shadow-md space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-wider">
                  <span className="text-cyan-300 uppercase">{section.formula.title || "Mathematical Formulation"}</span>
                  <span className="text-slate-400 bg-white/10 px-2 py-0.5 rounded">Statistical Model</span>
                </div>
                <div className="font-mono text-sm md:text-base text-amber-300 bg-black/50 px-4 py-3 rounded-xl border border-white/10 overflow-x-auto">
                  <code>{section.formula.latex}</code>
                </div>
                {section.formula.explanation && (
                  <p className="text-xs text-sky-100/90 leading-relaxed pt-1">
                    {section.formula.explanation}
                  </p>
                )}
              </div>
            )}

            {/* Benchmark / Comparison Table */}
            {section.table && (
              <div className="my-6 overflow-hidden rounded-2xl border border-sky-200/90 shadow-sm bg-white">
                {section.table.caption && (
                  <div className="bg-gradient-to-r from-sky-50 to-blue-50 px-4 py-3 text-xs font-mono font-bold text-sky-950 border-b border-sky-200/70 flex items-center justify-between">
                    <span>{section.table.caption}</span>
                    <span className="text-[11px] text-sky-700 font-semibold bg-white px-2 py-0.5 rounded border border-sky-200">
                      Empirical Benchmark
                    </span>
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-800 font-mono font-bold border-b border-sky-100">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3 whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-sky-50/40 transition">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-4 py-3 ${
                                cIdx === 0 ? "font-semibold text-slate-900 font-mono" : ""
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Source Code Block */}
            {section.code && (
              <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs my-5">
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

      {/* Protocol Checklist & Key Takeaways */}
      {article.takeaways && article.takeaways.length > 0 && (
        <div className="p-7 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-sky-50/60 to-white border-2 border-emerald-300 shadow-sm space-y-4 my-10">
          <div className="flex items-center gap-2.5 font-display font-bold text-slate-900 text-lg">
            <span className="w-3 h-3 rounded-full bg-[#138808] shadow-xs shadow-emerald-500" />
            <span>Key Methodological Takeaways &amp; Protocol Checklist</span>
          </div>
          <ul className="space-y-2.5 text-xs md:text-sm text-slate-700">
            {article.takeaways.map((item, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2.5">
                <span className="text-[#138808] font-bold text-base leading-none mt-0.5">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Literature Benchmarks & References */}
      {article.references && article.references.length > 0 && (
        <div className="pt-8 border-t-2 border-slate-200 space-y-4 font-mono text-xs">
          <h3 className="font-bold text-slate-800 uppercase tracking-wider text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-sky-600" />
            Literature Benchmarks &amp; Peer-Reviewed References
          </h3>
          <ol className="list-decimal pl-5 space-y-2.5 text-slate-600">
            {article.references.map((ref, rIdx) => (
              <li key={rIdx} className="leading-relaxed">
                <span className="text-slate-800 font-medium">{ref.citation}</span>
                {ref.doi && (
                  <a
                    href={ref.doi.startsWith("http") ? ref.doi : `https://doi.org/${ref.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:text-sky-900 ml-2 font-bold underline underline-offset-2"
                  >
                    [DOI &rarr;]
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}

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
              <p className="text-xs text-sky-700 font-semibold">Computational Biology &amp; Genomics</p>
              <p className="text-[11px] text-slate-500 font-mono">naveen.duhan@outlook.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/blog/" className="btn-gradient text-xs py-2 px-4 text-decoration-none">
              &larr; Back to All Guides
            </Link>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed border-t border-sky-100 pt-3">
          I develop computational genomics pipelines for viral surveillance, open-source bioinformatics
          software, and public web resources accessed by researchers worldwide.
        </p>
      </div>
    </article>
  );
}
