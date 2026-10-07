import Link from "next/link";
import SitePage from "../components/SitePage";

export const metadata = { title: "Blog & Resources", description: "Practical planning guides for school operations, websites, apps and business software." };

const articles = [
  ["Website planning", "A practical brief for your next business website", "Start with business goals, users, required pages, content, budget and a preferred launch window.", "/resources#website-planning"],
  ["App discovery", "Does your business need a mobile app?", "Evaluate repeat usage, user value and the smallest useful app journey before committing to a build.", "/resources#mobile-app"],
  ["School operations", "Mapping school workflows before a software demo", "List the people, handoffs and information involved in admissions, attendance, fees and communication.", "/resources#school-workflows"],
];

export default function BlogPage() {
  return <SitePage><main id="main"><section className="page-hero"><div className="container page-hero-inner"><p className="eyebrow"><span className="eyebrow-mark"/> Bytrova / Resources</p><h1>Useful ideas for your <em>next digital project.</em></h1><p>Practical planning notes for schools and local businesses exploring software, websites and apps.</p></div></section><section className="resources-list"><div className="container">{articles.map(([category, title, description, href], index) => <article className="resource-guide" key={title}><div className="resource-guide-index"><span>{String(index + 1).padStart(2, "0")}</span><span>{category}</span></div><div><h2>{title}</h2><p className="resource-guide-intro">{description}</p><Link className="text-link" href={href}>Read the guide <span aria-hidden="true">-&gt;</span></Link></div></article>)}</div></section></main></SitePage>;
}