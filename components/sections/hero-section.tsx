"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [transactionCount, setTransactionCount] = useState(127643);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactionCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative bg-gradient-subtle min-h-150 flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Live transaction counter */}
          <div
            className="inline-flex items-center gap-2 badge-stripe mb-8 shadow-stripe-sm"
            role="status"
            aria-live="polite"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
            <span className="text-sm font-medium">
              <span className="sr-only">Live counter: </span>
              {transactionCount.toLocaleString()} transactions processed
            </span>
          </div>

          {/* Main headline */}
          <h1
            id="hero-heading"
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
            itemProp="headline"
          >
            Send money globally at 0.3% flat
          </h1>

          {/* Subheadline with three services */}
          <div className="mb-8">
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto" itemProp="description">
              Plus treasury management and invoice lending. All in one platform.
            </p>

            {/* Three service pills */}
            <ul className="flex flex-wrap justify-center gap-3 mb-6 list-none p-0" role="list" aria-label="Key services">
              <li className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
                <span className="text-sm font-medium text-gray-700">Cross-border payments • 0.3% flat</span>
              </li>
              <li className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span className="text-sm font-medium text-gray-700">Treasury management • Earn yield</span>
              </li>
              <li className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-purple-500 rounded-full" aria-hidden="true"></div>
                <span className="text-sm font-medium text-gray-700">Invoice lending • 80% advance</span>
              </li>
            </ul>

            <p className="text-base text-gray-500">
              Instant payments available with small additional fee
            </p>
          </div>

          {/* Single CTA */}
          <Button
            onClick={scrollToWaitlist}
            className="gradient-accent text-white px-8 py-6 text-lg rounded-lg font-medium transition-smooth button-scale shadow-stripe-lg mb-8 hover:shadow-stripe-xl"
            size="lg"
            aria-label="Get started with ComplyRemit - Join the waitlist"
          >
            Get started
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>

          {/* Trust indicators - subtle */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm" role="list" aria-label="Trust indicators">
            <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full text-green-700 font-medium" role="listitem">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>FDIC Insured</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500" role="listitem">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500" role="listitem">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & regulated</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500" role="listitem">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>0.3% flat fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
