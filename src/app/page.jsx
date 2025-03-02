
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Naveen Duhan</title>
        <meta
          name="description"
          content="Naveen Duhan's Bioinformatician Website"
        />
      </Head>
     <main className=" flex flex-col items-center justify-center min-h-screen">
    
      <HeroSection />
    
    </main>
    </>
   
  );
}