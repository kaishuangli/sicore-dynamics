"use client";

import Image from "next/image";
import { useState } from "react";

const photoSizes = {
  compact: { max: "max-w-[280px]", sizes: "280px", thumb: "64px", thumbs: "grid-cols-4" },
  medium: { max: "max-w-[550px]", sizes: "(max-width: 550px) 100vw, 550px", thumb: "80px", thumbs: "grid-cols-5 sm:grid-cols-6" },
  large: { max: "max-w-[1100px]", sizes: "(max-width: 1100px) 100vw, 1100px", thumb: "160px", thumbs: "grid-cols-6 sm:grid-cols-8" },
} as const;

export default function DockingProductPhotos({
  images,
  alt,
  size = "compact",
}: {
  images: string[];
  alt: string;
  size?: keyof typeof photoSizes;
}) {
  const unique = [...new Set(images.filter(Boolean))];
  const [index, setIndex] = useState(0);
  const current = unique[Math.min(index, unique.length - 1)];
  if (!current) return null;
  const photo = photoSizes[size];

  return (
    <div className={`mx-auto w-full ${photo.max}`}>
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <Image
          src={current}
          alt={alt}
          fill
          className="object-contain p-3"
          sizes={photo.sizes}
        />
      </div>
      {unique.length > 1 ? (
        <div className={`mt-3 grid gap-2 ${photo.thumbs}`}>
          {unique.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative aspect-square overflow-hidden rounded-lg border bg-white ${
                i === index ? "border-[#0B5FFF] ring-1 ring-[#0B5FFF]" : "border-slate-200"
              }`}
            >
              <Image src={src} alt="" fill className="object-contain p-1" sizes={photo.thumb} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
