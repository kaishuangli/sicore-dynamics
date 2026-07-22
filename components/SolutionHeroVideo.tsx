type SolutionHeroVideoProps = {
  src?: string;
  poster: string;
  title: string;
  wide?: boolean;
};

export default function SolutionHeroVideo({ src, poster, title, wide = false }: SolutionHeroVideoProps) {
  return (
    <div
      className={`solution-hero-video mx-auto w-full overflow-hidden rounded-sm border border-slate-200 bg-[#F8FAFC] shadow-sm ${
        wide ? "max-w-7xl" : "max-w-6xl"
      }`}
    >
      <video
        className="aspect-[21/9] w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={title}
      >
        {src ? <source src={src} type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
