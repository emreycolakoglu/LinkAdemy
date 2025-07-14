import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    defaultLocale: "tr",
    locales: ["tr"],
    localeDetection: false,
  },
};

export default nextConfig;
