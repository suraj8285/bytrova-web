import Link from "next/link";
import SitePage from "../components/SitePage";
import PortfolioGallery from "../components/PortfolioGallery";

export const metadata = {
  title: "Software Development Portfolio | Bytrova",
  description: "Explore Bytrova's website, mobile app, web app and custom software concepts, with project problem, approach, features and product details.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <SitePage><main id="main"><section className="page-hero portfolio-hero"><div className="container page-hero-inner"><p className="eyebrow"><span className="eyebrow-mark"/> Selected work &amp; concepts</p><h1>Built around real <em>workflows.</em></h1><p>Explore product concepts that show how we approach websites, mobile apps, web applications and custom software. Each concept is clearly identified; no client work or customer outcomes are implied.</p></div></section>
    <PortfolioGallery />
    <section className="page-cta"><div className="container page-cta-inner"><div><p className="eyebrow">Your project could be next</p><h2>What should we build <em>for your workflow?</em></h2></div><Link className="button button-dark" href="/contact">Get a Free Quote <span aria-hidden="true">-&gt;</span></Link></div></section></main></SitePage>;
}