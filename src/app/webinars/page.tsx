"use client";

import Link from "next/link";

export default function WebinarsPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Resources</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Webinars</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-700 text-justify">
            This page is a placeholder for webinars and on-demand sessions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/events"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              View events
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cyan-200 px-6 py-3 text-lg font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Request a session
            </Link>
          </div>
        </section>

        <section className="rounded-2xl bg-sky-100 p-8 text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Coming soon</h2>
          <p className="mt-3 text-base text-slate-800 text-justify">
            Webinar listings, registration, and recordings will be added here.
          </p>
        </section>
      </div>
    </main>
  );
}
