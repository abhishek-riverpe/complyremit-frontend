import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "FDIC insured. Your money is protected.",
      description: "Up to $250K per depositor. Same as your bank, but with 8x lower fees.",
      ariaLabel: "FDIC insurance protection"
    },
    {
      icon: Lock,
      title: "SOC 2? Check. Audited? Yearly.",
      description: "Third parties verify we're not cowboys. Pass every time.",
      ariaLabel: "SOC 2 compliance certification"
    },
    {
      icon: Eye,
      title: "We watch so you don't have to",
      description: "Suspicious activity? Blocked before you even know about it.",
      ariaLabel: "Fraud monitoring and prevention"
    },
    {
      icon: CheckCircle,
      title: "Yes, we have all the licenses",
      description: "FinCEN, state regulators - we did the boring stuff so you don't have to worry.",
      ariaLabel: "Regulatory licensing compliance"
    }
  ];

  return (
    <section
      id="security-section"
      className="py-20 bg-gray-50"
      aria-labelledby="security-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2
            id="security-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Built by paranoid engineers. Perfect for paranoid CFOs.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re as obsessed with your security as you are. Maybe more.
          </p>
        </header>

        <div
          className="grid md:grid-cols-4 gap-6"
          role="list"
          aria-label="Security features"
        >
          {securityFeatures.map((feature, index) => (
            <article
              key={index}
              className="text-center"
              role="listitem"
              aria-label={feature.ariaLabel}
            >
              <div className="inline-flex p-3 rounded-full bg-white mb-4" aria-hidden="true">
                <feature.icon className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Compliance badges */}
        <aside
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
          aria-label="Compliance certifications"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Shield className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-900">FDIC Insured</span>
          </div>
          <div className="text-sm text-gray-500">
            <span className="sr-only">FinCEN Money Services Business registration number: </span>
            FinCEN MSB #31000236547890
          </div>
          <div className="text-sm text-gray-500">
            <span className="sr-only">NMLS registration number: </span>
            NMLS #2024789
          </div>
        </aside>
      </div>
    </section>
  );
}
