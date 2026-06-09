import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/tracks/ai-blockchain-infrastructure",
        destination: "/tracks/ai-employment-resilience",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
