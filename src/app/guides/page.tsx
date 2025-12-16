"use client";

import Link from "next/link";

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-sky-50 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Resources</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Guides &amp; ebooks</h1>
          <p className="mt-4 max-w-3xl text-base text-slate-700 text-justify">
            This page is a placeholder for downloadable guides, explainers, and educational resources.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Read the blog
            </Link>
            <Link
              href="/academy"
              className="rounded-full border border-cyan-200 px-6 py-3 text-lg font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              VAMS Academy
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3 text-base">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Microbiome 101</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">A practical primer on ecosystems and testing.</p>
          </article>
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Health scores explained</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">How to interpret score ranges and context.</p>
          </article>
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Protocols &amp; retesting</h2>
            <p className="mt-2 text-base text-slate-700 text-justify">How to plan retests and track improvements.</p>
          </article>
        </section>
      </div>
    </main>
  );
}
