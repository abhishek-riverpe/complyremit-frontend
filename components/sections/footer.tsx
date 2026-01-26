import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white border-t border-gray-100"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Product */}
          <nav aria-label="Product navigation">
            <h2 className="font-semibold text-gray-900 mb-4">Product</h2>
            <ul className="space-y-2 list-none p-0">
              <li>
                <a
                  href="#services-section"
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing-section"
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#security-section"
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal navigation">
            <h2 className="font-semibold text-gray-900 mb-4">Legal</h2>
            <ul className="space-y-2 list-none p-0">
              <li>
                <Link
                  href="/privacy"
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-4">Contact</h2>
            <address className="not-italic">
              <a
                href="mailto:sales@complyremit.com"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Email sales at sales@complyremit.com"
              >
                sales@complyremit.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
            <p className="text-sm text-gray-500">
              <span>&copy; {currentYear} </span>
              <span itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Negentropy LLC</span>
              </span>
              <span>. All rights reserved.</span>
            </p>
            <div className="flex gap-4 text-xs text-gray-500 md:ml-8" aria-label="Regulatory information">
              <span>
                <span className="sr-only">FinCEN Money Services Business registration: </span>
                FinCEN MSB #31000236547890
              </span>
              <span>
                <span className="sr-only">NMLS registration: </span>
                NMLS #2024789
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
