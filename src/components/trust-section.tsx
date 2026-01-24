import { Building, Shield, Lock, FileCheck, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TrustSection() {
  const trustBadges = [
    {
      icon: Building,
      title: "Licensed MSB",
      subtitle: "Money Service Business",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "SOC 2 Compliant",
      subtitle: "Security Audited",
      color: "text-secondary"
    },
    {
      icon: Lock,
      title: "256-bit SSL",
      subtitle: "Bank-Grade Encryption",
      color: "text-accent"
    },
    {
      icon: FileCheck,
      title: "AML/KYC",
      subtitle: "Regulatory Compliant",
      color: "text-primary"
    }
  ];

  const complianceItems = [
    "FinCEN registered in the United States",
    "Reserve Bank of India authorized",
    "FCA regulated in the United Kingdom",
    "FINTRAC registered in Canada"
  ];

  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-md lg:text-display-lg text-gray-900 mb-6">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-body-lg text-neutral-gray max-w-3xl mx-auto">
            Our platform meets the highest standards for security, compliance, and regulatory requirements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Professional business handshake" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {trustBadges.map((badge, index) => (
                <Card key={index} className="border-0 shadow-sm text-center">
                  <CardContent className="p-6">
                    <badge.icon className={`h-8 w-8 ${badge.color} mb-3 mx-auto`} />
                    <h4 className="font-semibold text-gray-900">{badge.title}</h4>
                    <p className="text-sm text-neutral-gray">{badge.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Regulatory Compliance</h4>
                <ul className="space-y-2">
                  {complianceItems.map((item, index) => (
                    <li key={index} className="flex items-center text-neutral-gray">
                      <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Licensed Credentials */}
                <div className="flex items-center justify-center space-x-8 mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2">🛡️</span>
                    <span className="font-medium">Licensed MSB</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2">🔒</span>
                    <span className="font-medium">SOC 2 Compliant</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
