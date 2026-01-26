import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - ComplyRemit",
  description: "Privacy Policy for ComplyRemit - How we handle your data",
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you create an account,
              make a transfer, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Business information and documentation</li>
              <li>Bank account and payment information</li>
              <li>Transaction history and transfer details</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Process and complete your transactions</li>
              <li>Verify your identity and comply with legal requirements</li>
              <li>Communicate with you about our services</li>
              <li>Improve our products and services</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Banking partners to process transactions</li>
              <li>Service providers who assist in our operations</li>
              <li>Regulatory authorities as required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-600">
              We implement robust security measures including 256-bit encryption, multi-factor
              authentication, and SOC 2 compliance to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@complyremit.com" className="text-blue-600 hover:underline">
                privacy@complyremit.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
