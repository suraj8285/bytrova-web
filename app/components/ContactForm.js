"use client";

import { useState } from "react";

const businessServices = ["Website Development", "Mobile App Development", "Custom Software Development", "Maintenance & Support"];

export default function ContactForm({ initialType = "business", variant = "default" }) {
  const [type, setType] = useState(initialType === "schoolos" ? "schoolos" : "business");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    const form = event.currentTarget;
    const values = new FormData(form);
    if (variant === "home") {
      try {
        const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name: values.get("name"), email: values.get("email"), phone: values.get("phone"), service: values.get("service"), message: values.get("message"), website: values.get("website") }) });
        const result = await response.json().catch(() => null);
        if (!response.ok) throw new Error(result?.error || "We couldn't send your enquiry. Please try again in a few minutes.");
        setStatus("sent");
        form.reset();
      } catch (submissionError) {
        setError(submissionError instanceof Error ? submissionError.message : "We couldn't send your enquiry. Please try again in a few minutes.");
        setStatus("idle");
      }
      return;
    }
    const service = type === "schoolos" ? "School Management Platform" : String(values.get("service"));
    const details = [
      `${type === "schoolos" ? "School" : "Business"}: ${values.get("organisation") || "Not provided"}`,
      `${type === "schoolos" ? "School size" : "Budget"}: ${values.get(type === "schoolos" ? "size" : "budget") || "Not provided"}`,
      `Preferred timeline: ${values.get("timeline") || "Not provided"}`,
      `Project details: ${values.get("message")}`,
    ].join("\n");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name: values.get("name"), email: values.get("email"), phone: values.get("phone"), service, message: details, website: values.get("website") }) });
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

  if (variant === "home") return <form className="contact-form home-contact-form" onSubmit={handleSubmit}>
    <div className="form-fields">
      <label>Name<input name="name" required minLength="2" maxLength="100" autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required maxLength="254" autoComplete="email" /></label>
      <label>Phone<input name="phone" type="tel" required minLength="7" maxLength="30" autoComplete="tel" /></label>
      <label>Interest<select name="service" defaultValue="School Management Platform"><option>School Management Platform</option><option>Custom Product Development</option><option>Partnership</option></select></label>
      <label className="full-field">Message<textarea name="message" required minLength="2" maxLength="5000" rows="4" /></label>
    </div>
    <input name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" className="form-honeypot" />
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button button-accent button-submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending..." : "Request a demo"}<span aria-hidden="true">-&gt;</span></button>
    <p className="form-note">We will only use your details to respond to this enquiry.</p>
  </form>;

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="inquiry-switch" role="group" aria-label="Inquiry type"><button type="button" className={type === "schoolos" ? "selected" : ""} aria-pressed={type === "schoolos"} onClick={() => setType("schoolos")}>SchoolOS demo</button><button type="button" className={type === "business" ? "selected" : ""} aria-pressed={type === "business"} onClick={() => setType("business")}>Website / app quote</button></div>
    <p className="form-context">{type === "schoolos" ? "Tell us about your school workflows so we can tailor the SchoolOS walkthrough." : "Share your project outline and we’ll discuss the next steps and estimate."}</p>
    <div className="form-fields"><label>Name<input name="name" required minLength="2" maxLength="100" autoComplete="name" /></label><label>Work email<input name="email" type="email" required maxLength="254" autoComplete="email" /></label><label>Phone number<input name="phone" type="tel" required minLength="7" maxLength="30" autoComplete="tel" /></label><label>{type === "schoolos" ? "School name" : "Business name"}<input name="organisation" /></label>
      {type === "schoolos" ? <label>Approx. student count<select name="size" defaultValue=""><option value="" disabled>Select range</option><option>Under 500</option><option>500–1,500</option><option>1,500–3,000</option><option>3,000+</option></select></label> : <label>Service<select name="service" defaultValue={businessServices[0]}>{businessServices.map((service) => <option key={service}>{service}</option>)}</select></label>}
      <label>Preferred timeline<select name="timeline" defaultValue=""><option value="">Not decided</option><option>Within 1 month</option><option>1–3 months</option><option>3+ months</option><option>Just exploring</option></select></label>
      {type === "business" && <label>Approx. budget<select name="budget" defaultValue=""><option value="">Not decided</option><option>Under ₹50,000</option><option>₹50,000–₹1.5 lakh</option><option>₹1.5–₹5 lakh</option><option>₹5 lakh+</option></select></label>}
      <label className="full-field">{type === "schoolos" ? "Which school workflows would you like to discuss?" : "Project goals and required features"}<textarea name="message" required minLength="2" maxLength="5000" rows="4" /></label>
    </div>
    <input name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" className="form-honeypot" />
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button button-accent button-submit" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending..." : type === "schoolos" ? "Request a SchoolOS demo" : "Get a project quote"}<span aria-hidden="true">-&gt;</span></button>
    <p className="form-note">We’ll use your details to respond to this enquiry.</p>
  </form>;
}