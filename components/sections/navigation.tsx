"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900"
              aria-label="ComplyRemit - Go to homepage"
            >
              ComplyRemit
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            <button
              onClick={() => scrollToSection('services-section')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              role="menuitem"
              aria-label="Navigate to Services section"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing-section')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              role="menuitem"
              aria-label="Navigate to Pricing section"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('security-section')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              role="menuitem"
              aria-label="Navigate to Security section"
            >
              Security
            </button>
            <Button
              onClick={() => scrollToSection('waitlist-section')}
              className="bg-[#0570de] hover:bg-[#0459c1] text-white px-4 py-2 text-sm rounded-lg"
              aria-label="Get started - Join the waitlist"
            >
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('services-section')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
              role="menuitem"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing-section')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
              role="menuitem"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('security-section')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
              role="menuitem"
            >
              Security
            </button>
            <Button
              onClick={() => scrollToSection('waitlist-section')}
              className="w-full bg-[#0570de] hover:bg-[#0459c1] text-white px-4 py-2 text-sm rounded-lg"
              aria-label="Get started - Join the waitlist"
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
