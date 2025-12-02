"use client";

import { useState } from "react";

const TABS = ["What’s Inside", "Benefits", "FAQs"] as const;

type TabId = (typeof TABS)[number];

export default function SkinHerPage() {
  const [activeTab, setActiveTab] = useState<TabId>("What’s Inside");

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Microbiome Test Kit
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
            SKIN-HER – Skin Microbiome Test Kit
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            The SKIN-HER Skin Microbiome Test Kit is a science-driven at-home test designed to
            uncover the root causes of common skin concerns. Using advanced microbial profiling,
            SKIN-HER identifies key microbial drivers of acne, eczema, sensitivity, inflammation,
            and overall skin barrier health.
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
              <h2 className="text-base font-semibold text-slate-900">What’s inside the kit</h2>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
                <li>Non-invasive skin microbiome sampling kit for targeted areas of concern.</li>
                <li>
                  Microbial profiling of bacteria associated with acne, eczema, sensitivity, and
                  barrier issues.
                </li>
                <li>
                  BiomeAI report linking skin microbiome patterns to symptom clusters and care
                  recommendations.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "Benefits" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Key features (SEO-optimised)</h2>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
                <li>
                  Identifies microbial triggers of acne, breakouts, and inflammation.
                </li>
                <li>Evaluates eczema-related microbiome imbalance.</li>
                <li>Assesses skin barrier strength and moisture-retention health.</li>
                <li>
                  Provides personalised insights for microbiome-friendly skincare routines.
                </li>
                <li>At-home collection with fast, easy-to-read digital results.</li>
                <li>
                  Supports skin healing, glow, and long-term complexion balance.
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
                    Ideal for acne-prone skin, eczema, sensitivity, redness, dry or compromised skin
                    barrier, and those seeking personalised, microbiome-focused skincare
                    solutions.
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
