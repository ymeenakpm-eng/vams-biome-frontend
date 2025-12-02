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
            This page gives a high-level view of the mechanisms, pathways, and quality systems behind
            VAMS BIOME diagnostics, AI reports, and therapeutic recommendations.
          </p>
        </header>

        {/* Education pillars */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 text-center">
            Education pillars
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-1 text-base font-semibold text-slate-900">Microbiome 101</h3>
              <p className="text-sm text-slate-600">
                Foundations of the gut, vaginal, skin, and oral microbiomes; diversity, keystone
                species, and how metabolites influence whole-body health.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-1 text-base font-semibold text-slate-900">Women&apos;s health</h3>
              <p className="text-sm text-slate-600">
                How gut and vaginal ecosystems connect to cycles, PCOS, fertility conversations, BV
                risk, and long-term women&apos;s wellness.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-1 text-base font-semibold text-slate-900">Gut–brain–skin axis</h3>
              <p className="text-sm text-slate-600">
                Pathways linking gut microbes to mood, focus, and skin flare-ups via immune,
                neuroendocrine, and barrier mechanisms.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-1 text-base font-semibold text-slate-900">Personalised nutrition</h3>
              <p className="text-sm text-slate-600">
                How fibre types, phytonutrients, and dietary patterns can be tuned to support your
                specific microbiome profile.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm md:col-span-2">
              <h3 className="mb-1 text-base font-semibold text-slate-900">AI in wellness</h3>
              <p className="text-sm text-slate-600">
                Practical ways AI helps interpret omics data: from dysbiosis scores and pathway
                predictions to symptom-mapped patterns and protocol suggestions.
              </p>
            </article>
          </div>
        </section>

        {/* Mechanisms & quality sections (existing content refined) */}
        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Microbiome 101</h2>
            <p className="text-sm text-slate-600">
              Explain the multi-site microbiome (gut, skin, vaginal, oral), microbial diversity,
              keystone species, and how microbially derived metabolites shape human physiology.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Metabolites &amp; SCFAs</h2>
            <p className="text-sm text-slate-600">
              Outline the role of short-chain fatty acids, bile acids, and other key metabolites
              measured or inferred in your pipeline.
            </p>
          </article>
        </section>

        <section className="mb-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Lab &amp; technology</h2>
            <p className="text-sm text-slate-600">
              Describe sequencing platforms, library preparation approaches, controls, and
              bioinformatics workflows powering BiomeWell and BiomeAI.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Validation &amp; quality</h2>
            <p className="text-sm text-slate-600">
              Summarise validation studies, reproducibility checks, and external collaborations.
              Link to formal papers or whitepapers as they are published.
            </p>
          </article>
        </section>

        <section className="mb-10 rounded-2xl bg-emerald-900 p-6 text-emerald-50">
          <h2 className="mb-2 text-lg font-semibold">Whitepapers &amp; publications</h2>
          <p className="text-sm">
            Use this area to surface peer-reviewed work, conference posters, and clinical
            collaborations as they go live.
          </p>
        </section>

        {/* Lead magnets + FAQ */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-sky-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Free guides &amp; checklists</h2>
            <p className="mt-2 text-sm text-slate-700">
              Future downloads will include the Free Gut Guide, Vaginal Health Checklist, and Skin
              Microbiome eBook to help you act on your results.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              For now, join the email list on the home page to receive updates when these resources go
              live.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Common questions</h2>
            <dl className="space-y-3 text-sm text-slate-700">
              <div>
                <dt className="font-semibold text-slate-900">Is this diagnostic?</dt>
                <dd>
                  VAMS BIOME kits are designed for informational and wellness use. They do not
                  diagnose, treat, cure, or prevent disease. Always discuss results with your
                  healthcare professional.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">How is my privacy protected?</dt>
                <dd>
                  Samples are processed in labs following ISO / CAP-aligned quality systems, and
                  reports are handled using HIPAA / GDPR-conscious data flows with encryption in
                  transit and at rest.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">When do results arrive?</dt>
                <dd>
                  Timelines vary by region and pilot phase, but most reports are expected within
                  roughly 3–4 weeks after your sample reaches the lab.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Can I use this with my current supplements?</dt>
                <dd>
                  Many people use results to refine their diet and supplement routines, but any
                  changes should be made in partnership with your clinician or pharmacist.
                </dd>
              </div>
            </dl>
          </article>
        </section>
      </div>
    </main>
  );
}
