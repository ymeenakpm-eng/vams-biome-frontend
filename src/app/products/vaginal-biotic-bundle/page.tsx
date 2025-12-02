"use client";

export default function VaginalBioticBundlePage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Therapeutic Probiotic Formulation
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
            Vaginal Biotic Bundle  Womens Microbiome Support
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            A condition-targeted probiotic bundle designed to support vaginal microbiome balance,
            Lactobacillus dominance, pH stability, and long-term comfort.
          </p>
        </header>

        <section className="mb-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm md:col-span-2">
            <h2 className="text-base font-semibold text-slate-900">Key benefits</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-700">
              <li>Supports Lactobacillus dominance and healthy vaginal pH.</li>
              <li>Helps reduce risk of recurrent discomfort and episodes driven by imbalance.</li>
              <li>
                Complements insights from the VAGI-HER vaginal microbiome test and BiomeAI reports.
              </li>
              <li>Backed by strains studied in womens urogenital health research.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-emerald-900 p-5 text-emerald-50">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
              Certifications
            </h3>
            <ul className="mt-2 space-y-1 text-xs">
              <li>GMP-manufactured facility</li>
              <li>Vegan capsules</li>
              <li>No gluten, soy, or artificial colours</li>
            </ul>
          </div>
        </section>

        <section className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Ingredients snapshot</h2>
          <p className="mt-2 text-xs text-slate-700">
            Final strains and CFU counts will be defined with manufacturing partners. The formulation is
            intended to include:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-700">
            <li>
              Lactobacillus crispatus and Lactobacillus jensenii  core strains associated with vaginal
              resilience.
            </li>
            <li>
              Lactobacillus rhamnosus and Lactobacillus reuteri  studied for urogenital and immune
              support.
            </li>
            <li>Prebiotic fibres to selectively support beneficial Lactobacillus species.</li>
          </ul>
        </section>

        <section className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Clinical proof & positioning</h2>
          <p className="mt-2 text-xs text-slate-700">
            This bundle is inspired by clinical literature on vaginal microbiome balance, BV risk,
            pH regulation, and recurrence prevention. It is not a substitute for medical care but is
            intended to sit alongside clinician-guided management and diagnostics.
          </p>
        </section>

        <section className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">How to use</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-700">
            <li>Suggested use: once-daily capsule with water, or as directed by your clinician.</li>
            <li>Best taken consistently for at least 812 weeks to assess response.</li>
            <li>
              Not recommended during acute infection or antibiotic treatment without medical advice.
            </li>
          </ul>
        </section>

        <section className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">FAQs</h2>
          <dl className="mt-2 space-y-3 text-xs text-slate-700">
            <div>
              <dt className="font-semibold text-slate-900">Is this a prescription product?</dt>
              <dd>
                No. The Vaginal Biotic Bundle is a wellness-oriented formulation and does not replace
                prescription treatment. Always consult your healthcare provider for diagnosis and
                therapy.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Can I use this with the VAGI-HER test?</dt>
              <dd>
                Yes. Many users choose to complete a VAGI-HER vaginal microbiome test, review their
                BiomeAI report, and then consider probiotics in consultation with their clinician.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}
