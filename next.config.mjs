/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static site export
    images: {
      unoptimized: true, // Required for GitHub Pages to handle images correctly
    },

    basePath: ""
   
  };
// next.config.js

  
  export default nextConfig;