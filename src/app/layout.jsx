import "@/styles/globals.css";
import { Fraunces, Alegreya_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body"
});

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
      <body className={`${fraunces.variable} ${alegreya.variable} text-ink`}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
