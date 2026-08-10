import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteImage from "@/components/SiteImage";
import { SITE } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Forest Avenue BID | SIBOC",
  description: "SIBOC actively manages the Forest Avenue Business Improvement District.",
};

export default function ForestAvenueBidPage() {
  return (
    <main id="main-content">
      <PageHero title="Forest Avenue BID" subtitle="SIBOC actively manages the Forest Avenue Business Improvement District." image={SITE.images.forestBidLogo} imagePosition="center" />

      <section className="section container content-grid">
        <div>
          <SiteImage className="rounded-image logo-image" src={SITE.images.forestBidLogo} alt="Forest Avenue BID logo" sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
        <div className="prose">
          <p>SIBOC actively manages the Forest Avenue Business Improvement District (BID).</p>
          <p>For more information, visit the Forest Avenue BID website.</p>
          <div className="action-row">
            <a href={SITE.external.forestBid} className="button primary" target="_blank" rel="noopener noreferrer">Visit Forest Avenue BID</a>
            <Link href="/contact" className="button secondary">Contact SIBOC</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
