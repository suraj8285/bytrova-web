"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SitePage from "../components/SitePage";
import ContactForm from "../components/ContactForm";

function ContactContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") === "schoolos" ? "schoolos" : "business";
  return <section className="contact-page-section"><div className="container contact-page-layout"><div className="contact-intro"><p className="eyebrow"><span className="eyebrow-mark"/> Contact Bytrova</p><h1>Start with the <em>right conversation.</em></h1><p>Looking for a SchoolOS demo or a website/app quote? Choose an enquiry type and share a few project details.</p><div className="contact-options"><a href="/contact?type=schoolos#inquiry-form"><span>01</span><strong>Book a SchoolOS demo</strong><small>Explore school workflows and the platform</small></a><a href="/contact?type=business#inquiry-form"><span>02</span><strong>Get a website/app quote</strong><small>Website, app, custom software or support</small></a></div><div className="contact-details"><div><span>Email</span><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a></div><div><span>Phone</span><a href="tel:+918285234325">+91 8285234325</a></div><div><span>Location</span><p>New Delhi, India</p></div></div><p className="response-promise">We aim to reply within <strong>one business day.</strong></p></div><div id="inquiry-form" className="contact-form-panel"><ContactForm key={initialType} initialType={initialType}/></div></div></section>;
}

export default function ContactPage() {
  return <SitePage><main id="main"><Suspense fallback={<div className="container loading-message">Loading contact form...</div>}><ContactContent/></Suspense></main></SitePage>;
}