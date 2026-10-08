"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const isHome = usePathname() === "/";
  if (isHome) return <footer className="site-footer home-footer"><div className="container home-footer-main">
    <div className="footer-brand"><Link href="/" className="brand-logo brand-footer" aria-label="Bytrova home"><span className="brand-image-wrap brand-image-small"><Image src="/bytrova.png" alt="Bytrova" fill sizes="150px" className="brand-mark" /></span></Link><p>Websites, apps and custom software built around your business.</p></div>
    <div className="footer-column"><strong>Explore</strong><Link href="/portfolio">Our Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
    <div className="footer-column"><strong>Start a project</strong><Link href="/contact">Get a Free Quote</Link><a href="https://wa.me/918285234325" target="_blank" rel="noreferrer">Chat on WhatsApp</a><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a><a href="tel:+918285234325">+91 8285234325</a></div>
  </div><div className="container footer-bottom"><span>Copyright {new Date().getFullYear()} Bytrova. All rights reserved.</span></div></footer>;
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><Link href="/" className="brand-logo brand-footer" aria-label="Bytrova home"><span className="brand-image-wrap brand-image-small"><Image src="/bytrova.png" alt="Bytrova" fill sizes="150px" className="brand-mark" /></span></Link><p>Websites, apps and custom software built around your business.</p><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a></div>
    <div className="footer-column"><strong>Services</strong><Link href="/website-development">Website development</Link><Link href="/mobile-app-development">Mobile app development</Link><Link href="/web-application-development">Web applications</Link><Link href="/custom-software-development">Custom software</Link><Link href="/saas-development">SaaS development</Link></div>
    <div className="footer-column"><strong>Company</strong><Link href="/about">About</Link><Link href="/portfolio">Our Work</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
    <div className="footer-column footer-connect"><strong>Start a project</strong><Link href="/contact">Get a Free Quote</Link><a href="https://wa.me/918285234325" target="_blank" rel="noreferrer">Chat on WhatsApp</a><a href="tel:+918285234325">+91 8285234325</a><span>New Delhi, India</span></div>
  </div><div className="container footer-bottom"><span>Copyright © {new Date().getFullYear()} Bytrova. All rights reserved.</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div></footer>;
}