import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ComplyRemit - Send Money Globally at 0.3% Flat",
  description: "Cross-border payments, treasury management, and invoice lending. All in one platform. Save up to 88% on international transfers.",
  keywords: ["international transfers", "cross-border payments", "treasury management", "invoice lending", "wire transfer", "fintech"],
  openGraph: {
    title: "ComplyRemit - Send Money Globally at 0.3% Flat",
    description: "Cross-border payments, treasury management, and invoice lending. All in one platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
