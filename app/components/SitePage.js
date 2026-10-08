import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SitePage({ children }) {
  return <div className="bytrova-page"><SiteHeader />{children}<SiteFooter /><Link className="mobile-quote-cta" href="/contact#inquiry-form">Get a Free Quote <span aria-hidden="true">-&gt;</span></Link></div>;
}