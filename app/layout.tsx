import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sudcanpainting.com'),
  title: {
    default: "Painters Kitchener Waterloo ON | House Painting Near Me | Sudcan",
    template: "%s | Sudcan Painting"
  },
  description: "Top-rated painters in Kitchener-Waterloo. Interior & exterior house painting, cabinet refinishing. 500+ homes painted. Free quote (226) 600-6637. Licensed, 2-year warranty.",
  keywords: ["painters kitchener", "house painters waterloo", "painting contractors near me", "interior painters kitchener", "exterior painting waterloo", "cabinet painters kitchener"],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.sudcanpainting.com',
    siteName: 'Sudcan Painting',
    title: 'Top-Rated Painters Kitchener Waterloo | 500+ Homes Painted',
    description: 'Best painters in Kitchener-Waterloo. Interior/exterior painting, cabinets. Licensed, 2-year warranty. Free quote (226) 600-6637.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Sudcan Painting - Professional Painters in Kitchener-Waterloo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painters Kitchener Waterloo | House Painting Near Me',
    description: '500+ homes painted in Kitchener-Waterloo. Licensed painters. 2-year warranty. Free quotes.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
