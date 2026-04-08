import PageHero from "@/components/PageHero";
import { CONTACT, SITE } from "@/lib/siteData";

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact" subtitle="Get In Touch" />
      <section className="section container contact-grid">
        <article className="panel stack">
          <h3>Contact Info</h3>
          <p><strong>Meet Us:</strong> {CONTACT.address}</p>
          <p><strong>Call Us:</strong> {CONTACT.phone}</p>
          <p><strong>Email Us:</strong> {CONTACT.email}</p>
          <p>
            <a href="https://siboc.org/contact/" target="_blank" rel="noopener noreferrer">Open Official Contact Form</a>
          </p>
          <p>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            {" · "}
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </p>
        </article>

        <article className="panel">
          <h3>Quick Message</h3>
          <form className="contact-form" action={`mailto:${CONTACT.email}`} method="post" encType="text/plain">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit" className="button solid">Send Message</button>
          </form>
        </article>
      </section>
    </main>
  );
}
