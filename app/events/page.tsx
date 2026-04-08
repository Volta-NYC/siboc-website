import PageHero from "@/components/PageHero";
import { EVENTS_TEXT } from "@/lib/siteData";

export default function EventsPage() {
  return (
    <main>
      <PageHero title="Events" subtitle="SIBOC Events" />
      <section className="section container stack">
        <p>{EVENTS_TEXT}</p>
        <p>
          The event page highlights honorees, sponsors, and ticket details for SIBOC&apos;s empowerment programming.
        </p>
      </section>
    </main>
  );
}
