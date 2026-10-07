"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const homeLinks = [["Projects", "#projects"], ["Services", "#services"], ["Why Bytrova", "#why-bytrova"], ["About", "#about"], ["Contact", "#contact"]];
const pageLinks = [["Home", "/"], ["Products", "/products"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["Pricing", "/pricing"], ["About", "/about"], ["Contact", "/contact"]];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = usePathname() === "/";
  const links = isHome ? homeLinks : pageLinks;
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="brand-logo" aria-label="Bytrova home"><span className="brand-image-wrap"><Image src="/bytrova.png" alt="Bytrova" fill sizes="190px" className="brand-mark" /></span></Link>
    <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? "Close" : "Menu"}</span><span aria-hidden="true">{menuOpen ? "−" : "+"}</span></button>
    <nav id="primary-navigation" className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">{links.map(([label, href]) => <Link href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</Link>)}</nav>
    <Link className="button button-dark header-cta" href={isHome ? "#contact" : "/contact"} onClick={() => setMenuOpen(false)}>{isHome ? "Book a demo" : "Get a quote"} <span aria-hidden="true">-&gt;</span></Link>
  </div></header>;
}