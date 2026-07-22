import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getAgriculturalAutomationBundle } from "@/lib/i18n/content";

const accent = "#2F6B3A";

export default function AgriApplications({ locale }: { locale: Locale }) {
  const { agriculturalAutomation: agri } = getAgriculturalAutomationBundle(locale);

  return (
    <section className="bg-white py-14 lg:py-20" aria-labelledby="agri-apps-heading">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2
            id="agri-apps-heading"
            className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
          >
            {agri.applicationsTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#3a3a3a]">{agri.applicationsIntro}</p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {agri.applications.map((app, index) => (
            <article key={app.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F6F2]">
                <Image
                  src={app.image}
                  alt={app.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="mt-5 flex gap-4">
                <span
                  className="shrink-0 pt-1 text-xs font-bold uppercase tracking-[0.14em]"
                  style={{ color: accent }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0B0F19] md:text-[22px]">
                    {app.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#3a3a3a] md:text-base">{app.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
