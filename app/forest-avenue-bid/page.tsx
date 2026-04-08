import PageHero from "@/components/PageHero";

export default function ForestAvenueBidPage() {
  return (
    <main>
      <PageHero title="Forest Avenue BID" subtitle="SIBOC actively manages the Forest Avenue Business Improvement District" />
      <section className="section container stack">
        <p>SIBOC actively manages the Forest Avenue Business Improvement District (BID).</p>
        <p>For more information, please visit the Forest Ave BID website.</p>
        <p>
          <a href="https://forestavenuebid.com/" target="_blank" rel="noopener noreferrer" className="button solid">
            Visit Forest Ave BID Website
          </a>
        </p>
      </section>
    </main>
  );
}
