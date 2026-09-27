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
  title: "Dr. Naveen Duhan — Bioinformatician & Full-Stack Systems Architect",
  description: "Research Associate III in Bioinformatics at South Dakota State University ADRDL. Predictive genomics of viral emergence, AI enzyme classification, and scalable web software.",
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
