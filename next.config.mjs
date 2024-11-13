/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com", "localhost","kevin-gg.vercel.app","media.freebibleimages.org"],
  },
  transpilePackages: ['three'],
  
};

export default nextConfig;



