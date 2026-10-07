import Link from "next/link";
import SitePage from "../../components/SitePage";

export const metadata = {
  title: "SchoolOS School Management Platform",
  description: "Explore SchoolOS for school attendance, fees, admissions, academics, reports and communication workflows.",
};

const roles = [
  ["01", "For Administrators", "See school operations in one place. Manage admissions, fees, attendance, academics, staff and reports through organised workflows."],
  ["02", "For Teachers", "Access class information, record attendance and follow academic workflows with tools designed for everyday teaching work."],
  ["03", "For Students", "Find timetables, assignments, results and notices in a focused student experience."],
  ["04", "For Parents", "Stay informed with relevant attendance, fee information, results, notices and school communication."],
];

const questions = [
  ["Who can use SchoolOS?", "SchoolOS is designed for school administrators, teachers, students and parents, with relevant experiences for each role."],
  ["Which school workflows does it support?", "SchoolOS is positioned around admissions, attendance, fees, academics, reports and communication. We can walk through the workflows available in the current product during a demo."],
  ["Can we see a demo before deciding?", "Yes. Request a demo and share the workflows you want to explore. The walkthrough can focus on your school’s priorities."],
  ["How does pricing work?", "Pricing depends on school size, selected plan, onboarding and support needs. We’ll confirm the current plan and quote during the discussion."],
  ["Can student information be migrated?", "Migration requirements depend on your current data format and quality. We’ll assess the data and confirm a migration scope before committing."],
];

export default function SchoolOSPage() {
  return <SitePage><main id="main">
    <section className="page-hero schoolos-hero"><div className="container page-hero-inner"><p className="eyebrow"><span className="eyebrow-mark"/> School Management Platform</p><h1>School operations, <em>connected with SchoolOS.</em></h1><p>Bring attendance, fees, admissions, academics, reports and communication into a platform designed for the people who keep school life moving.</p><Link className="button button-accent" href="/contact?type=schoolos">Book a Demo <span aria-hidden="true">-&gt;</span></Link></div></section>
    <section className="story-section"><div className="container story-layout"><div><p className="eyebrow">The challenge</p><h2>School information can get scattered.</h2></div><div className="story-copy"><p>Admissions, attendance, fee updates, academic information and family communication often involve different people and processes. When information is hard to find, teams spend more time coordinating everyday work.</p><p>SchoolOS is designed to bring these connected workflows into a clearer product experience.</p></div></div></section>
    <section className="schoolos-solution"><div className="container solution-layout"><div><p className="eyebrow eyebrow-light">The SchoolOS approach</p><h2>One platform, <em>relevant views for every role.</em></h2><p>SchoolOS connects core school workflows while keeping each role focused on the information and actions relevant to them.</p></div><div className="solution-list"><span>Admissions</span><span>Attendance</span><span>Fees</span><span>Academics</span><span>Reports</span><span>Communication</span></div></div></section>
    <section className="schoolos-roles"><div className="container"><p className="eyebrow">Designed for the school community</p><h2>Useful for the people who <em>make school work.</em></h2><div className="role-grid">{roles.map(([number, title, text]) => <article className="role-card" key={number}><span className="role-tag">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="schoolos-screens"><div className="container"><div><p className="eyebrow">Product walkthrough</p><h2>See the workflows <em>in context.</em></h2><p>In a demo, explore the current SchoolOS experience for administration, attendance, fees, academic information and communication.</p></div><div className="screen-preview"><span>ILLUSTRATIVE PREVIEW / DEMO DATA</span><strong>SchoolOS</strong><div className="screen-preview-grid"><i>School overview</i><i>Attendance</i><i>Fee workflows</i><i>Academic updates</i></div><small>Replace with approved product screenshots before launch.</small></div></div></section>
    <section className="schoolos-benefits"><div className="container"><p className="eyebrow">Product outcomes</p><h2>A clearer foundation for <em>everyday operations.</em></h2><div className="benefit-list"><p>Bring core school workflows into a connected product experience.</p><p>Give administrators, teachers, students and parents role-relevant views.</p><p>Make important school information easier to organise and access.</p></div><p className="pricing-disclaimer">School-specific results depend on setup, adoption and workflows. We do not publish quantified outcomes without verified customer data.</p></div></section>
    <section className="schoolos-price"><div className="container page-cta-inner"><div><p className="eyebrow">SchoolOS plans</p><h2>Pricing based on your <em>school’s requirements.</em></h2><p>Share your school size, workflows and onboarding needs. We’ll confirm the available plan and pricing in your demo.</p></div><Link className="button button-dark" href="/contact?type=schoolos">Request SchoolOS Pricing <span aria-hidden="true">-&gt;</span></Link></div></section>
    <section className="schoolos-testimonial"><div className="container"><p className="eyebrow">School feedback</p><h2>Customer experiences, <em>shared with permission.</em></h2><p>We’re collecting first-hand feedback from schools using SchoolOS. Approved quotes and school details will be published here once permission is confirmed.</p></div></section>
    <section className="schoolos-faq"><div className="container faq-layout"><div><p className="eyebrow">SchoolOS FAQs</p><h2>Questions from <em>school teams.</em></h2></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="page-cta"><div className="container page-cta-inner"><div><p className="eyebrow">See SchoolOS for your school</p><h2>Start with a <em>guided walkthrough.</em></h2></div><Link className="button button-dark" href="/contact?type=schoolos">Book a Demo <span aria-hidden="true">-&gt;</span></Link></div></section>
  </main></SitePage>;
}