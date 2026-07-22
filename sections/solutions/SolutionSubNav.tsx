"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getIndustryHref, publicIndustries } from "@/lib/industries";

export default function SolutionSubNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-[118px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md"
      aria-label="Industrial solution categories"
    >
      <div className="container-page">
        <ul className="flex gap-1 overflow-x-auto py-3">
          {publicIndustries.map((item) => {
            const href = getIndustryHref(item.id);
            const isActive = pathname === href;

            return (
              <li key={item.id} className="shrink-0">
                <Link
                  href={href}
                  className={`block whitespace-nowrap border-b-2 px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] transition md:text-[13px] ${
                    isActive
                      ? "border-[#0B5FFF] text-[#0B5FFF]"
                      : "border-transparent text-slate-600 hover:border-slate-300 hover:text-[#0B0F19]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
