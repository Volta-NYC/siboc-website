import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { DONATION, SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Donate to SIBOC | Support Staten Island Small Businesses",
  description: "Donate to SIBOC by mail or online via PayPal to support Staten Island small businesses and neighborhood resources.",
};

export default function DonatePage() {
  return (
    <main id="main-content">
      <PageHero title="Donate to SIBOC" subtitle="The small business community needs you." image={SITE.images.donate} />

      <section className="section container donate-layout">
        <article className="panel media-card">
          <SiteImage src={SITE.images.donate} alt="SIBOC business support participant" sizes="(max-width: 960px) 100vw, 50vw" />
          <div className="prose">
            <h2>Your support matters.</h2>
            <p>Together, we can foster a sustainable local economy and build a community where people are proud to work, live, and shop.</p>
            <p>Your gift will support SIBOC&apos;s mission to give Staten Island access to all the resources needed to create thriving neighborhoods.</p>
          </div>
        </article>

        <article className="panel stack">
          <div>
            <p className="eyebrow">Donate by Mail</p>
            <h2>Mail a check</h2>
            <p>Mail a check payable to <strong>{DONATION.payableTo}</strong>.</p>
            <address>{DONATION.mailAddress}</address>
          </div>

          <div>
            <p className="eyebrow">Donate Online</p>
            <h2>PayPal</h2>
            <p>Donate online via PayPal using the link below.</p>
            <a className="paypal-button" href={SITE.external.paypal} target="_blank" rel="noopener noreferrer">
              Donate with PayPal
            </a>
          </div>

          <div className="qr-row">
            <SiteImage src={SITE.images.donateQr} alt="SIBOC PayPal donation QR code" width={240} height={240} sizes="110px" />
            <p>Scan the QR code for the SIBOC PayPal donation link.</p>
          </div>

          <p className="fine-print">{DONATION.taxText}</p>
        </article>
      </section>
    </main>
  );
}
