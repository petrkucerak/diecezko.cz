/** @type {import('next').NextConfig} */
const runtimeCaching = require("./custom-cache");
const withPWA = require("@ducanh2912/next-pwa").default({
  disable: process.env.NODE_ENV === "development",
  register: true,
  cacheStartUrl: true,
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  swcMinify: true,
  dest: "public",
  skipWaiting: true,
  runtimeCaching: runtimeCaching,
  //...
});

module.exports = withPWA({
  reactStrictMode: true,
  output: "export",
});
