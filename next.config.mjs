/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads-ssl.webflow.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;