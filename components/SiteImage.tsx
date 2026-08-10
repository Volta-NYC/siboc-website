import Image from "next/image";

interface SiteImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

export default function SiteImage({
  src,
  alt,
  className,
  loading = "lazy",
  priority,
  width = 1200,
  height = 800,
  sizes = "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw",
}: SiteImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : loading}
      priority={priority}
      sizes={sizes}
    />
  );
}
