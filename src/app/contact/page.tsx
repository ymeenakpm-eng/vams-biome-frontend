"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-3xl px-4">
        <header className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Lets build better microbiome journeys together
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Use this page to route customer support, lab enquiries, corporate partnerships, and press
            questions.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="type">
                Inquiry type
              </label>
              <select
                id="type"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                <option>Customer support</option>
                <option>Lab enquiry</option>
                <option>Corporate partnership</option>
                <option>Press & media</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Submit (placeholder)
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
