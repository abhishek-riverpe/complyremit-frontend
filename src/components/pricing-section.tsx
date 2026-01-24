import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing-section" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The math is simple. You save money.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Banks charge 2.5% plus wire fees. We charge 0.3%. 
            That's literally 8x cheaper. Run the numbers yourself.
          </p>
        </div>
        
        {/* Pricing comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional banks</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✕</span>
                <span className="text-gray-600">2.5-3% transfer fees</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✕</span>
                <span className="text-gray-600">Hidden exchange rate markups</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✕</span>
                <span className="text-gray-600">$40-50 wire fees</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✕</span>
                <span className="text-gray-600">3-5 business days</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-[#0570de] border-2 relative">
            <div className="absolute -top-3 left-6 bg-[#0570de] text-white px-3 py-1 rounded text-xs font-medium">
              RECOMMENDED
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ComplyRemit</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">0.3% flat fee</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">Real exchange rates</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">No hidden fees</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-600">24-48 hours (instant available)</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}