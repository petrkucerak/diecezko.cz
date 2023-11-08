const homeUrl = "https://diecezko.cz/";
const title = "Diecézko";
const description =
  "Brožura pro Diecézní setkání mládeže v Hradci Králové pro rok 2023.";
const color = "#022960";

export const meta = {
  description: description,
  applicationName: title,
  keywords: [
    "diecézko",
    "diecézko hk",
    "diecézko hradec kralove",
    "diecézko hradec",
    "diecézko 2023",
    "diecezko",
    "diecezko hk",
    "diecezko hradec kralove",
    "diecezko hradec",
    "diecezko 2023",
    "diecézní setkání mládeže",
    "hradec králové",
  ],
  referrer: "origin-when-cross-origin",
  authors: [
    {
      name: "Petr Kučera",
      url: "https://petrkucerak.cz/",
    },
  ],
  colorScheme: "dark",
  themeColor: color,
  manifest: `${homeUrl}manifest.json`,
  viewport: {
    width: "device-width",
    initialScale: 1,
    // minimumScale: 1,
    shrinkToFit: "no",
    // userScalable: "no",
    viewportFit: "cover",
  },
  assets: [`${homeUrl}assets`],
  category: "non-profit",
  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: `${homeUrl}opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Diecézko 2023 v Hradci Králové",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@petrkucerak",
    images: [`${homeUrl}twitter-image.jpg`],
  },
  appleWebApp: {
    title: title,
    statusBarStyle: "black-translucent",
    startupImage: [
      "/assets/startup/apple-touch-startup-image-768x1004.png",
      {
        url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
};
