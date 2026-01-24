import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, TrendingUp, FileText } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Wire transfers that don't suck",
      description: "Remember when sending money meant $50 fees and a week of waiting? Yeah, we fixed that. 0.3% flat. Done in hours, not days.",
      features: ["0.3% flat fee", "Instant payments available", "Real-time tracking"],
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Your CFO's new favorite dashboard",
      description: "See everything. Control everything. Multi-currency accounts that actually earn yield. Because idle cash is so 2020.",
      features: ["Multi-currency wallets", "Cash flow optimization", "Yield management"],
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: FileText,
      title: "Get paid today, not in 90 days",
      description: "That Fortune 500 client who pays on NET-90? We'll advance you 80% today. Your invoices are worth more than paper.",
      features: ["80% advance rate", "Same-day funding", "No personal guarantees"],
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Three products. One login. Zero headaches.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Why are you still using different platforms for payments, treasury, and lending? 
            Everything works better when it's connected.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card-stripe p-6 shadow-stripe-md hover:shadow-stripe-lg transition-smooth card-hover">
              <div className={`inline-flex p-3 rounded-lg ${service.color} mb-4`}>
                <service.icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className="flex items-center gap-1 text-sm font-medium text-[#0570de] hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}