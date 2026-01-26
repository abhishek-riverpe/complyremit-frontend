import Link from "next/link";

export const metadata = {
  title: "Terms of Service - ComplyRemit",
  description: "Terms of Service for ComplyRemit",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              ComplyRemit
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing or using ComplyRemit&apos;s services, you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Services Description
            </h2>
            <p className="text-gray-600 mb-4">
              ComplyRemit provides cross-border payment services, treasury management, and invoice
              lending solutions for businesses. Our services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>International wire transfers at competitive rates</li>
              <li>Multi-currency treasury management</li>
              <li>Invoice financing and lending</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Eligibility
            </h2>
            <p className="text-gray-600">
              Our services are available to registered businesses in the United States. You must
              provide accurate business documentation and comply with all applicable regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Fees and Payments
            </h2>
            <p className="text-gray-600">
              Our standard fee for cross-border transfers is 0.3% flat. Additional fees may apply
              for instant transfers. All fees are disclosed before you confirm any transaction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Compliance
            </h2>
            <p className="text-gray-600">
              You agree to comply with all applicable laws and regulations, including anti-money
              laundering (AML) and know your customer (KYC) requirements. We reserve the right to
              suspend or terminate accounts that violate these requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              ComplyRemit shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Contact Information
            </h2>
            <p className="text-gray-600">
              For questions about these Terms, contact us at{" "}
              <a href="mailto:legal@complyremit.com" className="text-blue-600 hover:underline">
                legal@complyremit.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
