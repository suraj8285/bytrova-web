import "./globals.css";
import "./site.css";

export const metadata = {
  metadataBase: new URL("https://www.bytrova.co.in"),
  title: {
    default: "Bytrova | Website, App & Software Development Company",
    template: "%s | Bytrova",
  },
  description:
    "Bytrova builds websites, mobile apps, web applications and custom software for startups and businesses in Delhi and across India.",
  keywords: [
    "software development company",
    "website development company",
    "mobile app development company",
    "web application development",
    "custom software development",
    "Flutter app development",
    "SaaS development company",
    "software development company Delhi",
    "website development company Delhi",
    "mobile app development company Delhi",
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
  openGraph: {
    title: "Bytrova | Website, App & Software Development Company",
    description: "Websites, mobile apps, web applications and custom software built around your business.",
    siteName: "Bytrova",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/bytrova.png",
        width: 1200,
        height: 630,
        alt: "Bytrova software development company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bytrova | Websites, Apps & Custom Software",
    description: "Software development for startups and businesses in Delhi and across India.",
    images: ["/bytrova.png"],
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
    "Bytrova builds websites, mobile applications, web applications and custom software for startups, entrepreneurs and businesses.",
  telephone: "+918285234325",
  email: "bytrova1@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110059",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
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
          name: "Web Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend & API Development",
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="app-root">
        {children}
      </body>
    </html>
  );
}

