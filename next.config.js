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
  },
  reactStrictMode: true,
}

module.exports = nextConfig