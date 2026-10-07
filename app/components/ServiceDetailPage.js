import Link from "next/link";
import SitePage from "./SitePage";

const details = {
  website: {
    title: "Website Development",
    headline: "A business website that makes the next step clear.",
    intro: "Build a static, dynamic or e-commerce website around your customers, content and business goals.",
    delivery: ["Discovery and agreed page plan", "Responsive design and development", "Contact, booking or enquiry flows as scoped", "Basic on-page SEO and analytics setup where agreed", "Pre-launch checks and handover"],
    features: "Static pages, CMS/dynamic content, product catalogues, contact forms, maps, WhatsApp links and payment gateway setup can be included according to the approved scope.",
    timeline: "Static: 2–3 weeks. Dynamic: 3–6 weeks. E-commerce: 4–8 weeks.",
    price: "From ₹25,000 static · ₹60,000 dynamic · ₹90,000 e-commerce.",
    faqs: [["Will I be able to update the website?", "A CMS can be included when editable content is part of the agreed scope. We’ll explain the editing workflow during handover."], ["Are hosting and domain included?", "Only if listed in the proposal. Account ownership and renewal costs will be clear before launch."], ["Do you guarantee search rankings?", "No. We can include defined technical and on-page SEO tasks, but rankings depend on many factors outside a website build."]],
  },
  app: {
    title: "Mobile App Development",
    headline: "A mobile app built around one useful user journey.",
    intro: "Plan and build Android and iOS app experiences for customers, members or internal teams, starting with a focused scope.",
    delivery: ["User discovery and MVP feature definition", "Screen flows and interface design", "App development for the agreed platform approach", "Backend and API integrations as scoped", "Testing and release preparation"],
    features: "Login, profiles, notifications, bookings, orders, dashboards and selected payment or API integrations can be considered based on product requirements.",
    timeline: "Typical first release: 8–16 weeks, depending on app scope, integrations and review cycles.",
    price: "Focused app MVP from ₹1,50,000. Final estimate depends on scope and platform requirements.",
    faqs: [["Will the app support Android and iOS?", "We’ll recommend a cross-platform or platform-specific approach after reviewing the requirements."], ["Are app-store fees included?", "App-store accounts and third-party fees are separate unless the proposal explicitly includes them."], ["Can we launch an MVP first?", "Yes. We can prioritise a core user journey and plan additional features as later milestones."]],
  },
  software: {
    title: "Custom Software",
    headline: "Software that fits your workflow, not the other way around.",
    intro: "Build a portal, dashboard or internal tool around the processes your team needs to run.",
    delivery: ["Workflow discovery and requirements document", "User role and permission mapping", "Interface and module planning", "Development in agreed milestones", "Testing, deployment planning and handover"],
    features: "Role-based access, dashboards, reports, data workflows, notifications and selected third-party integrations can be scoped for your business.",
    timeline: "Initial release typically 6–14 weeks. Larger multi-module systems may be delivered in phases.",
    price: "Focused custom software MVP from ₹1,00,000.",
    faqs: [["How do you define the project scope?", "We map users, workflows, inputs, outputs and integrations before preparing a written scope."], ["Can software connect to our existing tools?", "Integration feasibility depends on the available APIs, access and vendor requirements; we assess it during discovery."], ["Who owns the delivered software?", "Code, design-file and account ownership are stated in the project agreement before kickoff."]],
  },
  support: {
    title: "Maintenance & Support",
    headline: "Keep your website or software moving after launch.",
    intro: "Choose ongoing support for agreed updates, routine checks, fixes and planned improvements.",
    delivery: ["Support onboarding and access review", "Agreed routine updates and checks", "Bug-fix allowance based on the selected plan", "Support channel and response window", "Monthly work summary"],
    features: "Content updates, dependency updates, uptime checks and small improvements may be included according to plan. New features and emergency work are scoped separately.",
    timeline: "Monthly retainer after onboarding. Response windows and included effort are defined in writing.",
    price: "From ₹4,999/month. Plan limits and exclusions apply.",
    faqs: [["Is a support plan mandatory?", "No, unless your project agreement specifies otherwise. Support plans are optional."], ["What response time is included?", "The response window depends on the chosen plan and is stated in the support agreement."], ["Are new features included?", "Large feature work is estimated separately. Small improvements may fit within a plan allowance if agreed."]],
  },
};

export default function ServiceDetailPage({ serviceKey }) {
  const service = details[serviceKey];
  return <SitePage><main id="main">
    <section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><span className="eyebrow-mark"/> Bytrova services / Delhi NCR</p><h1>{service.headline}</h1><p>{service.intro}</p><Link className="button button-accent" href="/contact?type=business">Get a Free Quote <span aria-hidden="true">-&gt;</span></Link></div></section>
    <section className="service-detail-list"><div className="container service-page-layout"><div><p className="eyebrow">{service.title}</p><h2>What’s included</h2><ul className="service-deliverables">{service.delivery.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="service-feature-panel"><span>FEATURES / SCOPE-DEPENDENT</span><p>{service.features}</p><div><strong>Typical timeline</strong><p>{service.timeline}</p></div><div><strong>Starting price</strong><p>{service.price}</p></div></div></div></section>
    <section className="process-section"><div className="container"><p className="eyebrow eyebrow-light">How we work</p><h2>From first scope to <em>supported launch.</em></h2><div className="process-grid">{[["01", "Discovery", "Goals, users and requirements."], ["02", "Design", "Flows and screens for review."], ["03", "Development", "Build in agreed milestones."], ["04", "Launch", "Testing, release and handover."], ["05", "Support", "Maintenance and next steps."]].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="schoolos-faq"><div className="container faq-layout"><div><p className="eyebrow">{service.title} FAQs</p><h2>Before you <em>get started.</em></h2></div><div className="faq-list">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="page-cta"><div className="container page-cta-inner"><div><p className="eyebrow">Let’s scope your project</p><h2>Tell us what you need. <em>We’ll map the next step.</em></h2></div><Link className="button button-dark" href="/contact?type=business">Get a Free Quote <span aria-hidden="true">-&gt;</span></Link></div></section>
  </main></SitePage>;
}