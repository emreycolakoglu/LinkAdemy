import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    defaultLocale: "tr",
    locales: ["tr"],
    localeDetection: false,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@core": path.resolve(__dirname, "../../packages/core"),
      "@db": path.resolve(
        __dirname,
        "../../packages/db/generated/prisma/index"
      ),
    };
    return config;
  },
  transpilePackages: ["@core", "@db"],
};

export default nextConfig;
