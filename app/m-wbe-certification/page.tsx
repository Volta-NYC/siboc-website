import PageHero from "@/components/PageHero";
import ProgramContactForm from "@/components/ProgramContactForm";
import SplitBand from "@/components/SplitBand";
import { PAGE_HEADERS } from "@/lib/siteData";

export default function MwbePage() {
  return (
    <main>
      <PageHero title="M/WBE Certification" subtitle="Minority- and Women-Owned Business" image={PAGE_HEADERS.mwbe} />
      <section className="section container stack">
        <p>
          The 2025 M/WBE Leadership Association is a group of community organizations selected by the New York
          City Council serving minority and women-owned businesses in New York.
        </p>
        <p>
          Through this partnership with the NYC Department of Small Business Services (SBS), participating
          organizations are provided with tools and resources to teach firms about selling to government and the
          benefits of Minority and Women-owned Business Enterprise (M/WBE) certification with the City of New York.
        </p>
        <p><strong>We offer FREE certification.</strong></p>
      </section>

      <section className="section container">
        <article className="panel stack service-cta-panel">
          <h2>Apply For FREE M/WBE Certification Support</h2>
          <p>
            SIBOC helps minority- and women-owned businesses understand certification requirements and prepare for
            procurement opportunities with the City of New York.
          </p>
          <div className="hero-actions">
            <a
              className="button solid"
              href="https://siboc.org/m-wbe-certification/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Official M/WBE Program Page
            </a>
            <a className="button ghost service-ghost" href="/contact">
              Request Certification Help
            </a>
          </div>
        </article>
      </section>

      <section className="section container stack">
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2023/08/tiny-treasurers-grand-opening.jpg"
          alt="M/WBE program support"
          title="Certification + Contracting Support"
          paragraphs={[
            "SIBOC helps firms understand how to navigate city procurement pathways and certification benefits.",
          ]}
        />
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2023/11/Screenshot-7.png"
          alt="M/WBE resources"
          title="Tools And Resources"
          reverse
          paragraphs={[
            "Participating organizations provide practical tools and training for firms selling to government.",
          ]}
        />
      </section>
      <ProgramContactForm program="M/WBE Certification" />
    </main>
  );
}
