import PageHero from "@/components/PageHero";
import SplitBand from "@/components/SplitBand";
import { PAGE_HEADERS } from "@/lib/siteData";

export default function WomensBusinessCenterPage() {
  const features = [
    "Business Start Up or Expansion",
    "Business Plan Development",
    "Licensing and Permit Information",
    "Identifying Financial Resource Opportunities",
    "Marketing Research and Advertising",
    "Import/Export Information",
  ];

  return (
    <main>
      <PageHero title="Women's Business Center" subtitle="Women's Business Center Staten Island" image={PAGE_HEADERS.wbc} />
      <section className="section container stack">
        <p>
          The Women&apos;s Business Center is dedicated to assisting all Staten Island small business owners and
          entrepreneurs with all aspects of their business.
        </p>
        <p>
          The Staten Island Business Outreach Center (SIBOC) serves small businesses and residents throughout Staten
          Island, NY. We are part of the Business Outreach Center Network (BOC) which serves over 3,000 clients
          throughout New York City.
        </p>
      </section>

      <section className="section container stack">
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2023/08/honorees.jpg"
          alt="Women's Business Center event"
          title="What The WBC Offers"
          paragraphs={[
            "Business startup and expansion support with practical counseling for women entrepreneurs.",
            "Planning, licensing, financing, marketing, and resource navigation support.",
          ]}
        />
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2023/08/BOC-Network-Logo-No-Tag-Line.jpg"
          alt="BOC network logo"
          title="Program Experience"
          reverse
          paragraphs={[
            "The WBC model blends direct counseling, practical planning support, and long-term business growth guidance.",
          ]}
        />
        <div>
          <h3>What It Offers</h3>
          <div className="offer-grid">
            {features.map((feature) => (
              <article className="offer-card" key={feature}>{feature}</article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
