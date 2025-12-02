import Image from "next/image";
import Link from "next/link";

export default function MartPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="flex min-h-[calc(100vh-120px)] flex-col gap-10 px-4 pt-28 pb-16 md:flex-row md:items-center md:px-10">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">BiomeMart marketplace</p>
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl">
            Curated microbiome kits &amp; probiotics
          </h1>
          <p className="max-w-xl text-xl text-slate-100/80 text-justify">
            BiomeMart brings together validated microbiome diagnostics and next-generation probiotics
            for gut, vaginal, skin, and aquaculture health. Start with a test kit, unlock an AI report,
            and move seamlessly into targeted interventions.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/products"
              className="rounded-full bg-cyan-400 px-6 py-3 text-lg font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-300"
            >
              Browse all products
            </Link>
            <Link
              href="/diagnostics"
              className="rounded-full border border-cyan-300/50 px-6 py-3 text-lg font-semibold text-cyan-200 hover:bg-cyan-900/40"
            >
              View diagnostic kits
            </Link>
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-300/80">
            Powered by VamsBiome AI reports
          </p>
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-0 -translate-x-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/40 via-sky-500/20 to-purple-500/30 blur-3xl" />
          <div className="relative h-72 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-cyan-500/40">
            <Image
              src="/images/lab-hero.jpg"
              alt="VamsBiome lab and diagnostics kits"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Featured kits grid */}
      <section className="mx-auto px-20 pb-20 text-lg">
        <h2 className="text-3xl font-semibold text-white">Start with a kit</h2>
        <p className="mt-2 text-lg text-slate-300/80 text-justify">
          Choose a microbiome test or panel that fits your use case. All kits plug into VamsBiome&apos;s AI-powered
          reporting layer.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/products/gut-her", label: "GUT HER – Women&apos;s gut microbiome" },
            { href: "/products/vagi-her", label: "VAGI HER – Vaginal microbiome" },
            { href: "/products/skin-her", label: "SKIN HER – Skin microbiome" },
            { href: "/products/gut-hormone-axis", label: "Gut–Hormone Axis Panel" },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-slate-900/70 shadow-lg shadow-slate-950/60 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/30"
            >
              <div className="relative h-40">
                <Image
                  src="/images/lab-hero.jpg"
                  alt={card.label}
                  fill
                  className="object-cover object-center transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 py-4">
                <p className="text-sm font-semibold text-white">{card.label}</p>
                <p className="mt-2 text-sm text-slate-300/80 text-justify">
                  Includes AI-powered report, dysbiosis index, risk analysis, and personalised guidance.
                </p>
                <span className="mt-3 text-xs font-semibold text-cyan-300 group-hover:text-cyan-200">
                  View details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
