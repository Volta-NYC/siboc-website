import Link from "next/link";
import PageHero from "@/components/PageHero";
import SplitBand from "@/components/SplitBand";
import { PAGE_HEADERS, PROJECT_LINKS } from "@/lib/siteData";

export default function ProjectsPage() {
  return (
    <main>
      <PageHero title="Projects" subtitle="Commercial revitalization and neighborhood support" image={PAGE_HEADERS.projects} />
      <section className="section container stack">
        <p>
          In partnership with NYC Small Business Services, SIBOC conducts Commercial District Needs Assessments that
          highlight the business landscape, consumer characteristics, physical environment, and unique character of
          local business corridors.
        </p>
        <p>
          This work includes storefront analysis, merchant outreach, consumer surveys, and recommendations that
          support long-term neighborhood vitality.
        </p>
      </section>
      <section className="section container grid">
        {PROJECT_LINKS.map((p) => (
          <article className="panel media" key={p.href}>
            <img src={p.image} alt={p.label} loading="lazy" />
            <h3>{p.label}</h3>
            <p>{p.description}</p>
            <Link href={p.href} className="cta-link">Explore Project</Link>
          </article>
        ))}
      </section>

      <section className="section container stack">
        <SplitBand
          image="https://siboc.org/wp-content/uploads/2024/07/DSC09133-scaled.jpg"
          alt="Neighborhood corridor"
          title="Neighborhood-First Project Design"
          paragraphs={[
            "SIBOC combines merchant surveys, community feedback, and corridor analysis to shape practical recommendations.",
            "Each project is built to support local business performance and quality-of-life improvements.",
          ]}
        />
      </section>
    </main>
  );
}
