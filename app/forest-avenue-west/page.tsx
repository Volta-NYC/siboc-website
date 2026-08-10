import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { FOREST_WEST_COMMITTEE, SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Forest Avenue West | SIBOC",
  description: "Forest Avenue West BID exploration, steering committee, and ways to get involved with SIBOC.",
};

export default function ForestAvenueWestPage() {
  return (
    <main id="main-content">
      <PageHero title="Forest Avenue West" subtitle="BID Exploration" image={SITE.images.forestWest} />

      <section className="section container content-grid">
        <div>
          <p className="eyebrow">BID exploration</p>
          <h2>Forest Avenue West business improvement district formation work.</h2>
        </div>
        <div className="prose">
          <p>The Staten Island Business Outreach Center has recently started business improvement district (BID) exploration efforts in the Forest Avenue West area of Staten Island, from Manor Road-Willowbrook Road. Becoming a BID requires SIBOC to go through the many BID formation phases. With the help of the local community, SIBOC is on its way to having the Forest Avenue West BID formalized.</p>
          <div className="action-row">
            <Link href="/contact" className="button primary">Get Involved</Link>
            <Link href="/contact" className="button secondary">Contact SIBOC</Link>
            <Link href="/events" className="button secondary">View Events</Link>
          </div>
        </div>
      </section>

      <section className="section muted-band">
        <div className="container content-grid">
          <div>
            <SiteImage className="rounded-image logo-image" src={SITE.images.forestWestLogo} alt="Forest Avenue West logo" sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
          <div className="prose">
            <p className="eyebrow">Steering Committee</p>
            <h2>Local stakeholders engaged with SIBOC.</h2>
            <p>The Forest West Steering Committee is a group of local stakeholders who are proactively engaged with SIBOC.</p>
            <ul className="check-list">
              <li>is informed of the work being done</li>
              <li>is solicited for regular feedback</li>
              <li>seeks out and builds new partnerships</li>
              <li>identifies and aligns collective resources to advance all BID Formation & Exploration work</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Committee members</p>
          <h2>Forest Avenue West Steering Committee</h2>
        </div>
        <div className="directory-grid">
          {FOREST_WEST_COMMITTEE.map((member) => (
            <article className="directory-card" key={member.name}>
              <h3>{member.name}</h3>
              <p>{member.affiliation}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
