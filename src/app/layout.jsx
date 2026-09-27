import "@/styles/globals.css";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Dr. Naveen Duhan — Computational Biologist & Bioinformatician",
  description: "Personal academic portfolio of Dr. Naveen Duhan, Ph.D. — Computational Biologist specializing in viral genomics, sequence-based machine learning, host-pathogen interactomics, and scalable bioinformatics software.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-[#f3f8fd]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
