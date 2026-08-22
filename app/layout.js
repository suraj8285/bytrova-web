import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.bytrova.co.in"),
  title: {
    default: "Bytrova — Best Software Development Company in Delhi | Web & App Development",
    template: "%s | Bytrova",
  },
  description:
    "Bytrova is a top software development company in Delhi, specializing in custom software, website development, mobile apps (iOS/Android), ERP solutions, CRM systems, UI/UX design, and digital transformation.",
  keywords: [
    "Software Development Company in Delhi",
    "Best Web Development Company Delhi",
    "Custom Software Development India",
    "Mobile App Development Company Delhi",
    "ERP Development Company",
    "CRM Software Solutions",
    "UI UX Design Agency Delhi",
    "E-commerce Website Development",
    "API Development & Integration",
    "Bytrova",
  ],
  authors: [{ name: "Bytrova", url: "https://www.bytrova.co.in" }],
  creator: "Bytrova Software Company",
  publisher: "Bytrova",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.bytrova.co.in",
  },
  openGraph: {
    title: "Bytrova — Software Development Company in Delhi",
    description:
      "Custom software development, web & mobile apps, ERP/CRM solutions, and UI/UX design services in Delhi, India.",
    url: "https://www.bytrova.co.in",
    siteName: "Bytrova",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Bytrova Software Development Company in Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bytrova — Top Software Company in Delhi",
    description:
      "Expert custom software, mobile app, and web development services in Delhi, India.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bytrova",
  url: "https://www.bytrova.co.in",
  logo: "https://www.bytrova.co.in/favicon.ico",
  image: "https://www.bytrova.co.in/og-image.svg",
  description:
    "Bytrova is a leading software development company in Delhi specializing in custom software development, mobile app development, website design, ERP & CRM solutions, and digital transformation.",
  telephone: "+919310996758",
  email: "bytrova1@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110059",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6139,
    longitude: 77.2090,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  priceRange: "₹₹",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software & Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ERP & CRM Development",
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="app-root">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

