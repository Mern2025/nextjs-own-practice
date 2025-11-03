/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icon2.cleanpng.com',
      },
      {
        hostname:"encrypted-tbn0.gstatic.com"
      },
      {
        hostname: "images.unsplash.com"
      },
      {
        hostname: "cdn.dummyjson.com"
      }
    ],
  },
};

export default nextConfig;
