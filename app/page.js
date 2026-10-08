import Link from "next/link";
import SitePage from "./components/SitePage";
import ContactForm from "./components/ContactForm";
import { portfolioProjects } from "./portfolio/projects";

export const metadata = {
  title: "Software Development Company in Delhi | Bytrova",
  description:
    "Bytrova builds high-performance websites, mobile apps, web applications and custom software for businesses in Delhi and across India. Get a free project quote.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bytrova | Websites, Apps & Custom Software",
    description: "Tell us what you want to build. Bytrova designs and develops websites, mobile apps and custom software for businesses.",
    url: "https://www.bytrova.co.in/",
  },
};

const projects = portfolioProjects.slice(0, 3);

const services = [
  { number: "01", title: "Website Development", text: "Business websites, landing pages, corporate sites and e-commerce platforms.", features: "Responsive design · CMS · E-commerce", href: "/website-development" },
  { number: "02", title: "Mobile App Development", text: "Android and iOS applications built around your customers and workflows.", features: "Flutter · iOS · Android", href: "/mobile-app-development" },
  { number: "03", title: "Web Application Development", text: "Dashboards, portals, SaaS platforms and business web applications.", features: "Portals · SaaS · Dashboards", href: "/web-application-development" },
  { number: "04", title: "Custom Software Development", text: "Purpose-built software shaped around your business requirements.", features: "Workflow tools · Integrations · Automation", href: "/custom-software-development" },
  { number: "05", title: "UI/UX Design", text: "Clean, modern interfaces designed to make important tasks feel simple.", features: "Research · User flows · Prototypes", href: "/ui-ux-design" },
  { number: "06", title: "Backend & API Development", text: "Secure APIs, databases, authentication and scalable backend systems.", features: "APIs · Databases · Integrations", href: "/backend-api-development" },
];

const process = [
  ["01", "Tell Us Your Idea", "Share your requirements, idea or business problem."],
  ["02", "Get a Solution", "We analyse your requirements and suggest the right technology and approach."],
  ["03", "Design & Development", "Our team designs and develops your product in clear milestones."],
  ["04", "Launch & Support", "We test, launch and provide ongoing support."],
];

