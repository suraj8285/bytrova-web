"use client";

import { useState } from "react";

const projectTypes = ["Website", "Mobile App", "Web Application", "Custom Software", "SaaS Product", "Other"];
const projectBudgets = ["Under ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000 – ₹3,00,000", "₹3,00,000+"];

export default function ContactForm({ variant = "default" }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    const form = event.currentTarget;
    const values = new FormData(form);
    const service = String(values.get("service"));
    const details = `Project requirements: ${values.get("message")}`;
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name: values.get("name"), email: values.get("email"), phone: values.get("phone"), company: values.get("company"), budget: values.get("budget"), service, message: details, website: values.get("website") }) });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error || "We couldn't send your enquiry. Please try again in a few minutes.");
      setStatus("sent");
      form.reset();
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We couldn't send your enquiry. Please try again in a few minutes.");
      setStatus("idle");
    }
  }

  if (status === "sent") return <div className="form-success" role="status"><span className="success-mark">OK</span><h3>Thank you. Your enquiry has been received.</h3><p>We aim to reply within one business day.</p><button className="text-link" onClick={() => setStatus("idle")} type="button">Send another enquiry <span aria-hidden="true">-&gt;</span></button></div>;

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className={`form-fields${variant === "home" ? " home-contact-form" : ""}`}>
      <label>Name<input name="name" required minLength="2" maxLength="100" autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required maxLength="254" autoComplete="email" /></label>
      <label>Phone Number<input name="phone" type="tel" required minLength="7" maxLength="30" autoComplete="tel" /></label>
      <label>Company Name<input name="company" maxLength="160" autoComplete="organization" /></label>
      <label>What do you want to build?<select name="service" defaultValue="Website" required>{projectTypes.map((projectType) => <option key={projectType}>{projectType}</option>)}</select></label>
      <label>Project Budget<select name="budget" defaultValue=""><option value="">Select a range</option>{projectBudgets.map((budget) => <option key={budget}>{budget}</option>)}</select></label>
      <label className="full-field">Project Description<textarea name="message" required minLength="2" maxLength="5000" rows="4" /></label>
    </div>
    <input name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" className="form-honeypot" />
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button button-accent button-submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending..." : "Get My Free Quote"}<span aria-hidden="true">-&gt;</span></button>
    <p className="form-note">We’ll use your details to respond to this enquiry.</p>
  </form>;
}