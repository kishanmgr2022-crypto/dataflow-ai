import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dataflow-ai",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
