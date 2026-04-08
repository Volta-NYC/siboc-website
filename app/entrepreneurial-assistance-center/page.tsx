import PageHero from "@/components/PageHero";
import SplitBand from "@/components/SplitBand";
import { PAGE_HEADERS } from "@/lib/siteData";

export default function EacPage() {
  const features = [
    "Evaluating the feasibility of starting a new business",
    "Business registration assistance",
    "A 60-hours business plan training course",
    "Financial and business management skill building",
    "Develop and execute marketing strategies",
    "Website development and the design of ecommerce platforms",
    "Identifying and accessing capital and credit services",
    "Assistance with state procurement programs",
    "M/WBE Certification Assistance",
  ];

  return (
    <main>
      <PageHero title="Entrepreneur Assistance Center" subtitle="Entrepreneurship Assistance Centers (EAC)" image={PAGE_HEADERS.eac} />
      <section className="section container stack">
        <p>
          Entrepreneurship Assistance Centers (EAC) is an enterprise development program that provides instruction,
          training, technical assistance, and support services to individuals who are interested in starting or
          recently started their own business, or entrepreneurs seeking to expand or strengthen their early-stage
          business.
        </p>
        <p>
          The Staten Island EAC is a full-service center that offers a 8 and 10 week program designed to help you
          become more familiar with different aspects of your business.
        </p>
      </section>

      <section className="section container stack">
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2023/08/EAC-Center-Fall-2022-class.jpg"
          alt="EAC class"
          title="What EAC Offers"
          paragraphs={[
            "Business registration support, training, and one-on-one technical assistance for early-stage entrepreneurs.",
            "Hands-on help with planning, marketing, financing, and practical business growth decisions.",
          ]}
        />
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2024/07/unnamed-1-2048x1536.jpg"
          alt="EAC community participants"
          title="Program Experience"
          reverse
          paragraphs={[
            "Participants receive guided training, one-on-one strategy support, and practical implementation help.",
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
