import type { Metadata, Viewport } from "next";
import { Great_Vibes, Playfair_Display, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-pf",
  display: "swap",
});

// CJK font: disable preload so Next doesn't try to inline the full glyph set.
const notoSerifJp = Noto_Serif_JP({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Wine Notes — Château Margaux 2018",
  description: "あなたのワイン日記",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Wine Notes",
  },
};

export const viewport: Viewport = {
  themeColor: "#5B0E1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${greatVibes.variable} ${playfair.variable} ${notoSerifJp.variable}`}
    >
      <body className="font-jp">{children}</body>
    </html>
  );
}
