import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import PricingSection from "@/components/sections/pricing-section";
import SecuritySection from "@/components/sections/security-section";
import WaitlistSection from "@/components/sections/waitlist-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <SecuritySection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
