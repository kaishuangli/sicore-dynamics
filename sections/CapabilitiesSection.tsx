const capabilities = [
  {
    title: "Wireless Power Transfer",
    text: "Resonant and inductive power architectures designed for intelligent machines and automated charging environments.",
  },
  {
    title: "Power Electronics",
    text: "High-efficiency conversion, control, thermal strategy, and robust electrical design for demanding systems.",
  },
  {
    title: "Embedded Intelligence",
    text: "Embedded control, sensing, communication, protection, and firmware logic for reliable system behavior.",
  },
  {
    title: "System Integration",
    text: "Engineering support from module design to platform integration for robotics, automation, and OEM applications.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-slate-50 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-600">Core Capabilities</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Wireless power is not a product feature. It is a system architecture.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <article key={item.title} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10">
              <div className="mb-8 h-12 w-12 rounded-2xl bg-blue-50 ring-1 ring-blue-100 transition group-hover:bg-blue-600" />
              <h3 className="text-xl font-black tracking-[-0.02em] text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
