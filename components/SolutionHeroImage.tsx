import Image from "next/image";

type SolutionHeroImageProps = {
  src: string;
  alt: string;
  fullBleed?: boolean;
  wide?: boolean;
  contain?: boolean;
  aspect?: "ultrawide" | "wide" | "photo" | "banner" | "square";
};

const aspectClassMap = {
  ultrawide: "aspect-[21/9]",
  wide: "aspect-[16/9]",
  photo: "aspect-[3/2]",
  banner: "aspect-[2/1]",
  square: "aspect-square min-h-[28rem] md:min-h-[36rem] lg:min-h-[42rem]",
} as const;

export default function SolutionHeroImage({
  src,
  alt,
  fullBleed = false,
  wide = false,
  contain = false,
  aspect,
}: SolutionHeroImageProps) {
  const resolvedAspect = aspect ?? (contain ? "square" : "ultrawide");
  const aspectClass = aspectClassMap[resolvedAspect];
  const isBanner = resolvedAspect === "banner";
  const fitClass = contain || isBanner ? "object-contain" : "object-cover object-center";

  if (fullBleed) {
    return (
      <div className={`relative mt-10 w-full overflow-hidden bg-[#F8FAFC] lg:mt-12 ${aspectClass}`}>
        <Image src={src} alt={alt} fill priority className={fitClass} sizes="100vw" />
      </div>
    );
  }

  return (
    <div
      className={`solution-hero-image mx-auto w-full overflow-hidden rounded-sm border border-slate-200 bg-[#F8FAFC] shadow-sm ${
        isBanner ? "max-w-4xl" : contain || wide ? "max-w-7xl" : "max-w-6xl"
      }`}
    >
      <div
        className={`relative mx-auto w-full ${aspectClass} ${
          isBanner ? "max-h-[20rem] md:max-h-[24rem] lg:max-h-[28rem]" : contain ? "max-w-5xl" : ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className={fitClass}
          sizes={isBanner || contain ? "(max-width: 1280px) 100vw, 896px" : "(max-width: 1280px) 100vw, 1280px"}
        />
      </div>
    </div>
  );
}
