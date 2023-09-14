const homeUrl = "https://diecezko.cz/";
const title = "Diecézko";
const description =
  "Brožura pro Diecézní setkání mládeže v Hradci Králové pro rok 2023.";

export const meta = {
  description: description,
  applicationName: "Diecézko",
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
  colorScheme: "dark light",
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  manifest: `${homeUrl}manifest.json`,
  twitter: {
    card: "app",
    title: title,
    description: description,
    creator: "@petrkucerak",
    images: {
      url: `${homeUrl}og.png`,
      alt: "Logo diecézka",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
  appLinks: {
    ios: {
      url: "https://nextjs.org/ios",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      app_name: "app_name_android",
    },
    web: {
      url: "https://nextjs.org/web",
      should_fallback: true,
    },
  },
  assets: [`${homeUrl}assets`],
  category: "non-profit",
};
