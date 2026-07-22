import Link from "next/link";
import Logo from "@/components/Logo";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/path";
import { industryNavLinks } from "@/lib/industries";
import { productNavLinks } from "@/lib/products";
import { site } from "@/lib/site";
import { technologyNavLinks } from "@/lib/technology";

export default function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const L = (href: string) => withLocale(href, locale);

  const columns = [
    {
      title: dict.footer.technology,
      links: technologyNavLinks.map((item) => ({
        label: dict.navTech[item.id as keyof typeof dict.navTech] ?? item.label,
        href: L(item.href),
      })),
    },
    {
      title: dict.footer.products,
      links: productNavLinks.map((item) => ({
        label: item.label,
        href: L(item.href),
      })),
    },
    {
      title: dict.footer.solutions,
      links: industryNavLinks.map((item) => ({
        label: dict.navSolutions[item.id as keyof typeof dict.navSolutions] ?? item.label,
        href: L(item.href),
      })),
    },
    {
      title: dict.footer.company,
      links: [
        { label: dict.footer.aboutUs, href: L("/about") },
        { label: dict.footer.knowledgeCenter, href: L("/knowledge") },
        { label: dict.footer.download, href: L("/download") },
        { label: dict.footer.partners, href: L("/partners") },
        { label: dict.footer.contact, href: L("/contact") },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#071225] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container-page relative py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr_1.1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">{dict.site.tagline}</p>
            <div className="mt-5 flex gap-3 text-slate-300">
              <a
                href={`mailto:${site.email}`}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-xs transition hover:border-cyan-400/40 hover:text-cyan-300"
                aria-label="Email SiCore Dynamics"
              >
                ✉
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-sm font-semibold text-white">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 transition hover:text-cyan-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">{dict.common.newsletter}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">{dict.common.newsletterCopy}</p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                placeholder={dict.common.emailPlaceholder}
              />
              <button
                type="button"
                className="rounded-lg bg-gradient-to-r from-[#0B5FFF] to-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-blue-600 hover:to-blue-700"
              >
                {dict.common.subscribe}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row">
          <p>{dict.common.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-cyan-300">
              {dict.common.privacy}
            </a>
            <a href="#" className="transition hover:text-cyan-300">
              {dict.common.terms}
            </a>
            <a href="#" className="transition hover:text-cyan-300">
              {dict.common.sitemap}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
