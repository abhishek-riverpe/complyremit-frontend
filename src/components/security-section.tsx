import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "FDIC insured. Your money is protected.",
      description: "Up to $250K per depositor. Same as your bank, but with 8x lower fees."
    },
    {
      icon: Lock,
      title: "SOC 2? Check. Audited? Yearly.",
      description: "Third parties verify we're not cowboys. Pass every time."
    },
    {
      icon: Eye,
      title: "We watch so you don't have to",
      description: "Suspicious activity? Blocked before you even know about it."
    },
    {
      icon: CheckCircle,
      title: "Yes, we have all the licenses",
      description: "FinCEN, state regulators - we did the boring stuff so you don't have to worry."
    }
  ];

  return (
    <section id="security-section" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built by paranoid engineers. Perfect for paranoid CFOs.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're as obsessed with your security as you are. Maybe more.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-3 rounded-full bg-white mb-4">
                <feature.icon className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Compliance badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Shield className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">FDIC Insured</span>
          </div>
          <div className="text-sm text-gray-500">
            FinCEN MSB #31000236547890
          </div>
          <div className="text-sm text-gray-500">
            NMLS #2024789
          </div>
        </div>
      </div>
    </section>
  );
}