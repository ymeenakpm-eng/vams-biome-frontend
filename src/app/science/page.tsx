"use client";

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            The Science
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Built on microbiome science, not wellness trends
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            This space introduces the scientific foundations behind VAMS BIOMEs diagnostics, analytics,
            and product philosophy.
          </p>
        </header>

        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Microbiome 101</h2>
            <p className="text-sm text-slate-600">
              Explain the gutskinvaginaloral axes, microbial diversity, keystone species, and
              how metabolites shape human health.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Metabolites & SCFAs</h2>
            <p className="text-sm text-slate-600">
              Outline the role of short-chain fatty acids, bile acids, and other key metabolites measured
              or inferred in your pipeline.
            </p>
          </article>
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Lab & technology</h2>
            <p className="text-sm text-slate-600">
              Describe sequencing platforms, library prep, and bioinformatics workflows powering
              BiomeWell.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Validation & quality</h2>
            <p className="text-sm text-slate-600">
              Summarize validation studies, controls, and reproducibility efforts, linking out to papers
              where relevant.
            </p>
          </article>
        </section>

        <section className="rounded-2xl bg-emerald-900 p-6 text-emerald-50">
          <h2 className="mb-2 text-lg font-semibold">Whitepapers & publications</h2>
          <p className="text-sm">
            Use this area to surface peer-reviewed work, conference posters, and clinical collaborations
            as they go live.
          </p>
        </section>
      </div>
    </main>
  );
}
