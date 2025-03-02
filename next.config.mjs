/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static site export
    images: {
      unoptimized: true, // Required for GitHub Pages to handle images correctly
    },
    basePath: "/navduhan.github.io", // Replace with your GitHub repo name
    assetPrefix: "/navduhan.gihub.io", // Required for correct asset loading
  };
  
  module.exports = nextConfig;