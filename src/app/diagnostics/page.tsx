"use client";

import Link from "next/link";

export default function DiagnosticsPage() {
  return (
    <main className="min-h-screen bg-sky-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
              BiomeWell Diagnostics
            </p>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
              At-home microbiome testing for everyday health decisions
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Choose from gut, vaginal, skin, oral, and full-body microbiome panels designed for
              real-world use in India, Australia, and beyond. Each kit connects directly into BiomeAI
              for simple, visual reports.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/products"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Shop microbiome kits
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              How it works
            </Link>
          </div>
        </header>

        <section className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 5 Test Kits Overview */}
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Gut microbiome test</h2>
            <p className="text-sm text-slate-600">
              Diversity scores, key bacteria, and dysbiosis markers to support digestion, energy, and
              long-term metabolic health.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Vaginal microbiome test</h2>
            <p className="text-sm text-slate-600">
              Track Lactobacillus balance and patterns that may be associated with comfort, recurrent
              infections, or fertility conversations with your clinician.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Skin microbiome test</h2>
            <p className="text-sm text-slate-600">
              Understand barrier health, dryness or breakout-prone profiles, and how your routine may
              support or stress your skin ecosystem.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Oral microbiome test</h2>
            <p className="text-sm text-slate-600">
              Map bacteria related to gum and tooth health, breath, and links being explored with
              cardiometabolic outcomes.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <h2 className="mb-2 text-lg font-semibold text-slate-900">Full-body microbiome panel</h2>
            <p className="text-sm text-slate-600">
              A unified multi-site panel connecting gut, skin, vaginal, and oral microbiomes in one view
              for complex cases or research collaborations.
            </p>
          </article>
        </section>

        <section className="mb-12 grid gap-6 md:grid-cols-2">
          {/* Sample Workflow */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Sample workflow</h2>
            <ol className="space-y-2 text-sm text-slate-700">
              <li>1. Activate your kit online in under 2 minutes.</li>
              <li>2. Follow sample collection guides tailored to your kit type.</li>
              <li>3. Ship your sample using pre-paid, trackable shipping.</li>
              <li>4. Get notified at each stage: received, processing, report ready.</li>
            </ol>
          </div>

          {/* Reports & AI Linking */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Reports & AI insights</h2>
            <p className="mb-3 text-sm text-slate-600">
              Every test kit is wired into BiomeAI so you receive clear, visual summaries instead of raw
              spreadsheets or jargon-heavy PDFs.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• View reports with diversity scores and key pathways.</li>
              <li>• Unlock AI-enhanced insights and red flag summaries.</li>
              <li>• Receive personalized food, supplement, and lifestyle protocols.</li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              VAMS BIOME tests are for informational and wellness use and are not a replacement for
              medical diagnosis or emergency care. Always discuss results with your healthcare
              professional.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-500 p-6 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Ready to start with BiomeWell?</h2>
              <p className="mt-1 text-sm text-cyan-50">
                Choose a kit today and connect your results to AI-driven insights and product guidance.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/products"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400"
              >
                Browse kits
              </Link>
              <Link
                href="/ai-insights"
                className="rounded-full border border-cyan-100 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-500/20"
              >
                Explore AI insights
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
