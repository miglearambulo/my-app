const isProduction = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProduction ? '/my-app/' : '',
  basePath: isProduction ? '/my-app' : '',
  output: 'export',
}

export default nextConfig