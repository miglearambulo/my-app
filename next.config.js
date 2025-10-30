/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-app',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/my-app/',
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig