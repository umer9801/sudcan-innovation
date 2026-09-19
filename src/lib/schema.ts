// Schema.org structured data for SEO
// LocalBusiness, Service, FAQ schemas

export interface SchemaOrgData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

// Main LocalBusiness Schema for Sudcan Painting
export const localBusinessSchema: SchemaOrgData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.sudcanpainting.com/#business",
  name: "Sudcan Painting",
  alternateName: "Sudcan Innovation Inc",
  description: "Professional painting, renovation, and flooring services in Kitchener-Waterloo. 18+ years of experience. Licensed and insured painters.",
  url: "https://www.sudcanpainting.com",
  telephone: "+1-226-600-6637",
  email: "sudcaninfo@gmail.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.sudcanpainting.com/logo.png",
    width: 250,
    height: 250,
  },
  image: [
    "https://www.sudcanpainting.com/og-image.jpg",
    "https://www.sudcanpainting.com/gallery/kitchen-renovation-1.jpg",
    "https://www.sudcanpainting.com/gallery/interior-painting-1.jpg",
  ],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "286 Driftwood Dr",
    addressLocality: "Kitchener",
    addressRegion: "ON",
    postalCode: "N2N 1X6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.4643,
    longitude: -80.5204,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/sudcanpainting",
    "https://www.instagram.com/sudcanpainting",
    "https://www.linkedin.com/company/sudcanpainting",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Kitchener",
      "@id": "https://en.wikipedia.org/wiki/Kitchener,_Ontario",
    },
    {
      "@type": "City",
      name: "Waterloo",
      "@id": "https://en.wikipedia.org/wiki/Waterloo,_Ontario",
    },
    {
      "@type": "City",
      name: "Cambridge",
      "@id": "https://en.wikipedia.org/wiki/Cambridge,_Ontario",
    },
    {
      "@type": "City",
      name: "Guelph",
      "@id": "https://en.wikipedia.org/wiki/Guelph",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting and Renovation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Painting",
          description: "Professional interior painting services for residential and commercial properties",
          serviceType: "Interior Painting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Painting",
          description: "Weather-resistant exterior painting with premium coatings",
          serviceType: "Exterior Painting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cabinet Refinishing",
          description: "Professional cabinet refinishing and spray painting services",
          serviceType: "Cabinet Refinishing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hardwood Flooring",
          description: "Hardwood floor installation including European oak and walnut",
          serviceType: "Hardwood Flooring Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Renovation",
          description: "Complete home renovation and remodeling services",
          serviceType: "Home Renovation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kitchen Remodeling",
          description: "Full kitchen renovation and remodeling",
          serviceType: "Kitchen Remodeling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bathroom Renovation",
          description: "Professional bathroom renovation with premium fixtures",
          serviceType: "Bathroom Renovation",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Michael Thompson",
      },
      datePublished: "2026-08-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "Exceptional work! The team transformed our living room with professional interior painting. Clean, punctual, and the attention to detail was outstanding.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah Chen",
      },
      datePublished: "2026-07-22",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "Best painters in Kitchener! Cabinet refinishing exceeded our expectations. Looks like a brand new kitchen.",
    },
  ],
};

// Organization Schema
export const organizationSchema: SchemaOrgData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.sudcanpainting.com/#organization",
  name: "Sudcan Painting",
  url: "https://www.sudcanpainting.com",
  logo: "https://www.sudcanpainting.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-226-600-6637",
    contactType: "Customer Service",
    email: "sudcaninfo@gmail.com",
    areaServed: ["CA"],
    availableLanguage: ["English"],
    contactOption: "TollFree",
  },
  sameAs: [
    "https://www.facebook.com/sudcanpainting",
    "https://www.instagram.com/sudcanpainting",
    "https://www.linkedin.com/company/sudcanpainting",
  ],
};

// WebSite Schema with Sitelinks Search Box
export const websiteSchema: SchemaOrgData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.sudcanpainting.com/#website",
  url: "https://www.sudcanpainting.com",
  name: "Sudcan Painting",
  description: "Professional painting and renovation services in Kitchener-Waterloo",
  publisher: {
    "@id": "https://www.sudcanpainting.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.sudcanpainting.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Breadcrumb Schema (to be used on individual pages)
export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>): SchemaOrgData => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// FAQ Schema
export const faqSchema: SchemaOrgData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does interior painting take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A single room typically takes 1-2 days including prep and two coats. A full home interior usually runs 3-7 days depending on size and surface condition.",
      },
    },
    {
      "@type": "Question",
      name: "What paint brands do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work exclusively with Benjamin Moore, Sherwin-Williams, and other premium brands. We never cut corners with budget paint — the difference in finish and durability is significant.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to move my furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle all furniture moving and protection with professional drop cloths and plastic sheeting. You don't need to do a thing before we arrive.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help choose colours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer colour consultation as part of every project. We bring samples, assess your lighting, and help you choose shades that work beautifully in your space.",
      },
    },
    {
      "@type": "Question",
      name: "Are your quotes fixed or estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All quotes are fixed once scope is confirmed. Any change order is approved in writing before we proceed — no surprise bills, ever.",
      },
    },
    {
      "@type": "Question",
      name: "What warranty do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All workmanship is warrantied for 2 years. If paint peels, bubbles, or fails due to application, we come back and fix it at no charge.",
      },
    },
  ],
};

// Service Schema Generator
export const createServiceSchema = (serviceName: string, description: string, url: string): SchemaOrgData => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@id": "https://www.sudcanpainting.com/#business",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Kitchener",
      },
      {
        "@type": "City",
        name: "Waterloo",
      },
      {
        "@type": "City",
        name: "Cambridge",
      },
      {
        "@type": "City",
        name: "Guelph",
      },
    ],
    description,
    url,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceName,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
            description,
          },
        },
      ],
    },
  };
};

// Helper function to inject schema into head
export const injectSchema = (schema: SchemaOrgData | SchemaOrgData[]) => {
  const schemaArray = Array.isArray(schema) ? schema : [schema];
  return schemaArray.map((s) => JSON.stringify(s)).join("\n");
};
