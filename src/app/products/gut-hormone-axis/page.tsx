"use client";

import { useState } from "react";

const TABS = ["What’s Inside", "Benefits", "FAQs"] as const;

type TabId = (typeof TABS)[number];

export default function GutHormoneAxisPage() {
  const [activeTab, setActiveTab] = useState<TabId>("What’s Inside");

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Microbiome Panel
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
            Gut–Hormone Axis Panel
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            The Gut–Hormone Axis Panel is a comprehensive diagnostic test that reveals how your gut
            microbiome influences hormonal balance. Using advanced integrative analysis, this panel
            provides deep insights into PCOS, oestrogen recycling, metabolic function, and overall
            gut–endocrine crosstalk.
          </p>
        </header>

        <div className="mb-4 flex flex-wrap gap-2 border-b border-slate-200 pb-1 text-xs font-semibold text-slate-600">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3 py-1 transition-colors ${
                activeTab === tab
                  ? "bg-cyan-500 text-white"
                  : "bg-transparent text-slate-600 hover:bg-slate-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <section className="rounded-2xl bg-white p-5 shadow-sm text-sm text-slate-800">
          {activeTab === "What’s Inside" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">What’s inside the panel</h2>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
                <li>
                  Multi-site sampling focused on gut microbiome pathways relevant to hormone
                  balance.
                </li>
                <li>
                  Integrative analysis of microbial pathways and hormone-related biomarkers
                  associated with PCOS, PMS, and oestrogen-related symptoms.
                </li>
                <li>
                  BiomeAI report connecting gut patterns to mood, cycles, skin, and metabolic
                  outcomes.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "Benefits" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Key features (SEO-optimised)</h2>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
                <li>
                  Assesses microbiome markers linked to PCOS symptoms and metabolic regulation.
                </li>
                <li>Evaluates oestrogen recycling and detox pathways.</li>
                <li>
                  Analyses gut–endocrine crosstalk affecting mood, cycles, and skin.
                </li>
                <li>
                  Provides personalised guidance for hormone balance and gut optimisation.
                </li>
                <li>
                  Offers science-backed insights for improving long-term women’s wellness.
                </li>
                <li>
                  Easy, at-home sample collection with detailed digital results.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "FAQs" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">FAQs</h2>
              <dl className="space-y-3 text-xs text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Who is this for?</dt>
                  <dd>
                    Ideal for women with PCOS symptoms, PMS, oestrogen dominance, fertility
                    concerns, hormonal acne, weight issues, or those seeking a holistic view of
                    their gut–hormone connection.
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
