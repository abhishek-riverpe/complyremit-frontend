import type { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import PricingSection from "@/components/sections/pricing-section";
import SecuritySection from "@/components/sections/security-section";
import WaitlistSection from "@/components/sections/waitlist-section";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "ComplyRemit - Send Money Globally at 0.3% Flat | Cross-Border Payments",
  description:
    "ComplyRemit offers cross-border payments at 0.3% flat fee, treasury management with yield, and invoice lending with 80% advance. Save up to 88% on international wire transfers. FDIC insured, licensed & regulated.",
  alternates: {
    canonical: "https://complyremit.com",
  },
  openGraph: {
    title: "ComplyRemit - Send Money Globally at 0.3% Flat",
    description:
      "Cross-border payments at 0.3% flat fee, treasury management, and invoice lending. Save up to 88% on international transfers. FDIC insured.",
    url: "https://complyremit.com",
  },
};

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" role="main">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <SecuritySection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
