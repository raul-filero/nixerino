import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://hefaia.com/nixerino";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nixerino — ex-pro LoL & Valorant · Twitch Partner",
    template: "%s · Nixerino",
  },
  description:
    "Nicolás Canellas (Nixerino) — diez años compitiendo en LoL y Valorant. Twitch Partner. Coaching, eventos, colabs y contenido patrocinado. Sin postureo.",
  openGraph: {
    title: "Nixerino — ex-pro LoL & Valorant · Twitch Partner",
    description:
      "Diez años compitiendo. Coaching, eventos, colabs y contenido patrocinado.",
    url: SITE_URL,
    siteName: "Nixerino",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nixerino",
    description: "Diez años pro. Hoy: Twitch Partner. Coaching, eventos, colabs, contenido.",
    creator: "@n1xerino",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Bangers&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=JetBrains+Mono:wght@400;600&display=swap"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
