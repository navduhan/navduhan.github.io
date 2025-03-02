import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, GoogleScholarIcon, ResearchGateIcon, InstagramIcon } from "@/components/Icons"; // Ensure correct path

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <div className="w-full h-full bg-light px-8 py-6 md:px-32 dark:bg-dark flex flex-col md:flex-row items-center justify-between">
        <span className="mb-4 md:mb-0">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center mb-4 md:mb-0">
          {/* Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{" "}
          by {" "} */}
          <Link
            href="https://naveenduhan.com"
            className="underline underline-offset-2"
          >
            Naveen Duhan
          </Link>
        </div>

        {/* Social Icons Section (replaces Contact link) */}
        <div className="flex items-center space-x-6">
          <a href="https://github.com/navduhan" target="_blank" className="w-6">
            <GithubIcon />
          </a>

          <a href="https://linkedin.com/in/navduhan" target="_blank" className="w-6">
            <LinkedInIcon />
          </a>

          <a href="https://scholar.google.com/citations?user=kvf8JJQAAAAJ&hl=en" target="_blank" className="w-6">
            <GoogleScholarIcon />
          </a>

          <a href="https://www.researchgate.net/profile/Naveen-Duhan?ev=hdr_xprf" target="_blank" className="w-6">
            <ResearchGateIcon />
          </a>

          {/* <a href="https://instagram.com/freaky_nav" target="_blank" className="w-6">
            <InstagramIcon />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;