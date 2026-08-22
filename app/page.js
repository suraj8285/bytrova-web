"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const servicesList = [
  {
    num: "01.",
    title: "Mobile App Development",
    desc: "Native iOS & Android mobile apps engineered with Flutter & React Native for fast performance, offline readiness, and fluid UI experience.",
  },
  {
    num: "02.",
    title: "Website Development",
    desc: "SEO-friendly, ultra-fast web applications built using Next.js & React to ensure top Google search rankings and high conversion rates.",
  },
  {
    num: "03.",
    title: "Custom Software Development",
    desc: "Tailor-made software solutions designed specifically to automate business workflows, simplify operations, and scale with your enterprise.",
  },
  {
    num: "04.",
    title: "ERP Development",
    desc: "Comprehensive ERP systems for inventory control, human resources, accounting, logistics, and real-time business intelligence reporting.",
  },
  {
    num: "05.",
    title: "CRM Development",
    desc: "Smart Customer Relationship Management software featuring automated lead pipelines, customer analytics, and communication tools.",
  },
  {
    num: "06.",
    title: "E-commerce Development",
    desc: "High-converting online store solutions integrated with secure Indian & global payment gateways, order tracking, and mobile optimization.",
  },
  {
    num: "07.",
    title: "UI/UX Design",
    desc: "Modern visual interface design, interactive prototypes, and design systems crafted for effortless usability and premium user experience.",
  },
  {
    num: "08.",
    title: "API Development",
    desc: "Robust REST & GraphQL APIs, cloud microservices, database architecture, and seamless third-party software integrations.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover & Strategy",
    desc: "We analyze your business goals, target keywords, and technical needs to construct a clear blueprint.",
  },
  {
    step: "02",
    title: "UI/UX Architecture",
    desc: "We create interactive wireframes, visual systems, and user flows that delight users and drive engagement.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "We write clean, modular code with modern frameworks, rigorous testing, and high-performance databases.",
  },
  {
    step: "04",
    title: "Launch & SEO Growth",
    desc: "We deploy on secure cloud infrastructure, optimize SEO metadata, and provide ongoing updates and support.",
  },
];

const statsData = [
  { value: "120+", label: "Projects Delivered", desc: "Websites & custom software solutions" },
  { value: "98%", label: "Client Retention", desc: "Long-term client partnerships" },
  { value: "15+", label: "Services Offered", desc: "Across mobile, web & enterprise" },
  { value: "24/7", label: "Dedicated Support", desc: "Continuous monitoring & maintenance" },
];

