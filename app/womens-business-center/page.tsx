import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProgramContactForm from "@/components/ProgramContactForm";
import { SITE, WBC_FEATURES } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Women's Business Center Staten Island | SIBOC",
  description: "SIBOC's Women's Business Center helps Staten Island businesses with startup, expansion, business plans, licensing, financial resources, marketing, advertising, and import/export information.",
};

export default function WomensBusinessCenterPage() {
  return (
    <main id="main-content">
      <PageHero title="Women's Business Center Staten Island" subtitle="Business counseling for Staten Island entrepreneurs." image={SITE.images.wbc} />

      <section className="section container content-grid">
        <div>
          <p className="eyebrow">WBC</p>
          <h2>Support for Staten Island small business owners and entrepreneurs.</h2>
        </div>
        <div className="prose">
          <p>The Women&apos;s Business Center is dedicated to assisting all Staten Island small business owners and entrepreneurs with all aspects of their business.</p>
          <p>The Staten Island Business Outreach Center (SIBOC) serves small businesses and residents throughout Staten Island, NY. SIBOC is part of the Business Outreach Center Network (BOC), which serves over 3,000 clients throughout New York City.</p>
          <div className="action-row">
            <a href={SITE.external.bocWbc} className="button secondary" target="_blank" rel="noopener noreferrer">Learn About BOC/WBC</a>
            <a href="#program-inquiry" className="button primary">Request Free Help From SIBOC</a>
          </div>
        </div>
      </section>

      <section className="section muted-band">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Program features</p>
            <h2>What the WBC offers.</h2>
          </div>
          <div className="offer-grid">
            {WBC_FEATURES.map((feature) => (
              <article className="offer-card" key={feature}>{feature}</article>
            ))}
          </div>
        </div>
      </section>

      <div id="program-inquiry">
        <ProgramContactForm program="Women's Business Center (WBC)" />
      </div>
    </main>
  );
}
