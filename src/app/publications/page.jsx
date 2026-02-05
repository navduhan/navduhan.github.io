import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import PublicationsClient from "@/components/PublicationsClient";

export const metadata = {
  title: "Publications"
};

export default function PublicationsPage() {
  return (
    <div className="space-y-14 pb-20 pt-12">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Publications"
          title="Peer-reviewed research output"
          description="Complete list of articles across genomics, host-pathogen interaction modeling, and AI-enabled bioinformatics."
        />
        <PublicationsClient />
      </Container>
    </div>
  );
}
