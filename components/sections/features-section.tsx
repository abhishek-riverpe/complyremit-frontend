import { Shield, Award, Zap, TrendingUp, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "256-bit encryption, multi-factor authentication, and SOC 2 compliance ensure your transfers are protected.",
      color: "bg-primary"
    },
    {
      icon: Award,
      title: "Fully Licensed",
      description: "Licensed money service business with regulatory compliance across all supported markets.",
      color: "bg-secondary"
    },
    {
      icon: Zap,
      title: "Same-Day Transfers",
      description: "Most transfers complete within hours, not days. Real-time tracking for complete transparency.",
      color: "bg-accent"
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Live exchange rates with minimal markup. Lock in rates for up to 24 hours for large transfers.",
      color: "bg-primary"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal relationship manager for high-volume clients. 24/7 customer support for urgent transfers.",
      color: "bg-secondary"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Send money to India, UK, Canada, Australia, and many other countries with local bank partnerships.",
      color: "bg-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Built for Modern Businesses
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Everything you need for secure, compliant, and cost-effective international transfers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all bg-gray-50">
              <CardContent className="p-8">
                <div className={`${feature.color} text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
