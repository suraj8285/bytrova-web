"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const isHome = usePathname() === "/";
  if (isHome) return <footer className="site-footer home-footer"><div className="container home-footer-main">
    <div className="footer-brand"><Link href="/" className="brand-logo brand-footer" aria-label="Bytrova home"><span className="brand-image-wrap brand-image-small"><Image src="/bytrova.png" alt="Bytrova" fill sizes="150px" className="brand-mark" /></span></Link><p>Product software for organisations ready to move forward.</p></div>
    <div className="footer-column"><strong>Explore</strong><a href="#projects">Projects</a><a href="#services">Services</a><a href="#why-bytrova">Why Bytrova</a><a href="#about">About</a></div>
    <div className="footer-column"><strong>Connect</strong><a href="#contact">Book a demo</a><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a><a href="tel:+918285234325">+91 8285234325</a><span>New Delhi, India</span></div>
  </div><div className="container footer-bottom"><span>Copyright 2026 Bytrova. Built for better work.</span></div></footer>;
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><Link href="/" className="brand-logo brand-footer" aria-label="Bytrova home"><span className="brand-image-wrap brand-image-small"><Image src="/bytrova.png" alt="Bytrova" fill sizes="150px" className="brand-mark" /></span></Link><p>SchoolOS for schools. Useful digital products for businesses.</p><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a></div>
    <div className="footer-column"><strong>Product</strong><Link href="/products">Products overview</Link><Link href="/products/schoolos">SchoolOS</Link><Link href="/contact?type=schoolos">Book a demo</Link></div>
    <div className="footer-column"><strong>Services</strong><Link href="/services#websites">Website development</Link><Link href="/services#apps">Mobile app development</Link><Link href="/services#software">Custom software</Link><Link href="/services#support">Maintenance & support</Link></div>
    <div className="footer-column"><strong>Company</strong><Link href="/about">About</Link><Link href="/portfolio">Portfolio</Link><Link href="/pricing">Pricing</Link><Link href="/blog">Blog & resources</Link><Link href="/contact">Contact</Link></div>
    <div className="footer-column footer-connect"><strong>Social + newsletter</strong><a href="mailto:bytrova1@gmail.com">Email Bytrova</a><a href="mailto:bytrova1@gmail.com?subject=Newsletter%20signup">Request email updates</a><a href="tel:+918285234325">+91 8285234325</a><span>New Delhi, India</span><span>Social profiles coming soon</span></div>
  </div><div className="container footer-bottom"><span>Copyright © {new Date().getFullYear()} Bytrova. All rights reserved.</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div></footer>;
}