import { notFound } from "next/navigation";
import ServiceDetailPage from "../components/ServiceDetailPage";

const servicePages = {
  "website-development": {
    key: "website",
    title: "Website Development Company in Delhi",
    description: "Bytrova builds responsive business websites, landing pages, corporate websites and e-commerce platforms in Delhi and across India.",
  },
  "mobile-app-development": {
    key: "app",
    title: "Mobile App Development Company in Delhi",
    description: "Plan and build Android and iOS apps with Bytrova, including Flutter app development for customers and business teams.",
  },
  "web-application-development": {
    key: "webapp",
    title: "Web Application Development",
    description: "Custom web application development for dashboards, portals, SaaS platforms and business workflows.",
  },
  "custom-software-development": {
    key: "software",
    title: "Custom Software Development Company",
    description: "Custom software development for business requirements, workflows, portals, dashboards and automation.",
  },
  "saas-development": {
    key: "saas",
    title: "SaaS Development Company",
    description: "Build a SaaS product with Bytrova, from product discovery and MVP scope to development and launch.",
  },
  "ui-ux-design": {
    key: "uiux",
    title: "UI/UX Design for Websites and Software",
    description: "User flows, interfaces and prototypes for websites, mobile apps and custom software products.",
  },
  "backend-api-development": {
    key: "backend",
    title: "Backend & API Development",
    description: "Secure backend systems, APIs, databases, authentication and integrations for digital products.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(servicePages).map((serviceSlug) => ({ serviceSlug }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  const service = servicePages[serviceSlug];
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/${serviceSlug}` },
    openGraph: { title: service.title, description: service.description },
  };
}

export default async function ServicePage({ params }) {
  const { serviceSlug } = await params;
  const service = servicePages[serviceSlug];
  if (!service) notFound();

  return <ServiceDetailPage serviceKey={service.key} />;
}