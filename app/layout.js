import { meta } from "../components/meta";
import { SwitcherProvider } from "../lib/switcher-context";
import "./globals.css";

export const metadata = {
  title: "Diecézko",
  ...meta,
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body id="body" className={`bg-black`}>
        <SwitcherProvider>{children}</SwitcherProvider>
      </body>
    </html>
  );
}
