import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mitolyn™ Official | Boost Metabolism & Burn Fat Naturally',
  description:
    'Mitolyn is a natural dietary supplement designed to enhance mitochondrial function, the microscopic powerhouses in our cells responsible for energy production.',
  keywords: [
    'Mitolyn',
    'Mitolyn buy',
    'Mitolyn purchase',
    'Mitolyn supplement',
    'Mitolyn official website',
    'Mitolyn order',
    'Mitolyn discount',
  ],
  authors: [{ name: 'Mitolyn' }],
  alternates: {
    canonical: 'https://myitolyn.com/',
  },
  metadataBase: new URL('https://myitolyn.com'),
  other: {
    'content-language': 'en-us'
  },
  openGraph: {
    url: 'https://myitolyn.com/',
    type: 'website',
    title: 'Mitolyn® (Official Site) - Get 2 Bonuses & Free Shipping!',
    description:
      'Mitolyn is a natural dietary supplement designed to enhance mitochondrial function, the microscopic powerhouses in our cells responsible for energy production.',
    images: [
      {
        url: 'https://myitolyn.com/assets/images/Mitolyn.webp',
        width: 1200,
        height: 630,
        alt: 'Mitolyn Supplement Bottle',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/f01d64807e.js"></script>
        <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://myitolyn.com/"
              }
            ]
          }),
        }}
      />
      <Script
      id="product-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Mitolyn",
          "image": "https://myitolyn.com/assets/images/Mitolyn.webp",
          "description":
            "Mitolyn is a natural supplement designed to enhance energy, stamina, libido, and testosterone levels, promoting peak physical and sexual performance.",
          "sku": "Mitolyn-10",
          "brand": {
            "@type": "Brand",
            "name": "Mitolyn"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://myitolyn.com/",
            "priceCurrency": "USD",
            "price": "49.00",
            "priceValidUntil": "2025-03-08",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Mitolyn"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "15221"
          }
        })
      }}
    />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
