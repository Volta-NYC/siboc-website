import Link from "next/link";
import SiteImage from "@/components/SiteImage";

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
    <section className={`split-band${reverse ? " reverse" : ""}`}>
      <div className="split-media">
        <SiteImage src={image} alt={alt} />
      </div>
      <div className="split-copy">
        <h3>{title}</h3>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {ctaLabel && ctaHref ? ctaHref.startsWith("http") ? (
          <a href={ctaHref} className="text-link" target="_blank" rel="noopener noreferrer">
            {ctaLabel}
          </a>
        ) : (
          <Link href={ctaHref} className="text-link">
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
