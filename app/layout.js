import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diecézko",
  description:
    "Online brožura pro účely pravidleného diecezního setkání v Hradci Králové.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
