"use client";

import Link from "next/link";

export default function LabsPartnersPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Professionals</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">For labs</h1>
          <p className="mt-4 text-base text-slate-700 text-justify">
            Partner with VAMS BIOME to convert sequencing outputs into structured reports, health scores, and
            practitioner-ready interpretation layers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/forms/lab-partnership"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Lab partnership / quote request
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
            <h2 className="text-2xl font-semibold text-slate-900">Services (pilot)</h2>
            <ul className="mt-3 space-y-2 text-base text-slate-700">
              <li>FASTQ-to-report conversion (contracted)</li>
              <li>White-label consumer and clinician report templates</li>
              <li>Health score library mapping and explainability layers</li>
              <li>Bulk test kit distribution and logistics support</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Integrations</h2>
            <ul className="mt-3 space-y-2 text-base text-slate-700">
              <li>API delivery for scores and report assets (where enabled)</li>
              <li>CSV-based batch workflows for initial onboarding</li>
              <li>Reporting SLAs and QC thresholds (per contract)</li>
              <li>Support for multi-sample longitudinal cohorts</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/professionals/api-data"
                className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                API &amp; data access
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-sky-100 p-8 text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Also see</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/labs"
              className="rounded-full border border-slate-900 px-6 py-3 text-lg font-semibold text-slate-900 hover:bg-white"
            >
              VAMS Labs overview
            </Link>
            <Link
              href="/developers"
              className="rounded-full border border-slate-900 px-6 py-3 text-lg font-semibold text-slate-900 hover:bg-white"
            >
              Developers
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
