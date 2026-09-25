"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import NavDropdown from "@/components/NavDropdown";
import CartNavButton from "@/components/cart/CartNavButton";
import { downloadNavLinks } from "@/lib/downloads";
import { getSelectableLocales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { knowledgeNavLinks } from "@/lib/knowledge";
import {
  getLocaleFromPathname,
  stripLocaleFromPathname,
  switchLocalePath,
  withLocale,
} from "@/lib/i18n/path";
import { industryNavLinks } from "@/lib/industries";
import { oemNavLinks } from "@/lib/oem-program";
import { getPublicProductNavLinks } from "@/lib/products";
import { technologyNavLinks } from "@/lib/technology";

type NavDropdownItem = {
  label: string;
  href: string;
  nested?: boolean;
};

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#0B5FFF]">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.3 3.3 5.3 3.3 9S14.2 18.7 12 21c-2.2-2.3-3.3-5.3-3.3-9S9.8 5.3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const languageLabels: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  es: "Español",
};

function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const dict = getDictionary(locale);
  const options = getSelectableLocales();
  const activeLocale = options.includes(locale) ? locale : "en";

  return (
    <div className="flex shrink-0 items-center gap-2">
      <GlobeIcon />
      <label className="sr-only" htmlFor="site-language">
        {dict.common.selectLanguage}
      </label>
      <div className="relative">
        <select
          id="site-language"
          value={activeLocale}
          onChange={(event) => {
            const next = event.target.value as Locale;
            router.push(switchLocalePath(pathname, next));
          }}
          className="appearance-none bg-transparent py-2 pr-6 text-xs font-semibold text-slate-800 outline-none transition hover:text-[#0B5FFF]"
        >
          {options.map((code) => (
            <option key={code} value={code}>
              {languageLabels[code]}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-slate-500">
          ▼
        </span>
      </div>
    </div>
  );
}

function isActivePath(pathname: string, href: string, _locale: Locale) {
  const barePath = stripLocaleFromPathname(pathname);
  const bareHref = stripLocaleFromPathname(href);

  if (bareHref === "/") return barePath === "/";
  if (bareHref === "/#solutions" || bareHref.endsWith("/#solutions")) {
    return barePath.startsWith("/solutions/");
  }
  const baseHref = bareHref.split("#")[0] || bareHref;
  return barePath === baseHref || barePath.startsWith(`${baseHref}/`);
}

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 px-4 py-3 text-xs font-bold uppercase tracking-[0.06em] transition lg:px-5 lg:text-[13px] ${
        active
          ? "bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
          : "text-white/95 hover:bg-white/10"
      }`}
    >
      {label}
      <span className="text-[9px] text-white/70 transition group-hover:text-white">▶</span>
    </Link>
  );
}

function MobileDropdownPanel({
  items,
  onNavigate,
}: {
  items: NavDropdownItem[];
  onNavigate: () => void;
}) {
  return (
    <div className="overflow-hidden border border-white/25 bg-[rgba(241,245,249,0.92)] backdrop-blur-xl">
      {items.map((item) => (
        <Link
          key={`${item.href}::${item.label}`}
          href={item.href}
          className={`block border-b border-slate-200/80 py-2.5 last:border-b-0 hover:bg-[rgba(11,95,255,0.08)] hover:text-[#0B5FFF] ${
            item.nested
              ? "px-4 pl-8 text-[11px] font-medium text-slate-600"
              : "px-4 text-[12px] font-semibold text-slate-800"
          }`}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar({ locale: localeProp }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const locale = localeProp || getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const L = (href: string) => withLocale(href, locale);

  const navItems = [
    { label: dict.nav.home, href: L("/") },
    { label: dict.nav.technology, href: L("/technology") },
    { label: dict.nav.products, href: L("/products") },
    { label: dict.nav.solutions, href: L("/#solutions") },
    { label: dict.nav.knowledge, href: L("/knowledge") },
    { label: dict.nav.oem, href: L("/oem") },
    { label: dict.nav.download, href: L("/download") },
    { label: dict.nav.contact, href: L("/contact") },
    { label: dict.nav.thirdPartyProducts, href: L("/third-party-products") },
  ];

  const navDropdownMap: Record<string, NavDropdownItem[]> = {
    [L("/technology")]: technologyNavLinks.map((item) => ({
      label: dict.navTech[item.id as keyof typeof dict.navTech] ?? item.label,
      href: L(item.href),
    })),
    [L("/products")]: getPublicProductNavLinks().map((item) => ({
      label: dict.navProducts[item.id as keyof typeof dict.navProducts] ?? item.label,
      href: L(item.href),
    })),
    [L("/#solutions")]: industryNavLinks.map((item) => ({
      label: dict.navSolutions[item.id as keyof typeof dict.navSolutions] ?? item.label,
      href: L(item.href),
    })),
    [L("/knowledge")]: knowledgeNavLinks.map((item) => ({
      label: item.label,
      href: L(item.href),
    })),
    [L("/oem")]: oemNavLinks.map((item) => ({
      label: dict.navOem[item.id as keyof typeof dict.navOem] ?? item.label,
      href: L(item.href),
    })),
    [L("/download")]: downloadNavLinks.map((item) => ({
      label: dict.navDownload[item.id as keyof typeof dict.navDownload] ?? item.label,
      href: L(item.href),
    })),
  };

  return (
    <header className="sticky top-0 z-50 overflow-visible glass-nav">
      <div className="container-page flex min-h-[104px] items-center gap-5 py-4 lg:min-h-[118px] lg:gap-8 lg:py-5">
        <Link
          href={L("/")}
          className="ml-6 flex shrink-0 items-center lg:ml-14 xl:ml-20"
          aria-label="SiCore Dynamics Home"
        >
          <Logo className="[&_img]:h-[84px] [&_img]:md:h-[96px] [&_img]:lg:h-[112px]" />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center md:flex">
          <div className="flex min-w-0 flex-1 items-center justify-center gap-4 lg:gap-5">
            <form
              className="flex w-full max-w-[680px] min-w-[320px] items-stretch overflow-hidden rounded-xl border border-slate-200/80 bg-white/60 shadow-sm backdrop-blur lg:max-w-[760px] xl:max-w-[820px]"
              role="search"
            >
              <label className="sr-only" htmlFor="site-search">
                {dict.common.search}
              </label>
              <input
                id="site-search"
                type="search"
                placeholder={dict.common.searchPlaceholder}
                className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-xs text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-2 bg-gradient-to-r from-[#0B5FFF] to-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:from-blue-600 hover:to-blue-700 lg:px-6"
                aria-label={dict.common.search}
              >
                <SearchIcon />
                <span className="hidden sm:inline">{dict.common.search}</span>
              </button>
            </form>

            <LanguageSwitcher locale={locale} />
            <CartNavButton locale={locale} />
          </div>

          <Link href={L("/contact")} className="btn-primary ml-5 shrink-0 px-6 py-2.5 text-xs lg:ml-8 lg:px-7">
            {dict.common.contactUs}
          </Link>
        </div>
      </div>

      <div className="nav-brand-bar relative overflow-visible">
        <div className="tech-grid pointer-events-none absolute inset-0 z-[1] opacity-[0.07]" aria-hidden="true" />

        <div className="container-page relative z-[2] overflow-visible">
          <nav
            className="hidden min-h-[52px] items-center gap-1 overflow-visible lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href, locale);
              const dropdownItems = navDropdownMap[item.href];

              if (dropdownItems) {
                return (
                  <NavDropdown
                    key={item.href}
                    label={item.label}
                    href={item.href}
                    items={dropdownItems}
                    active={active}
                    menuOnly={item.href === L("/#solutions")}
                  />
                );
              }

              return <NavLink key={item.href} label={item.label} href={item.href} active={active} />;
            })}
          </nav>

          <nav className="flex min-h-[48px] flex-col gap-2 py-2 lg:hidden" aria-label="Main navigation">
            <div className="flex items-center gap-4 overflow-x-auto">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href, locale);
                const dropdownItems = navDropdownMap[item.href];
                const isOpen = mobileOpenMenu === item.href;

                if (dropdownItems) {
                  return (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() =>
                        setMobileOpenMenu((current) => (current === item.href ? null : item.href))
                      }
                      className={`whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.06em] transition ${
                        active || isOpen ? "text-[#86efac]" : "text-white/90 hover:text-white"
                      }`}
                      aria-expanded={isOpen}
                    >
                      {item.label} {isOpen ? "▲" : "▼"}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.06em] transition ${
                      active ? "text-white" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {mobileOpenMenu && navDropdownMap[mobileOpenMenu] ? (
              <MobileDropdownPanel
                items={navDropdownMap[mobileOpenMenu]}
                onNavigate={() => setMobileOpenMenu(null)}
              />
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  );
}
