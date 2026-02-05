import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import blogs from "@/data/blog.json";

export const metadata = {
  title: "Blog"
};

const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

export default function BlogPage() {
  return (
    <div className="space-y-14 pb-20 pt-12">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Blog"
          title="Field notes from computational biology"
          description="Writing on reproducible bioinformatics, AI in genomics, and multi-omics systems biology."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {sortedBlogs.map((post) => (
            <div key={post.slug} className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
              <div className="text-xs uppercase tracking-[0.3em] text-muted">{post.date}</div>
              <h3 className="font-display text-2xl text-ink mt-3">{post.title}</h3>
              <p className="text-sm text-muted mt-3">{post.summary}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/80 border border-soft text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-ink underline mt-4 inline-flex">
                Read article
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
