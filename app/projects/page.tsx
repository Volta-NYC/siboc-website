import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { PROJECTS, SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Commercial Revitalization Projects | SIBOC",
  description: "SIBOC commercial revitalization projects include the West Brighton CDNA, Forest Avenue West BID exploration, and Forest Avenue BID management.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero title="Commercial Revitalization Projects" subtitle="Neighborhood corridor research, BID exploration, and district management." image={SITE.images.hero} imagePosition="center 36%" />

      <section className="section container lead-project" id="west-brighton-cdna">
        <div>
          <p className="eyebrow">Current initiative</p>
          <h2>West Brighton Commercial District Needs Assessment</h2>
          <p>In partnership with NYC Small Business Services, SIBOC is conducting a Commercial District Needs Assessment (CDNA) in the West Brighton neighborhood of Staten Island.</p>
          <p>This study is looking specifically at the Castleton Avenue and Forest Avenue business corridors.</p>
          <div className="action-row">
            <a href={SITE.external.westBrightonSurvey} className="button primary" target="_blank" rel="noopener noreferrer">Take the West Brighton Consumer Survey</a>
          </div>
        </div>
        <aside className="card">
          <h3>The CDNA examines</h3>
          <ul className="check-list">
            <li>Business landscape and consumer characteristics</li>
            <li>Physical environment and streetscape conditions</li>
            <li>Storefront and retail mix</li>
            <li>Merchant surveys and shopper/consumer surveys</li>
            <li>Neighborhood identity and revitalization recommendations</li>
          </ul>
        </aside>
      </section>

      <section className="section muted-band">
        <div className="container prose wide">
          <p>A CDNA highlights the existing business landscape, consumer characteristics, physical environment, and unique character of the commercial corridors and local businesses that make up the identity of each neighborhood. Each CDNA is completed in partnership with local community-based organizations, and includes analysis of the storefront and retail mix, door-to-door merchant surveys, consumer and shopper surveys, and in-depth inventory of streetscape conditions that affect the shopping experience.</p>
          <p>CDNAs identify the needs and opportunities for local neighborhood revitalization, with recommendations for merchant organizing, public programming, district marketing and branding, streetscape enhancements, business support services, and other quality-of-life improvements that can be funded by Neighborhood 360 Grants, Avenue NYC grants, or other organizations.</p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">More projects</p>
          <h2>Forest Avenue corridor work.</h2>
        </div>
        <div className="card-grid three-up">
          {PROJECTS.slice(1).map((project) => (
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
    </main>
  );
}
