export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/private/",
    },
    sitemap: "https://diecezko.cz/sitemap.xml",
  };
}
