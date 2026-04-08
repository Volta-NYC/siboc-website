import Link from "next/link";

interface SplitBandProps {
  image: string;
  alt: string;
  title: string;
  paragraphs: string[];
  reverse?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function SplitBand({ image, alt, title, paragraphs, reverse, ctaLabel, ctaHref }: SplitBandProps) {
  return (
    <section className={`split-band ${reverse ? "reverse" : ""}`}>
      <div className="split-media">
        <img src={image} alt={alt} loading="lazy" />
      </div>
      <div className="split-copy">
        <h3>{title}</h3>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {ctaLabel && ctaHref ? (
          <Link href={ctaHref} className="cta-link">
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
