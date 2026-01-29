import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { JsonLd } from "@/components/seo/json-ld";
import { ChatWidget } from "@/components/chat-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://complyremit.com";
const SITE_NAME = "ComplyRemit";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0570de" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ComplyRemit - Send Money Globally at 0.3% Flat | Cross-Border Payments",
    template: "%s | ComplyRemit",
  },
  description:
    "ComplyRemit offers cross-border payments at 0.3% flat fee, treasury management with yield, and invoice lending with 80% advance. Save up to 88% on international wire transfers. FDIC insured, licensed & regulated.",
  keywords: [
    "international wire transfer",
    "cross-border payments",
    "international money transfer",
    "business payments",
    "treasury management",
    "invoice lending",
    "invoice factoring",
    "B2B payments",
    "global payments",
    "wire transfer fees",
    "cheap international transfers",
    "business wire transfer",
    "multi-currency accounts",
    "FX payments",
    "foreign exchange",
    "FDIC insured payments",
    "fintech payments",
    "corporate treasury",
    "working capital",
    "accounts receivable financing",
  ],
  authors: [{ name: "ComplyRemit", url: SITE_URL }],
  creator: "ComplyRemit",
  publisher: "Negentropy LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "ComplyRemit - Send Money Globally at 0.3% Flat",
    description:
      "Cross-border payments at 0.3% flat fee, treasury management, and invoice lending. Save up to 88% on international transfers. FDIC insured.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ComplyRemit - Global Business Payments Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ComplyRemit - Send Money Globally at 0.3% Flat",
    description:
      "Cross-border payments at 0.3% flat, treasury management & invoice lending. Save up to 88% on international transfers.",
    images: ["/og-image.png"],
    creator: "@complyremit",
    site: "@complyremit",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  category: "finance",
  classification: "Business & Finance",
  other: {
    "msapplication-TileColor": "#0570de",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.complyremit.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
        <ChatWidget />
        <Toaster />
      </body>
    </html>
  );
}
