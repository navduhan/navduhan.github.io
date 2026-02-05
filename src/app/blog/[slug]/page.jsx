import { notFound } from "next/navigation";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import blogs from "@/data/blog.json";

export const generateStaticParams = async () => {
  return blogs.map((post) => ({ slug: post.slug }));
};

export const metadata = {
  title: "Blog"
};

export default function BlogPost({ params }) {
  const post = blogs.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pb-20 pt-12">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow={post.date}
          title={post.title}
          description={post.summary}
        />
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/80 border border-soft text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-5 text-muted">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </div>
  );
}
