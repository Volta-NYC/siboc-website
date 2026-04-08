import PageHero from "@/components/PageHero";

export default function ForestAvenueWestPage() {
  const committee = [
    "Stacey Koutras — Elan Hair and Nail Salon",
    "Robert Fitzsimmons — Property Owner",
    "Maria Carrozza — The Cookie Jar",
    "Vincent Innocente — Northfield Bank",
    "Kim Ungaro — Ungaro's Pizzeria",
    "Leslie Velasquez — SBS",
    "Michael Melmed — SBS",
  ];

  return (
    <main>
      <PageHero title="Forest Avenue West" subtitle="BID Exploration" />
      <section className="section container stack">
        <p>
          The Staten Island Business Outreach Center has recently started business improvement district (BID)
          exploration efforts in the Forest Avenue West area of Staten Island, from Manor Road-Willowbrook Road.
        </p>
        <p>
          Becoming a BID requires SIBOC to go through many BID formation phases. With the help of the local
          community, SIBOC is on its way to having the Forest Avenue West BID formalized.
        </p>
        <h3>Steering Committee</h3>
        <ul className="list">
          {committee.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
