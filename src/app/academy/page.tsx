"use client";

import Link from "next/link";

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">VAMS Academy</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Education &amp; certification</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-700 text-justify">
            Training and educational content for microbiome literacy, interpretation, and patient communication.
            This page is a placeholder for the academy hub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/guides"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              View guides
            </Link>
            <Link
              href="/webinars"
              className="rounded-full border border-cyan-200 px-6 py-3 text-lg font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Webinars &amp; events
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3 text-base">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Microbiome 101</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">
              Foundations of ecosystems, sequencing, and common clinical contexts.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Score interpretation</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">
              How to explain health scores and guidance in an actionable way.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Protocols &amp; follow-up</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">
              Retesting strategies, longitudinal tracking, and lifestyle coaching alignment.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
