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

      <section className="section container stack">
        <h2>Built For Staten Island</h2>
        <p>
          From business counseling to corridor revitalization, SIBOC supports entrepreneurs, storefronts, and
          community organizations through practical, hands-on programs.
        </p>
        <div className="inline-gallery">
          <img className="focus-top" src="https://siboc.org/wp-content/uploads/2024/07/unnamed-2048x1536.jpg" alt="SIBOC community event" loading="lazy" />
          <img src="https://siboc.org/wp-content/uploads/2024/10/IMG_1126-scaled.jpg" alt="SIBOC celebration" loading="lazy" />
        </div>
      </section>

      <section className="section container">
        <h2>Follow SIBOC</h2>
        <p>Stay current with programs, events, and community updates through SIBOC social media.</p>
        <div className="social-highlight-grid">
          <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-highlight instagram">
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" />
              </svg>
            </span>
            <strong>Instagram</strong>
            <small>@siboc_nyc</small>
          </a>
          <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-highlight facebook">
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z"
                />
              </svg>
            </span>
            <strong>Facebook</strong>
            <small>/sibocnyc</small>
          </a>
          <a href={SITE.external.official} target="_blank" rel="noopener noreferrer" className="social-highlight web">
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 9h-3.08a15.4 15.4 0 00-1.04-5.03A8.04 8.04 0 0118.9 11zM12 4.05c.83 1.2 1.74 3.54 1.89 6.95h-3.78C10.26 7.59 11.17 5.25 12 4.05zM9.22 5.97A15.4 15.4 0 008.18 11H5.1a8.04 8.04 0 014.12-5.03zM4.6 13h3.58c.14 2.43.72 4.62 1.59 6.03A8.04 8.04 0 014.6 13zm5.51 0h3.78c-.15 3.41-1.06 5.75-1.89 6.95-.83-1.2-1.74-3.54-1.89-6.95zm4.67 6.03c.87-1.41 1.45-3.6 1.59-6.03h3.58a8.04 8.04 0 01-5.17 6.03z" />
              </svg>
            </span>
            <strong>Official Website</strong>
            <small>siboc.org</small>
          </a>
        </div>
      </section>
    </main>
  );
}
