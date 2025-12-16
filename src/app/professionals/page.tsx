"use client";

import Link from "next/link";

export default function ProfessionalsPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            Professionals
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Clinical-grade microbiome diagnostics for practitioners &amp; partners
          </h1>
          <p className="mt-4 text-base text-slate-700 max-w-3xl text-justify">
            Explore how VAMS BIOME supports clinicians, labs, researchers, and digital health teams with validated
            workflows, report intelligence, and scalable delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/professionals/request-demo"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Request demo / quote
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cyan-200 px-6 py-3 text-lg font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Contact
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 text-base">
          <Link href="/professionals/clinicians" className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-slate-900">For clinicians</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">
              Practitioner-friendly reports, structured health scores, and patient-ready guidance.
            </p>
          </Link>

          <Link href="/professionals/labs" className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-slate-900">For labs</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">
              FASTQ-to-report services, white-label reporting, and partner-ready workflows.
            </p>
          </Link>

          <Link href="/professionals/researchers" className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-slate-900">For researchers</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">
              Collaboration pathways for observational studies, validation cohorts, and biomarker discovery.
            </p>
          </Link>

          <Link href="/professionals/api-data" className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-slate-900">API &amp; data access</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">
              Integrate scores and reports into your product. Request documentation, sandbox access, or a pilot.
            </p>
          </Link>
        </section>

        <section className="rounded-2xl bg-sky-100 p-8 text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Common requests</h2>
          <ul className="mt-3 grid gap-2 text-base text-slate-800 md:grid-cols-2">
            <li>Demo access to AI reporting and score library</li>
            <li>Lab partnership &amp; white-label reporting</li>
            <li>Validation study collaboration</li>
            <li>Bulk kit pricing and onboarding</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/forms/lab-partnership"
              className="rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Lab partnership form
            </Link>
            <Link
              href="/forms/validation-study"
              className="rounded-full bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Validation study form
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
