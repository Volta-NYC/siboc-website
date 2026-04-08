import PageHero from "@/components/PageHero";

export default function WomensBusinessCenterPage() {
  const features = [
    "Business Start Up or Expansion",
    "Business Plan Development",
    "Licensing and Permit Information",
    "Identifying Financial Resource Opportunities",
    "Marketing Research and Advertising",
    "Import/Export Information",
  ];

  return (
    <main>
      <PageHero title="Women's Business Center" subtitle="Women's Business Center Staten Island" />
      <section className="section container stack">
        <p>
          The Women&apos;s Business Center is dedicated to assisting all Staten Island small business owners and
          entrepreneurs with all aspects of their business.
        </p>
        <p>
          The Staten Island Business Outreach Center (SIBOC) serves small businesses and residents throughout Staten
          Island, NY. We are part of the Business Outreach Center Network (BOC) which serves over 3,000 clients
          throughout New York City.
        </p>
        <h3>Program features</h3>
        <ul className="list">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
