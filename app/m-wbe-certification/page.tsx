import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProgramContactForm from "@/components/ProgramContactForm";
import { MWBE_BENEFITS, SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "M/WBE Certification Assistance | SIBOC",
  description: "Free SIBOC assistance for NYC M/WBE certification, city contracting information, bid access, networking, courses, and consultation.",
};

export default function MwbePage() {
  return (
    <main id="main-content">
      <PageHero title="M/WBE Certification Assistance" subtitle="Minority- and Women-Owned Business support." image={SITE.images.mwbe} />

      <section className="section container content-grid">
        <div>
          <p className="eyebrow">Free certification support</p>
          <h2>Learn about selling to government and certification with the City of New York.</h2>
        </div>
        <div className="prose">
          <p>The 2025 M/WBE Leadership Association is a group of community organizations selected by the New York City Council serving minority and women-owned businesses in New York.</p>
          <p>Through this partnership with the NYC Department of Small Business Services (SBS), participating organizations are provided with tools and resources to teach firms about selling to government and the benefits of Minority and Women-owned Business Enterprise (M/WBE) certification with the City of New York.</p>
          <p><strong>SIBOC offers FREE certification assistance.</strong></p>
          <div className="action-row">
            <a href={SITE.external.nycMwbe} className="button secondary" target="_blank" rel="noopener noreferrer">Learn About NYC M/WBE Certification</a>
            <a href="#program-inquiry" className="button primary">Request Free Help From SIBOC</a>
          </div>
        </div>
      </section>

      <section className="section muted-band">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Benefits listed by SIBOC</p>
            <h2>Reap the benefits of M/WBE certification.</h2>
          </div>
          <div className="feature-list">
            {MWBE_BENEFITS.map((benefit) => (
              <article key={benefit}>
                <h3>{benefit}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="program-inquiry">
        <ProgramContactForm program="M/WBE Certification" />
      </div>
    </main>
  );
}
