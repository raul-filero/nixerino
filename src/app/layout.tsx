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
    "Nicolás Canellas (Nixerino) — +10 años compitiendo al máximo nivel en League of Legends y Valorant. Twitch Partner. Coaching, eventos, colabs y contenido patrocinado.",
  openGraph: {
    title: "Nixerino — ex-pro LoL & Valorant · Twitch Partner",
    description:
      "+10 años pro en LoL y Valorant. Twitch Partner. Coaching, eventos, colabs y contenido.",
    url: SITE_URL,
    siteName: "Nixerino",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nixerino",
    description:
      "+10 años pro en LoL y Valorant. Twitch Partner. Coaching, eventos, colabs y contenido.",
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
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;700&family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap"
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
