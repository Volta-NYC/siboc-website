import PageHero from "@/components/PageHero";

export default function MwbePage() {
  return (
    <main>
      <PageHero title="M/WBE Certification" subtitle="Minority- and Women-Owned Business" />
      <section className="section container stack">
        <p>
          The 2025 M/WBE Leadership Association is a group of community organizations selected by the New York
          City Council serving minority and women-owned businesses in New York.
        </p>
        <p>
          Through this partnership with the NYC Department of Small Business Services (SBS), participating
          organizations are provided with tools and resources to teach firms about selling to government and the
          benefits of Minority and Women-owned Business Enterprise (M/WBE) certification with the City of New York.
        </p>
        <p><strong>We offer FREE certification.</strong></p>
      </section>
    </main>
  );
}
