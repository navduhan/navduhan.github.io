import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ToolsClient from "@/components/ToolsClient";

export const metadata = {
  title: "Tools"
};

export default function ToolsPage() {
  return (
    <div className="space-y-14 pb-20 pt-12">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Tools"
          title="Software packages and web resources"
          description="All bioinformatics tools, databases, and web servers developed or maintained across research programs."
        />
        <ToolsClient />
      </Container>
    </div>
  );
}
