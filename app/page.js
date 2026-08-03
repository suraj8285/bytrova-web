"use client";
import { useEffect, useState } from "react";

const services = [
  {
    icon: "🧠",
    title: "Product Strategy",
    desc: "We turn ideas into sharp roadmaps with clear business goals, user value, and launch priorities.",
  },
  {
    icon: "🌐",
    title: "Modern Websites",
    desc: "Fast, elegant, and conversion-friendly web experiences crafted for today’s demanding audiences.",
  },
  {
    icon: "📱",
    title: "App Experiences",
    desc: "Polished mobile and cross-platform experiences that feel premium from the first tap.",
  },
  {
    icon: "⚙️",
    title: "Automation & AI",
    desc: "Smart workflows, AI features, and backend systems that reduce friction and save time.",
  },
  {
    icon: "🎨",
    title: "Visual Identity",
    desc: "Brand systems, UI design, and messaging that make your product instantly more credible.",
  },
  {
    icon: "📈",
    title: "Growth Support",
    desc: "We optimize performance, SEO, and product flow so your launch keeps delivering results.",
  },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "We map your audience, product goals, and differentiators with depth and clarity." },
  { step: "02", title: "Design", desc: "We shape the experience, interface, and content so it feels effortless and premium." },
  { step: "03", title: "Build", desc: "We develop using modern tools and reliable systems that scale with confidence." },
  { step: "04", title: "Launch", desc: "We deploy, refine, and support the experience so your product continues growing." },
];

const expertise = ["React", "Next.js", "Node.js", "Flutter", "Figma", "AWS", "AI / ML", "GraphQL"];

const highlights = [
  { value: "2–6 weeks", label: "Typical launch timeline" },
  { value: "100%", label: "Responsive by default" },
  { value: "24/7", label: "Support mindset" },
];

const trustedLogos = ["client-logo-1.svg", "client-logo-2.svg", "client-logo-3.svg", "client-logo-4.svg"];
const contactPhone = "+919310996758";
const whatsappNumber = "919310996758";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web App",
    budget: "₹25K – ₹75K",
    message: "",
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hi, I’m ${formData.name || "a website visitor"}.%0AEmail: ${formData.email}%0AService: ${formData.service}%0ABudget: ${formData.budget}%0A%0AMessage:%0A${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4200);
  };

  const navLinks = ["services", "process", "expertise", "contact"];

  return (
    <>
      <div className="floating-actions">
        <a className="fab fab-call" href={`tel:${contactPhone}`} title="Call us">
          📞
        </a>
        <a
          className="fab fab-whatsapp"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to discuss a project.")}`}
          target="_blank"
          rel="noreferrer"
          title="Message us on WhatsApp"
        >
          💬
        </a>
      </div>

      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#main" className="logo">Bytrova</a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">Start Project</a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <main id="main">
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-grid" />
          <div className="hero-dots" />
          <div className="hero-lines" />
          <div className="hero-shape hero-shape--one" />
          <div className="hero-shape hero-shape--two" />
          <div className="hero-panel">
            <div className="hero-badge">Premium digital studio</div>
            <p className="hero-overline">Strategy, design, and development for ambitious products</p>
            <h1>Beautiful digital experiences that feel fast, premium, and unforgettable.</h1>
            <p className="hero-text">
              We create modern websites, app experiences, and AI-powered product systems that help brands grow with clarity and confidence.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Start Project</a>
              <a href="#services" className="btn-ghost">Explore Services</a>
            </div>
            <div className="hero-stats">
              {[
                ["04+", "Years", "Experience"],
                ["120+", "Projects", "Delivered"],
                ["95%", "Client", "Retention"],
                ["24h", "Response", "Time"],
              ].map(([value, label, label2]) => (
                <div key={value} className="hero-stat">
                  <div className="stat-num">{value}</div>
                  <div className="stat-label">{label} {label2}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Trusted by founders and teams">
          <div className="section-inner marquee-inner">
            <p className="section-label">Trusted by ambitious teams</p>
            <div className="clients-strip">
              {trustedLogos.map((logo) => (
                <div key={logo} className="client-logo">
                  <img src={`/${logo}`} alt="Trusted partner logo" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-header">
            <div className="section-label">Services</div>
            <h2 className="section-title">Crafted for launches, growth, and long-term momentum</h2>
            <p className="section-sub">
              From early concept to polished rollout, we design product experiences that balance beauty, clarity, and performance.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="svc-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-surface" id="process">
          <div className="section-header">
            <div className="section-label">The process</div>
            <h2 className="section-title">A calm, proven path from idea to impact</h2>
            <p className="section-sub">
              We keep the journey clear, collaborative, and transparent so every decision is intentional.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="process-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="highlight-box">
            <div>
              <p className="section-label">Why teams choose us</p>
              <h3>Thoughtful execution with a premium finish.</h3>
            </div>
            <div className="highlight-list">
              {highlights.map((item) => (
                <div key={item.label} className="highlight-pill">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="section-header">
            <div className="section-label">Expertise</div>
            <h2 className="section-title">Tools and technologies we use to build with confidence</h2>
            <p className="section-sub">
              We blend modern engineering, product thinking, and visual design to create experiences that scale gracefully.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <div key={item} className="expertise-pill">{item}</div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-header">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Ready to build something remarkable?</h2>
            <p className="section-sub">
              Share your idea and we’ll help shape the next step with a thoughtful plan and a clear recommendation.
            </p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Let’s connect</h3>
              {[
                ["Email", "bytrova1@gmail.com"],
                ["Phone", "+919310996758"],
                ["Location", "Delhi, India / Remote"],
              ].map(([label, value]) => (
                <div key={label} className="contact-item">
                  <span className="ci-label">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
              <div className="contact-actions">
               
              </div>
              <div className="contact-socials">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/" },
                  { label: "GitHub", href: "https://github.com/" },
                  { label: "Behance", href: "https://www.behance.net/" },
                ].map((site) => (
                  <a key={site.label} href={site.href} target="_blank" rel="noreferrer">
                    {site.label}
                  </a>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </label>
              </div>
              <label>
                Service
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {['Web App', 'Mobile App', 'AI / Automation', 'Custom Platform', 'Brand & Marketing', 'Other'].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                Budget
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  {['Under ₹25,000', '₹25K – ₹75K', '₹75K – ₹2L', '₹2L+'].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                Project brief
                <textarea
                  rows={4}
                  placeholder="Tell us about your idea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </label>
              {submitted ? (
                <div className="submit-success">Message ready in your email app. Thank you for reaching out.</div>
              ) : (
                <button type="submit" className="submit-btn">Send inquiry</button>
              )}
            </form>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-logo">Bytrova</div>
            <div className="footer-links">
              {['services', 'process', 'expertise', 'contact'].map((link) => (
                <a key={link} href={`#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
              ))}
            </div>
            <p className="footer-copy">© 2026 Bytrova. Built for ambitious digital products.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
