import { ArrowRight, Globe, TrendingUp, FileText } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Wire transfers that don't suck",
      description: "Remember when sending money meant $50 fees and a week of waiting? Yeah, we fixed that. 0.3% flat. Done in hours, not days.",
      features: ["0.3% flat fee", "Instant payments available", "Real-time tracking"],
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      ariaLabel: "Cross-border payments service"
    },
    {
      icon: TrendingUp,
      title: "Your CFO's new favorite dashboard",
      description: "See everything. Control everything. Multi-currency accounts that actually earn yield. Because idle cash is so 2020.",
      features: ["Multi-currency wallets", "Cash flow optimization", "Yield management"],
      color: "bg-green-50",
      iconColor: "text-green-600",
      ariaLabel: "Treasury management service"
    },
    {
      icon: FileText,
      title: "Get paid today, not in 90 days",
      description: "That Fortune 500 client who pays on NET-90? We'll advance you 80% today. Your invoices are worth more than paper.",
      features: ["80% advance rate", "Same-day funding", "No personal guarantees"],
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      ariaLabel: "Invoice lending service"
    }
  ];

  return (
    <section
      id="services-section"
      className="py-20 bg-gray-50"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
            itemProp="name"
          >
            Three products. One login. Zero headaches.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" itemProp="description">
            Why are you still using different platforms for payments, treasury, and lending?
            Everything works better when it&apos;s connected.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6" role="list">
          {services.map((service, index) => (
            <article
              key={index}
              className="card-stripe p-6 shadow-stripe-md hover:shadow-stripe-lg transition-smooth card-hover"
              role="listitem"
              aria-label={service.ariaLabel}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <div className={`inline-flex p-3 rounded-lg ${service.color} mb-4`} aria-hidden="true">
                <service.icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3" itemProp="name">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4" itemProp="description">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 list-none p-0" role="list" aria-label={`Features of ${service.title}`}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" aria-hidden="true"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="flex items-center gap-1 text-sm font-medium text-[#0570de] hover:gap-2 transition-all"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
