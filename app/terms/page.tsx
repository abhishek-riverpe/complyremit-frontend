import type { Metadata } from "next";
import Link from "next/link";
import { TermsPageJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "ComplyRemit Terms of Service - Legal terms and conditions for using our cross-border payments, treasury management, and invoice lending services.",
  alternates: {
    canonical: "https://complyremit.com/terms",
  },
  openGraph: {
    title: "Terms of Service - ComplyRemit",
    description: "Terms and conditions for using ComplyRemit's cross-border payment services.",
    url: "https://complyremit.com/terms",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <TermsPageJsonLd />
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
                Terms of Service
              </h1>
            </header>

            <div className="prose prose-gray max-w-none" itemProp="mainContentOfPage">
              <p className="text-gray-600 mb-6">
                <time dateTime="2025-01">Last updated: January 2025</time>
              </p>

              <section className="mb-8" aria-labelledby="terms-section-1">
                <h2 id="terms-section-1" className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing or using ComplyRemit&apos;s services, you agree to be bound by these Terms
                  of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8" aria-labelledby="terms-section-2">
                <h2 id="terms-section-2" className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Services Description
                </h2>
                <p className="text-gray-600 mb-4">
                  ComplyRemit provides cross-border payment services, treasury management, and invoice
                  lending solutions for businesses. Our services include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2" role="list">
                  <li>International wire transfers at competitive rates (0.3% flat fee)</li>
                  <li>Multi-currency treasury management with yield optimization</li>
                  <li>Invoice financing and lending with up to 80% advance rate</li>
                </ul>
              </section>

              <section className="mb-8" aria-labelledby="terms-section-3">
                <h2 id="terms-section-3" className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Eligibility
                </h2>
                <p className="text-gray-600">
                  Our services are available to registered businesses in the United States. You must
                  provide accurate business documentation and comply with all applicable regulations.
                </p>
              </section>

              <section className="mb-8" aria-labelledby="terms-section-4">
                <h2 id="terms-section-4" className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Fees and Payments
                </h2>
                <p className="text-gray-600">
                  Our standard fee for cross-border transfers is 0.3% flat. Additional fees may apply
                  for instant transfers. All fees are disclosed before you confirm any transaction.
                </p>
              </section>

              <section className="mb-8" aria-labelledby="terms-section-5">
                <h2 id="terms-section-5" className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Compliance
                </h2>
                <p className="text-gray-600">
                  You agree to comply with all applicable laws and regulations, including anti-money
                  laundering (AML) and know your customer (KYC) requirements. We reserve the right to
                  suspend or terminate accounts that violate these requirements.
                </p>
              </section>

              <section className="mb-8" aria-labelledby="terms-section-6">
                <h2 id="terms-section-6" className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-600">
                  ComplyRemit shall not be liable for any indirect, incidental, special, consequential,
                  or punitive damages arising from your use of our services.
                </p>
              </section>

              <section className="mb-8" aria-labelledby="terms-section-7">
                <h2 id="terms-section-7" className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Contact Information
                </h2>
                <p className="text-gray-600">
                  For questions about these Terms, contact us at{" "}
                  <a
                    href="mailto:legal@complyremit.com"
                    className="text-blue-600 hover:underline"
                    aria-label="Email legal team at legal@complyremit.com"
                  >
                    legal@complyremit.com
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
                <span itemProp="name" aria-current="page">Terms of Service</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
        </main>
      </div>
    </>
  );
}
