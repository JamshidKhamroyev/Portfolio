import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "*", protocol: "http"},
      { hostname: "*", protocol: "https"},
    ]
  },
};

export default nextConfig;
