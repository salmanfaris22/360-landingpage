import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Object form (no `search`) so Unsplash's ?q=&w= params are allowed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
