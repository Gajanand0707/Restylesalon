/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "site-assets.plasmic.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
