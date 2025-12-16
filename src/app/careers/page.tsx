"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-10">
        <header className="text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">Careers</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Build the future of microbiome care</h1>
          <p className="mt-4 text-base text-slate-600 text-justify">
            This page is a placeholder for careers and open roles. If you&apos;re interested in partnering or joining,
            contact us.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Open roles</h2>
          <p className="mt-3 text-base text-slate-700 text-justify">Roles will be listed here when hiring is active.</p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Contact
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
