import PageHero from "@/components/PageHero";
import SplitBand from "@/components/SplitBand";
import { PAGE_HEADERS } from "@/lib/siteData";

export default function ForestAvenueWestPage() {
  const committee = [
    "Stacey Koutras — Elan Hair and Nail Salon",
    "Robert Fitzsimmons — Property Owner",
    "Maria Carrozza — The Cookie Jar",
    "Vincent Innocente — Northfield Bank",
    "Kim Ungaro — Ungaro's Pizzeria",
    "Leslie Velasquez — SBS",
    "Michael Melmed — SBS",
  ];

  return (
    <main>
      <PageHero title="Forest Avenue West" subtitle="BID Exploration" image={PAGE_HEADERS.forestWest} />
      <section className="section container stack">
        <p>
          The Staten Island Business Outreach Center has recently started business improvement district (BID)
          exploration efforts in the Forest Avenue West area of Staten Island, from Manor Road-Willowbrook Road.
        </p>
        <p>
          Becoming a BID requires SIBOC to go through many BID formation phases. With the help of the local
          community, SIBOC is on its way to having the Forest Avenue West BID formalized.
        </p>
      </section>

      <section className="section container">
        <article className="panel stack project-cta-panel">
          <h2>Support The Forest Avenue West BID Formation</h2>
          <p>
            BID formation requires strong local participation. Reach out to SIBOC to stay involved with updates,
            planning phases, and neighborhood business engagement.
          </p>
          <div className="hero-actions">
            <a className="button solid" href="/contact">
              Join The Forest Avenue West Effort
            </a>
            <a className="button ghost project-ghost" href="/projects">
              View All SIBOC Projects
            </a>
          </div>
        </article>
      </section>

      <section className="section container stack">
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2023/08/Forest-West-Steering-Committe-1.jpg"
          alt="Forest West Steering Committee"
          title="Steering Committee"
          paragraphs={[committee.join(" • ")]}
        />
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2024/02/Forest-Avenue-West-Logo-3.png"
          alt="Forest Avenue West logo"
          title="Formation In Progress"
          reverse
          paragraphs={[
            "With ongoing local collaboration, SIBOC continues BID formation phases for the Forest Avenue West area.",
          ]}
        />
      </section>
    </main>
  );
}
