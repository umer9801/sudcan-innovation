"use client";

import { usePathname } from "next/navigation";

interface ServiceSchema {
  "@type": "Service";
  name: string;
  description: string;
  provider: {
    "@type": "LocalBusiness";
    name: string;
  };
  areaServed: string[];
  offers?: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
  };
}

export function StructuredData() {
  const pathname = usePathname();

  // LocalBusiness Schema - Always present
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.sudcanpainting.com/#organization",
    name: "Sudcan Painting",
    alternateName: "Sudcan Painting & Renovation",
    description: "Professional painting and renovation services in Kitchener-Waterloo Ontario. Interior painting, exterior painting, cabinet refinishing, kitchen and bathroom renovation.",
    url: "https://www.sudcanpainting.com",
    telephone: "+1-226-600-6637",
    email: "sudcaninfo@gmail.com",
    logo: "https://www.sudcanpainting.com/assets/sudcan-painting-logo.webp",
    image: "https://www.sudcanpainting.com/assets/professional-painter-craftsman-sudcan.webp",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "286 Driftwood Dr",
      addressLocality: "Kitchener",
      addressRegion: "ON",
      postalCode: "N2N 1X6",
      addressCountry: "CA"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.4643",
      longitude: "-80.5204"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Kitchener",
        "@id": "https://www.wikidata.org/wiki/Q28237"
      },
      {
        "@type": "City",
        name: "Waterloo",
        "@id": "https://www.wikidata.org/wiki/Q28238"
      },
      {
        "@type": "City",
        name: "Cambridge",
        "@id": "https://www.wikidata.org/wiki/Q139101"
      },
      {
        "@type": "City",
        name: "Guelph",
        "@id": "https://www.wikidata.org/wiki/Q203960"
      }
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/sudcanpainting",
      "https://www.instagram.com/sudcanpainting",
      "https://www.linkedin.com/company/sudcanpainting"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "180",
      bestRating: "5",
      worstRating: "1"
    }
  };

  // Service-specific schemas
  const serviceSchemas: Record<string, ServiceSchema> = {
    "/services/interior-painting": {
      "@type": "Service",
      name: "Interior Painting Services",
      description: "Professional interior painting for homes and businesses in Kitchener-Waterloo. Expert wall painting, trim work, and color consultation.",
      provider: {
        "@type": "LocalBusiness",
        name: "Sudcan Painting"
      },
      areaServed: ["Kitchener", "Waterloo", "Cambridge", "Guelph"]
    },
    "/services/exterior-painting": {
      "@type": "Service",
      name: "Exterior Painting Services",
      description: "Durable exterior painting services for Canadian weather. Protect and beautify your home's exterior with premium paints.",
      provider: {
        "@type": "LocalBusiness",
        name: "Sudcan Painting"
      },
      areaServed: ["Kitchener", "Waterloo", "Cambridge", "Guelph"]
    },
    "/services/cabinet-refinishing": {
      "@type": "Service",
      name: "Cabinet Refinishing & Painting",
      description: "Transform your kitchen with professional cabinet refinishing. Cost-effective alternative to replacement.",
      provider: {
        "@type": "LocalBusiness",
        name: "Sudcan Painting"
      },
      areaServed: ["Kitchener", "Waterloo", "Cambridge", "Guelph"]
    }
  };

  // Breadcrumb Schema
  const getBreadcrumbSchema = () => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length === 0) return null;

    const itemListElement = pathSegments.map((segment, index) => {
      const position = index + 2; // +1 for base, +1 for 1-indexed
      const url = `https://www.sudcanpainting.com/${pathSegments.slice(0, index + 1).join("/")}`;
      const name = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return {
        "@type": "ListItem",
        position,
        name,
        item: url
      };
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.sudcanpainting.com"
        },
        ...itemListElement
      ]
    };
  };

  const breadcrumbSchema = getBreadcrumbSchema();
  const currentServiceSchema = serviceSchemas[pathname];

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* Service Schema */}
      {currentServiceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            ...currentServiceSchema
          }) }}
        />
      )}
    </>
  );
}
