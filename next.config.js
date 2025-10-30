/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-app',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  assetPrefix: '/my-app',
  trailingSlash: true,
}

module.exports = nextConfig