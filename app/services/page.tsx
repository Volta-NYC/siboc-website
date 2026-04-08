import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PAGE_HEADERS, SERVICE_LINKS, SERVICE_SUMMARY, TESTIMONIALS } from "@/lib/siteData";

export default function ServicesPage() {
  return (
    <main>
      <PageHero title="Services" subtitle="Our Services" image={PAGE_HEADERS.services} />
      <section className="section container stack">
        <p>{SERVICE_SUMMARY}</p>
        <p><strong>All services we offer are FREE!</strong></p>
        <p>
          Core support includes one-on-one counseling, entrepreneurship training classes, business plan development,
          and guidance through contracting and certification opportunities.
        </p>
      </section>
      <section className="section container grid cards-3">
        {SERVICE_LINKS.map((s) => (
          <article className="panel media" key={s.href}>
            <img src={s.image} alt={s.label} loading="lazy" />
            <h3>{s.label}</h3>
            <p>{s.description}</p>
            <Link href={s.href} className="cta-link">Explore Program</Link>
          </article>
        ))}
      </section>

      <section className="section container" id="testimonials">
        <h2>Client Testimonials</h2>
        <div className="stack">
          {TESTIMONIALS.map((item) => (
            <blockquote key={item.quote} className="quote">
              <p>{item.quote}</p>
              <footer className="quote-from">— {item.from}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
