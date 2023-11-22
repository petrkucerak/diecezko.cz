import { meta } from "../components/meta";

export default function manifest() {
  return {
    name: meta.applicationName,
    short_name: meta.applicationName,
    description: meta.description,
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#000",
    scope: "/",
    lang: "cs",
    theme_color: meta.themeColor,
    categories: [
      "education",
      "lifestyle",
      "magazines",
      "personalization",
      "social",
    ],
    icons: [
      { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
