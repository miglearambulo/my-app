/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for GitHub Pages
  ...(process.env.GITHUB_PAGES === 'true' && {
    output: 'export',
    basePath: '/my-app',
    assetPrefix: '/my-app',
    images: { unoptimized: true },
  }),
  
  // Default config for Vercel deployment
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig