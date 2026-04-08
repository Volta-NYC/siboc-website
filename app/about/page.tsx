import PageHero from "@/components/PageHero";
import { ABOUT_GALLERY, ABOUT_PARAGRAPHS, BOARD_PHOTO, STAFF_BOARD, STAFF_TEAM } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About" subtitle="About Us" />
      <section className="section container stack">
        {ABOUT_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="section container">
        <div className="about-gallery">
          {ABOUT_GALLERY.map((image) => (
            <img key={image} src={image} alt="SIBOC community" loading="lazy" />
          ))}
        </div>
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
