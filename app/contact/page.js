import SitePage from "../components/SitePage";
import ContactForm from "../components/ContactForm";

export const metadata = { title: "Contact Bytrova | Get a Free Software Project Quote", description: "Tell Bytrova about your website, mobile app, web application or custom software project and get a free quote." };

export default function ContactPage() {
  return <SitePage><main id="main"><section className="contact-page-section"><div className="container contact-page-layout"><div className="contact-intro"><p className="eyebrow"><span className="eyebrow-mark"/> Start a project</p><h1>Let&apos;s Build <em>Something Great</em></h1><p>Have an idea for a website, app or custom software? Tell us about it.</p><div className="contact-details"><div><span>Email</span><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a></div><div><span>Phone</span><a href="tel:+918285234325">+91 8285234325</a></div><div><span>WhatsApp</span><a href="https://wa.me/918285234325" target="_blank" rel="noreferrer">Chat With Us on WhatsApp</a></div><div><span>Location</span><p>New Delhi, India</p></div></div><p className="response-promise">Share the details you have. We&apos;ll follow up to understand the scope.</p></div><div id="inquiry-form" className="contact-form-panel"><h2>Get a Free Quote</h2><ContactForm /></div></div></section></main></SitePage>;
}