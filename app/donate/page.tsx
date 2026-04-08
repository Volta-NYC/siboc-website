import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/siteData";

export default function DonatePage() {
  return (
    <main>
      <PageHero title="Donate to SIBOC" subtitle="The small business community needs you" />
      <section className="section container donate-layout">
        <article className="panel media">
          <img src="https://siboc.org/wp-content/uploads/2023/08/jade-1024x768.jpg" alt="SIBOC community" />
          <h3>Your Support Matters</h3>
          <p>
            Together, we can foster a sustainable local economy and build a community where people are proud to work,
            live, and shop.
          </p>
          <p>
            Your gift supports SIBOC&apos;s mission to give Staten Island access to the resources needed to build
            thriving neighborhoods.
          </p>
        </article>

        <article className="panel stack">
          <h3>Ways to Give</h3>
          <p><strong>Donate by Mail</strong></p>
          <p>
            Mail a check payable to <strong>West Brighton Community Local Development</strong>,<br />
            868 Forest Ave, Staten Island, NY 10310.
          </p>
          <p><strong>Donate Online</strong></p>
          <p>Use the official PayPal donate button below.</p>
          <p>
            <a
              className="button solid"
              href="https://www.paypal.com/donate/?hosted_button_id=E6MPEH8WXFJFL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate with PayPal
            </a>
          </p>
          <p>
            <a href={SITE.external.donate} target="_blank" rel="noopener noreferrer">
              View official donate page
            </a>
          </p>
          <p className="fine-print">
            *Your entire donation is 100% tax deductible. SIBOC is an I.R.S. registered 501(c)(3) tax-exempt
            organization.
          </p>
        </article>
      </section>
    </main>
  );
}
