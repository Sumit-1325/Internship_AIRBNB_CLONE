import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server in .next/standalone so the Docker image
  // only ships the files the app needs (no full node_modules).
  output: "standalone",
};

export default nextConfig;
