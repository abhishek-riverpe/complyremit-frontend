import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <div className="space-y-2">
              <a href="#services-section" className="block text-sm text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#pricing-section" className="block text-sm text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#security-section" className="block text-sm text-gray-600 hover:text-gray-900">
                Security
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <p className="text-sm text-gray-600">
              sales@complyremit.com
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
            <p className="text-sm text-gray-500">
              © 2025 Negentropy LLC. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-gray-500 md:ml-8">
              <span>FinCEN MSB #31000236547890</span>
              <span>NMLS #2024789</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}