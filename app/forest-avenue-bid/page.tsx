import PageHero from "@/components/PageHero";
import SplitBand from "@/components/SplitBand";
import { PAGE_HEADERS } from "@/lib/siteData";

export default function ForestAvenueBidPage() {
  return (
    <main>
      <PageHero title="Forest Avenue BID" subtitle="SIBOC actively manages the Forest Avenue Business Improvement District" image={PAGE_HEADERS.forestBid} />
      <section className="section container stack">
        <p>SIBOC actively manages the Forest Avenue Business Improvement District (BID).</p>
        <p>For more information, please visit the Forest Ave BID website.</p>
      </section>

      <section className="section container">
        <article className="panel stack project-cta-panel">
          <h2>Get BID Updates And Support</h2>
          <p>
            Explore the official Forest Avenue BID site for district updates, events, and merchant resources, or
            connect directly with SIBOC for corridor support.
          </p>
          <div className="hero-actions">
            <a
              className="button solid"
              href="https://forestavenuebid.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Official Forest Ave BID Site
            </a>
            <a className="button ghost project-ghost" href="/contact">
              Contact SIBOC About BID Services
            </a>
          </div>
        </article>
      </section>

      <section className="section container stack">
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2024/02/FABID-New-Logo.jpg"
          alt="Forest Avenue BID logo"
          title="Direct BID Management"
          paragraphs={[
            "SIBOC directly supports BID programming and communication for the Forest Avenue corridor.",
            "District work includes events, business support, and quality-of-life improvements.",
          ]}
        />
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2023/11/cropped-bid.png"
          alt="Forest Avenue BID district"
          title="Learn More On The Official Site"
          reverse
          paragraphs={["For district updates, maps, and programming details, visit the official Forest Avenue BID website."]}
          ctaHref="https://forestavenuebid.com/"
          ctaLabel="Visit Forest Ave BID Website"
        />
      </section>
    </main>
  );
}
