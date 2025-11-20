"use client";

import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <header className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            How It Works
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            A 5-step journey from sample to daily actions
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            VAMS BIOME connects diagnostics, AI, and products into one continuous experience so you are
            never stuck with a PDF you dont know how to use.
          </p>
        </header>

        <ol className="mb-10 space-y-6">
          <li className="flex gap-4">
            <div className="mt-1 h-7 w-7 flex-shrink-0 rounded-full bg-cyan-600 text-center text-sm font-semibold text-white">
              1
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">Order your kit</h2>
              <p className="mt-1 text-sm text-slate-600">
                Choose from gut, vaginal, skin, oral, or full-body microbiome panels on BiomeWell or
                through partnered clinics.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 h-7 w-7 flex-shrink-0 rounded-full bg-cyan-600 text-center text-sm font-semibold text-white">
              2
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">Collect your sample</h2>
              <p className="mt-1 text-sm text-slate-600">
                Follow simple, illustrated guides and short videos tailored to each kit, with built-in
                checklists for common mistakes.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 h-7 w-7 flex-shrink-0 rounded-full bg-cyan-600 text-center text-sm font-semibold text-white">
              3
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">Lab + AI processing</h2>
              <p className="mt-1 text-sm text-slate-600">
                Samples are processed in partner labs, then passed through BiomeAI for interpretation,
                quality checks, and pattern recognition.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 h-7 w-7 flex-shrink-0 rounded-full bg-cyan-600 text-center text-sm font-semibold text-white">
              4
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">Receive your report</h2>
              <p className="mt-1 text-sm text-slate-600">
                Get a clear, visual report with scores, narratives, and red flags you can share with your
                care team.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 h-7 w-7 flex-shrink-0 rounded-full bg-cyan-600 text-center text-sm font-semibold text-white">
              5
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900">Start your personalized plan</h2>
              <p className="mt-1 text-sm text-slate-600">
                Translate insights into action with tailored food lists, supplement stacks, and lifestyle
                nudges, with recurring check-ins.
              </p>
            </div>
          </li>
        </ol>

        <section className="rounded-2xl bg-sky-50 p-6">
          <h2 className="text-base font-semibold text-slate-900">Visual guides & support</h2>
          <p className="mt-2 text-sm text-slate-600">
            Future releases will include embedded how-to videos, animations of the lab pipeline, and AI
            explainers that walk you through each section of your report.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/diagnostics"
              className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Explore diagnostics
            </Link>
            <Link
              href="/ai-insights"
              className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600"
            >
              Preview AI dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
