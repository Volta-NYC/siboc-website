import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import PageHero from "@/components/PageHero";
import { CONTACT, SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Contact SIBOC | Staten Island",
  description: "Contact SIBOC at 686 Forest Ave, Staten Island, NY 10310, by phone at (718) 816-4775, or by email at info@siboc.org.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero title="Contact SIBOC" subtitle="Get free business assistance or ask a program question." image={SITE.images.contact} />

      <section className="section container contact-grid">
        <article className="panel contact-card">
          <p className="eyebrow">Get in touch</p>
          <h2>Staten Island Business Outreach Center</h2>
          <dl className="contact-list">
            <div>
              <dt>Meet Us</dt>
              <dd>{CONTACT.address}</dd>
            </div>
            <div>
              <dt>Call Us</dt>
              <dd><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></dd>
            </div>
            <div>
              <dt>Email Us</dt>
              <dd><a href={CONTACT.emailHref}>{CONTACT.email}</a></dd>
            </div>
          </dl>
          <div className="social-links">
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </article>

        <article className="panel">
          <InquiryForm title="Quick Message" buttonLabel="Send Message" />
        </article>
      </section>
    </main>
  );
}
