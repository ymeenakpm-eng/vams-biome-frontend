"use client";

import Link from "next/link";

export default function ApiDataPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6 space-y-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Professionals</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">API &amp; data access</h1>
          <p className="mt-4 text-base text-slate-700 text-justify">
            Integrate VAMS BIOME reporting, health scores, and structured insights into your platform.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/professionals/request-demo"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Request API access
            </Link>
            <Link
              href="/developers"
              className="rounded-full border border-cyan-200 px-6 py-3 text-lg font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Developer platform
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 text-base">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">What can be delivered</h2>
            <ul className="mt-3 space-y-2 text-base text-slate-700">
              <li>Health scores and panel outputs</li>
              <li>Report assets and PDF generation outputs (where enabled)</li>
              <li>Structured explanations and guidance blocks</li>
              <li>Batch exports for cohorts and studies</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Access &amp; compliance (pilot)</h2>
            <ul className="mt-3 space-y-2 text-base text-slate-700">
              <li>Sandbox access available by request</li>
              <li>Terms and data consent requirements per use case</li>
              <li>HIPAA/GDPR-aligned practices where applicable</li>
              <li>Scoped data sharing and auditability</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl bg-sky-100 p-8 text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Get started</h2>
          <p className="mt-3 text-base text-slate-800 text-justify">
            Tell us your integration needs and we’ll map the best onboarding path.
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
