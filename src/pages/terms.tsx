import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  // Updated contact info
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">ComplyRemit</h1>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Effective Date: January 21, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "you", or "your") and ComplyRemit Technologies Inc. ("ComplyRemit", "we", "us", or "our") governing your use of our B2B cross-border payment platform and related services (collectively, the "Services").
            </p>
            <p className="text-gray-700 mb-4">
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility and Account Registration</h2>
            
            <h3 className="text-xl font-medium mb-3">2.1 Eligibility Requirements</h3>
            <p className="text-gray-700 mb-4">To use our Services, you must:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Be a legally registered business entity</li>
              <li>Be authorized to conduct business in your jurisdiction</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be subject to any sanctions or prohibited lists</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.2 Account Registration</h3>
            <p className="text-gray-700 mb-4">To access our Services, you must:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide accurate and complete registration information</li>
              <li>Complete our Know Your Business (KYB) verification process</li>
              <li>Designate authorized representatives for your account</li>
              <li>Maintain current and accurate account information</li>
              <li>Safeguard your account credentials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Services Description</h2>
            
            <h3 className="text-xl font-medium mb-3">3.1 Cross-Border Payment Services</h3>
            <p className="text-gray-700 mb-4">ComplyRemit provides:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>B2B international money transfers</li>
              <li>Multi-currency account capabilities</li>
              <li>Real-time exchange rates</li>
              <li>Transaction tracking and reporting</li>
              <li>Compliance and regulatory support</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.2 Service Limitations</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Services are available only for legitimate business purposes</li>
              <li>Personal remittances are not permitted</li>
              <li>Certain countries and currencies may be restricted</li>
              <li>Transaction limits apply based on verification level</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Fees and Pricing</h2>
            
            <h3 className="text-xl font-medium mb-3">4.1 Fee Structure</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Transaction fee: Flat 0.3% of transfer amount</li>
              <li>Instant payment option: Additional small fee for immediate transfers</li>
              <li>No monthly or annual fees</li>
              <li>No hidden charges or markups</li>
              <li>Wire transfer fees: As charged by banks (if applicable)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">4.2 Fee Disclosure</h3>
            <p className="text-gray-700 mb-4">
              All fees will be clearly disclosed before you confirm any transaction. We commit to full transparency with no hidden charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Compliance and Regulatory Requirements</h2>
            
            <h3 className="text-xl font-medium mb-3">5.1 Anti-Money Laundering (AML)</h3>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Provide accurate information about source of funds</li>
              <li>Cooperate with enhanced due diligence when required</li>
              <li>Report any suspicious activities</li>
              <li>Not use our Services for money laundering</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">5.2 Sanctions Compliance</h3>
            <p className="text-gray-700 mb-4">
              We screen all transactions against OFAC, UN, EU, and other sanctions lists. Transactions involving sanctioned parties or countries will be rejected.
            </p>

            <h3 className="text-xl font-medium mb-3">5.3 Tax Compliance</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for all tax obligations related to your use of our Services. We may report transaction information to tax authorities as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">You may not use our Services for:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Illegal activities or transactions</li>
              <li>Fraud, money laundering, or terrorist financing</li>
              <li>Gambling, adult services, or controlled substances</li>
              <li>Pyramid schemes or multi-level marketing</li>
              <li>Transactions with sanctioned countries or individuals</li>
              <li>Personal remittances or non-business purposes</li>
              <li>Speculation on foreign exchange rates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality of our Services are owned by ComplyRemit and protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, or reverse engineer any part of our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              Your use of our Services is also governed by our Privacy Policy. By using our Services, you consent to our collection and use of your information as described in the Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl font-medium mb-3">9.1 Service Availability</h3>
            <p className="text-gray-700 mb-4">
              We strive for 99.9% uptime but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, upgrades, or circumstances beyond our control.
            </p>

            <h3 className="text-xl font-medium mb-3">9.2 Limitation of Liability</h3>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, ComplyRemit's liability for any claim arising from these Terms or your use of our Services shall not exceed the fees paid by you in the 12 months preceding the claim.
            </p>

            <h3 className="text-xl font-medium mb-3">9.3 No Warranties</h3>
            <p className="text-gray-700 mb-4">
              Services are provided "as is" without warranties of any kind, either express or implied, except as required by applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold ComplyRemit harmless from any claims, damages, or expenses arising from your breach of these Terms, violation of laws, or infringement of third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Dispute Resolution</h2>
            
            <h3 className="text-xl font-medium mb-3">11.1 Informal Resolution</h3>
            <p className="text-gray-700 mb-4">
              We encourage resolution of disputes through direct communication. Contact our support team at support@complyremit.com.
            </p>

            <h3 className="text-xl font-medium mb-3">11.2 Arbitration</h3>
            <p className="text-gray-700 mb-4">
              Any disputes not resolved informally shall be settled by binding arbitration under the rules of the American Arbitration Association.
            </p>

            <h3 className="text-xl font-medium mb-3">11.3 Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of the State of New York, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may modify these Terms at any time. Material changes will be notified via email or platform notification 30 days before taking effect. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Termination</h2>
            
            <h3 className="text-xl font-medium mb-3">13.1 Termination by You</h3>
            <p className="text-gray-700 mb-4">
              You may close your account at any time by contacting support. Pending transactions must be completed or cancelled.
            </p>

            <h3 className="text-xl font-medium mb-3">13.2 Termination by ComplyRemit</h3>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate your account for violation of these Terms, suspicious activity, or regulatory requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>ComplyRemit Technologies Inc.</strong><br />
                Email: support@complyremit.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <p className="text-gray-700 font-medium">
              By using ComplyRemit's Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}