export default function Home() {
  return (
    <SitePage>
      <main id="main" className="bytrova-home">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="container home-hero-layout">
            <div className="home-hero-copy">
              <p className="eyebrow"><span className="eyebrow-mark" /> Software development for ambitious businesses</p>
              <h1 id="hero-title">Turn Your Idea Into <em>Powerful Software</em></h1>
              <p className="hero-lede">Bytrova builds high-performance websites, mobile apps, web applications and custom software tailored to your business.</p>
              <div className="hero-actions">
                <a className="button button-accent" href="#contact">Get a Free Quote <span aria-hidden="true">-&gt;</span></a>
                <a className="button button-outline" href="#projects">View Our Work <span aria-hidden="true">-&gt;</span></a>
              </div>
              <div className="hero-trust"><span>Have an idea? Tell us what you want to build.</span></div>
            </div>

            <div className="hero-product-visual" aria-label="Illustrative web application interface">
              <div className="visual-window-bar"><span /><span /><span /><p>YOUR NEXT PRODUCT</p><b>BUILT WITH BYTROVA</b></div>
              <div className="visual-workspace"><aside><strong>B.</strong><i /><i /><i /><i /></aside><div className="visual-main"><div className="visual-welcome"><span><small>PROJECT WORKSPACE</small><strong>Everything, in one place.</strong></span><b>↗</b></div><div className="visual-overview"><article><small>PRODUCT DESIGN</small><strong>Thoughtful by default</strong><span>Clear journeys for the people who use it.</span></article><article><small>ENGINEERING</small><strong>Ready to grow</strong><span>Reliable foundations for what comes next.</span></article></div><div className="visual-task-list"><div><strong>In progress</strong><span>01 / 03</span></div><p><i /> Discovery &amp; product scope <b>DONE</b></p><p><i /> Interface design <b>IN REVIEW</b></p><p><i /> Development &amp; launch <b>UP NEXT</b></p></div></div></div>
            </div>
          </div>
        </section>

        <section className="home-section services-home" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading-row"><div><p className="eyebrow">What we build</p><h2 id="services-title">The right team for your <em>next digital product.</em></h2><p>From first idea to a product your team can use every day, bring the whole build under one roof.</p></div><Link className="text-link" href="/services">Explore all services <span aria-hidden="true">-&gt;</span></Link></div>
            <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-card-top"><span>{service.number}</span><span>BYTROVA / SERVICES</span></div><h3>{service.title}</h3><p>{service.text}</p><p className="service-features">{service.features}</p><Link href={service.href}>Discuss Your Project <span aria-hidden="true">-&gt;</span></Link></article>)}</div>
          </div>
        </section>

        <section className="home-projects home-section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading-row"><div><p className="eyebrow">Selected work &amp; concepts</p><h2 id="projects-title">A closer look at what software <em>can do.</em></h2><p>These self-initiated concepts show how we approach product problems. They are not client projects or shipped products.</p></div><Link className="text-link" href="/portfolio">View Our Work <span aria-hidden="true">-&gt;</span></Link></div>
            <div className="home-project-grid">{projects.map((project) => <article className="home-project-card" key={project.slug}><div className={`concept-mockup ${project.theme}`} aria-hidden="true"><div className="mockup-top"><span>{project.name.toLowerCase()}.app</span><i /><i /><i /></div><div className="mockup-screen"><small>{project.label.toUpperCase()} / CONCEPT DEMO</small><strong>{project.preview}</strong><span /><span /><b>{project.action.toUpperCase()} ↗</b></div></div><div className="home-project-copy"><p className="project-kicker">{project.type} / Self-initiated</p><h3>{project.name}</h3><p><strong>Problem:</strong> {project.problem}</p><p><strong>Solution:</strong> {project.solution}</p><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><p className="project-technology"><strong>Technology:</strong> {project.technology}</p><Link href={`/portfolio/${project.slug}`}>View Case Study <span aria-hidden="true">-&gt;</span></Link></div></article>)}</div>
            <p className="concept-disclaimer">Project concepts are illustrative portfolio work, not commissioned client engagements. Technology is selected to fit each approved project scope.</p>
          </div>
        </section>

        <section className="project-cta-band"><div className="container project-cta-inner"><div><p className="eyebrow eyebrow-light">Have a project in mind?</p><h2>Let&apos;s make your idea <em>work in the real world.</em></h2><p>Tell us what you want to build and we&apos;ll help you turn the idea into a working product.</p></div><a className="button button-accent" href="#contact">Start Your Project <span aria-hidden="true">-&gt;</span></a></div></section>

        <section className="home-section process-home" aria-labelledby="process-title">
          <div className="container"><div className="section-heading-row"><div><p className="eyebrow">How it works</p><h2 id="process-title">A clear path from idea <em>to launch.</em></h2></div></div><div className="process-home-grid">{process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </section>

        <section className="home-section why-home" id="why-bytrova" aria-labelledby="why-title">
          <div className="container">
            <div className="why-home-layout"><div className="why-intro"><p className="eyebrow">Why Bytrova</p><h2 id="why-title">Software that fits <em>your business.</em></h2><p>We help startups, entrepreneurs and businesses turn ideas and business processes into digital products, with clear communication from the first conversation through launch.</p></div><ul className="why-list"><li>Custom-built around your requirements</li><li>Modern, maintainable technologies</li><li>Scalable architecture from the start</li><li>Transparent scope and communication</li><li>Clean, conversion-focused UI/UX</li><li>Business-focused development</li><li>Post-launch support available</li></ul></div>
          </div>
        </section>

        <section className="home-section about-home" id="about" aria-labelledby="about-title">
          <div className="container about-home-layout"><div><p className="eyebrow">About Bytrova</p><h2 id="about-title">A software development company for ideas with <em>somewhere to go.</em></h2></div><div className="about-home-copy"><p>Bytrova helps startups, entrepreneurs and businesses transform ideas and business processes into digital products. We build websites, mobile apps, web applications and custom software around the people who will use them.</p><p>We start by understanding the problem, agree on a practical scope, and work with you through design, development, launch and support.</p><Link className="text-link" href="/about">More about Bytrova <span aria-hidden="true">-&gt;</span></Link></div></div>
        </section>

        <section className="demo-section home-contact" id="contact" aria-labelledby="contact-title">
          <div className="container demo-layout">
            <div className="demo-copy"><p className="eyebrow eyebrow-light">Start a conversation</p><h2 id="contact-title">Have a project <em>in mind?</em></h2><p>Tell us what you want to build and we&apos;ll help you turn the idea into a working product.</p><div className="home-contact-details"><p><span>Email</span><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a></p><p><span>Phone</span><a href="tel:+918285234325">+91 8285234325</a></p><a className="button button-light whatsapp-cta" href="https://wa.me/918285234325" target="_blank" rel="noreferrer">Chat With Us on WhatsApp <span aria-hidden="true">-&gt;</span></a></div></div>
            <div className="demo-form-wrap"><h3 className="form-title">Get a Free Quote</h3><ContactForm variant="home" /></div>
          </div>
        </section>
      </main>
    </SitePage>
  );
}