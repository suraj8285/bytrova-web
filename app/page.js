import SitePage from "./components/SitePage";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Custom Software, Web & Mobile Apps",
  description:
    "Bytrova designs and builds custom software, web apps, and mobile apps for businesses, alongside independent products like Bytrova School.",
  openGraph: {
    title: "Bytrova | Custom Software, Web & Mobile Apps",
    description:
      "Custom software for businesses, built by the team behind Bytrova School, our own school management product.",
    url: "https://www.bytrova.co.in/",
  },
};

const roles = [
  { title: "Administrators", text: "See school operations clearly and keep every team in sync." },
  { title: "Teachers", text: "Spend less time on paperwork and more time supporting learning." },
  { title: "Students", text: "Find timetables, assignments, results, and notices in one place." },
  { title: "Parents", text: "Stay informed about attendance, fees, results, and school life." },
];

const projects = [
  {
    name: "Bytrova School",
    category: "Independent product / Education",
    description:
      "A complete, multi-tenant School OS designed for tier 2 and tier 3 cities in India. One connected system for the people and processes that keep a school moving.",
    capabilities: [
      "Admissions", "Fees", "Attendance", "Academics", "Timetable", "Staff", "Exams & results", "Notices", "Parent communication",
    ],
    highlights: [
      ["Multi-tenant", "Every school gets its own secure workspace."],
      ["Web + mobile", "Useful wherever school work happens."],
      ["Built to scale", "A flexible foundation for growing school communities."],
    ],
  },
];

const services = [
  { number: "01", title: "Custom Software Development", text: "Purpose-built systems shaped around your team's real workflows." },
  { number: "02", title: "Web Apps", text: "Reliable web platforms that bring information and people together." },
  { number: "03", title: "Mobile Apps", text: "Thoughtful Android and iOS applications, built with Flutter." },
  { number: "04", title: "SaaS Product Development", text: "From early product thinking to scalable software people rely on." },
];

const principles = [
  { number: "01", title: "One source of truth", text: "Bring academic, administrative, and family data into a shared system that keeps every team aligned." },
  { number: "02", title: "Built to grow with you", text: "Multi-tenant architecture gives every school its own secure workspace while the platform scales." },
  { number: "03", title: "Designed for real work", text: "Clear workflows help busy teams get to the right action without learning a complicated system." },
];

export default function Home() {
  return (
    <SitePage>
      <main id="main" className="bytrova-home">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="container home-hero-layout">
            <div className="home-hero-copy">
              <p className="eyebrow"><span className="eyebrow-mark" /> Custom software, web &amp; mobile apps</p>
              <h1 id="hero-title">Build software that helps your business <em>work better.</em></h1>
              <p className="hero-lede">We design and build custom software, web apps, and mobile apps around the way your business works. We also build our own products, including Bytrova School, our school management platform.</p>
              <div className="hero-actions">
                <a className="button button-accent" href="#contact">Discuss your project <span aria-hidden="true">-&gt;</span></a>
                <a className="button button-outline" href="#projects">See what we build <span aria-hidden="true">-&gt;</span></a>
              </div>
              <div className="hero-trust"><span>Software shaped around your needs</span><i aria-hidden="true" /><span>Products built by our team</span></div>
            </div>

            <div className="home-dashboard" aria-label="Illustrative Bytrova School dashboard">
              <div className="dashboard-top"><span>Bytrova School / Overview</span><span className="dashboard-status">SCHOOL OS</span></div>
              <div className="dashboard-welcome"><span><small>MONDAY, 18 MARCH 2024</small><strong>Good morning, Anika.</strong></span><span className="dashboard-avatar" aria-hidden="true">AK</span></div>
              <div className="dashboard-stats"><div><small>ATTENDANCE TODAY</small><strong>94.8%</strong></div><div><small>FEES COLLECTED</small><strong>82.1%</strong></div></div>
              <div className="dashboard-chart"><div className="dashboard-chart-head"><strong>Attendance overview</strong><span>Last 7 days</span></div><div className="dashboard-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div><div className="dashboard-days" aria-hidden="true"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>M</span></div></div>
              <div className="dashboard-attention"><strong>Needs your attention</strong><p><span aria-hidden="true">01</span> 12 fee reminders pending <b>View</b></p><p><span aria-hidden="true">02</span> 4 leave requests to review <b>View</b></p></div>
            </div>
          </div>
        </section>

        <section className="home-projects home-section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading-row"><div><p className="eyebrow">A product we built ourselves</p><h2 id="projects-title">We build for clients, and we build <em>our own products.</em></h2></div></div>
            {projects.map((item) => (
              <article className="featured-project" key={item.name}>
                <div className="featured-project-main">
                  <p className="project-kicker">{item.category}</p>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <ul className="project-capabilities" aria-label="Platform modules">
                    {item.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                  </ul>
                </div>
                <div className="project-highlights">
                  {item.highlights.map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}
                </div>
              </article>
            ))}
            <h3 className="roles-heading">Made for every role in the school community</h3>
            <div className="role-grid">{roles.map((role, index) => <article className="role-card" key={role.title}><span className="role-tag">0{index + 1}</span><h3>{role.title}</h3><p>{role.text}</p></article>)}</div>
            <article className="upcoming-project"><span className="project-kicker">01 / IN THE WORKS</span><div><h3>More projects coming soon</h3><p>We are building independent products for real operational challenges.</p></div><span className="upcoming-mark" aria-hidden="true">+</span></article>
          </div>
        </section>

        <section className="home-section services-home" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading-row"><div><p className="eyebrow">What we do</p><h2 id="services-title">Software made for <em>what comes next.</em></h2></div></div>
            <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-card-top"><span>{service.number}</span><span>Bytrova</span></div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
          </div>
        </section>

        <section className="home-section why-home" id="why-bytrova" aria-labelledby="why-title">
          <div className="container">
            <div className="why-intro"><p className="eyebrow">Why Bytrova</p><h2 id="why-title">Serious software. <em>Thoughtfully made.</em></h2><p>We care about the foundations because your team depends on them. Bytrova combines scalable engineering with the details that make software feel simple on a busy Monday morning.</p></div>
            <div className="principle-grid">{principles.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className="home-section about-home" id="about" aria-labelledby="about-title">
          <div className="container about-home-layout"><div><p className="eyebrow">The Bytrova point of view</p><h2 id="about-title">Products should make ambitious work feel <em>possible.</em></h2></div><div className="about-home-copy"><p>Bytrova is a New Delhi-based, product-focused software company. We build our own independent products and partner with organisations to make custom software that solves real operational problems.</p><p>For schools, that means less friction between administration, teaching, learning, and home. Across every project, it means secure foundations, thoughtful details, and software people can rely on every day.</p></div></div>
        </section>

        <section className="demo-section home-contact" id="contact" aria-labelledby="contact-title">
          <div className="container demo-layout">
            <div className="demo-copy"><p className="eyebrow eyebrow-light">Ready when you are</p><h2 id="contact-title">Have a software idea? <em>Let’s talk.</em></h2><p>Tell us what you are trying to build or improve. We can help shape the right custom software, web app, or mobile app for your team.</p><div className="home-contact-details"><p><span>Email</span><a href="mailto:bytrova1@gmail.com">bytrova1@gmail.com</a></p><p><span>Phone</span><a href="tel:+918285234325">+91 8285234325</a></p><p><span>Location</span><span>New Delhi, India</span></p></div></div>
            <div className="demo-form-wrap"><h3 className="form-title">Tell us about your project</h3><ContactForm variant="home" /></div>
          </div>
        </section>
      </main>
    </SitePage>
  );
}