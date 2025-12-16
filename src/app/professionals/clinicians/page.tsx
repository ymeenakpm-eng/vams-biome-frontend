"use client";

import Link from "next/link";

export default function CliniciansPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Professionals</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">For clinicians</h1>
          <p className="mt-4 text-base text-slate-700 text-justify">
            Use microbiome insights as part of a structured patient journey. VAMS BIOME is designed for wellness and
            research use unless explicitly stated otherwise.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/professionals/request-demo"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Request clinician demo
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
            <h2 className="text-2xl font-semibold text-slate-900">What you get</h2>
            <ul className="mt-3 space-y-2 text-base text-slate-700">
              <li>Structured score panels and explainable insights</li>
              <li>Patient-friendly summaries and next-step guidance</li>
              <li>Bulk ordering and practice onboarding (pilot)</li>
              <li>Support for multi-site tracking and retesting (coming soon)</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Common use cases</h2>
            <ul className="mt-3 space-y-2 text-base text-slate-700">
              <li>GI health and IBS-style symptom support</li>
              <li>Women’s health and BV risk monitoring</li>
              <li>Skin barrier and acne-adjacent routines</li>
              <li>Oral health risk flags and lifestyle guidance</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl bg-sky-100 p-8 text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Next step</h2>
          <p className="mt-3 text-base text-slate-800 text-justify">
            If you want a walkthrough of sample reports, pricing tiers, and clinic onboarding, request a demo.
          </p>
          <div className="mt-6">
            <Link
              href="/professionals/request-demo"
              className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Request demo / quote
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
