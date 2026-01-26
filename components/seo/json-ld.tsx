import Script from "next/script";

const SITE_URL = "https://complyremit.com";

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${SITE_URL}/#organization`,
  name: "ComplyRemit",
  alternateName: "ComplyRemit by Negentropy LLC",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    "ComplyRemit provides cross-border payments at 0.3% flat fee, treasury management with yield, and invoice lending with 80% advance rate for businesses.",
  foundingDate: "2024",
  founder: {
    "@type": "Organization",
    name: "Negentropy LLC",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "",
      contactType: "sales",
      email: "sales@complyremit.com",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@complyremit.com",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://twitter.com/complyremit",
    "https://linkedin.com/company/complyremit",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "FinCEN MSB",
      recognizedBy: {
        "@type": "Organization",
        name: "Financial Crimes Enforcement Network",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "NMLS",
      recognizedBy: {
        "@type": "Organization",
        name: "Nationwide Multistate Licensing System",
      },
    },
  ],
  slogan: "Send Money Globally at 0.3% Flat",
  knowsAbout: [
    "Cross-border payments",
    "International wire transfers",
    "Treasury management",
    "Invoice lending",
    "B2B payments",
    "Foreign exchange",
  ],
};

// WebSite Schema with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "ComplyRemit",
  description:
    "Cross-border payments, treasury management, and invoice lending platform for businesses",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en-US",
};

// Service Schemas
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#services`,
  name: "ComplyRemit Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "FinancialProduct",
        "@id": `${SITE_URL}/#cross-border-payments`,
        name: "Cross-Border Payments",
        description:
          "International wire transfers at 0.3% flat fee with real-time tracking. Save up to 88% compared to traditional banks.",
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        feesAndCommissionsSpecification: "0.3% flat fee per transfer",
        interestRate: {
          "@type": "QuantitativeValue",
          value: 0,
          unitText: "PERCENT",
        },
        category: "International Money Transfer",
        offers: {
          "@type": "Offer",
          description: "0.3% flat fee on all international transfers",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "FinancialProduct",
        "@id": `${SITE_URL}/#treasury-management`,
        name: "Treasury Management",
        description:
          "Multi-currency accounts with yield optimization. Cash flow management and real-time analytics for CFOs.",
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        category: "Corporate Treasury",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "FinancialProduct",
        "@id": `${SITE_URL}/#invoice-lending`,
        name: "Invoice Lending",
        description:
          "Get 80% advance on your invoices with same-day funding. No personal guarantees required.",
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        feesAndCommissionsSpecification: "80% advance rate",
        category: "Invoice Factoring",
        offers: {
          "@type": "Offer",
          description: "80% advance rate with same-day funding",
          priceCurrency: "USD",
        },
      },
    },
  ],
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What are ComplyRemit's fees for international transfers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ComplyRemit charges a flat 0.3% fee on all international wire transfers. This is up to 88% cheaper than traditional banks which typically charge 2.5-3% plus wire fees of $40-50.",
      },
    },
    {
      "@type": "Question",
      name: "How long do international transfers take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard transfers complete within 24-48 hours. Instant payment options are also available for a small additional fee.",
      },
    },
    {
      "@type": "Question",
      name: "Is ComplyRemit FDIC insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, funds held with ComplyRemit are FDIC insured up to $250,000 per depositor, providing the same protection as traditional banks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the advance rate for invoice lending?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ComplyRemit offers up to 80% advance on your invoices with same-day funding. No personal guarantees are required.",
      },
    },
    {
      "@type": "Question",
      name: "Is ComplyRemit licensed and regulated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ComplyRemit is fully licensed and regulated. We are registered with FinCEN as a Money Services Business (MSB) and hold NMLS licensing.",
      },
    },
  ],
};

// BreadcrumbList Schema for homepage
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "WebPage",
        "@id": SITE_URL,
        name: "Home",
        url: SITE_URL,
      },
    },
  ],
};

// Aggregate Rating Schema
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${SITE_URL}/#rating`,
  name: "ComplyRemit",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "127",
  },
};

export function JsonLd() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    servicesSchema,
    faqSchema,
    breadcrumbSchema,
    aggregateRatingSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`json-ld-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}

// Page-specific JSON-LD components
export function PrivacyPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/privacy#webpage`,
    url: `${SITE_URL}/privacy`,
    name: "Privacy Policy - ComplyRemit",
    description: "Privacy Policy for ComplyRemit - How we collect, use, and protect your data",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": SITE_URL,
            name: "Home",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": `${SITE_URL}/privacy`,
            name: "Privacy Policy",
          },
        },
      ],
    },
    datePublished: "2024-01-01",
    dateModified: "2025-01-01",
    inLanguage: "en-US",
  };

  return (
    <Script
      id="privacy-json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export function TermsPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/terms#webpage`,
    url: `${SITE_URL}/terms`,
    name: "Terms of Service - ComplyRemit",
    description: "Terms of Service for ComplyRemit - Legal terms and conditions for using our services",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": SITE_URL,
            name: "Home",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": `${SITE_URL}/terms`,
            name: "Terms of Service",
          },
        },
      ],
    },
    datePublished: "2024-01-01",
    dateModified: "2025-01-01",
    inLanguage: "en-US",
  };

  return (
    <Script
      id="terms-json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
