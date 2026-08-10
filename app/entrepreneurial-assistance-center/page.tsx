import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProgramContactForm from "@/components/ProgramContactForm";
import { EAC_FEATURES, SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Entrepreneur Assistance Center | SIBOC",
  description: "SIBOC EAC offers 8- and 10-week programming, a 60-hour business plan course, registration assistance, marketing, capital access, procurement support, and M/WBE help.",
};

export default function EacPage() {
  return (
    <main id="main-content">
      <PageHero title="Entrepreneur Assistance Center" subtitle="Training and technical assistance for new and early-stage businesses." image={SITE.images.eac} />

      <section className="section container content-grid">
        <div>
          <p className="eyebrow">EAC</p>
          <h2>Instruction, training, technical assistance, and support services.</h2>
        </div>
        <div className="prose">
          <p>Entrepreneurship Assistance Centers (EAC) is an enterprise development program that provides instruction, training, technical assistance, and support services to individuals who are interested in starting or recently started their own business, or entrepreneurs seeking to expand or strengthen their early-stage business.</p>
          <p>The Staten Island EAC is a full-service center that offers 8- and 10-week programming designed to help participants become more familiar with different aspects of their business.</p>
          <div className="action-row">
            <a href={SITE.external.eac} className="button secondary" target="_blank" rel="noopener noreferrer">Learn About EACs</a>
            <a href="#program-inquiry" className="button primary">Request Free Help From SIBOC</a>
          </div>
        </div>
      </section>

      <section className="section muted-band">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Program features</p>
            <h2>What the Staten Island EAC offers.</h2>
          </div>
          <div className="offer-grid">
            {EAC_FEATURES.map((feature) => (
              <article className="offer-card" key={feature}>{feature}</article>
            ))}
          </div>
        </div>
      </section>

      <div id="program-inquiry">
        <ProgramContactForm program="Entrepreneur Assistance Center (EAC)" />
      </div>
    </main>
  );
}
