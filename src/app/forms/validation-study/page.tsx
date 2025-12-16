"use client";

export default function ValidationStudyFormPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-10 text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">Forms</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Validation study interest</h1>
          <p className="mt-4 text-base text-slate-600 text-justify">
            Placeholder form for expressing interest in validation studies, pilots, and clinical collaborations.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <form className="space-y-5 text-base">
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="name">Name</label>
              <input id="name" className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base" />
            </div>
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="email">Email</label>
              <input id="email" type="email" className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base" />
            </div>
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="org">Organization</label>
              <input id="org" className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base" />
            </div>
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="message">Study outline</label>
              <textarea id="message" rows={5} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base" />
            </div>
            <button type="button" className="w-full rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600">
              Submit (placeholder)
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
