import Link from "next/link";
import { PROJECT_LINKS, SERVICE_LINKS, SERVICE_SUMMARY, SITE } from "@/lib/siteData";

export default function HomePage() {
  return (
    <main>
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 30, 64, 0.45), rgba(8, 30, 64, 0.78)), url('${SITE.heroImage}')`,
        }}
      >
        <div className="container">
          <p className="kicker">Staten Island</p>
          <h1>{SITE.fullName}</h1>
          <p className="subcopy">{SITE.mission}</p>
          <div className="hero-actions">
            <Link href="/services" className="button solid">Explore our FREE services</Link>
            <Link href="/projects" className="button ghost">See projects</Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Our Services</h2>
        <p>{SERVICE_SUMMARY}</p>
      </section>

      <section className="section container grid cards-3">
        {SERVICE_LINKS.map((service) => (
          <article className="panel media" key={service.href}>
            <img src={service.image} alt={service.label} loading="lazy" />
            <h3>{service.label}</h3>
            <p>{service.description}</p>
            <Link href={service.href} className="cta-link">Explore Program</Link>
          </article>
        ))}
      </section>

      <section className="section container">
        <h2>Projects</h2>
        <div className="grid">
          {PROJECT_LINKS.map((project) => (
            <article className="panel media" key={project.href}>
              <img src={project.image} alt={project.label} loading="lazy" />
              <h3>{project.label}</h3>
              <p>{project.description}</p>
              <Link href={project.href} className="cta-link">Open Project</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
