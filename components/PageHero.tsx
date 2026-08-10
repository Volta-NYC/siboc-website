import { SITE } from "@/lib/siteData";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imagePosition?: string;
}

export default function PageHero({ title, subtitle, image, imagePosition }: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(15, 42, 74, 0.9), rgba(15, 42, 74, 0.66)), url('${image ?? SITE.images.page}')`,
        backgroundPosition: imagePosition ?? "center 34%",
      }}
    >
      <div className="container">
        <p className="eyebrow">SIBOC</p>
        <h1>{title}</h1>
        {subtitle ? <p className="subcopy">{subtitle}</p> : null}
      </div>
    </section>
  );
}
