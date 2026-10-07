import Link from "next/link";
import SitePage from "../components/SitePage";

export const metadata = {
  title: "Software Products",
  description: "Explore Bytrova products, including SchoolOS, a School Management Platform for school communities.",
};

export default function ProductsPage() {
  return <SitePage><main id="main">
    <section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><span className="eyebrow-mark"/> Bytrova products</p><h1>Software shaped around <em>real work.</em></h1><p>We build software products for organisations with connected workflows and people who need a clearer way to get everyday work done.</p></div></section>
    <section className="product-detail-list"><div className="container product-feature-layout"><div className="product-feature-copy"><p className="eyebrow">Flagship product / Education</p><h2>SchoolOS</h2><p>A School Management Platform for administrators, teachers, students and parents. Explore attendance, fees, admissions, academics, reports and communication workflows through a product demo.</p><Link className="button button-dark" href="/products/schoolos">Explore SchoolOS <span aria-hidden="true">-&gt;</span></Link></div><div className="product-feature-art"><span>SchoolOS / PRODUCT PREVIEW</span><strong>One connected view<br/>of school operations.</strong><div>Admissions · Attendance · Fees · Academics</div></div></div></section>
    <section className="page-cta"><div className="container page-cta-inner"><div><p className="eyebrow">See the product</p><h2>Explore SchoolOS with <em>a guided demo.</em></h2></div><Link className="button button-dark" href="/contact?type=schoolos">Book a SchoolOS Demo <span aria-hidden="true">-&gt;</span></Link></div></section>
  </main></SitePage>;
}