"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioFilters, portfolioProjects } from "../portfolio/projects";

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = portfolioProjects.filter((project) => filter === "All" || project.type === filter);

  return <section className="portfolio-section"><div className="container"><div className="portfolio-toolbar"><div><p className="eyebrow">Projects &amp; concepts</p><h2>Work, with its context.</h2></div><div className="portfolio-filters" role="group" aria-label="Filter portfolio projects">{portfolioFilters.map((item) => <button type="button" key={item} className={filter === item ? "active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
    <div className="portfolio-grid">{visibleProjects.map((project) => <article className="portfolio-card" key={project.slug}><div className={`portfolio-art concept-mockup ${project.theme}`} aria-hidden="true"><div className="mockup-top"><span>{project.name.toLowerCase()}.app</span><i /><i /><i /></div><div className="mockup-screen"><small>{project.label.toUpperCase()} / CONCEPT DEMO</small><strong>{project.preview}</strong><span /><span /><b>{project.action.toUpperCase()} ↗</b></div><span className="portfolio-art-tag">{project.type}</span></div><div className="portfolio-card-body"><div className="project-meta"><span>{project.type}</span><span>{project.label}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-info"><b>Problem</b><p>{project.problem}</p></div><div className="project-info"><b>Solution</b><p>{project.solution}</p></div><div className="project-info"><b>Key features</b><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div className="project-info"><b>Technology</b><p>{project.technology}</p></div><Link className="case-study-link" href={`/portfolio/${project.slug}`}>View Case Study <span aria-hidden="true">-&gt;</span></Link></div></article>)}</div>
    <p className="portfolio-disclaimer">These are self-initiated concept demos, not commissioned client projects, shipped products or verified customer results.</p></div></section>;
}