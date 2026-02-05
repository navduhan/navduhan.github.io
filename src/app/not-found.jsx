import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <div className="pt-20 pb-32">
      <Container className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Page Not Found</p>
        <h1 className="font-display text-4xl text-ink">This page does not exist yet.</h1>
        <p className="text-sm text-muted">Return to the homepage and continue exploring the research portfolio.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[color:var(--accent)] text-white font-semibold shadow-crisp"
        >
          Back to Home
        </Link>
      </Container>
    </div>
  );
}
