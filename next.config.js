/** @type {import('next').NextConfig} */
const runtimeCaching = require("./custom-cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // scope: '/app',
  // sw: 'service-worker.js',
  runtimeCaching: runtimeCaching,
  cacheOnFrontEndNav: true,
  //...
});

module.exports = withPWA({
  reactStrictMode: true,
  output: "export",

  // Nextjs config
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
});
