import PageHero from "@/components/PageHero";
import SplitBand from "@/components/SplitBand";
import { ABOUT_GALLERY, ABOUT_PARAGRAPHS, BOARD_PHOTO, PAGE_HEADERS, STAFF_BOARD, STAFF_TEAM } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About" subtitle="About Us" image={PAGE_HEADERS.about} />
      <section className="section container stack">
        <SplitBand
          image={ABOUT_GALLERY[0]}
          alt="SIBOC team and community"
          title="Serving Staten Island Since 1980"
          paragraphs={[ABOUT_PARAGRAPHS[0], ABOUT_PARAGRAPHS[1]]}
        />
        <SplitBand
          image={ABOUT_GALLERY[1]}
          alt="SIBOC board"
          title="Inclusive Growth Mission"
          reverse
          paragraphs={[ABOUT_PARAGRAPHS[2], ABOUT_PARAGRAPHS[3]]}
        />
        <SplitBand
          image={ABOUT_GALLERY[2]}
          alt="SIBOC neighborhood support"
          title="Local Business + Neighborhood Focus"
          paragraphs={[
            ABOUT_PARAGRAPHS[4],
            "Our team supports business planning, technical assistance, financial literacy, and neighborhood-focused development across Staten Island.",
          ]}
        />
      </section>

      <section className="section container" id="team">
        <h2>Meet The Team</h2>
        <div className="staff-grid">
          {STAFF_TEAM.map((member) => (
            <article className="staff-card" key={member.name}>
              <img src={member.image} alt={member.name} loading="lazy" />
              <div className="staff-card-body">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="board">
        <h2>Board of Directors</h2>
        <div className="board-grid">
          {STAFF_BOARD.map((member) => (
            <article className="board-card" key={member}>
              <img src={BOARD_PHOTO} alt={member} loading="lazy" />
              <p>{member}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
