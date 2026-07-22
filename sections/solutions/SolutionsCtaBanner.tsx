import Link from "next/link";

export default function SolutionsCtaBanner() {
  return (
    <section
      className="contact-cta-banner relative overflow-hidden py-14 text-white lg:py-16"
      aria-labelledby="solutions-cta-heading"
    >
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="container-page relative text-center">
        <h2
          id="solutions-cta-heading"
          className="font-display mx-auto max-w-3xl text-2xl font-black tracking-[-0.03em] md:text-3xl lg:text-4xl"
        >
          Ready to Build Your Wireless Charging Solution?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
          Whether you need AGV fleet charging, medical device integration, or a fully customized
          OEM platform—our engineering team is ready to help.
        </p>
        <Link href="/contact" className="btn-primary mt-8 inline-flex">
          Start Your Project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
