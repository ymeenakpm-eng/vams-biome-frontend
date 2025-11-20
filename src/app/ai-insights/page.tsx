"use client";

import Link from "next/link";

export default function AiInsightsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12 text-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              BiomeAI Insights
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">
              AI-native microbiome intelligence dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200">
              Visualise your Gut Health Index, diversity, pathways, and early red flags with
              explainable AI built for clinicians and everyday users across India, Australia, and
              beyond.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/diagnostics"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400"
            >
              Connect a test kit
            </Link>
            <Link
              href="#report-demo"
              className="rounded-full border border-cyan-300 px-5 py-2.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/10"
            >
              View report demo
            </Link>
          </div>
        </header>

        {/* Dashboard overview */}
        <section className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-slate-900/60 p-5 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
              Gut Health Index
            </h2>
            <p className="mt-3 text-3xl font-semibold">82</p>
            <p className="mt-2 text-xs text-slate-300">
              Overall balanced profile with mild inflammation risk in select pathways.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 p-5 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
              Microbial Diversity
            </h2>
            <p className="mt-3 text-3xl font-semibold">High</p>
            <p className="mt-2 text-xs text-slate-300">
              Rich, resilient community composition compared to age- and region-matched peers.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 p-5 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
              SCFA & Pathways
            </h2>
            <p className="mt-3 text-3xl font-semibold">Balanced</p>
            <p className="mt-2 text-xs text-slate-300">
              Butyrate and propionate production pathways estimated within healthy reference ranges.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 p-5 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
              Red Flags
            </h2>
            <p className="mt-3 text-3xl font-semibold text-amber-300">2</p>
            <p className="mt-2 text-xs text-slate-300">
              Early dysbiosis markers flagged with clear, action-focused explanations.
            </p>
          </div>
        </section>

        {/* Report demo */}
        <section id="report-demo" className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900/60 p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold">Report demo</h2>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>• Diversity graphs with trend overlays.</li>
              <li>• Functional pathways broken into digestible story cards.</li>
              <li>• Bacteria-by-bacteria role cards with friendly language.</li>
              <li>• One-click PDF export for clinicians and caregivers.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-violet-500/20 p-6">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-200">
              Personalized protocol engine
            </h3>
            <p className="mb-3 text-sm text-slate-100">
              Turn complex microbiome analytics into an easy, realistic daily plan.
            </p>
            <ul className="space-y-2 text-sm text-slate-100">
              <li>• Food lists: emphasize, rotate, or limit based on your profile.</li>
              <li>• Supplement stack suggestions mapped to product SKUs.</li>
              <li>• Lifestyle nudges built for real-world routines.</li>
            </ul>
          </div>
        </section>

        {/* Lab & developer tools */}
        <section className="rounded-2xl bg-slate-900/70 p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Lab & developer tools</h2>
              <p className="mt-1 text-sm text-slate-300">
                Built for labs, clinics, and partners who need secure, programmatic access to
                microbiome analytics and reporting.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="#"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400"
              >
                View API docs
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-cyan-300 px-5 py-2.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/10"
              >
                Request partner access
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
