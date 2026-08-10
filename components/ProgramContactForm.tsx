import InquiryForm from "@/components/InquiryForm";
import { CONTACT } from "@/lib/siteData";

interface ProgramContactFormProps {
  program: string;
}

export default function ProgramContactForm({ program }: ProgramContactFormProps) {
  return (
    <section className="section container">
      <article className="panel form-panel">
        <div>
          <p className="eyebrow">Free SIBOC assistance</p>
          <h2>Request Help From SIBOC</h2>
          <p>
            Submit a program inquiry or call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. Required fields are
            marked with an asterisk.
          </p>
        </div>
        <InquiryForm program={program} buttonLabel="Send Program Inquiry" />
      </article>
    </section>
  );
}
