"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", service: "Web App Development",
    budget: "₹25K – ₹75K", message: ""
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry from ${formData.name || 'Website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service}\n` +
      `Budget: ${formData.budget}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:bytrova1@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const services = [
    { icon: "🌐", title: "Web App Development", desc: "Custom web applications using React, Next.js, and modern frameworks — responsive, fast, and production-ready." },
    { icon: "📱", title: "Mobile Development", desc: "Cross-platform mobile apps with Flutter and React Native — one codebase, native experience on all devices." },
    { icon: "🔌", title: "API & Backend", desc: "Robust REST and GraphQL APIs, database architecture, authentication systems, and cloud infrastructure." },
    { icon: "🤖", title: "AI Integration", desc: "Intelligent features for your product — chatbots, automation, data analysis, and ML pipelines." },
    { icon: "🎨", title: "UI/UX Design", desc: "Clean, user-centric interfaces in Figma — wireframes, prototypes, and complete design systems." },
    { icon: "☁️", title: "Cloud & DevOps", desc: "Deployment, CI/CD pipelines, server management on AWS, GCP, and VPS platforms." },
  ];

  const projects = [
    { emoji: "🏦", bg: "linear-gradient(135deg,#1a1040,#2a1a60)", title: "FinTrack Pro", desc: "Full-stack financial dashboard with real-time analytics and multi-account management for a fintech startup.", tags: ["React", "Node.js", "PostgreSQL"] },
    { emoji: "📦", bg: "linear-gradient(135deg,#0a1a40,#0a2a60)", title: "LogiDesk", desc: "Supply chain management platform with live GPS tracking, inventory control, and automated reporting.", tags: ["Flutter", "Firebase", "Maps API"] },
    { emoji: "🎓", bg: "linear-gradient(135deg,#1a0a40,#3a1080)", title: "EduVerse LMS", desc: "Learning management system with video streaming, quizzes, certificates, and instructor dashboards.", tags: ["Next.js", "AWS S3", "Redis"] },
  ];

  const plans = [
    {
      name: "Starter", price: "₹25K", per: "/ project", featured: false,
      desc: "Perfect for small tools, landing pages, or MVP builds.",
      features: ["Up to 5 pages / screens", "Basic backend + database", "1 month support", "Source code handoff"],
    },
    {
      name: "Growth", price: "₹75K", per: "/ project", featured: true,
      desc: "For SaaS products, dashboards, and full-stack web apps.",
      features: ["Unlimited screens", "REST API + Auth system", "Admin panel included", "3 months support", "Deployment included"],
    },
    {
      name: "Enterprise", price: "Custom", per: "", featured: false,
      desc: "Large-scale systems, AI integrations, or long-term dev partnerships.",
      features: ["Dedicated dev team", "AI & ML features", "Priority support", "NDA & contracts", "Monthly retainer option"],
    },
  ];

  const whyUs = [
    { icon: "⚡", title: "Fast Delivery", desc: "We ship MVPs in weeks, not months. Speed without cutting corners." },
    { icon: "🔒", title: "Secure by Default", desc: "Security baked in from day one — auth, encryption, best practices." },
    { icon: "📞", title: "Direct Communication", desc: "No middlemen. You talk directly to the developer building your product." },
    { icon: "🔄", title: "Agile Process", desc: "Weekly updates, iterative builds, and full transparency throughout." },
  ];

  const navLinks = ["services", "portfolio", "pricing", "contact"];

  return (
    <>
      {/* NAV */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="logo">Bytrova</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map(s => (
            <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">Get Started</a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <main id="main">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-dots" />
        <div className="hero-lines" />
        <div className="hero-shape hero-shape--one" />
        <div className="hero-shape hero-shape--two" />
        <div className="hero-panel">
          <div className="hero-badge">Trusted technology partner for growth-stage businesses</div>
          <p className="hero-overline">Enterprise software. Modern delivery.</p>
          <h1>
            We build software that<br />
            <span className="gradient-text">scales with your business.</span>
          </h1>
          <p className="hero-text">
            Bytrova delivers end-to-end web and mobile products with a focus on reliability,
            performance, and measurable growth for startups and enterprise teams.
          </p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn-primary">View Our Work →</a>
            <a href="#contact" className="btn-ghost">Let&apos;s Talk</a>
          </div>
          <div className="hero-stats">
            {[["50+", "Projects Delivered"], ["30+", "Happy Clients"], ["5★", "Avg. Rating"], ["3yr", "Experience"]].map(([num, label]) => (
              <div key={label} className="hero-stat">
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS / TRUSTED BY */}
      <section className="section-dark" aria-label="Trusted by" style={{ padding: '2rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div className="section-label">Trusted By</div>
          <p className="section-sub" style={{ marginTop: '.5rem', marginBottom: '1.25rem' }}>Global organisations and startups trust us to deliver reliable software.</p>
          <div className="clients-strip" aria-hidden="false">
            <img src="/client-logo-1.svg" alt="Linde" className="client-logo" />
            <img src="/client-logo-2.svg" alt="Aptos" className="client-logo" />
            <img src="/client-logo-3.svg" alt="Harley" className="client-logo" />
            <img src="/client-logo-4.svg" alt="LogiDesk" className="client-logo" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <div className="section-dark" id="services">
        <section>
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Services Built for<br />Modern Businesses</h2>
            <p className="section-sub">From MVPs to full-scale platforms, we cover the entire software development lifecycle.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                <div className="svc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="section-header">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">A glimpse of what we&apos;ve built for clients across various industries.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map(p => (
            <div key={p.title} className="project-card">
              <div className="project-thumb" style={{ background: p.bg }}>
                {p.emoji}
                <div className="project-thumb-overlay" />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <div className="section-dark">
        <section id="case-studies">
          <div className="section-header">
            <div className="section-label">Our Work</div>
            <h2 className="section-title">Selected Case Studies</h2>
            <p className="section-sub">Real-world projects that delivered measurable business results.</p>
          </div>
          <div className="portfolio-grid">
            <div className="project-card case-card">
              <div className="project-thumb" style={{ background: 'linear-gradient(135deg,#1a1040,#2a1a60)' }}>🏦</div>
              <div className="project-body">
                <h3>FinTrack Pro</h3>
                <p>Financial dashboard with real-time analytics and multi-account management — improved retention by 24%.</p>
                <a href="#portfolio" className="btn-ghost" style={{ marginTop: '1rem' }}>Read Case Study</a>
              </div>
            </div>
            <div className="project-card case-card">
              <div className="project-thumb" style={{ background: 'linear-gradient(135deg,#0a1a40,#0a2a60)' }}>📦</div>
              <div className="project-body">
                <h3>LogiDesk</h3>
                <p>Supply chain platform with live-tracking and automated reporting — cut delivery errors by 38%.</p>
                <a href="#portfolio" className="btn-ghost" style={{ marginTop: '1rem' }}>Read Case Study</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHY US */}
      <div className="section-dark">
        <section>
          <div className="section-header">
            <div className="section-label">Why Bytrova</div>
            <h2 className="section-title">Built Different</h2>
            <p className="section-sub">We&apos;re not just coders — we&apos;re product thinkers who care about your business outcomes.</p>
          </div>
          <div className="why-grid">
            {whyUs.map(w => (
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* PRICING */}
      <section id="pricing">
        <div className="section-header">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Transparent Pricing,<br />No Surprises</h2>
          <p className="section-sub">Choose a plan that fits your project. Custom pricing available for enterprise needs.</p>
        </div>
        <div className="pricing-grid">
          {plans.map(pl => (
            <div key={pl.name} className={`price-card ${pl.featured ? "featured" : ""}`}>
              {pl.featured && <div className="plan-badge">⭐ Most Popular</div>}
              <div className="plan-name">{pl.name}</div>
              <div className="plan-price">
                {pl.price} <span>{pl.per}</span>
              </div>
              <p className="plan-desc">{pl.desc}</p>
              <ul className="plan-features">
                {pl.features.map(f => (
                  <li key={f}><span className="check">✦</span>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`plan-btn ${pl.featured ? "fill" : "outline"}`}>
                {pl.name === "Enterprise" ? "Contact Us" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <div className="section-dark" id="contact">
        <section>
          <div className="section-header">
            <div className="section-label">Contact</div>
            <h2 className="section-title">Let&apos;s Build Together</h2>
            <p className="section-sub">Have a project in mind? Drop us a message and we&apos;ll get back within 24 hours.</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              {[['📧', 'bytrova1@gmail.com'], ['📞', '+91 82852 34325'], ['📍', 'Delhi, India (Remote-first)'], ['🕐', 'Mon–Sat, 10am – 7pm IST']].map(([icon, text]) => (
                <div key={text} className="contact-item">
                  <div className="ci-icon">{icon}</div>
                  <span>{text}</span>
                </div>
              ))}
              <div className="contact-socials">
                {["𝕏", "in", "gh", "be"].map(s => (
                  <a key={s} href="#" className="social-btn">{s}</a>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Rahul Sharma" value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="rahul@company.com" value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                </div>
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
                  {["Web App Development", "Mobile App", "API / Backend", "AI Integration", "UI/UX Design", "Other"].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Project Budget</label>
                <select value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })}>
                  {["Under ₹25,000", "₹25K – ₹75K", "₹75K – ₹2L", "₹2L+"].map(b => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Tell us about your project</label>
                <textarea rows={4} placeholder="Briefly describe what you need..." value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })} required />
              </div>
              {submitted ? (
                <div className="submit-success">✅ Message sent! We&apos;ll get back to you within 24 hours.</div>
              ) : (
                <button type="submit" className="submit-btn">Send Message →</button>
              )}
            </form>
          </div>
        </section>
      </div>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-logo">Bytrova</div>
          <div className="footer-links">
            {navLinks.map(s => (
              <a key={s} href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
            ))}
          </div>
          <p className="footer-copy">© 2025 Bytrova. Built with 💜 in India.</p>
        </div>
      </footer>
    </>
  );
}
