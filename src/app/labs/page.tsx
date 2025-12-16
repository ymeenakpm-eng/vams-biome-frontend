"use client";

import Link from "next/link";

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">VAMS Labs</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Research services &amp; biomarker discovery
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-700 text-justify">
            VAMS Labs supports microbiome research programs and partner labs with study design, sequencing pipelines,
            and reporting frameworks.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/forms/research-collaboration"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Collaborate with us
            </Link>
            <Link
              href="/professionals/labs"
              className="rounded-full border border-cyan-200 px-6 py-3 text-lg font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Lab partnerships
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 text-base">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Capabilities (pilot)</h2>
            <ul className="mt-3 space-y-2 text-base text-slate-700">
              <li>Sequencing workflow design and QC criteria</li>
              <li>Bioinformatics processing and reporting layers</li>
              <li>Validation studies and cohort support</li>
              <li>Score development and explainability frameworks</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Publications &amp; posters</h2>
            <p className="mt-3 text-base text-slate-700 text-justify">
              Publications and posters may be listed here as they become available.
            </p>
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

        <section className="rounded-2xl bg-sky-100 p-8 text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Research contact</h2>
          <p className="mt-3 text-base text-slate-800 text-justify">
            For research-specific inquiries, submit a collaboration request or use the Contact page and select
            “Lab enquiry”.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-900 px-6 py-3 text-lg font-semibold text-slate-900 hover:bg-white"
            >
              Contact
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
