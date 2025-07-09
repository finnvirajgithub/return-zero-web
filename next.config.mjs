/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 required for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 👈 required for static export
  },
}

export default nextConfig
