import { SITE } from "@/lib/siteData";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section
      className="page-hero page-hero-image"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 30, 64, 0.56), rgba(8, 30, 64, 0.72)), url('${image ?? SITE.pageHeaderImage}')`,
      }}
    >
      <div className="container">
        <p className="kicker">SIBOC</p>
        <h1>{title}</h1>
        {subtitle ? <p className="subcopy">{subtitle}</p> : null}
      </div>
    </section>
  );
}
