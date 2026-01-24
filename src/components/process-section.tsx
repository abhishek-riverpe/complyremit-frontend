export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Create Account",
      description: "Quick business verification with required documentation. Usually completed within 24 hours.",
      color: "bg-primary"
    },
    {
      number: 2,
      title: "Initiate Transfer",
      description: "Enter transfer details, lock in exchange rates, and fund your transfer via bank wire or ACH.",
      color: "bg-secondary"
    },
    {
      number: 3,
      title: "Money Delivered",
      description: "Funds arrive at destination within hours. Real-time tracking and confirmation provided.",
      color: "bg-accent"
    }
  ];

  return (
    <section id="process-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-md lg:text-display-lg text-gray-900 mb-6">
            Simple Process, Powerful Results
          </h2>
          <p className="text-body-lg text-neutral-gray max-w-3xl mx-auto">
            Get started with cross-border transfers in just three easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`${step.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6`}>
                {step.number}
              </div>
              <h3 className="text-heading-lg text-gray-900 mb-4">{step.title}</h3>
              <p className="text-body-md text-neutral-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
