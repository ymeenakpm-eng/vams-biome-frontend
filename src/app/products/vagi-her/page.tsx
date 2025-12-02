"use client";

import { useState } from "react";

const TABS = ["What’s Inside", "Benefits", "FAQs"] as const;

type TabId = (typeof TABS)[number];

export default function VagiHerPage() {
  const [activeTab, setActiveTab] = useState<TabId>("What’s Inside");

  return (
    <main className="min-h-screen bg-sky-50 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Microbiome Test Kit
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
            VAGI-HER – Advanced Vaginal Microbiome Test Kit
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700">
            The VAGI-HER Vaginal Microbiome Test Kit provides a comprehensive look into your
            intimate wellness by analysing key microbiome markers that influence comfort,
            protection, and fertility. It evaluates Lactobacillus dominance, screens for bacterial
            vaginosis (BV) risk, detects Candida overgrowth, and examines microbiome parameters
            linked to reproductive and fertility health.
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
                <li>At-home vaginal microbiome collection kit with clear guidance.</li>
                <li>
                  Advanced sequencing of vaginal microbiota including Lactobacillus species,
                  dysbiosis patterns, and Candida signals.
                </li>
                <li>
                  BiomeAI report focused on BV risk, Candida overgrowth, and fertility-related
                  microbiome markers.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "Benefits" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">Key benefits & features</h2>
              <ul className="list-disc space-y-1 pl-5 text-xs text-slate-700">
                <li>
                  Assesses Lactobacillus dominance for optimal vaginal protection and comfort.
                </li>
                <li>Evaluates BV risk and imbalance indicators.</li>
                <li>Screens for Candida overgrowth and yeast-related issues.</li>
                <li>
                  Analyses microbiome factors associated with fertility and reproductive health.
                </li>
                <li>Provides personalised, easy-to-understand recommendations.</li>
                <li>Simple, discreet, at-home sample collection.</li>
              </ul>
            </div>
          )}

          {activeTab === "FAQs" && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">FAQs</h2>
              <dl className="space-y-3 text-xs text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Who is this best suited for?</dt>
                  <dd>
                    Women with recurring infections, odour or discharge changes, discomfort,
                    fertility challenges, or those seeking proactive vaginal wellness insights.
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
