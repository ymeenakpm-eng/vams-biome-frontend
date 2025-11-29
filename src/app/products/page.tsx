import Link from "next/link";
import { listStoreProducts } from "@/lib/medusa";

export default async function ProductsPage() {
  let medusaProducts: any[] = [];

  try {
    medusaProducts = await listStoreProducts();
  } catch (e) {
    // Fail quietly on the UI; footer already notes Medusa usage
    medusaProducts = [];
  }
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              BiomeMart Marketplace
            </p>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Microbiome-first products, protocols, and subscriptions
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              From targeted probiotics to functional foods, explore products designed to align with
              real microbiome science, your BiomeAI insights, and guidance from your care team.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/diagnostics"
              className="rounded-full border border-emerald-200 px-5 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
            >
              Start with a test kit
            </Link>
          </div>
        </header>

        {/* Shop categories */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Shop by category</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Human probiotics",
              "Womens synbiotics",
              "Gut health supplements",
              "Skin microbiome care",
              "Oral microbiome products",
              "Functional foods & fibres",
              "AquaGuard aquaculture probiotics",
            ].map((label) => (
              <article
                key={label}
                className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm"
              >
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{label}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Curated formulations mapped to specific microbiome outcomes, life stages, and
                    BiomeAI signals.
                  </p>
                </div>
                <a
                  href="#featured-products"
                  className="mt-4 inline-flex w-fit rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-emerald-600"
                >
                  View products
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Medusa-powered featured products */}
        <section
          id="featured-products"
          className="mb-10 scroll-mt-28 rounded-2xl bg-white p-6 shadow-sm"
        >
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            Featured products from our Medusa store
          </h2>
          <p className="mb-3 text-sm text-slate-600">
            This list is fetched in real time from your local Medusa backend to demonstrate the
            BiomeMart connection.
          </p>
          {medusaProducts.length > 0 ? (
            <ul className="space-y-1.5 text-sm text-slate-800">
              {medusaProducts.slice(0, 4).map((p) => (
                <li key={p.id} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{p.title}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed border-emerald-200 bg-emerald-50/40 p-4 text-sm text-slate-700">
              <p className="font-semibold text-emerald-900">No products available yet.</p>
              <p className="mt-1 text-xs text-slate-600">
                When your Medusa backend is running and populated with SKUs, featured products will
                appear here automatically.
              </p>
            </div>
          )}
        </section>

        {/* Subscription boxes */}
        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Subscription boxes</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Gut Reset Box  phased support for digestion and bloating.</li>
              <li>• Womens Wellness Box  cycle-aware formulations and synbiotics.</li>
              <li>• Skin Microbiome Box  barrier-friendly topicals and internal support.</li>
              <li>• Monthly Health Box  rotating picks based on your BiomeAI signals.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-emerald-900 p-6 text-emerald-50">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-200">
              Powered by real-world data
            </h3>
            <p className="text-sm">
              Over time, BiomeMart is intended to connect directly to your diagnostics and AI insights,
              so recommendations and subscriptions evolve as your microbiome does.
            </p>
          </div>
        </section>

        {/* Product page blueprint */}
        <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">What you will see on each product page</h2>
          <p className="mb-3 text-sm text-slate-600">
            Use this section later to align UI and content for individual SKUs across probiotics,
            supplements, topicals, and AquaGuard solutions.
          </p>
          <ul className="space-y-1.5 text-sm text-slate-700">
            <li>• Strain and CFU breakdown with plain-language explanations.</li>
            <li>• Clinical evidence, references, or real-world data where available.</li>
            <li>• Safety information, allergen notes, and storage guidance.</li>
            <li>• Reviews and stories from people using the product.</li>
            <li>• One-time purchase vs. subscribe-and-save options.</li>
          </ul>
        </section>

        {/* Vendor portal callout */}
        <section className="rounded-2xl bg-slate-900 p-6 text-slate-50">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Vendor & partner portal</h2>
              <p className="mt-1 text-sm text-slate-200">
                A future workspace for brands, clinics, and labs to manage SKUs, analytics, and payouts in
                one place.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
            >
              Talk to our team
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
