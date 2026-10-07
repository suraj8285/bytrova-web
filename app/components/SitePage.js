import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SitePage({ children }) {
  return <div className="bytrova-page"><SiteHeader />{children}<SiteFooter /></div>;
}