const contactPhone = "+919310996758";
const whatsappNumber = "919310996758";
const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=New+Delhi,+Delhi+110059";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
    website: "",
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          website: formData.website,
        }),
      });

      if (!response.ok) {
        throw new Error("Inquiry submission failed");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Website Development",
        message: "",
        website: "",
      });
    } catch {
      setSubmitError("Unable to send your inquiry right now. Please email us directly at bytrova1@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bytrova-page">
      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <a className="fab fab-call" href={`tel:${contactPhone}`} title="Call Bytrova">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.2em" width="1.2em">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
          </svg>
        </a>
        <a
          className="fab fab-whatsapp"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Bytrova Team, I'd like to discuss a project.")}`}
          target="_blank"
          rel="noreferrer"
          title="Chat on WhatsApp"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.3em" width="1.3em">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </a>
      </div>

      {/* Secondary Top Header */}
      <header className="top-header">
        <div className="container top-header-content">
          <div className="top-info-list">
            <span className="top-info-item">
              <span className="top-bullet" /> Working hours: <time dateTime="08:00-22:00">Monday-Sunday: 8am-10pm</time>
            </span>
            <span className="top-info-item">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
              <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="top-link">
                New Delhi, Delhi, 110059
              </a>
            </span>
          </div>
        </div>
      </header>

      {/* Main Navbar Header */}
      <header className={`main-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-container">
          <Link href="/" className="navbar-brand">
            <span className="logo-text">bytrova</span>
          </Link>

          <nav id="primary-navigation" className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}>
            <Link href="/" className="nav-link active" onClick={() => setMenuOpen(false)}>Home</Link>
            <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Products & Services</a>
            <a href="#process" className="nav-link" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <div className="navbar-actions">
            <a href="#contact" className="btn btn-primary btn-sm d-none-mobile">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              <span>Contact</span>
            </a>
            <button className="nav-toggler" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Navigation" aria-expanded={menuOpen} aria-controls="primary-navigation">
              <span className={`toggler-line ${menuOpen ? "open" : ""}`} />
              <span className={`toggler-line ${menuOpen ? "open" : ""}`} />
              <span className={`toggler-line ${menuOpen ? "open" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="hero-section">
          {/* Decorative Vector Graphic Matching bytrova.grexa.site */}
          <div className="hero-decoration-left d-none-mobile">
            <svg width="270" height="257" viewBox="0 0 270 257" fill="none">
              <g opacity="0.2">
                <path d="M103.343 147.898C102.038 147.549 100.998 146.901 100.346 145.988C99.1801 144.331 99.5402 142.003 101.342 139.612L120.854 113.762C123.516 110.231 128.869 107.29 133.819 106.639C136.638 106.261 139.005 106.684 140.488 107.846L158.81 122.087C160.055 123.053 160.558 124.427 160.284 126.041C159.591 129.809 154.693 134.006 148.858 135.79L111.03 147.375C108.066 148.294 105.362 148.439 103.343 147.898Z" fill="currentColor"/>
                <path d="M101.655 151.242C100.424 150.912 99.4203 150.327 98.7234 149.481C97.3788 147.803 97.5354 145.446 99.2353 142.844L117.863 114.094C122.177 107.447 133.69 103.178 138.757 106.328L160.527 119.911C162.02 120.839 162.72 122.265 162.543 124.01C162.155 128.018 157.21 132.782 151.052 135.086L110.661 150.228C107.22 151.547 104.019 151.875 101.655 151.242Z" fill="currentColor"/>
                <path d="M100.132 154.866C98.9746 154.556 98.0311 154.04 97.3391 153.274C95.8024 151.624 95.7998 149.172 97.3111 146.387L114.628 114.65C118.619 107.337 130.807 101.931 136.724 104.86L162.207 117.488C163.979 118.358 164.901 119.844 164.863 121.758C164.767 126.055 159.988 131.286 153.454 134.201L110.679 153.317C106.7 155.071 102.889 155.605 100.132 154.866Z" fill="currentColor"/>
              </g>
            </svg>
          </div>
          <div className="hero-decoration-right d-none-mobile">
            <svg width="775" height="768" viewBox="0 0 775 768" fill="none">
              <path opacity="0.9" d="M557.141 366.249C631.32 292.924 751.586 292.924 825.765 366.249C899.943 439.574 899.943 558.456 825.765 631.78C751.586 705.104 631.32 705.104 557.142 631.78C482.963 558.455 482.963 439.573 557.141 366.249Z" fill="url(#hero_grad1)"/>
              <path opacity="0.54" d="M55.6337 678.994C129.812 605.669 250.078 605.669 324.257 678.994C398.435 752.318 398.435 871.2 324.257 944.524C250.078 1017.85 129.812 1017.85 55.6345 944.524C-18.5447 871.2 -18.5447 752.318 55.6337 678.994Z" fill="url(#hero_grad2)"/>
              <defs>
                <linearGradient id="hero_grad1" x1="888" y1="499" x2="519" y2="499" gradientUnits="userSpaceOnUse">
                  <stop offset="0.2" stopColor="#000000"/>
                  <stop offset="1" stopColor="#000000" stopOpacity="0.05"/>
                </linearGradient>
                <linearGradient id="hero_grad2" x1="387" y1="811" x2="18" y2="811" gradientUnits="userSpaceOnUse">
                  <stop offset="0.2" stopColor="#000000"/>
                  <stop offset="1" stopColor="#000000" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container hero-container">
            <div className="hero-content">
              <div className="hero-kicker"><span className="hero-kicker-dot" /> bytrova / digital product studio</div>
              <h1 className="hero-heading">Build boldly.<br /><span>Scale beautifully.</span></h1>
              <p className="hero-description">
                Bytrova is a software development company based in Delhi, specializing in custom software development, website development, mobile app development, ERP solutions, CRM software, UI/UX design, and digital transformation services for businesses across India.
              </p>
              <div className="hero-btn-group">
                <a href="#contact" className="btn btn-primary btn-lg">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.1em" width="1.1em">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  <span>Contact</span>
                </a>
                <a href="#services" className="btn btn-primary-soft btn-lg">
                  Explore Services
                </a>
              </div>
              <div className="hero-proof-row">
                <span className="hero-proof-label">Trusted for</span>
                <span>Web platforms</span>
                <span>Mobile products</span>
                <span>Business systems</span>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-glow" />
              <div className="hero-dashboard">
                <div className="dashboard-topline"><span className="dashboard-brand">bt</span><span className="dashboard-status"><i /> Live systems</span></div>
                <div className="dashboard-copy">Make progress<br /><strong>visible.</strong></div>
                <div className="dashboard-chart"><span className="chart-line chart-line-one" /><span className="chart-line chart-line-two" /><span className="chart-bar chart-bar-one" /><span className="chart-bar chart-bar-two" /><span className="chart-bar chart-bar-three" /><span className="chart-bar chart-bar-four" /></div>
                <div className="dashboard-bottom"><span>Product health</span><strong>94.8%</strong></div>
              </div>
              <div className="hero-float-card hero-float-card-top"><span>01</span><strong>Strategy</strong><small>Clear direction</small></div>
              <div className="hero-float-card hero-float-card-bottom"><span className="float-check">✓</span><div><strong>Launch ready</strong><small>Built to grow with you</small></div></div>
            </div>
          </div>
        </section>

        {/* Services Section (Dark Theme matching bytrova.grexa.site) */}
        <section className="services-section bg-dark text-white" id="services">
          <div className="services-bg-pattern">
            <svg width="768.8" height="1386" viewBox="0 0 768.8 1386" style={{ opacity: 0.07 }} xmlSpace="preserve">
              <path fill="#ffffff" d="M647.6,748.4c1.9,6,3.3,12.2,3.8,18.4c2.2,18.9-0.7,38.9-9.1,61.5c-15.6,41.9-47.8,85.3-81.6,131.5 c-46.1,63.1-94.5,128.4-108.1,199.1c-15.7,80.6,17.2,154.5,101.1,226.1l-0.4,0.4c-188.1-160.7-84.4-301.8,7.3-426.2 c33.9-46,65.8-89.6,81.4-131.2c17.5-46.8,11.8-84.9-18-119.6c-39.6-46.6-86.5-86.9-135.7-129.3C339.1,450.3,184.9,317.3,240.6,4.6 l0.6,0.1C185.7,317,339.7,450.1,488.7,578.7c49.3,42.7,95.8,82.8,135.8,129.6C635.5,721,643.1,734.2,647.6,748.4z"/>
            </svg>
          </div>

          <div className="container relative-z">
            <div className="section-header text-center">
              <span className="badge-pill bg-light-translucent">
                🚀 Discover what we offer
              </span>
              <h2 className="section-heading text-white mt-3">
                Software Company Services by bytrova
              </h2>
              <p className="section-subheading text-light-muted">
                From bespoke mobile applications to complex enterprise ERP solutions, we craft modern digital products engineered for scalability, speed, and top search engine rankings.
              </p>
            </div>

            <div className="services-grid">
              {servicesList.map((svc) => (
                <div className="service-card-item" key={svc.title}>
                  <div className="service-card-inner bg-light-card">
                    <div className="service-num-badge">
                      <span className="service-num-text">{svc.num}</span>
                    </div>
                    <h3 className="service-title">{svc.title}</h3>
                    <p className="service-desc">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proven Success / Stats Section */}
        <section className="stats-section" id="about">
          <div className="container">
            <div className="section-header text-center">
              <span className="badge-pill bg-light-badge">
                🌟 Trusted by our customers
              </span>
              <h2 className="section-heading mt-3">
                Proven Success in Numbers
              </h2>
              <p className="section-subheading text-muted">
                Delivering high-performance software, websites, and mobile applications across Delhi NCR and globally.
              </p>
            </div>

            <div className="stats-grid">
              {statsData.map((st) => (
                <div className="stat-card" key={st.label}>
                  <div className="stat-value-group">
                    <h3 className="stat-value">{st.value}</h3>
                  </div>
                  <h4 className="stat-label">{st.label}</h4>
                  <p className="stat-desc">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section" id="process">
          <div className="container">
            <div className="section-header text-center">
              <span className="badge-pill bg-light-badge">
                ⚡ Development Process
              </span>
              <h2 className="section-heading mt-3">
                A Clear Path From Concept To Market
              </h2>
              <p className="section-subheading text-muted">
                We combine technical precision with SEO strategy to launch products that rank high and perform seamlessly.
              </p>
            </div>

            <div className="process-grid">
              {processSteps.map((p) => (
                <div className="process-card-item" key={p.step}>
                  <span className="process-step-num">{p.step}</span>
                  <h3 className="process-card-title">{p.title}</h3>
                  <p className="process-card-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Banner & Inquiry Section */}
        <section className="contact-section bg-dark text-white" id="contact">
          <div className="container relative-z">
            <div className="contact-card-box bg-primary-box">
              <div className="contact-box-grid">
                <div className="contact-box-info">
                  <h2 className="contact-box-title">Get in Touch with Bytrova</h2>
                  <p className="contact-box-sub">
                    Looking for the best software development company in Delhi? Reach out today to discuss your website, mobile app, or custom ERP/CRM project.
                  </p>
                  
                  <div className="contact-details-list">
                    <div className="contact-detail-item">
                      <span className="detail-icon">📍</span>
                      <div>
                        <strong>Address:</strong>
                        <p>New Delhi, Delhi 110059, India</p>
                      </div>
                    </div>
                    <div className="contact-detail-item">
                      <span className="detail-icon">📞</span>
                      <div>
                        <strong>Phone / WhatsApp:</strong>
                        <p><a href={`tel:${contactPhone}`} className="text-white">{contactPhone}</a></p>
                      </div>
                    </div>
                    <div className="contact-detail-item">
                      <span className="detail-icon">✉️</span>
                      <div>
                        <strong>Email:</strong>
                        <p><a href="mailto:bytrova1@gmail.com" className="text-white">bytrova1@gmail.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-box-form">
                  <form className="inquiry-form" onSubmit={handleSubmit}>
                    <input name="website" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} tabIndex="-1" autoComplete="off" aria-hidden="true" className="form-honeypot" />
                    <h3 className="form-heading">Send Project Inquiry</h3>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="rahul@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Required Service</label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="ERP Development">ERP Development</option>
                        <option value="CRM Development">CRM Development</option>
                        <option value="E-commerce Development">E-commerce Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="API Development">API Development</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Project Requirements</label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Briefly describe your requirements or ideas..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    {submitted ? (
                      <div className="form-success-alert" role="status" aria-live="polite">
                        Thank you! Your inquiry has been sent to our team.
                      </div>
                    ) : (
                      <>
                        {submitError && <div className="form-error-alert" role="alert">{submitError}</div>}
                        <button type="submit" className="btn btn-dark-submit btn-block" disabled={submitting}>
                          {submitting ? "Sending Inquiry..." : "Submit Inquiry & Contact Us"}
                        </button>
                      </>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col-about">
              <Link href="/" className="footer-logo">bytrova</Link>
              <p className="footer-about-text">
                Bytrova is a custom software development company based in Delhi, delivering top-tier website development, mobile apps, ERP solutions, and CRM systems designed for business growth and search ranking dominance.
              </p>
            </div>
            <div className="footer-col-links">
              <h4 className="footer-col-title">Services</h4>
              <ul className="footer-nav-list">
                <li><a href="#services">Mobile App Development</a></li>
                <li><a href="#services">Website Development</a></li>
                <li><a href="#services">Custom Software</a></li>
                <li><a href="#services">ERP & CRM Solutions</a></li>
                <li><a href="#services">UI/UX Design</a></li>
              </ul>
            </div>
            <div className="footer-col-links">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-nav-list">
                <li><Link href="/">Home</Link></li>
                <li><a href="#about">About Bytrova</a></li>
                <li><a href="#process">Development Process</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col-contact">
              <h4 className="footer-col-title">Contact Information</h4>
              <p className="footer-contact-item"><strong>Location:</strong> New Delhi, Delhi, 110059</p>
              <p className="footer-contact-item"><strong>Phone:</strong> <a href={`tel:${contactPhone}`}>{contactPhone}</a></p>
              <p className="footer-contact-item"><strong>Email:</strong> <a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a></p>
              <p className="footer-contact-item"><strong>Hours:</strong> Mon - Sun: 8:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright-text">
              © {new Date().getFullYear()} bytrova. All rights reserved. Software Development Company in Delhi, India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

