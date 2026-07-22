import Image from "next/image";

type KnowledgeImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
};

/** Knowledge diagrams are SVG educational assets under /images/knowledge. */
export default function KnowledgeImage({
  src,
  alt,
  className,
  sizes,
  priority,
  fill,
}: KnowledgeImageProps) {
  const isSvg = src.toLowerCase().endsWith(".svg");

  if (isSvg) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover ${className ?? ""}`}
        />
      );
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={className} loading={priority ? "eager" : "lazy"} />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1280}
      height={720}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
