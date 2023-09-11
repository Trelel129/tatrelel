/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.jsx', 'api.ts', 'api.tsx'],
  swcMinify: true,

  // Uncoment to add domain whitelist
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
