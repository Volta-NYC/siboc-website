import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE, TESTIMONIALS } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Client Testimonials | SIBOC",
  description: "Read testimonials from SIBOC clients including She Media NY, Josie Michelle Events, and DH2 Limo.",
};

export default function TestimonialsPage() {
  const [featured, ...moreTestimonials] = TESTIMONIALS;

  return (
    <main id="main-content">
      <PageHero title="Client Testimonials" subtitle="Business owners and entrepreneurs supported by SIBOC." image={SITE.images.page} />

      <section className="section container testimonial-intro">
        <div>
          <p className="eyebrow">Client stories</p>
          <h2>Real Staten Island business owners describe the help they received from SIBOC.</h2>
        </div>
        <p>
          These testimonials come from SIBOC clients and preserve the original attribution from the current SIBOC
          website.
        </p>
      </section>

      <section className="section muted-band testimonial-feature-wrap">
        <div className="container testimonial-feature">
          <aside className="testimonial-aside">
            <p className="eyebrow">Featured testimonial</p>
            <blockquote>
              <p>&ldquo;Through your guidance, encouragement, and patience She Media had the certifications to attract a Goliath-like Clear Channel.&rdquo;</p>
            </blockquote>
            <footer>
              <strong>{featured.person}</strong>
              <span>{featured.title}</span>
              <span>{featured.business}</span>
            </footer>
            {featured.website ? (
              <a href={featured.website} target="_blank" rel="noopener noreferrer" className="text-link">
                Business website
              </a>
            ) : null}
          </aside>

          <article className="testimonial-story">
            <div className="testimonial-story-header">
              <p className="eyebrow">Client profile</p>
              <h2>{featured.business}</h2>
              <dl>
                <div>
                  <dt>Client</dt>
                  <dd>{featured.person}</dd>
                </div>
                <div>
                  <dt>Field</dt>
                  <dd>{featured.title}</dd>
                </div>
              </dl>
            </div>
            <blockquote>
              <p>{featured.quote}</p>
            </blockquote>
          </article>
        </div>
      </section>

      <section className="section container testimonial-card-section">
        <div className="section-heading">
          <p className="eyebrow">More client experiences</p>
          <h2>Certification, funding information, procurement support, and referrals.</h2>
        </div>
        <div className="testimonial-card-grid">
          {moreTestimonials.map((item) => (
            <article className="testimonial-card" key={item.person}>
              <div className="testimonial-card-top">
                <span aria-hidden="true">{item.person.charAt(0)}</span>
                <div>
                  <p>{item.business}</p>
                  <small>{item.title}</small>
                </div>
              </div>
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <footer>
                <strong>{item.person}</strong>
                <span>{item.title}</span>
                <span>{item.business}</span>
                {item.website ? (
                  <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-link">
                    Business website
                  </a>
                ) : null}
              </footer>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
