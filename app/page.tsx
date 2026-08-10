import type { Metadata } from "next";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { BREAKFAST_2025, PROJECTS, SERVICES, SITE, TESTIMONIALS, TRUST_POINTS } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "SIBOC | Staten Island Business Outreach Center",
  description: SITE.description,
};

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-image" aria-hidden="true">
          <SiteImage src={SITE.images.hero} alt="" priority sizes="100vw" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Staten Island Business Outreach Center</p>
            <h1>Free small business support for Staten Island.</h1>
            <p>{SITE.mission} Get help with business registration, planning, financial literacy, capital access, procurement, M/WBE certification, and commercial corridor support.</p>
            <div className="action-row">
              <Link href="/contact" className="button primary">Get Free Business Assistance</Link>
              <Link href="/services" className="button secondary">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="SIBOC facts">
        <div className="container trust-grid">
          {TRUST_POINTS.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section container intro-section">
        <div>
          <p className="eyebrow">Services</p>
          <h2>Practical help for entrepreneurs, storefronts, and commercial corridors.</h2>
        </div>
        <p>SIBOC services are free and focused on concrete business needs: counseling, business plans, financial literacy, seminars, webinars, entrepreneurship training, M/WBE certification, contracting assistance, and related business/workforce support.</p>
      </section>

      <section className="section container card-grid four-up">
        {SERVICES.map((service) => (
          <article className="card media-card" key={service.href}>
            <SiteImage src={service.image} alt="" />
            <div>
              <h3>{service.label}</h3>
              <p>{service.description}</p>
              <Link href={service.href} className="text-link">Explore service</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section muted-band">
        <div className="container split-summary">
          <div>
            <p className="eyebrow">Client Testimonials</p>
            <h2>Business owners describe the support they received from SIBOC.</h2>
            <Link href="/client-testimonials" className="button secondary">Read Testimonials</Link>
          </div>
          <blockquote className="quote-card">
            <p>{TESTIMONIALS[1].quote}</p>
            <footer>
              <strong>{TESTIMONIALS[1].person}</strong>
              <span>{TESTIMONIALS[1].title}, {TESTIMONIALS[1].business}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Commercial revitalization work on Staten Island.</h2>
        </div>
        <div className="card-grid three-up">
          {PROJECTS.map((project) => (
            <article className="card media-card" key={project.href}>
              <SiteImage src={project.image} alt="" />
              <div>
                <h3>{project.label}</h3>
                <p>{project.description}</p>
                <Link href={project.href} className="text-link">View project</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container events-preview">
        <div>
          <p className="eyebrow">Events</p>
          <h2>Upcoming programming and past community events.</h2>
          <p>The SIBOC calendar is available for current workshops, corridor events, and business programming.</p>
          <Link href="/events" className="button primary">View Events</Link>
        </div>
        <article className="card">
          <p className="eyebrow">Past Event</p>
          <h3>{BREAKFAST_2025.name}</h3>
          <p>{BREAKFAST_2025.date} at {BREAKFAST_2025.venue}</p>
        </article>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2>Get free business assistance from SIBOC.</h2>
          <p>Contact the SIBOC team for counseling, program questions, certification help, or neighborhood business support.</p>
          <div className="action-row">
            <Link href="/contact" className="button primary">Contact SIBOC</Link>
            <Link href="/donate" className="button secondary">Donate</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
