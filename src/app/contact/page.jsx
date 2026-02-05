import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import profile from "@/data/profile.json";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div className="space-y-14 pb-20 pt-12">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let us collaborate on data-driven biology"
          description="Reach out for research collaborations, tool development, or speaking engagements."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="bg-card border border-soft rounded-3xl p-6 shadow-soft space-y-4">
              <h3 className="font-display text-2xl text-ink">Direct Contact</h3>
              <p className="text-sm text-muted">Email is the fastest way to reach me.</p>
              <a
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[color:var(--accent)] text-white font-semibold shadow-crisp"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
              <p className="text-sm text-muted">Phone: {profile.phone}</p>
              <a
                className="text-sm font-semibold text-ink underline"
                href={profile.cvPath}
              >
                Download CV
              </a>
            </div>
            <div className="bg-card border border-soft rounded-3xl p-6 shadow-soft">
              <h3 className="font-display text-2xl text-ink">Office Address</h3>
              <div className="text-sm text-muted mt-4 space-y-1">
                {profile.office.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.3em] text-muted">Website</div>
                <a className="text-sm text-ink underline" href={`https://${profile.website}`}>
                  {profile.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
