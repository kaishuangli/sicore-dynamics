"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImageGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const unique = [...new Set(images.filter(Boolean))];
  const [active, setActive] = useState(0);
  const current = unique[Math.min(active, unique.length - 1)] || unique[0];

  if (!current) return null;

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]">
        <Image src={current} alt={alt} fill className="object-contain p-8" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      {unique.length > 1 ? (
        <ul className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
          {unique.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className={`relative aspect-square w-full overflow-hidden rounded-md border bg-white ${
                  index === active ? "border-[#0B5FFF] ring-2 ring-[#0B5FFF]/20" : "border-slate-200"
                }`}
                aria-label={`${alt} ${index + 1}`}
              >
                <Image src={src} alt="" fill className="object-contain p-1" sizes="80px" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
