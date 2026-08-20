import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { ABOUT_PARAGRAPHS, SITE, STAFF_BOARD, STAFF_TEAM } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "About SIBOC | Staten Island Business Outreach Center",
  description: "Learn about SIBOC's mission, free programs, SBA partnership, Women's Business Center status, team, and board.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero title="About SIBOC" subtitle="Serving Staten Island small businesses since 1980." image={SITE.images.about} />

      <section className="section container content-grid">
        <div>
          <p className="eyebrow">Mission</p>
          <h2>Empowering, educating, and elevating the Staten Island community.</h2>
        </div>
        <div className="prose">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section muted-band">
        <div className="container feature-list">
          <article>
            <h3>Free business support</h3>
            <p>One-on-one technical assistance, business training, financial literacy, business plan support, and M/WBE certification assistance.</p>
          </article>
          <article>
            <h3>Women&apos;s Business Center</h3>
            <p>SIBOC operates as a Women&apos;s Business Center and is part of the Business Outreach Center Network.</p>
          </article>
          <article>
            <h3>Neighborhood work</h3>
            <p>SIBOC administers the Forest Avenue BID and supports quality-of-life work with small businesses and community partners.</p>
          </article>
        </div>
      </section>

      <section className="section container" id="team">
        <div className="section-heading">
          <p className="eyebrow">Staff / Team</p>
          <h2>Meet the SIBOC team.</h2>
        </div>
        <div className="staff-grid">
          {STAFF_TEAM.map((member) => (
            <article className="staff-card" key={`${member.name}-${member.role}`}>
              <SiteImage src={member.image} alt={`${member.name}, ${member.role}`} />
              <div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="board">
        <div className="section-heading">
          <p className="eyebrow">Governance</p>
          <h2>Board of Directors</h2>
        </div>
        <div className="directory-grid">
          {STAFF_BOARD.map((member) => (
            <article className="directory-card" key={member.name}>
              <h3>{member.name}</h3>
              {member.role ? <p>{member.role}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
