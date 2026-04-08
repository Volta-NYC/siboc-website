import PageHero from "@/components/PageHero";

export default function EacPage() {
  const features = [
    "Evaluating the feasibility of starting a new business",
    "Business registration assistance",
    "A 60-hours business plan training course",
    "Financial and business management skill building",
    "Develop and execute marketing strategies",
    "Website development and the design of ecommerce platforms",
    "Identifying and accessing capital and credit services",
    "Assistance with state procurement programs",
    "M/WBE Certification Assistance",
  ];

  return (
    <main>
      <PageHero title="Entrepreneur Assistance Center" subtitle="Entrepreneurship Assistance Centers (EAC)" />
      <section className="section container stack">
        <p>
          Entrepreneurship Assistance Centers (EAC) is an enterprise development program that provides instruction,
          training, technical assistance, and support services to individuals who are interested in starting or
          recently started their own business, or entrepreneurs seeking to expand or strengthen their early-stage
          business.
        </p>
        <p>
          The Staten Island EAC is a full-service center that offers a 8 and 10 week program designed to help you
          become more familiar with different aspects of your business.
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
