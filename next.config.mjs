/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com", "localhost","kevin-gg.vercel.app","media.freebibleimages.org","lh5.googleusercontent.com","lh3.googleusercontent.com","lh4.googleusercontent.com","lh6.googleusercontent.com"],
  },
  transpilePackages: ['three'],
  
};

export default nextConfig;



