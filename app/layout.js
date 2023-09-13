import "./globals.css";

export const metadata = {
  title: "Diecézko",
  description:
    "Online brožura pro účely pravidleného diecezního setkání v Hradci Králové.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
