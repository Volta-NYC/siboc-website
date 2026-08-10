import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE, TESTIMONIALS } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Client Testimonials | SIBOC",
  description: "Read testimonials from SIBOC clients including She Media NY, Josie Michelle Events, and DH2 Limo.",
};

export default function TestimonialsPage() {
  return (
    <main id="main-content">
      <PageHero title="Client Testimonials" subtitle="Business owners and entrepreneurs supported by SIBOC." image={SITE.images.page} />
      <section className="section container testimonial-list">
        {TESTIMONIALS.map((item) => (
          <article className="testimonial-block" key={item.person}>
            <blockquote>
              <p>{item.quote}</p>
            </blockquote>
            <footer>
              <strong>{item.person}</strong>
              <span>{item.title}</span>
              <span>{item.business}</span>
              {item.website ? (
                <a href={item.website} target="_blank" rel="noopener noreferrer">
                  Business website
                </a>
              ) : null}
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
}
