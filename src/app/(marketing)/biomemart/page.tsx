import Link from "next/link";

export default function BiomeMartPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm font-semibold tracking-wide uppercase text-primary mb-3">
            BiomeMart · Marketplace
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Evidence-aware marketplace for microbiome therapeutics.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            BiomeMart is a curated catalog of supplements, protocols, and partner products, designed to
            line up with BiomeWell diagnostics and BiomeAI insights.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
            >
              Discuss vendor onboarding
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              View platform capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Built on MedusaJS commerce</h2>
            <p className="mt-4 text-slate-600">
              BiomeMart is planned on top of MedusaJS, giving flexibility to model complex health products
              and bundles while keeping the developer surface familiar.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600 list-disc list-inside">
              <li>Product catalog modeled for microbiome protocols and SKUs.</li>
              <li>Stripe and Stripe Connect for payments and revenue sharing.</li>
              <li>Support for subscriptions and follow-up shipments in later phases.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Clinically-aware merchandising</h2>
            <p className="mt-4 text-slate-600">
              Product detail pages are designed to keep evidence front and center, while still being
              approachable to non-specialists.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600 list-disc list-inside">
              <li>Clinical evidence, references, and disclaimers alongside each product.</li>
              <li>Surfacing which BiomeWell and BiomeAI findings map to each recommendation.</li>
              <li>Room for practitioner-only views and recommendations in future phases.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
