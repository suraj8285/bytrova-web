import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.bytrova.co.in"),
  title: {
    default: "Bytrova — Product software for better-run schools",
    template: "%s | Bytrova",
  },
  description:
    "Bytrova builds robust, modern software products, including a multi-tenant School Management Platform for administrators, teachers, students, and parents.",
  keywords: [
    "School Management Platform",
    "Multi-tenant SaaS school software",
    "School administration software India",
    "Education technology platform",
    "School ERP software",
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
    title: "Bytrova — School Management Platform",
    description:
      "A modern, multi-tenant School Management Platform for administrators, teachers, students, and parents.",
    url: "https://www.bytrova.co.in",
    siteName: "Bytrova",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/bytrova.png",
        width: 1200,
        height: 630,
        alt: "Bytrova School Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bytrova — School Management Platform",
    description:
      "Modern school management software that keeps administrators, teachers, students, and parents connected.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/bytrova.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bytrova",
  url: "https://www.bytrova.co.in",
  logo: "https://www.bytrova.co.in/bytrova.png",
  image: "https://www.bytrova.co.in/bytrova.png",
  description:
    "Bytrova builds robust, scalable software products, including a multi-tenant School Management Platform for modern school communities.",
  telephone: "+918285234325",
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
    name: "School Management Platform",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="app-root">
        <a href="#main" className="skip-link">
    
        </a>
        {children}
      </body>
    </html>
  );
}

