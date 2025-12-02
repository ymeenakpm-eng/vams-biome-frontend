"use client";

import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-10 text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">Blog</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">BiomeInsights</h1>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto text-justify">
            Articles exploring the microbiome, women&apos;s health, gut–brain–skin science, nutrition, and
            AI in wellness.
          </p>
        </header>

        <section className="mb-12 space-y-8 text-base">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Microbiome 101</h2>
            <ul className="mt-3 space-y-1.5 text-base text-slate-700">
              <li>
                <span className="font-semibold">Top 5 Gut Disruptors</span> : Everyday factors that can
                nudge your gut ecosystem out of balance.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Women&apos;s health</h2>
            <ul className="mt-3 space-y-1.5 text-base text-slate-700">
              <li>
                <span className="font-semibold">Gut–vaginal axis : why women&apos;s wellness starts in the microbiome</span>
                
                : How gut and vaginal ecosystems talk to each other and what that means for cycles,
                fertility, and mood.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Gut–brain–skin axis</h2>
            <ul className="mt-3 space-y-1.5 text-base text-slate-700">
              <li>
                <span className="font-semibold">Skin Microbiome &amp; Acne</span> : Early research on barrier
                function, inflammation, and microbial signatures linked to flares.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Personalised nutrition</h2>
            <ul className="mt-3 space-y-1.5 text-base text-slate-700">
              <li>
                <span className="font-semibold">Oral Microbiome Insights</span> : What your mouth bacteria reveal
                about systemic health and diet.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">AI in wellness</h2>
            <ul className="mt-3 space-y-1.5 text-base text-slate-700">
              <li>
                <span className="font-semibold">AI &amp; Probiotics</span> : How models can connect strains,
                pathways, and symptoms to personalise protocols.
              </li>
              <li>
                <span className="font-semibold">AI + microbiome: where precision wellness is heading</span> : A
                practical look at turning complex omics data into day-to-day decisions.
              </li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-sm text-sm text-slate-600">
          <p className="text-justify">
            These article titles and summaries are placeholders for your future long-form content.
            When you are ready, you can convert each into its own blog post route and link through from
            here.
          </p>
          <p className="mt-3 text-justify">
            For now, use this page as a content map of what the BiomeInsights blog will eventually
            cover.
          </p>
          <p className="mt-4 text-justify">
            Ready to learn more about the underlying mechanisms? Visit the {" "}
            <Link href="/science" className="font-semibold text-cyan-700 hover:text-cyan-800">
              Science page
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
