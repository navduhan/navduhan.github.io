import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

import { Montserrat } from "next/font/google";

// Load the Montserrat font with the variable font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont", // This creates a CSS custom property for the font
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Head>
            <title>Naveen Duhan</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && <GoogleAnalytics />}
          <main
            className={`${montserrat.variable} font-sans w-full min-h-screen`} // Apply the variable font here
          >
            <NavBar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}