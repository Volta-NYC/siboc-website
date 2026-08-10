import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { SERVICES, SERVICE_SUMMARY, SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Free Small Business Services | SIBOC",
  description: "Free SIBOC services include counseling, business plans, financial literacy, seminars, webinars, training, M/WBE assistance, contracting support, and commercial revitalization.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero title="Free Small Business Services" subtitle="One-on-one assistance, training, certification support, and commercial revitalization." image={SITE.images.mwbe} />

      <section className="section container content-grid">
        <div>
          <p className="eyebrow">All services are free</p>
          <h2>Concrete support for Staten Island small businesses.</h2>
        </div>
        <div className="prose">
          <p>{SERVICE_SUMMARY}</p>
          <p>Program pages include inquiry forms so business owners can request free help directly from SIBOC.</p>
        </div>
      </section>

      <section className="section container card-grid four-up">
        {SERVICES.map((service) => (
          <article className="card media-card" key={service.href} id={service.label === "Commercial Revitalization" ? "commercial-revitalization" : undefined}>
            <SiteImage src={service.image} alt="" />
            <div>
              <h3>{service.label}</h3>
              <p>{service.description}</p>
              <Link href={service.href} className="text-link">Learn more</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section muted-band">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">Commercial Revitalization</p>
            <h2>Town centers, merchant corridors, and BID support.</h2>
          </div>
          <div className="prose">
            <p>SIBOC works with small businesses and community members to promote the vitality of Staten Island town centers.</p>
            <p>SIBOC administers and founded the first Business Improvement District on Staten Island, the Forest Avenue BID. It also supports businesses within the Castleton Avenue Commercial Corridor and conducts Forest Avenue West BID exploration work.</p>
            <div className="action-row">
              <Link href="/projects" className="button secondary">View Projects</Link>
              <Link href="/forest-avenue-bid" className="button secondary">Forest Avenue BID</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
