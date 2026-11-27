/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Genera un servidor autocontenido para la imagen Docker de producción.
  output: 'standalone',
}

module.exports = nextConfig
