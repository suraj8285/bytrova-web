"use client";
import { useEffect, useState } from "react";

const services = [
  { icon: "🌐", title: "Web Applications", desc: "Premium web platforms built for growth, speed, and long-term scalability." },
  { icon: "📱", title: "Mobile Experiences", desc: "High-engagement cross-platform apps for iOS and Android." },
  { icon: "⚙️", title: "AI & Automation", desc: "Smart workflows and AI features that reduce cost and accelerate value." },
  { icon: "🔒", title: "Enterprise Systems", desc: "Secure backend architecture, API ecosystems, and data-driven applications." },
  { icon: "🎨", title: "Brand & Design", desc: "Modern interfaces, visual identity, and conversion-focused product design." },
  { icon: "📈", title: "Digital Growth", desc: "SEO, performance optimization, and acquisition strategies that scale." },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understand your business, users, and growth targets with precision." },
  { step: "02", title: "Strategy", desc: "Define a clear roadmap with the right mix of product, design, and technology." },
  { step: "03", title: "Design", desc: "Create premium interfaces and experiences that communicate trust." },
  { step: "04", title: "Development", desc: "Ship fast with quality code, stable architecture, and security baked in." },
  { step: "05", title: "Launch", desc: "Deploy, optimize, and support your product for consistent growth." },
];

const expertise = [
  "React", "Next.js", "Node.js", "Flutter", "Figma", "AWS", "AI / ML", "GraphQL",
];

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
    const subject = encodeURIComponent(`New inquiry from ${formData.name || "Website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:bytrova1@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4200);
  };

  const navLinks = ["services", "process", "expertise", "contact"];

  return (
    <>
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="logo">Bytrova</div>
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
            <div className="hero-badge">DIGITIZE YOUR VISION</div>
            <p className="hero-overline">Premium digital experiences with a performance-first mindset.</p>
            <h1>
              We build high-performance web and mobile products<br />
              designed to scale your business.
            </h1>
            <p className="hero-text">
              End-to-end product development, AI automation, and growth strategy for ambitious brands.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Start Project</a>
              <a href="#expertise" className="btn-ghost">View Expertise</a>
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

        <section className="section-dark clients-section" aria-label="Trusted brands">
          <div className="section-inner">
            <div className="section-label">Trusted by</div>
            <div className="clients-strip">
              {['Inspire', 'Pulse', 'Atlas', 'Nova', 'Edge'].map((name) => (
                <div key={name} className="client-logo">{name}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-header">
            <div className="section-label">Services</div>
            <h2 className="section-title">Solutions for every stage of digital growth</h2>
            <p className="section-sub">
              Web, mobile, AI, and marketing products built to move fast, convert effectively, and scale reliably.
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

        <section className="section-dark" id="process">
          <div className="section-header">
            <div className="section-label">The process</div>
            <h2 className="section-title">A clear launch sequence for every engagement</h2>
            <p className="section-sub">
              We follow a disciplined path from discovery through launch and beyond.
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
        </section>

        <section className="section" id="expertise">
          <div className="section-header">
            <div className="section-label">Expertise</div>
            <h2 className="section-title">Technologies we use to build premium digital products</h2>
            <p className="section-sub">
              We pair modern engineering with design and automation to deliver sustainable competitive advantage.
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
            <h2 className="section-title">Ready to digitize your business?</h2>
            <p className="section-sub">
              Tell us about your idea and we’ll respond with a clear next step.
            </p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Let’s connect</h3>
              {[['Email', 'bytrova1@gmail.com'], ['Phone', '+91 84484 14871'], ['Location', 'Delhi, India / Remote'], ['Response', 'Next business day']].map(([label, value]) => (
                <div key={label} className="contact-item">
                  <span className="ci-label">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
              <div className="contact-socials">
                {['X', 'LinkedIn', 'GitHub', 'Behance'].map((site) => (
                  <a key={site} href="#">{site}</a>
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
                  placeholder="Describe your project"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </label>
              {submitted ? (
                <div className="submit-success">✅ Message opened in your email client. Thank you.</div>
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
              {['services', 'process', 'expertise', 'team', 'contact'].map((link) => (
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
