import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Naveen Duhan",
    template: "%s | Naveen Duhan"
  },
  description: "Bioinformatician and computational biologist focused on AI-driven discovery and multi-omics systems biology.",
  metadataBase: new URL("https://navduhan.github.io")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="blue">
      <body className="text-ink">
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
