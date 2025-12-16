"use client";

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-10 text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-cyan-700">Professionals</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">Request a demo / quote</h1>
          <p className="mt-4 text-base text-slate-600 text-justify">
            This form is a placeholder. It helps capture B2B interest for clinics, labs, research teams, and platform
            integrations.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <form className="space-y-5 text-base">
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="org">
                Organization
              </label>
              <input
                id="org"
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="Clinic, lab, university, or company"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="type">
                Request type
              </label>
              <select
                id="type"
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                <option>Clinic onboarding</option>
                <option>Lab partnership / white-label</option>
                <option>Research collaboration</option>
                <option>API / platform integration</option>
                <option>Pricing / bulk kits</option>
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-slate-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-3 text-base focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="Tell us what you're trying to build."
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Submit (placeholder)
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
