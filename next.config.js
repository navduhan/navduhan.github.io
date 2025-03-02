/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static site export
    images: {
      unoptimized: true, // Required for GitHub Pages to handle images correctly
    },
    basePath: "/navduhan.github.io", // Replace with your GitHub repo name
    assetPrefix: "/navduhan.gihub.io", // Required for correct asset loading
    target: 'server', // or remove this line if you're using the default server mode
  };
// next.config.js
module.exports = {
  exportTrailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/api/scholar',
        destination: '/api/scholar',  // Handle API differently
      },
    ];
  },
};
  module.exports = {
    exportTrailingSlash: true,
    async redirects() {
      return [
        {
          source: '/api/scholar',
          destination: '/api/scholar',  // Redirect or handle API differently
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;