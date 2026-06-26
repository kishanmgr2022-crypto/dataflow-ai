import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/dataflow-ai" : "",
  assetPrefix: isProd ? "/dataflow-ai" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
