import PageHero from "@/components/PageHero";
import SplitBand from "@/components/SplitBand";
import { EVENTS_TEXT, PAGE_HEADERS } from "@/lib/siteData";

export default function EventsPage() {
  return (
    <main>
      <PageHero title="Events" subtitle="SIBOC Events" image={PAGE_HEADERS.events} />
      <section className="section container stack">
        <p>{EVENTS_TEXT}</p>
        <p>
          The event page highlights honorees, sponsors, and ticket details for SIBOC&apos;s empowerment programming.
        </p>
      </section>

      <section className="section container">
        <article className="panel media">
          <img src="https://siboc.org/wp-content/uploads/2024/10/IMG_1126-scaled.jpg" alt="SIBOC empowerment breakfast" loading="lazy" />
          <h3>Featured Event: SIBOC Empowerment Breakfast</h3>
          <p>
            Join SIBOC&apos;s annual celebration of business owners and community leaders making a difference on Staten
            Island.
          </p>
          <p>
            <a
              className="cta-link"
              href="https://siboc.org/events/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Official Event Updates
            </a>
          </p>
        </article>
      </section>

      <section className="section container grid cards-3">
        <article className="panel">
          <h3>Honorees</h3>
          <p>Recognizing standout entrepreneurs and community contributors from Staten Island.</p>
        </article>
        <article className="panel">
          <h3>Sponsors</h3>
          <p>Local institutions and businesses help power each event through direct support.</p>
        </article>
        <article className="panel">
          <h3>Networking</h3>
          <p>Programs are built to create new partnerships, visibility, and real opportunities.</p>
        </article>
      </section>

      <section className="section container stack">
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2024/10/IMG_1126-scaled.jpg"
          alt="SIBOC event"
          title="Community-Focused Events"
          paragraphs={[
            "Programming brings together entrepreneurs, community partners, sponsors, and local residents.",
          ]}
        />
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2024/10/IMG_0583-scaled.jpeg"
          alt="SIBOC event attendees"
          title="Networking + Recognition"
          reverse
          paragraphs={[
            "Events are designed to celebrate impact, build connections, and create real opportunities for local businesses.",
          ]}
        />
      </section>
    </main>
  );
}
