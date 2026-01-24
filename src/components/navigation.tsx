import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-gray-900">ComplyRemit</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services-section')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing-section')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('security-section')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Security
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist-section')}
              className="bg-[#0570de] hover:bg-[#0459c1] text-white px-4 py-2 text-sm rounded-lg"
            >
              Get started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('services-section')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing-section')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('security-section')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
            >
              Security
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist-section')}
              className="w-full bg-[#0570de] hover:bg-[#0459c1] text-white px-4 py-2 text-sm rounded-lg"
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}