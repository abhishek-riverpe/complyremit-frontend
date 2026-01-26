import type { Metadata } from "next";
import Link from "next/link";
import { PrivacyPageJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ComplyRemit Privacy Policy - Learn how we collect, use, protect, and handle your personal and business information. FDIC insured, SOC 2 compliant.",
  alternates: {
    canonical: "https://complyremit.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy - ComplyRemit",
    description: "Learn how ComplyRemit protects your data with bank-level security and SOC 2 compliance.",
    url: "https://complyremit.com/privacy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyPageJsonLd />
      <div className="min-h-screen bg-white">
        <header>
          <nav className="bg-white border-b border-gray-100 sticky top-0 z-50" aria-label="Main navigation">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link
                  href="/"
                  className="text-xl font-semibold text-gray-900"
                  aria-label="ComplyRemit - Go to homepage"
                >
                  ComplyRemit
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="main-content" role="main">
          <article itemScope itemType="https://schema.org/WebPage">
            <header>
              <h1 className="text-4xl font-bold text-gray-900 mb-8" itemProp="name">
                Privacy Policy
              </h1>
            </header>

            <div className="prose prose-gray max-w-none" itemProp="mainContentOfPage">
              <p className="text-gray-600 mb-6">
                <time dateTime="2025-01">Last updated: January 2025</time>
              </p>

              <section className="mb-8" aria-labelledby="section-1">
                <h2 id="section-1" className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account,
                  make a transfer, or contact us for support. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2" role="list">
                  <li>Name, email address, and phone number</li>
                  <li>Business information and documentation</li>
                  <li>Bank account and payment information</li>
                  <li>Transaction history and transfer details</li>
                </ul>
              </section>

              <section className="mb-8" aria-labelledby="section-2">
                <h2 id="section-2" className="text-2xl font-semibold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2" role="list">
                  <li>Process and complete your transactions</li>
                  <li>Verify your identity and comply with legal requirements</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our products and services</li>
                  <li>Detect and prevent fraud</li>
                </ul>
              </section>

              <section className="mb-8" aria-labelledby="section-3">
                <h2 id="section-3" className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-gray-600 mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2" role="list">
                  <li>Banking partners to process transactions</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Regulatory authorities as required by law</li>
                </ul>
              </section>

              <section className="mb-8" aria-labelledby="section-4">
                <h2 id="section-4" className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-600">
                  We implement robust security measures including 256-bit encryption, multi-factor
                  authentication, and SOC 2 compliance to protect your information.
                </p>
              </section>

              <section className="mb-8" aria-labelledby="section-5">
                <h2 id="section-5" className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a
                    href="mailto:privacy@complyremit.com"
                    className="text-blue-600 hover:underline"
                    aria-label="Email privacy team at privacy@complyremit.com"
                  >
                    privacy@complyremit.com
                  </a>
                </p>
              </section>
            </div>
          </article>

          <nav aria-label="Breadcrumb" className="mt-12 pt-8 border-t border-gray-200">
            <ol className="flex items-center gap-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-gray-900" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" aria-current="page">Privacy Policy</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
        </main>
      </div>
    </>
  );
}
