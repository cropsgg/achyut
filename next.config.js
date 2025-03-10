/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static exports for easier deployment
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 