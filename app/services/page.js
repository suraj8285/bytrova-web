import Link from "next/link";
import SitePage from "../components/SitePage";

export const metadata = { title: "Website, App & Software Development Services in Delhi", description: "Explore Bytrova's website, mobile app, web application, SaaS, UI/UX, backend and custom software development services." };

const services = [
  ["01", "Website Development", "Business websites, landing pages, corporate websites and e-commerce platforms.", "/website-development", "Responsive design, CMS and commerce"],
  ["02", "Mobile App Development", "Android and iOS applications for customer experiences and internal business workflows.", "/mobile-app-development", "Flutter, iOS and Android"],
  ["03", "Web Application Development", "Dashboards, portals, SaaS platforms and business web applications.", "/web-application-development", "Portals, dashboards and SaaS"],
  ["04", "Custom Software Development", "Purpose-built software for specific business requirements and processes.", "/custom-software-development", "Workflow tools, integrations and automation"],
  ["05", "SaaS Development", "Plan and build a subscription software product from the first release onward.", "/saas-development", "Product architecture, billing and user accounts"],
  ["06", "UI/UX Design", "Clean, modern and conversion-focused interfaces for digital products.", "/ui-ux-design", "Research, user flows and prototypes"],
  ["07", "Backend & API Development", "Secure APIs, databases, authentication and scalable backend systems.", "/backend-api-development", "APIs, data and system integrations"],
];

export default function ServicesPage() {
  return <SitePage><main id="main"><section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><span className="eyebrow-mark"/> Software development services / Delhi &amp; India</p><h1>Digital products built to <em>move your business forward.</em></h1><p>We design and develop websites, mobile apps, web applications and custom software for startups, entrepreneurs and businesses.</p><Link className="button button-accent" href="/contact">Get a Free Quote <span aria-hidden="true">-&gt;</span></Link></div></section>
    <section className="service-detail-list services-index"><div className="container"><div className="services-index-grid">{services.map(([number, title, description, href, features]) => <article className="services-index-card" key={number}><span>{number} / SERVICE</span><h2>{title}</h2><p>{description}</p><small>{features}</small><Link href={href}>Discuss Your Project <span aria-hidden="true">-&gt;</span></Link></article>)}</div></div></section>
    <section className="process-section"><div className="container"><p className="eyebrow eyebrow-light">Our delivery process</p><h2>Clarity at <em>every milestone.</em></h2><div className="process-grid">{[["01", "Tell us your idea", "Share your requirements, idea or business problem."], ["02", "Get a solution", "We analyse your requirements and recommend an approach."], ["03", "Design & development", "Our team designs and develops your product."], ["04", "Launch & support", "We test, launch and provide ongoing support."]].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="page-cta"><div className="container page-cta-inner"><div><p className="eyebrow">Start with a conversation</p><h2>Have a project idea? <em>Let’s define the scope.</em></h2><p>We’ll understand your goals and requirements, then share an estimate and suggested next steps.</p></div><Link className="button button-dark" href="/contact">Get a Free Quote <span aria-hidden="true">-&gt;</span></Link></div></section></main></SitePage>;
}