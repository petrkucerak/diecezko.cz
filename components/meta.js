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
  colorScheme: "dark light",
  themeColor: color,
  manifest: `${homeUrl}manifest.json`,
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    shrinkToFit: "no",
    userScalable: "no",
    viewportFit: "cover",
  },
  assets: [`${homeUrl}assets`],
  category: "non-profit",
};
