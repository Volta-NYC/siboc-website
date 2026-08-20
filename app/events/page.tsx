import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { BREAKFAST_2025, EMPOWERMENT_PHOTOS, GOOGLE_CALENDAR_EMBED, SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Events | SIBOC",
  description: "View SIBOC upcoming events through the calendar and past events including the SIBOC Empowerment Breakfast 2025.",
};

export default function EventsPage() {
  return (
    <main id="main-content">
      <PageHero title="Events" subtitle="SIBOC workshops, community programming, and past celebrations." image={SITE.images.events} />

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Upcoming Events</p>
          <h2>Calendar</h2>
          <p>Use the SIBOC calendar for current workshops, corridor programming, and community events.</p>
        </div>
        <div className="calendar-frame">
          <iframe
            src={GOOGLE_CALENDAR_EMBED}
            title="SIBOC events calendar"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section muted-band">
        <div className="container event-detail">
          <div>
            <p className="eyebrow">Past Event</p>
            <h2>{BREAKFAST_2025.name}</h2>
            <p><strong>Date:</strong> {BREAKFAST_2025.date}</p>
            <p><strong>Venue:</strong> {BREAKFAST_2025.venue}</p>
          </div>
          <SiteImage src={SITE.images.events} alt="SIBOC Empowerment Breakfast attendees" sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
      </section>

      <section className="section container event-lists">
        <article>
          <h2>Honorees</h2>
          <ul className="check-list">
            {BREAKFAST_2025.honorees.map((honoree) => (
              <li key={honoree}>{honoree}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Sponsors</h2>
          <ul className="check-list">
            {BREAKFAST_2025.sponsors.map((sponsor) => (
              <li key={sponsor}>{sponsor}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section muted-band">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Event Photos</p>
            <h2>SIBOC Empowerment moments.</h2>
          </div>
          <div className="photo-gallery">
            {EMPOWERMENT_PHOTOS.map((photo, index) => (
              <figure className="photo-gallery-item" key={photo.src}>
                <SiteImage
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <figcaption>Photo {index + 1}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
