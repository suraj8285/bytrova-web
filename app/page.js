"use client";

import { useState } from "react";
import Link from "next/link";

const roles = [
  { tag: "01", title: "For administrators", text: "See the whole school clearly. Manage admissions, fees, attendance, academics, staff, and reports from one operational command centre." },
  { tag: "02", title: "For teachers", text: "Spend less time on paperwork. Plan lessons, record attendance, share updates, and keep families in the loop in a few clicks." },
  { tag: "03", title: "For students", text: "A focused home for timetables, assignments, results, notices, and the everyday information students need to move forward." },
  { tag: "04", title: "For parents", text: "Replace uncertainty with visibility. Follow attendance, fees, results, notices, and school communication from any device." },
];

const capabilities = [
  { number: "01", title: "One source of truth", text: "Bring academic, administrative, and family data into a shared system that keeps every team aligned." },
  { number: "02", title: "Built to grow with you", text: "Multi-tenant architecture lets every school operate in its own secure workspace while your platform scales confidently." },
  { number: "03", title: "Designed for real work", text: "Clear workflows and calm interfaces help busy teams get to the right action without learning a complicated system." },
];

function Arrow() { return <span className="arrow" aria-hidden="true">-&gt;</span>; }

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "School Management Platform", message: "", website: "" });
  const updateField = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = async (event) => {
    event.preventDefault(); setSubmitting(true); setSubmitError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(formData) });
      if (!response.ok) { const result = await response.json().catch(() => null); throw new Error(result?.error || "Inquiry submission failed"); }
      setSubmitted(true); setFormData({ name: "", email: "", phone: "", service: "School Management Platform", message: "", website: "" });
    } catch (error) { setSubmitError(error instanceof Error ? error.message : "Unable to send your inquiry right now."); }
    finally { setSubmitting(false); }
  };

  return <div className="bytrova-page">
    <header className="site-header"><div className="container header-inner">
      <Link href="/" className="brand-logo" aria-label="Bytrova home">
        <img src="/bytrova.png" alt="Bytrova logo" className="brand-mark" />
      </Link>
      <nav className="main-nav" aria-label="Main navigation"><a href="#product">Product</a><a href="#why-bytrova">Why Bytrova</a><a href="#about">About</a></nav>
      <a className="button button-dark button-small" href="#demo">Book a demo <Arrow /></a>
    </div></header>

    <main>
      <section className="hero-section"><div className="hero-grid-pattern" aria-hidden="true" /><div className="container hero-layout">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-mark" /> Product software for better-run schools</p><h1>Make every part of school life <em>work better.</em></h1><p className="hero-lede">Bytrova builds robust software products for the people who keep education moving. Our flagship School Management Platform brings your entire school community into one clear, connected system.</p><div className="hero-actions"><a className="button button-accent" href="#demo">See the platform <Arrow /></a><a className="text-link" href="#product">Explore the product <Arrow /></a></div><div className="hero-trust"><span>Built for scale</span><i /><span>Designed for people</span><i /><span>Ready for tomorrow</span></div></div>
        <div className="product-preview" aria-label="School management platform dashboard preview"><div className="preview-window"><div className="preview-bar"><span className="preview-title">SchoolOS / overview</span><span className="preview-dots">...</span></div><div className="preview-content"><div className="preview-greeting"><div><small>MONDAY, 18 MARCH 2024</small><strong>Good morning, Anika.</strong></div><span className="avatar">AK</span></div><div className="preview-stats"><div><small>ATTENDANCE TODAY</small><strong>94.8%</strong><span className="positive">+2.4%</span></div><div><small>FEES COLLECTED</small><strong>82.1%</strong><span className="neutral">On track</span></div></div><div className="preview-chart"><div className="chart-heading"><strong>Attendance overview</strong><span>Last 7 days</span></div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>M</span></div></div><div className="preview-list"><strong>Needs your attention</strong><span><b className="list-dot orange" /> 12 fee reminders pending <small>View</small></span><span><b className="list-dot blue" /> 4 leave requests to review <small>View</small></span></div></div></div><div className="preview-note note-one"><span>+</span> One connected workspace</div><div className="preview-note note-two"><span>+</span> Clearer decisions</div></div>
      </div></section>
      <section className="logo-strip" aria-label="Bytrova product principles"><div className="container logo-strip-inner"><span>BYTROVA / PRODUCT COMPANY</span><span className="strip-line" /><span>School operations, rethought.</span><span className="strip-line" /><span>Secure by design.</span></div></section>
      <section className="product-section" id="product"><div className="container"><div className="section-intro"><p className="eyebrow">The flagship product</p><h2>A better operating system for <em>school communities.</em></h2><p>From the first admission enquiry to the final report card, Bytrova School Management Platform gives every role the context, tools, and confidence to do their best work.</p></div><div className="role-grid">{roles.map((role) => <article className="role-card" key={role.tag}><span className="role-tag">{role.tag}</span><h3>{role.title}</h3><p>{role.text}</p><a href="#demo">Learn more <Arrow /></a></article>)}</div></div></section>
      <section className="architecture-section" id="why-bytrova"><div className="container architecture-layout"><div className="architecture-copy"><p className="eyebrow eyebrow-light">Why Bytrova</p><h2>Serious software.<br /><em>Thoughtfully made.</em></h2><p>We care about the foundations because your team depends on them. Bytrova combines scalable engineering with the details that make software feel simple on a busy Monday morning.</p><a href="#about" className="button button-light">More about Bytrova <Arrow /></a></div><div className="capability-list">{capabilities.map((item) => <div className="capability" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></div></section>
      <section className="about-section" id="about"><div className="container about-layout"><div><p className="eyebrow">The Bytrova point of view</p><h2>Products should make ambitious work feel <em>possible.</em></h2></div><div className="about-copy"><p>We are a product-based software company building modern tools for organisations that have outgrown disconnected systems. Our work starts with a real operational problem and ends with software teams can rely on every day.</p><p>For schools, that means less friction between administration, teaching, learning, and home. It means data that stays protected, systems that can grow, and people who feel supported by the technology around them.</p></div></div></section>
      <section className="demo-section" id="demo"><div className="container demo-layout"><div className="demo-copy"><p className="eyebrow eyebrow-light">Ready when you are</p><h2>Give your school a clearer <em>next step.</em></h2><p>Tell us a little about your school or organisation. We will show you how Bytrova can fit the way your teams already work.</p><div className="demo-contact"><span className="contact-icon">@</span><div><small>Prefer email?</small><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a></div></div></div><div className="demo-form-wrap">{submitted ? <div className="form-success"><span className="success-mark">OK</span><h3>Thank you, we have your note.</h3><p>Our team will be in touch shortly to arrange your conversation.</p><a href="#product" className="text-link">Back to the product <Arrow /></a></div> : <form onSubmit={handleSubmit} className="demo-form"><input name="website" value={formData.website} onChange={updateField} tabIndex="-1" autoComplete="off" aria-hidden="true" className="form-honeypot" /><p className="form-title">Book a product demo</p><div className="form-fields"><label>Your name<input name="name" value={formData.name} onChange={updateField} required minLength="2" /></label><label>Work email<input type="email" name="email" value={formData.email} onChange={updateField} required /></label><label>Phone number<input type="tel" name="phone" value={formData.phone} onChange={updateField} required minLength="7" /></label><label>What would you like to explore?<select name="service" value={formData.service} onChange={updateField}><option>School Management Platform</option><option>Custom Product Development</option><option>Partnership</option></select></label><label className="full-field">Tell us about your school or goals<textarea name="message" value={formData.message} onChange={updateField} required minLength="2" rows="3" /></label></div>{submitError && <p className="form-error">{submitError}</p>}<button className="button button-accent button-submit" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Request a demo"} <Arrow /></button><p className="form-note">We will only use your details to respond to this enquiry.</p></form>}</div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-top"><div><Link href="/" className="brand-logo brand-footer" aria-label="Bytrova home"><img src="/bytrova.png" alt="Bytrova logo" className="brand-mark brand-mark-small" /></Link><p>Product software for organisations ready to move forward.</p></div><div className="footer-column"><strong>Explore</strong><a href="#product">School Platform</a><a href="#why-bytrova">Why Bytrova</a><a href="#about">About us</a></div><div className="footer-column"><strong>Connect</strong><a href="#demo">Book a demo</a><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a><a href="tel:+918285234325">+91 8285234325</a></div></div><div className="container footer-bottom"><span>Copyright {new Date().getFullYear()} Bytrova. Built for better work.</span><span>New Delhi, India</span></div></footer>
  </div>;
}