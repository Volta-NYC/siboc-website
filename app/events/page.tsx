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
        <ul className="list">
          <li>Honorees include business and community leaders from across Staten Island.</li>
          <li>Sponsors include local banks, schools, and community organizations.</li>
          <li>Events include networking, empowerment breakfast programming, and district activations.</li>
        </ul>
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
