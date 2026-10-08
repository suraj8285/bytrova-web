import Link from "next/link";
import { notFound } from "next/navigation";
import SitePage from "../../components/SitePage";
import { portfolioProjects } from "../projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} ${project.label} Case Study`,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: { title: `${project.name} | Bytrova Case Study`, description: project.description },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <SitePage><main id="main" className="case-study-page">
    <section className="page-hero case-study-hero"><div className="container page-hero-inner"><p className="eyebrow"><span className="eyebrow-mark" />{project.label} / Concept case study</p><h1>{project.name}: <em>{project.headline}</em></h1><p>{project.description}</p><Link className="button button-accent" href="/contact">Discuss Your Project <span aria-hidden="true">-&gt;</span></Link></div></section>
    <section className="case-study-visual-section"><div className="container"><div className={`case-study-visual concept-mockup ${project.theme}`} role="img" aria-label={`${project.name} illustrative product interface concept`}><div className="mockup-top"><span>{project.name.toLowerCase()}.app</span><i /><i /><i /></div><div className="mockup-screen"><small>{project.label.toUpperCase()} / CONCEPT DEMO</small><strong>{project.preview}</strong><span /><span /><b>{project.action.toUpperCase()} ↗</b></div></div><p className="case-study-caption">Illustrative product interface concept. This is not a screenshot of a shipped client product.</p></div></section>
    <section className="case-study-content"><div className="container"><article><p className="eyebrow">01 / The problem</p><h2>What needs to feel easier?</h2><p>{project.problem}</p></article><article><p className="eyebrow">02 / Our approach</p><h2>Start with the people and the work.</h2><p>{project.approach}</p></article><article><p className="eyebrow">03 / The solution</p><h2>A focused product direction.</h2><p>{project.solution}</p></article><article><p className="eyebrow">04 / Key features</p><h2>Built around useful actions.</h2><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></article><article><p className="eyebrow">05 / Technology</p><h2>Technology follows the scope.</h2><p>{project.technology}</p></article><article><p className="eyebrow">06 / Screens</p><h2>Product areas in the concept.</h2><div className="case-study-screens">{project.screens.map((screen, index) => <span key={screen}><b>0{index + 1}</b>{screen}</span>)}</div></article><article><p className="eyebrow">07 / Outcome</p><h2>The objective, not an invented metric.</h2><p>{project.outcome}</p></article></div></section>
    <section className="page-cta"><div className="container page-cta-inner"><div><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s shape a solution <em>for your business.</em></h2></div><Link className="button button-dark" href="/contact">Get a Free Quote <span aria-hidden="true">-&gt;</span></Link></div></section>
  </main></SitePage>;
}