const products = [
  "Wireless Power Modules",
  "Transmitters",
  "Receivers",
  "Development Kits",
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-[#071225] py-20 text-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Products</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] md:text-5xl">Wireless power products designed for real systems.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">From transmitter and receiver modules to development kits, SiCore products are designed to support reliable integration into intelligent machines.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <article key={product} className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-1 hover:bg-white/[0.1]">
              <span className="text-sm font-bold text-blue-300">0{index + 1}</span>
              <h3 className="mt-6 text-2xl font-bold">{product}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">Built for scalable wireless power transfer, reliable deployment, and engineering integration.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
