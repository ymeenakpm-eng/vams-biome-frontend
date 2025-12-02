"use client";

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4 space-y-8">
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Developer API &amp; Reporting Platform
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            VamsBiome AI-Powered Reporting Platform
          </h1>
          <p className="mt-3 text-sm text-slate-700">
            The VamsBiome AI-Powered Reporting Platform is a cutting-edge analytics solution that
            converts raw microbiome sequencing data into clear, consumer-friendly reports.
            Designed for labs, clinics, and telehealth providers, it empowers healthcare
            professionals and consumers with personalized insights and actionable
            recommendations.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm grid gap-6 md:grid-cols-2 text-sm text-slate-700">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Core features &amp; outputs</h2>
            <ul className="mt-2 space-y-1 text-xs">
              <li>
                <span className="font-semibold">Dysbiosis Scores:</span> Assess overall gut microbial
                balance.
              </li>
              <li>
                <span className="font-semibold">Risk Profiles:</span> Predict susceptibility to PCOS,
                BV, diabetes, obesity, and other health conditions.
              </li>
              <li>
                <span className="font-semibold">Personalised Recommendations:</span> Tailored diet
                plans, targeted probiotic strains, and lifestyle interventions.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">Integration &amp; delivery</h2>
            <ul className="mt-2 space-y-1 text-xs">
              <li>
                API-ready platform for seamless integration with lab workflows, clinics, and
                telehealth services.
              </li>
              <li>
                Produces user-friendly PDF reports and interactive web dashboards for easy
                interpretation.
              </li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm text-sm text-slate-700">
          <h2 className="text-sm font-semibold text-slate-900">Key benefits</h2>
          <ul className="mt-2 space-y-1 text-xs">
            <li>Translates complex microbiome data into actionable health insights.</li>
            <li>Supports precision nutrition, personalised probiotics, and lifestyle guidance.</li>
            <li>
              Enhances patient engagement and proactive management of gut, metabolic, and
              reproductive health.
            </li>
            <li>
              Streamlines microbiome reporting for clinical and telehealth applications.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
