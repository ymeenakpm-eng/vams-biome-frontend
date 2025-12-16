"use client";

import Link from "next/link";

export default function ResearchersPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Professionals</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">For researchers</h1>
          <p className="mt-4 text-base text-slate-700 text-justify">
            Partner with VAMS BIOME on study design, data collection, sequencing pipelines, and report intelligence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/forms/research-collaboration"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Submit research collaboration request
            </Link>
            <Link
              href="/professionals"
              className="rounded-full border border-cyan-200 px-6 py-3 text-lg font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Back to professionals
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 text-base">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Collaboration areas</h2>
            <ul className="mt-3 space-y-2 text-base text-slate-700">
              <li>Clinical studies and validation cohorts</li>
              <li>Observational trials and longitudinal tracking</li>
              <li>Biomarker discovery and scoring frameworks</li>
              <li>IRB-ready participant flows (pilot)</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Data &amp; materials</h2>
            <ul className="mt-3 space-y-2 text-base text-slate-700">
              <li>Raw data transfer and reporting support (as contracted)</li>
              <li>Whitepapers, posters, and publications (as available)</li>
              <li>Dataset access requests (gated)</li>
              <li>Material transfer / NDA workflows (coming soon)</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/forms/dataset-access"
                className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Request dataset / whitepaper
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
