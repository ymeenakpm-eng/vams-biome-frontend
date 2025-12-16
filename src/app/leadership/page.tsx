"use client";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-10">
        <header className="text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">Company</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Leadership</h1>
          <p className="mt-4 text-base text-slate-600 text-justify">
            This page is a placeholder for leadership profiles and scientific advisors.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm text-base">
          <h2 className="text-2xl font-semibold text-slate-900">Team</h2>
          <p className="mt-3 text-base text-slate-700 text-justify">Leadership profiles can be added here.</p>
        </section>
      </div>
    </main>
  );
}
