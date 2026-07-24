import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/config/mog";

// Fonturi locale (din @fontsource) — fără dependență de Google Fonts la runtime.
const anton = localFont({
  src: "../fonts/anton.woff2",
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const grotesk = localFont({
  src: [
    { path: "../fonts/grotesk-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/grotesk-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-grotesk",
  display: "swap",
});

const spaceMono = localFont({
  src: [
    { path: "../fonts/mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/mono-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space-mono",
  display: "swap",
});

const siteUrl = `https://${SITE.domain}`;

export const viewport: Viewport = {
  themeColor: "#221c14",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MOG — There Is No Meme, Ily",
  description: SITE.description,
  applicationName: "MOG",
  keywords: ["mog", "$MOG", "meme coin", "culture coin"],
  alternates: { canonical: siteUrl },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "MOG — There Is No Meme, Ily",
    description: SITE.description,
    url: siteUrl,
    siteName: "MOG",
    images: [
      {
        url: "/media/mog/float-3.jpg",
        width: 736,
        height: 736,
        alt: "MOG",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOG — There Is No Meme, Ily",
    description: SITE.description,
    images: ["/media/mog/float-3.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${grotesk.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
