"use client";

import { useState } from "react";

const TABS = ["What’s Inside", "Benefits", "AI Report", "FAQs"] as const;

type TabId = (typeof TABS)[number];

export default function GutHerPage() {
  const [activeTab, setActiveTab] = useState<TabId>("What’s Inside");

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Microbiome Test Kit
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
            GUT HER – Advanced Women’s Microbiome Test Kit
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            The GUT HER Microbiome Test Kit delivers a comprehensive, women-specific look into your
            gut ecosystem using advanced DNA sequencing. It evaluates dysbiosis, identifies levels
            of SCFA-producing microbes, and assesses gut barrier function, giving you important
            clues about digestive balance, inflammation, immunity, and metabolic wellness.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-slate-700">
            Designed to address the unique needs of the female body, this test uncovers how your
            microbiome may be affecting weight management, hormonal balance, mood, skin health,
            menstrual well-being, and long-term metabolic health. Your results come with
            personalised guidance to help you support a healthier gut and a healthier you.
          </p>
        </header>

        {/* Tabs */}
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
                <li>At-home stool collection kit with clear, women-focused instructions.</li>
                <li>
                  DNA-based sequencing of your gut microbiome with a focus on SCFA-producing
                  microbes, dysbiosis patterns, and barrier integrity.
                </li>
                <li>
                  BiomeAI-powered report highlighting gut patterns linked to women’s metabolic and
                  hormonal health.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "Benefits" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Key benefits & features</h2>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
                <li>Detects dysbiosis and overall gut imbalance.</li>
                <li>
                  Measures SCFA-producing microbes linked to metabolic and gut vitality.
                </li>
                <li>
                  Evaluates gut barrier integrity related to inflammation and immune defence.
                </li>
                <li>
                  Explores microbiome connections to women’s metabolic and hormonal health.
                </li>
                <li>
                  Provides customised dietary and lifestyle recommendations for women.
                </li>
                <li>
                  Easy, at-home testing with clear step-by-step instructions.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "AI Report" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Inside your BiomeAI report</h2>
              <p className="text-xs text-slate-700">
                Each GUT HER kit connects directly to BiomeAI, turning complex sequencing output into
                a visual, clinician-ready report with dysbiosis scores, SCFA potential, and
                symptom-mapped insights.
              </p>
            </div>
          )}

          {activeTab === "FAQs" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">FAQs</h2>
              <dl className="space-y-3 text-xs text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Is this a diagnostic test?</dt>
                  <dd>
                    No. This kit is for informational and wellness use only and is not intended to
                    diagnose, treat, cure, or prevent disease. Always discuss results with your
                    healthcare professional.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Who is this best suited for?</dt>
                  <dd>
                    Women experiencing bloating, IBS-like symptoms, fatigue, stubborn weight changes,
                    skin flare-ups, PMS/irregular cycles, or chronic stress who want a deeper look at
                    gut–hormone links.
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
