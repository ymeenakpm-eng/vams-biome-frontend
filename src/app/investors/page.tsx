"use client";

import Link from "next/link";

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-10">
        <header className="text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">Investors</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">VAMS BIOME investor overview</h1>
          <p className="mt-4 text-base text-slate-600 text-justify">
            This page is a placeholder for the investor narrative. It can be expanded into a gated microsite when
            needed.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm text-base">
          <h2 className="text-2xl font-semibold text-slate-900">What we build</h2>
          <ul className="mt-3 space-y-2 text-base text-slate-700">
            <li>Unified multi-microbiome diagnostics ecosystem</li>
            <li>AI-driven reporting and explainable score library</li>
            <li>Commerce layer for protocols, products, and subscriptions</li>
            <li>Professional and research pathways (B2B)</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/forms/dataset-access"
              className="rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Request deck / data room access (placeholder)
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-900 px-6 py-3 text-lg font-semibold text-slate-900 hover:bg-white"
            >
              Contact
            </Link>
          </div>
        </section>

        <section className="rounded-2xl bg-sky-100 p-8 text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Roadmap</h2>
          <p className="mt-3 text-base text-slate-800 text-justify">
            Roadmap and traction sections can be connected here as the investor materials are finalized.
          </p>
        </section>
      </div>
    </main>
  );
}
