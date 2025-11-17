/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite acessar o dev server a partir desse IP na rede
  allowedDevOrigins: ['25.52.57.100:3000'],

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
