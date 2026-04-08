import { CONTACT } from "@/lib/siteData";

interface ProgramContactFormProps {
  program: string;
}

export default function ProgramContactForm({ program }: ProgramContactFormProps) {
  return (
    <section className="section container">
      <article className="panel service-contact-panel">
        <h2>Request Help From SIBOC</h2>
        <p>
          Tell us what you need for <strong>{program}</strong> and our team will follow up with guidance on next
          steps. You can also call us at <strong>{CONTACT.phone}</strong>.
        </p>
        <form className="contact-form" action={`mailto:${CONTACT.email}`} method="post" encType="text/plain">
          <input type="hidden" name="program" value={program} />
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
            <textarea
              name="message"
              rows={5}
              required
              defaultValue={`I'm interested in ${program}. Please contact me with next steps.`}
            />
          </label>
          <button type="submit" className="button solid">
            Send Program Inquiry
          </button>
        </form>
      </article>
    </section>
  );
}
